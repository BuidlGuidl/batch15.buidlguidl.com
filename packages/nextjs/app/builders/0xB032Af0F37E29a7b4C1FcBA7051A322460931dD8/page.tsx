"use client";

import Image from "next/image";
import { ClassValue, clsx } from "clsx";
import { motion } from "framer-motion";
import { NextPage } from "next";
import { FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { ChatBubbleLeftRightIcon, CodeBracketIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { Address } from "~~/components/scaffold-eth";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
const variants = {
  initial: {
    backgroundPosition: "0 50%",
  },
  animate: {
    backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
  },
};
const skills = [
  { name: "Ethereum", level: 90 },
  { name: "Solidity", level: 85 },
  { name: "Typescript", level: 95 },
  { name: "Smart Contracts", level: 88 },
];

const AyushDuttSharmaProfilePage: NextPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-12 bg-gray-50 dark:bg-gray-900">
      <motion.main initial="hidden" animate="visible" variants={containerVariants} className="w-full max-w-4xl">
        <BackgroundGradient
          containerClassName="w-full mb-8"
          className="rounded-3xl p-1 sm:p-2 bg-white dark:bg-zinc-900/80 backdrop-blur-sm"
        >
          <div className="px-6 py-8 sm:p-10 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm">
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative flex-shrink-0">
                <Image
                  src={`/ayush_dutt_sharma_profile.jpeg`}
                  alt="Profile Avatar"
                  width={160}
                  height={160}
                  className="object-cover rounded-full border-2 border-transparent shadow-xl hover:shadow-blue-300/30 dark:hover:shadow-blue-400/20 transition-all duration-300"
                />
              </motion.div>

              <div className="text-center sm:text-left space-y-4 flex-1">
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
                >
                  Ayush Dutt Sharma
                </motion.h1>

                <motion.div variants={itemVariants} className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium flex items-center">
                    <CodeBracketIcon className="w-3 h-3 mr-1" /> Builder
                  </span>
                  <span className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium flex items-center">
                    <GlobeAltIcon className="w-3 h-3 mr-1" /> Smart Contract Wizard
                  </span>
                  <span className="px-3 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-xs font-medium flex items-center">
                    <ChatBubbleLeftRightIcon className="w-3 h-3 mr-1" /> Typescript
                  </span>
                </motion.div>
                <Address address="0xB032Af0F37E29a7b4C1FcBA7051A322460931dD8" />
              </div>
            </motion.div>
          </div>
        </BackgroundGradient>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 space-y-4 bg-white dark:bg-zinc-900/80 p-8 rounded-2xl shadow-sm"
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">About</h2>
            <motion.p variants={itemVariants} className="leading-relaxed text-gray-700 dark:text-gray-300">
              I&apos;m a Web2 developer with 5 years of experience building sleek, scalable digital experiences.
              Recently, my curiosity and passion for decentralization have pulled me into the Web3 world.
            </motion.p>
            <motion.p variants={itemVariants} className="leading-relaxed text-gray-700 dark:text-gray-300">
              I&apos;m diving deep into blockchain, smart contracts, and creating open, user-friendly systems. I&apos;m
              thrilled to connect, collaborate, and help shape the future of the web!
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-6 bg-white dark:bg-zinc-900/80 p-8 rounded-2xl shadow-sm"
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Connect</h2>
            <div className="flex flex-col gap-4">
              {[
                { name: "GitHub", url: "https://github.com/Ayush-Dutt-Sharma", icon: <FaGithub className="w-5 h-5" /> },
                { name: "Twitter", url: "https://x.com/Ayush_Dutt_", icon: <FaTwitter className="w-5 h-5" /> },
                { name: "Telegram", url: "https://t.me/ayush_dutt_sharma", icon: <FaTelegram className="w-5 h-5" /> },
              ].map(social => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-zinc-800/50 text-gray-800 dark:text-gray-200 rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all duration-300"
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-blue-600 dark:text-blue-400">{social.icon}</span>
                  <span>{social.name}</span>
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-auto" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-6 bg-white dark:bg-zinc-900/80 p-8 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <motion.div
                  className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 1, ease: "easeOut" }}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
};

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function BackgroundGradient({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) {
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform",
          " bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]",
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]",
        )}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
}

export default AyushDuttSharmaProfilePage;
