import Image from "next/image";
import { ClassValue, clsx } from "clsx";
import { NextPage } from "next";
import { FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { ChatBubbleLeftRightIcon, CodeBracketIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { MotionA, MotionDiv, MotionH1, MotionMain, MotionP } from "~~/components/MotionElements";
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

const TalhaProfilePage: NextPage = () => {
  return (
    <div className="flex justify-center pt-10 min-h-screen px-4 bg-gradient-to-br from-gray-950 via-zinc-900 to-gray-800">
      <MotionMain initial="hidden" animate="visible" variants={containerVariants} className="w-full max-w-4xl">
        <BackgroundGradient containerClassName="w-full mb-20" className="rounded-3xl">
          <div className="px-6 py-8 sm:p-10 rounded-2xl bg-gradient-to-br from-zinc-900/90 via-gray-800/90 to-zinc-900/90 backdrop-blur-sm">
            <MotionDiv variants={itemVariants} className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
              <div className="text-center sm:text-left space-y-4 flex-1">
                <MotionH1
                  variants={itemVariants}
                  className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent"
                >
                  Mohammed Talha Ansari
                  <Address address="0xF058bE573Fa9303095B9bdED77EE2867d75BbFa6" />
                </MotionH1>
                <MotionDiv variants={itemVariants} className="flex flex-wrap gap-2">
                  {/* Column 1 */}
                  <MotionDiv variants={itemVariants} className="flex flex-col gap-2 pt-5">
                    <Badge icon={<CodeBracketIcon />} text="Full-Stack Web3 Developer" color="cyan" />
                    <Badge icon={<GlobeAltIcon />} text="Smart Contract Wizard" color="purple" />
                    <Badge icon={<ChatBubbleLeftRightIcon />} text="TypeScript & React" color="orange" />
                    <Badge icon={<ChatBubbleLeftRightIcon />} text="Solidity & Foundry" color="yellow" />
                  </MotionDiv>
                  {/* Column 2 */}
                  <MotionDiv variants={itemVariants} className="flex flex-col gap-2 pt-5">
                    <Badge icon={<ChatBubbleLeftRightIcon />} text="Scaffold-ETH 2" color="teal" />
                    <Badge icon={<ChatBubbleLeftRightIcon />} text="zkEmail Integration" color="emerald" />
                    <Badge icon={<ChatBubbleLeftRightIcon />} text="Tailwind & Framer Motion" color="pink" />
                    <Badge icon={<ChatBubbleLeftRightIcon />} text="Bitcoin & Runes Protocol" color="blue" />
                    <Badge icon={<ChatBubbleLeftRightIcon />} text="UniSat Wallet Integration" color="red" />
                  </MotionDiv>
                </MotionDiv>
              </div>
              <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative flex-shrink-0">
                <Image
                  src={`/Tola.jpeg`}
                  alt="Profile Avatar"
                  width={200}
                  height={200}
                  priority
                  className="object-cover rounded-lg border-2 border-cyan-500 shadow-xl hover:shadow-cyan-400/30 transition-all duration-300"
                />
              </MotionDiv>
            </MotionDiv>
          </div>
        </BackgroundGradient>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MotionDiv
            variants={itemVariants}
            className="md:col-span-2 space-y-4 bg-zinc-800/90 p-8 rounded-2xl shadow-xl"
          >
            <h2 className="text-xl font-semibold text-cyan-300 mb-4">About</h2>
            <MotionP variants={itemVariants} className="leading-relaxed text-gray-300">
              I&#39;m Mohammed Talha Ansari — a full-stack Web3 developer passionate about building secure, scalable,
              and user-centric decentralized systems. My journey began with over 5 years in Web2, crafting smooth,
              high-performance frontend and backend applications. But it didn&#39;t stop there.
            </MotionP>

            <MotionP variants={itemVariants} className="leading-relaxed text-gray-300">
              I&#39;m now deeply rooted in the Web3 space, working with technologies like Solidity, Foundry,
              Scaffold-ETH 2, and zkEmail to create smart contract infrastructure that&#39;s intuitive and future-proof.
              From Ethereum and Polygon to exploring Bitcoin&#39;s Runes protocol and UniSat wallet integrations, I aim
              to push the boundaries of what&#39;s possible with decentralized tech.
            </MotionP>
          </MotionDiv>
          <MotionDiv variants={itemVariants} className="space-y-6 bg-zinc-800/90 p-8 rounded-2xl shadow-xl">
            <h2 className="text-xl font-semibold text-cyan-300 pb-8">Connect</h2>
            <div className="flex flex-col gap-4">
              {[
                { name: "GitHub", url: "https://github.com/amsorrytola", icon: <FaGithub className="w-5 h-5" /> },
                { name: "Twitter", url: "https://x.com/An92147600_", icon: <FaTwitter className="w-5 h-5" /> },
                { name: "Telegram", url: "https://t.me/tolaamsorry", icon: <FaTelegram className="w-5 h-5" /> },
              ].map(social => (
                <MotionA
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-cyan-800 to-indigo-900 text-gray-100 rounded-xl hover:from-cyan-700 hover:to-indigo-800 transition-all duration-300"
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-cyan-400">{social.icon}</span>
                  <span>{social.name}</span>
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-auto" />
                </MotionA>
              ))}
            </div>
          </MotionDiv>
        </div>
      </MotionMain>
    </div>
  );
};

const Badge = ({ icon, text, color }: { icon: React.ReactNode; text: string; color: string }) => (
  <span className={`px-3 py-1 bg-${color}-900/40 text-${color}-300 rounded-full text-xs font-medium flex items-center`}>
    <span className="w-3 h-3 mr-1">{icon}</span>
    {text}
  </span>
);

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
      <MotionDiv
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={animate ? { duration: 5, repeat: Infinity, repeatType: "reverse" } : undefined}
        style={{ backgroundSize: animate ? "400% 400%" : undefined }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]",
        )}
      />
      <MotionDiv
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={animate ? { duration: 5, repeat: Infinity, repeatType: "reverse" } : undefined}
        style={{ backgroundSize: animate ? "400% 400%" : undefined }}
        className={cn("relative z-[2]", className)}
      >
        {children}
      </MotionDiv>
    </div>
  );
}

export default TalhaProfilePage;
