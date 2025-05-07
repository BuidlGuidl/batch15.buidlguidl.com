import Image from "next/image";
import type { NextPage } from "next";
import { FaCode, FaGithub, FaGlobe, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Address } from "~~/components/scaffold-eth";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Alanwiz | Builder Profile",
  description: "Builder's profile page and recent contributions",
});

interface BuildItem {
  name: string;
  url: string;
  description: string;
}

const name = "Alanwiz";
const role = "Full Stack Developer";
const bio =
  "I'm passionate about building innovative Web Apps and exploring the limitless potential of the blockchain technology.";
const avatarUrl = "/hacker.png";
const hoverClass =
  "hover:bg-gray-200 dark:hover:bg-gray-600 group-hover:text-indigo-800 dark:group-hover:text-indigo-300 group-hover:opacity-100";
const recentBuilds: BuildItem[] = [
  {
    name: "Dice Game",
    url: "https://dice-game-wzrddevs-projects.vercel.app/",
    description: "A simple dice game built on Ethereum.",
  },
  {
    name: "SE-DEX",
    url: "https://se-dex-wzrddevs-projects.vercel.app/",
    description: "A decentralized finance application for trading tokens.",
  },
];

const SOCIAL_LINKS = [
  {
    key: "github",
    url: "https://github.com/Alanwiz00",
    icon: FaGithub,
    hoverClass: "hover:text-indigo-600 dark:hover:text-indigo-400",
    color: "indigo-600",
    ariaLabel: "GitHub",
    size: 40,
  },
  {
    key: "twitter",
    url: "https://twitter.com/Z3R0_PA",
    icon: FaTwitter,
    hoverClass: "hover:text-blue-400 dark:hover:text-blue-600",
    color: "blue-400",
    ariaLabel: "Twitter",
    size: 40,
  },
  {
    key: "linkedin",
    url: "https://www.linkedin.com/in/alanwiz/",
    icon: FaLinkedin,
    hoverClass: "hover:text-blue-400 dark:hover:text-blue-300",
    color: "blue-600",
    ariaLabel: "LinkedIn",
    size: 40,
  },
  {
    key: "website",
    url: "https://app.buidlguidl.com/builders/0x77Ceb3b02B129dF62B252C80Dd775009359dBcE3",
    icon: FaGlobe,
    hoverClass: "hover:text-purple-500 dark:hover:text-purple-400",
    color: "purple-500",
    ariaLabel: "Website",
    size: 40,
  },
] as const;

const AlanwizBuilderPage: NextPage = () => {
  return (
    <div className="max-w-2xl mx-auto bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row mt-10">
      {/* Avatar & Bio Section */}
      <div className="md:w-1/3 p-6 flex flex-col items-center">
        <div className="relative mb-4">
          <Image
            className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-md"
            src={avatarUrl}
            alt={`${name}'s avatar`}
            width={128}
            height={128}
          />
          <div className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-700 rounded-full p-1 shadow-sm">
            <div className="bg-green-400 dark:bg-green-500 rounded-full w-6 h-6 flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">{bio}</p>
        </div>
        <div className="text-xs text-gray-500">
          <Address address="0x77Ceb3b02B129dF62B252C80Dd775009359dBcE3" />
        </div>
      </div>

      {/* Info & Social Section */}
      <div className="md:w-2/3 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">{name}</h2>
          <div className="flex items-center mb-4">
            <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 text-xs font-semibold px-2.5 py-0.5 rounded">
              {role}
            </span>
          </div>

          <div className="mb-6">
            <div className="h-2 bg-gradient-to-r from-purple-400 to-indigo-500 dark:from-purple-600 dark:to-indigo-700 rounded-full mb-2"></div>
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>Productivity</span>
              <span>100%</span>
            </div>
          </div>
        </div>

        {/* Recent Builds Section */}
        <div className="mb-6">
          <h3 className="text-sm font-bold mb-2 text-black dark:text-gray-200">RECENT BUILDS</h3>
          <div className="space-y-2">
            {recentBuilds.map((build, index) => (
              <a
                key={index}
                href={build.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center p-2 rounded group bg-gray-100 dark:bg-gray-700 ${hoverClass}transition-colors`}
              >
                <div className="text-indigo-600 dark:text-indigo-400 mr-2 flex-shrink-0">
                  <FaCode />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-800 dark:text-gray-200">{build.name}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 opacity-90">{build.description}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 mx-auto">
          {SOCIAL_LINKS.map(({ key, url, icon: Icon, hoverClass, ariaLabel, size }) => {
            if (!url) return null;

            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-700 dark:text-gray-300 ${hoverClass} transition-colors`}
                aria-label={ariaLabel}
              >
                <Icon size={size} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AlanwizBuilderPage;
