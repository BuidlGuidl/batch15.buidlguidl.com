import Image from "next/image";
import { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

// or wherever it's defined

const BiliqisBuilderPage: NextPage = () => {
  return (
    <main className="p-8 max-w-2xl mx-auto space-y-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg mt-10 transition-colors duration-300">
      <div className="flex items-center space-x-5  h-32 relative">
        <Image
          src="/biliqis.jpg"
          alt="my Avatar"
          width={120}
          height={200}
          className="object-cover rounded-full border-4 border-blue-500 shadow-md dark:border-blue-300"
        />

        <div>
          <h1 className="text-2xl font-extrabold text-blue-800 dark:text-blue-400">Biliqis Onikoyi</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 italic">Builder | Smart Contract Wizard | Rust</p>
        </div>
      </div>

      <div className="space-y-2 text-gray-700 dark:text-gray-200">
        <p>
          Hey there! I&apos;m currently building{" "}
          <span className="font-semibold text-blue-700 dark:text-blue-300">at BuidlGuidl Batch 15.</span>
        </p>
        <p>
          Passionate about Ethereum, Solidity, and scaling dapps with gasless UX. Let&apos;s build the future together
          ✨
        </p>
      </div>

      <div className="flex gap-4 text-blue-600 dark:text-blue-400">
        <a
          href="https://github.com/BiliqisO"
          className="hover:underline font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com/Biliqis_O"
          className="hover:underline font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>

      <div className="text-xs text-gray-500 mt-6">
        <Address address="0x6F1b6ac175E2cf9436D7478E6d08E22C415eb474" />
      </div>
    </main>
  );
};

export default BiliqisBuilderPage;
