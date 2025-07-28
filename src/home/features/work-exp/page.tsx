import { motion } from "framer-motion";
import AnimatedCard from "../../components/UI/animated-card";
import PageSection from "../../components/UI/page-section";
import whatupLogo from "../../../styles/logos/whtup-extension.png";
import aichataisstLogo from "../../../styles/logos/ai-chat-assitance.png";
import aistorytellerLogo from "../../../styles/logos/ai-story-teller.png";


const workExpItems = [
  {
    title: "AI ChatBot CRM",
    description:
      "Developed a custom AI-powered CRM chatbot using React.js, LangChain, and ChatGPT APIs to manage client interactions and automate customer support workflows.",
    githubLink: "https://github.com/ydeleshwar-rao/Ai-Chat-Bot",
    websiteLink: "http://www.ydelo.me/",
    linkedinProfileUrl: "https://www.linkedin.com/in/ydeleshwarrao/",
    image:aichataisstLogo,
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
    title: "Whatup Extenstion Connect",
    description:
      "Built a WhatsApp automation browser extension with API integration, enabling bulk messaging, multi-account management, and real-time message delivery tracking using JavaScript, Chrome APIs, and RESTful services.",
    githubLink: "https://github.com/ydeleshwar-rao/whatup-extenstion-connect",
    websiteLink: "http://www.ydelo.me/",
    linkedinProfileUrl: "https://www.linkedin.com/in/ydeleshwarrao/",
    image:whatupLogo,
    hashtags: [
      { hashtagName: "React.js" },
      { hashtagName: "TypeScript" },
      { hashtagName: "Node" },
      { hashtagName: "NestJS" },
      { hashtagName: "Socket.IO" }
    ]
  },
  {
    title: "AI Story Teller",
    description:
      "Designed an AI-powered story generation platform using LLMs to generate engaging narratives based on user prompts, integrating OpenAI APIs and styled with Tailwind CSS.",
    githubLink: "https://github.com/ydeleshwar-rao/Flutter-Story-Generator-App",
    websiteLink: "http://www.ydelo.me/",
    linkedinProfileUrl: "https://www.linkedin.com/in/ydeleshwarrao/",
    image:aistorytellerLogo,
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
             {/* Header Section - Responsive container */}
             <div className="bg-cardColour backdrop-blur-md rounded-xl shadow-2xl p-4 sm:p-5 w-full max-w-6xl min-h-[30px] md:max-h-[600px] mx-auto border border-white/10">

                <h4 className="text-indigo-400 text-sm font-semibold tracking-widest mb-2 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                    My Work
                </h4>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up relative text-white no-underline transition-colors duration-300 hover:text-cyan-400 group" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                    Projects
                </h1>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed animate-fade-in-up relative text-white no-underline transition-colors duration-300 hover:text-cyan-400 group" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                    {"Following projects showcases my skills and experience through real world examples of my work. "}
                    {"Each projects briefly described with links to code repositories and live demos in it. "}
                    {"It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."}
                </p>
            </div>

        {/* Projects Grid - Mobile Responsive */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 justify-center items-center mt-6 sm:mt-10 px-4 sm:px-0">
         {workExpItems.map((card, idx) => (
        <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.4, duration: 0.6, type: "spring" }}
                className="relative w-full sm:min-w-[250px] sm:max-w-sm group"
            >
                    {/* Mobile: Full width cards, Desktop: Fixed width cards */}

                         <AnimatedCard 
              width="w-full sm:w-[388px]" 
              height="h-auto sm:h-[330px]"
          >
              <div className="flex flex-col h-full p-0 m-0">
                  <div className="mb-2 p-0 m-0">
                      <img
                          src={card.image || "https://avatars.githubusercontent.com/u/583231?v=4"}
                          alt={card.title}
                          className="w-full sm:w-[362px] h-[140px] sm:h-[160px] object-cover rounded-md border border-indigo-400 shadow-lg bg-white/10 transition-transform duration-300 group-hover:scale-105 p-0 m-0 cursor-pointer"
                          onClick={() => {
                              if (card.githubLink) {
                                  window.open(card.githubLink, '_blank', 'noopener,noreferrer');
                              }
                          }}
                      />
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white text-center">{card.title}</h2>

                  <p className="text-sm text-white/80 text-center mb-4 sm:mb-auto overflow-hidden leading-relaxed sm:text-ellipsis sm:line-clamp-1">
                      {card.description}
                  </p>

                  {/* Hashtags - Better mobile layout */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
                      {card.hashtags.slice(0, 4).map((tag, tagIdx) => (
                          <span
                              key={tagIdx}
                              className="bg-indigo-500/20 text-indigo-300 text-xs px-2 py-1 rounded-full whitespace-nowrap"
                          >
                              #{tag.hashtagName}
                          </span>
                      ))}
                      {card.hashtags.length > 4 && (
                          <span className="bg-indigo-500/20 text-indigo-300 text-xs px-2 py-1 rounded-full">
                              +{card.hashtags.length - 4}
                          </span>
                      )}
                  </div>
              </div>
          </AnimatedCard>

          </motion.div>
      ))}
       </div>

       </PageSection>
    );
}