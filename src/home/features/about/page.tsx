import AnimatedCard from "../../components/UI/animated-card";
import { motion } from "framer-motion";
import PageSection from "../../components/UI/page-section";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiLangchain, SiPostgresql, SiPytorch } from "react-icons/si";
import { useState } from "react";

export default function AboutPage() {
   const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

    return (
           <PageSection>
        {/* introduction */}
    
            <div className="bg-cardColour backdrop-blur-md rounded-xl shadow-2xl p-5 max-w-6xl min-h-[300px] md:max-h-[600px] w-full border border-white/10">
                <h4 className="text-indigo-400 text-sm font-semibold tracking-widest mb-2 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                    INTRODUCTION
                </h4>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up relative text-white no-underline transition-colors duration-300 hover:text-cyan-400 group" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                    Overview
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed animate-fade-in-up relative text-white no-underline transition-colors duration-300 hover:text-cyan-400 group" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                    {"I'm a skilled software developer with experience in TypeScript, JavaScript, React, Redux, Node.js, Express, MongoDB, PostgreSQL, HTML, CSS, and more. "}
                    {"I'm passionate about building software that is scalable, maintainable, and efficient. "}
                    {"I'm a quick learner and I'm always looking to expand my skillset."}
                </p>
            </div>
            <style>
                {`
                    @keyframes fade-in-up {
                        0% {
                            opacity: 0;
                            transform: translateY(30px);
                        }
                        100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    .animate-fade-in-up {
                        animation: fade-in-up 0.8s cubic-bezier(0.4,0,0.2,1) both;
                    }
                    .animate-fade-in-up:nth-child(1) { animation-delay: 0.1s; }
                    .animate-fade-in-up:nth-child(2) { animation-delay: 0.3s; }
                    .animate-fade-in-up:nth-child(3) { animation-delay: 0.5s; }
                `}
            </style>
    

        {/* Cards Section */}
        <div className="w-full flex justify-center mt-10 px-4">
            <div className="w-full max-w-6xl flex justify-center">
                {/* Mobile: Single column, center aligned */}
                <div className="flex flex-col items-center gap-6 sm:hidden w-full">
                    {cards.map((card, idx) => {
                        const Icon = card.icon;
                        const color = card.color;
                        const isHovered = hoveredIcon === idx;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2, duration: 0.6, type: "spring" }}
                                className="relative group flex justify-center"
                                onMouseEnter={() => setHoveredIcon(idx)}
                                onMouseLeave={() => setHoveredIcon(null)}
                            >
                                <div className="w-full max-w-xs">
                                    <AnimatedCard>
                                        <div className="flex h-full w-full items-center justify-center p-6">
                                            <div className="flex flex-col items-center justify-center gap-4 text-center">
                                                <div
                                                    className={`h-[70px] w-[70px] rounded-xl bg-gray-800 flex items-center justify-center transform transition-all duration-300 ${
                                                    isHovered
                                                        ? `scale-110 rotate-3 shadow-[0_0_30px_${color}]`
                                                        : "hover:scale-105 hover:rotate-0"
                                                    }`}
                                                >
                                                    <Icon
                                                    className="w-12 h-12 transition-all duration-300"
                                                    style={{
                                                        color,
                                                        filter: isHovered
                                                        ? `drop-shadow(0 0 8px ${color})`
                                                        : "none",

                                                    }}
                                                    />
                                                </div>
                                                <h2 className="text-2xl font-bold text-white">{card.title}</h2>
                                                <p className="text-sm text-white/80 px-2">{card.text}</p>
                                            </div>
                                        </div>
                                    </AnimatedCard>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Tablet and Desktop: Multiple columns */}
                <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
                    {cards.map((card, idx) => {
                        const Icon = card.icon;
                        const color = card.color;
                        const isHovered = hoveredIcon === idx;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.4, duration: 0.6, type: "spring" }}
                                className="relative group w-full max-w-xs"
                                onMouseEnter={() => setHoveredIcon(idx)}
                                onMouseLeave={() => setHoveredIcon(null)}
                            >
                                <AnimatedCard width="w-[200px]" height="h-[200px]">
                                    <div className="flex h-full w-full items-center justify-center p-4">
                                        <div className="flex flex-col items-center justify-center gap-3 text-center">
                                            <div
                                                className={`h-[60px] w-[60px] rounded-xl bg-gray-800 flex items-center justify-center transform transition-all duration-300 ${
                                                isHovered
                                                    ? `scale-110 rotate-3 shadow-[0_0_30px_${color}]`
                                                    : "hover:scale-105 hover:rotate-0"
                                                }`}
                                            >
                                                <Icon
                                                className="w-10 h-10 transition-all duration-300"
                                                style={{
                                                    color,
                                                    filter: isHovered
                                                    ? `drop-shadow(0 0 8px ${color})`
                                                    : "none",

                                                }}
                                                />
                                            </div>
                                            <h2 className="text-xl md:text-2xl font-bold text-white">{card.title}</h2>
                                            <p className="text-sm text-white/80">{card.text}</p>
                                        </div>
                                    </div>
                                </AnimatedCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
      </PageSection>
    );
}


const cards = [
  {
    title: "React",
    text: "Build UI components",
    icon: FaReact,
    color: "#61DAFB"
  },
  {
    title: "Node.js",
    text: "Run backend code",
    icon: FaNodeJs,
    color: "#68A063"
  },
  {
    title: "MongoDB",
    text: "NoSQL Database",
    icon: SiMongodb,
    color: "#4DB33D"
  },
  {
    title: "JavaScript",
    text: "Core web language",
    icon: SiJavascript,
    color: "#F7DF1E"
  },
   {
    title: "PostgreSQL",
    text: "SQL Database",
    icon: SiPostgresql,
    color: "#61DAFB"
  },
  {
    title: "langchain",
    text: "For AI-Retrieval-Augmented Generation",
    icon: SiLangchain,
    color: "#68A063"
  },
  {
    title: "Python",
    text: "For Ai Automation",
    icon: FaPython,
    color: "#3d57b3ff"
  },
  {
    title: "Pytorch",
    text: "Run LLm Models",
    icon: SiPytorch,
    color: "#F7DF1E"
  }
];
