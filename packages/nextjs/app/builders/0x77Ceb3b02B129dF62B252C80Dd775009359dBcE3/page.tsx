import type { NextPage } from "next";
import { FaCode, FaGithub, FaGlobe, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Address } from "~~/components/scaffold-eth";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Builder Profile",
  description: "View builder profile and recent contributions",
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
const builderAddress = "0x77Ceb3b02B129dF62B252C80Dd775009359dBcE3";
const address = <Address address={builderAddress} />;
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

const SOCIAL_LINKS_CONFIG = [
  {
    key: "github",
    icon: FaGithub,
    color: "indigo-600",
    ariaLabel: "GitHub",
    size: 40,
  },
  {
    key: "twitter",
    icon: FaTwitter,
    color: "blue-400",
    ariaLabel: "Twitter",
    size: 40,
  },
  {
    key: "linkedin",
    icon: FaLinkedin,
    color: "blue-600",
    ariaLabel: "LinkedIn",
    size: 40,
  },
  {
    key: "website",
    icon: FaGlobe,
    color: "purple-500",
    ariaLabel: "Website",
    size: 40,
  },
] as const;

interface SocialLinks {
  github?: string;
  twitter?: string;
  linkedin?: string;
  website?: string;
}

const socialLinks = {
  github: "https://github.com/Alanwiz00",
  twitter: "https://twitter.com/Z3R0_PA",
  linkedin: "https://www.linkedin.com/in/alanwiz/",
  website: "https://app.buidlguidl.com/builders/0x77Ceb3b02B129dF62B252C80Dd775009359dBcE3",
};

const AlanwizBuilderPage: NextPage = () => {
  return (
    <div className="max-w-2xl mx-auto bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row mt-10">
      {/* Avatar & Bio Section */}
      <div className="md:w-1/3 p-6 flex flex-col items-center">
        <div className="relative mb-4">
          <img
            className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-md"
            src={avatarUrl}
            alt={`${name}'s avatar`}
          />
          <div className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-700 rounded-full p-1 shadow-sm">
            <div className="bg-green-400 dark:bg-green-500 rounded-full w-6 h-6 flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">{bio}</p>
          <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">{address}</p>
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
                className="flex items-center p-2 rounded group bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <div className="text-indigo-600 dark:text-indigo-400 mr-2 flex-shrink-0 group-hover:text-indigo-800 dark:group-hover:text-indigo-300">
                  <FaCode />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-indigo-800 dark:group-hover:text-indigo-300">
                    {build.name}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 opacity-90 group-hover:opacity-100">
                    {build.description}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 mx-auto">
          {SOCIAL_LINKS_CONFIG.map(({ key, icon: Icon, color, ariaLabel, size }) => {
            const url = socialLinks[key as keyof SocialLinks];
            if (!url) return null;

            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-700 dark:text-gray-300 hover:text-${color} dark:hover:text-${color.replace(
                  "-",
                  "-",
                )} transition-colors`}
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
