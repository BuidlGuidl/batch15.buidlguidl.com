import Image from "next/image";
import { NextPage } from "next";
import { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaTwitter } from "react-icons/fa";

interface ProfileData {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  location: string;
  email: string;
  social: {
    github: string;
    twitter: string;
    linkedin: string;
  };
}

interface SocialLink {
  href: string;
  icon: IconType;
  lightHoverColor: string;
  darkHoverColor: string;
}

const SamProfilePage: NextPage = () => {
  const profile: ProfileData = {
    name: "Samuel Owen",
    title: "Frontend/Smart Contract Developer",
    bio: "Dynamic developer, Problem-solver, versatile and resilient. Passionate about Blockchain and crypto mainstream adoption/inclusion.",
    avatar: "/owen.webp",
    location: "Lagos, Nigeria",
    email: "samkinola15@gmail.com",
    social: {
      github: "https://github.com/Samuel1505",
      twitter: "https://x.com/Samuel_Owen5",
      linkedin: "https://www.linkedin.com/in/samuel-owen-b47570244/",
    },
  };

  const socialLinks: SocialLink[] = [
    {
      href: profile.social.github,
      icon: FaGithub,
      lightHoverColor: "hover:text-gray-900",
      darkHoverColor: "dark:hover:text-gray-200",
    },
    {
      href: profile.social.twitter,
      icon: FaTwitter,
      lightHoverColor: "hover:text-blue-400",
      darkHoverColor: "dark:hover:text-blue-300",
    },
    {
      href: profile.social.linkedin,
      icon: FaLinkedin,
      lightHoverColor: "hover:text-blue-600",
      darkHoverColor: "dark:hover:text-blue-400",
    },
    {
      href: `mailto:${profile.email}`,
      icon: FaEnvelope,
      lightHoverColor: "hover:text-red-500",
      darkHoverColor: "dark:hover:text-red-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden">
        <div className="px-6 py-8">
          <div className="flex flex-col items-center">
            {/* Avatar */}
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={128}
              height={128}
              priority
              className="w-32 h-32 rounded-full mb-4 border-4 border-gray-200 dark:border-gray-700 object-cover"
            />

            {/* Name and Title */}
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">{profile.name}</h1>
            <h2 className="text-lg text-gray-600 dark:text-gray-400 mb-3">{profile.title}</h2>

            {/* Location */}
            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
              <FaMapMarkerAlt size={16} className="mr-2 text-gray-600 dark:text-gray-400" />
              <span className="text-sm">{profile.location}</span>
            </div>

            {/* Bio */}
            <p className="text-gray-600 dark:text-gray-400 text-center mb-6 px-4 text-sm leading-relaxed">
              {profile.bio}
            </p>

            {/* Social Links */}
            <div className="flex space-x-6 mb-6">
              {socialLinks.map(({ href, icon: Icon, lightHoverColor, darkHoverColor }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-600 dark:text-gray-400 ${lightHoverColor} ${darkHoverColor} transition-colors duration-300 ease-in-out`}
                  aria-label={`Link to ${href}`}
                >
                  <Icon size={24} className={`text-gray-600 dark:text-gray-400 ${lightHoverColor} ${darkHoverColor}`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SamProfilePage;
