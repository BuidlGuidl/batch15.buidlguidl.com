import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { Address } from "~~/components/scaffold-eth";

const DanilevskiPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <Image src="/danilevski.png" alt="Profile" width={128} height={128} className="w-32 h-32 rounded-full mb-4" />
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Hey, I am danilevski!</h1>
      <p className="text-base md:text-lg mb-4 max-w-md text-center">
        Trying to learn coding with the help of such a great platform, thanks for being able to be here! I am completely
        new to coding, so please be lenient eheh.
      </p>
      <div className="mb-4">
        <Address address="0x49D1ad89ADB60241Bf2Cc003fe57bcfD4d3cfD95" size="base" format="short" />
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link
            href="https://github.com/dnlvskey"
            target="_blank"
            className="flex items-center text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <FaGithub className="mr-2" />
          </Link>
        </li>
        <li>
          <Link
            href="https://x.com/dnlvskey"
            target="_blank"
            className="flex items-center text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <FaTwitter className="mr-2" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DanilevskiPage;
