"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { data: checkedInEvents } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: BigInt(32418133),
  });

  const [buildersWithPages, setBuildersWithPages] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Fetch the list of builders with pages from our API
    const fetchBuilderPages = async () => {
      try {
        const response = await fetch("/api/builder-pages");
        if (!response.ok) throw new Error("Failed to fetch builder pages");

        const data = await response.json();
        setBuildersWithPages(new Set(data.builders));
      } catch (error) {
        console.error("Error fetching builder pages:", error);
      }
    };

    fetchBuilderPages();
  }, []);

  const shortenAddress = (address: string | undefined) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Batch 15</span>
          </h1>
          <p className="text-center text-lg">Get started by taking a look at your batch GitHub repository.</p>

          {/* Builders Section */}
          <div className="bg-base-100 rounded-xl shadow-lg p-6 mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Checked-in Builders</h2>
              <div className="bg-primary/10 text-primary rounded-full px-4 py-2">
                <span className="font-bold">{checkedInEvents?.filter(event => event.args.first).length || 0}</span>{" "}
                builders
              </div>
            </div>

            <div className="grid gap-4">
              {checkedInEvents?.map(event => {
                if (event.args.first) {
                  const builderAddress = event.args.builder;
                  const hasPage = !builderAddress ? false : buildersWithPages.has(builderAddress);

                  const BuilderIcon = () => (
                    <UserCircleIcon className="h-8 w-8 text-primary transition-transform hover:scale-110" />
                  );

                  return (
                    <div
                      key={event.transactionHash}
                      className="flex items-center gap-4 p-4 bg-base-200 rounded-lg hover:bg-base-300 transition-colors"
                    >
                      {hasPage ? (
                        <Link
                          href={`/builders/${builderAddress}`}
                          className="hover:opacity-80 transition-opacity"
                          prefetch={false}
                        >
                          <BuilderIcon />
                        </Link>
                      ) : (
                        <div className="relative group">
                          <div className="opacity-20">
                            <BuilderIcon />
                          </div>
                          <div className="hidden group-hover:block absolute left-1/2 bottom-full mb-2 -translate-x-1/2 bg-base-300 text-sm px-3 py-1 rounded shadow-md whitespace-nowrap z-10">
                            No page available yet
                          </div>
                        </div>
                      )}

                      <div className="flex flex-col">
                        <Link
                          href={`/builders/${builderAddress}`}
                          className="font-medium hover:text-primary transition-colors"
                          prefetch={false}
                        >
                          {shortenAddress(builderAddress)}
                        </Link>
                        <span className="text-sm opacity-60">Checked in at block #{event.blockNumber.toString()}</span>
                      </div>

                      <a
                        href={`https://sepolia.arbiscan.io/address/${builderAddress}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto text-sm text-primary hover:underline"
                      >
                        View on Arbiscan →
                      </a>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col md:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contracts
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
