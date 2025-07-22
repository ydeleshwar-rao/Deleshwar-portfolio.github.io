//import { motion } from "framer-motion";

import { motion } from "framer-motion";
import AnimatedCard from "../../components/UI/animated-card";
import PageSection from "../../components/UI/page-section";

const workExpItems = [
  {
    title: "AI ChatBot CRM",
    description:
      "Developed a custom AI-powered CRM chatbot using React.js, LangChain, and ChatGPT APIs to manage client interactions and automate customer support workflows.",
    githubLink: "https://github.com/ydeleshwar-rao/Ai-Chat-Bot",
    websiteLink: "http://www.ydelo.me/",
    linkedinProfileUrl: "https://www.linkedin.com/in/ydeleon/",
    hashtags: [
      { hashtagName: "React.js" },
      { hashtagName: "TypeScript" },
      { hashtagName: "LangChain" },
      { hashtagName: "ChatGPT LLM" },
      { hashtagName: "Tailwind CSS" },
      { hashtagName: "Material UI" },
      { hashtagName: "Node.js" }
    ]
  },
  {
    title: "Zoom Clone",
    description:
      "Built a Zoom-like video conferencing app with real-time WebRTC integration, allowing one-to-one calls, chat, and screen sharing, using React, TypeScript, and NestJS.",
    githubLink: "https://github.com/ydeleon",
    websiteLink: "http://www.ydelo.me/",
    linkedinProfileUrl: "https://www.linkedin.com/in/ydeleon/",
    hashtags: [
      { hashtagName: "React.js" },
      { hashtagName: "TypeScript" },
      { hashtagName: "WebRTC" },
      { hashtagName: "NestJS" },
      { hashtagName: "Socket.IO" }
    ]
  },
  {
    title: "AI Story Teller",
    description:
      "Designed an AI-powered story generation platform using LLMs to generate engaging narratives based on user prompts, integrating OpenAI APIs and styled with Tailwind CSS.",
    githubLink: "https://github.com/ydeleon",
    websiteLink: "http://www.ydelo.me/",
    linkedinProfileUrl: "https://www.linkedin.com/in/ydeleon/",
    hashtags: [
      { hashtagName: "React.js" },
      { hashtagName: "TypeScript" },
      { hashtagName: "OpenAI API" },
      { hashtagName: "Tailwind CSS" },
      { hashtagName: "Storytelling AI" }
    ]
  }
];

export default function WorkExpPage() {
    return (
       <PageSection>
             <div className="bg-cardColour backdrop-blur-md rounded-xl shadow-2xl p-5 max-w-6xl min-h-[30px] md:max-h-[600px] w-full border border-white/10">
                <h4 className="text-indigo-400 text-sm font-semibold tracking-widest mb-2 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                    My Work
                </h4>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up relative text-white no-underline transition-colors duration-300 hover:text-cyan-400 group" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                    Projects
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed animate-fade-in-up relative text-white no-underline transition-colors duration-300 hover:text-cyan-400 group" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                    {"Following projects showcases my skills and experience through real world examples of my work."}
                    {"Each projects briefly described with links to code repositories and live demos in it.  "}
                    {"It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."}
                </p>
            </div>

        <div className="flex flex-wrap gap-6 justify-center mt-10">
         {workExpItems.map((card, idx) => (
        <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.4, duration: 0.6, type: "spring" }}
                className="relative min-w-[250px] max-w-sm group"
            >
                    <AnimatedCard width="w-[388px]" height="h-[330px]">
            <div className="flex flex-col h-full">
                <div>
                <img
                    src={card.githubLink || "https://avatars.githubusercontent.com/u/583231?v=4"}
                    alt={card.title}
                    className="w-[362px] h-[160px] object-cover rounded-md mx-auto mb-4 border border-indigo-400 shadow-lg bg-white/10 transition-transform duration-300 group-hover:scale-105"
                />
                </div>

                <h2 className="text-2xl font-bold mb-2 text-white text-center">{card.title}</h2>

                <p className="text-sm text-white/80 text-center overflow-hidden text-ellipsis line-clamp-1">
                {card.description}
                </p>

                <div className="flex flex-wrap gap-2 justify-center mt-auto">
                {card.hashtags.map((tag, tagIdx) => (
                    <span
                    key={tagIdx}
                    className="bg-indigo-500/20 text-indigo-300 text-xs px-2 py-1 rounded-full"
                    >
                    #{tag.hashtagName}
                    </span>
                ))}
                </div>
            </div>
            </AnimatedCard>

          </motion.div>
      ))}
       </div>

       </PageSection>
    );
}