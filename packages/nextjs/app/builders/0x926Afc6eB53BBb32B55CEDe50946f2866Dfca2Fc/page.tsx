import Image from "next/image";
import { Github } from "lucide-react";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const QulinkProfilePage: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        {/* Header & Bio */}
        <section className="px-5 text-center max-w-2xl">
          <h1>
            <span className="block text-2xl mb-2">Hello from</span>
            <span className="block text-4xl font-bold">Qulink</span>
          </h1>
          <p className="text-lg mt-4">
            I am new to Solidity and smart contract development. The endless possibilities of the blockchain technology
            has me hooked — I am on a mission to explore as much as possible and find my niche in the Web3 universe. So
            far, there are too many fascinating paths to pick just one!
          </p>
        </section>

        {/* Avatar */}
        <section className="flex flex-col items-center mt-10">
          <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
            <Image
              src="/profile-pic.png"
              alt="Qulink Avatar"
              width={192}
              height={192}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </section>

        {/* Wallet Address */}
        <section className="mt-10 text-center">
          <h2 className="text-xl font-semibold mb-2">My Wallet Address</h2>
          <p className="text-lg font-mono break-words">0x926Afc6eB53BBb32B55CEDe50946f2866Dfca2Fc</p>
          <div className="mt-2 flex justify-center">
            <Address address="0x926Afc6eB53BBb32B55CEDe50946f2866Dfca2Fc" />
          </div>
        </section>

        {/* Social Links */}
        <section className="mt-10 text-center">
          <h2 className="text-xl font-semibold mb-4">My Socials</h2>
          <div className="flex gap-6 justify-center items-center">
            <a
              href="https://github.com/qulink"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            {/* You can add more socials here */}
          </div>
        </section>
      </div>
    </>
  );
};

export default QulinkProfilePage;
