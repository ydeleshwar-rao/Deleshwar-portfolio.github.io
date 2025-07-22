import { motion } from "framer-motion";
import PageSection from "../../components/UI/page-section";

const workItems = [
  {
    title: "JavaScript Developer",
    company: "Arham Technologies",
    date: "Dec 2023 – May 2024",
    summary: "Built and maintained Flutter and React.js applications under senior developer guidance. Automated workflows using Google Apps Script and integrated business logic with Google Sheets. Developed internal tools with FlutterFlow and ZOHO Creator. Created AI-based WhatsApp chatbots using ChatGPT API and Flowise for CRM and lead qualification.",
    points: [
      "Developed custom functions using Google Apps Script to automate repetitive tasks in Google Sheets and streamline internal workflows.",
      "Built and deployed multiple Flutter applications and React.js-based web applications under the guidance of senior software engineers.",
      "Integrated company workflows with Google Sheets and automated data pipelines to enhance productivity and reporting accuracy.",
      "Designed reporting applications using FlutterFlow and ZOHO Creator for real-time data visualization and insights.",
      "Created AI-powered chatbots using the ChatGPT API and Flowise."
    ],
  },
  {
    title: "Software Developer",
    company: "Nirvana Group",
    date: "June 2024 – Present",
    summary:"Working as a Full-Stack Software Developer at Nirvana Group, contributing to scalable backend systems, admin panel development, and mobile applications. Leveraged NestJS, Next.js, and Flutter with a strong focus on modular architecture, performance optimization, and maintainable code following SOLID principles.",
    points: [
      "Backend Development: Built REST & GraphQL APIs using NestJS and TypeScript with modular architecture and MongoDB via Mongoose.",
      "Admin Panel: Developed a Next.js + TypeScript admin panel using reusable components, React Hook Form, Redux Toolkit, and MUI theming.",
      "Testing & Optimization: Wrote unit tests using Jest, applied memoization, and implemented lazy loading for frontend performance gains.",
      "Mobile Development: Created Flutter apps with Provider state management, MVC architecture, and integrated libraries for HTTP/file handling",
      "DevOps Integration: Used Docker for containerization to ensure smooth deployment and consistent environments across development stages."
    ],
  },
];

export default function WorkExperience() {
  const truncateText = (text:string, maxLength:number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <PageSection>
      <div className="w-full min-h-screen">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 mb-4">
            Work Experience
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Experience Grid */}
        <div className="w-full space-y-8 lg:space-y-12">
          {workItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="w-full"
            >
              {/* Mobile & Tablet Design */}
              <div className="block lg:hidden w-full">
                <div className="relative w-full group cursor-pointer">
                  {/* Main Card */}
                  <div className="bg-cardColour backdrop-blur-md rounded-xl shadow-lg group-hover:shadow-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500 overflow-hidden">   
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-2xl group-hover:scale-150 group-hover:from-blue-500/20 transition-all duration-700"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-6">
                      {/* Header - Always Visible */}
                      <div className="mb-4">
                        <h1 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                          {item.title}
                        </h1>
                        
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                          <p className="text-base font-semibold text-blue-400 group-hover:text-cyan-300 transition-colors duration-300">
                            {item.company}
                          </p>
                        </div>
                        
                        <p className="text-xs text-gray-400 font-medium">
                          {item.date}
                        </p>
                      </div>

                      {/* Compact View - Default */}
                      <div className="group-hover:hidden transition-all duration-300">
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {truncateText(item.summary, 80)}
                        </p>
                        <div className="mt-3 flex items-center gap-2 text-blue-400">
                          <span className="text-xs">Hover to see more</span>
                          <div className="flex gap-1">
                            <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>
                            <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          </div>
                        </div>
                      </div>

                      {/* Expanded View - On Hover */}
                      <motion.div 
                        className="hidden group-hover:block"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.5 }}
                      >
                        {/* Full Summary */}
                        <div className="mb-4">
                          <h3 className="text-sm font-semibold text-cyan-400 mb-2">Summary</h3>
                          <p className="text-sm text-gray-300 leading-relaxed border-l-2 border-blue-500/30 pl-3 bg-blue-500/5 rounded-r py-2">
                            {item.summary}
                          </p>
                        </div>

                        {/* All Points */}
                        <div>
                          <h3 className="text-sm font-semibold text-cyan-400 mb-3">Key Achievements</h3>
                          <div className="space-y-2">
                            {item.points.map((point, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-2 p-2 rounded-md bg-white/5 hover:bg-white/10 transition-all duration-200"
                              >
                                <div className="w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-xs text-gray-300 leading-relaxed">
                                  {point}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Design */}
              <div className="hidden lg:block w-full">
                <div className={`flex w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className="w-full max-w-4xl">
                    <div className="relative group cursor-pointer">
                      {/* Main Card */}
                      <div className="bg-cardColour backdrop-blur-md rounded-xl shadow-lg group-hover:shadow-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500 overflow-hidden">   
                        {/* Animated Background Pattern */}
                        <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-48 h-48 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl group-hover:scale-150 group-hover:from-blue-500/20 transition-all duration-700`}></div>
                        
                        {/* Content */}
                        <div className="relative z-10 p-8">
                          {/* Header - Always Visible */}
                          <div className="mb-6">
                            <h1 className="text-2xl xl:text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                              {item.title}
                            </h1>
                            
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                              <p className="text-lg xl:text-xl font-semibold text-blue-400 group-hover:text-cyan-300 transition-colors duration-300">
                                {item.company}
                              </p>
                            </div>
                            
                            <p className="text-sm xl:text-base text-gray-400 font-medium">
                              {item.date}
                            </p>
                          </div>
                          
                          {/* Compact View - Default */}
                          <div className="group-hover:hidden transition-all duration-300">
                            <p className="text-base text-gray-300 leading-relaxed mb-4">
                              {truncateText(item.summary, 120)}
                            </p>
                            <div className="flex items-center gap-3 text-blue-400">
                              <span className="text-sm font-medium">Hover to expand details</span>
                              <div className="flex gap-1">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                              </div>
                            </div>
                          </div>

                          {/* Expanded View - On Hover */}
                          <motion.div 
                            className="hidden group-hover:block"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                          >
                            {/* Full Summary */}
                            <div className="mb-6">
                              <h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                                <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
                                Summary
                              </h3>
                              <p className="text-base text-gray-300 leading-relaxed border-l-2 border-blue-500/30 pl-4 py-3 bg-blue-500/5 rounded-r-lg">
                                {item.summary}
                              </p>
                            </div>

                            {/* All Points Grid */}
                            <div>
                              <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                                <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-blue-500 rounded-full"></div>
                                Key Achievements
                              </h3>
                              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                                {item.points.map((point, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group/item"
                                  >
                                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                                    <p className="text-sm xl:text-base text-gray-300 leading-relaxed">
                                      {point}
                                    </p>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageSection>
  );
}