import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smartdev | Developer Profile",
  description: "Personal profile page for Smartdev, a Solidity developer passionate about DeFi and DAO governance.",
};

export default function SmartdevProfilePage() {
  return (
    <main className="min-h-screen p-8 max-w-3xl mx-auto">
      <section className="flex flex-col md:flex-row gap-8 items-center mb-12">
        <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden">
          <Image
            src="/profile-pic.jpeg"
            alt="Smartdev Avatar"
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Smartdev</h1>
          <p className="text-lg text-gray-600 mt-2">0x575109e921C6d6a1Cb7cA60Be0191B10950AfA6C</p>
          <p className="mt-4 text-gray-900">Solidity developer passionate about DeFi and DAO governance.</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">My Web3 Journey</h2>
        <div className="space-y-4">
          <p>
            After completing SpeedRunEthereum and getting hands-on with Scaffold-ETH, I am excited to take my skills to
            the next level through BuidlGuidl!
          </p>
          <p>
            My current focus is mastering collaborative development - from meaningful GitHub contributions to
            professional-grade dApp architecture. I am particularly interested in diving deeper into:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Advanced Solidity patterns and security best practices</li>
            <li>Effective team workflows in open-source projects</li>
            <li>Production-ready frontend integration with smart contracts</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Current Projects</h2>
        <ul className="space-y-6">
          <li>
            <h3 className="text-xl font-semibold">BuidlGuidl Batch Contributions</h3>
            <p className="text-gray-900">
              Actively participating in batch projects and helping improve our shared tools and documentation. Learning
              to create professional PRs and handle GitHub issues.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Scaffold-ETH Experiments</h3>
            <p className="text-gray-900">
              Building prototype dApps to explore advanced Ethereum concepts like multi-sig wallets, DAO governance, and
              gas optimization techniques.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Open Source Contributions</h3>
            <p className="text-gray-900">
              Making my first meaningful contributions to established web3 projects, starting with documentation
              improvements and small bug fixes.
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Connect With Me</h2>
        <div className="flex gap-4">
          <a
            href="https://github.com/Smartdevs17"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/smartdev_x"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://t.me/smartdevx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Telegram
          </a>
        </div>
      </section>
    </main>
  );
}
