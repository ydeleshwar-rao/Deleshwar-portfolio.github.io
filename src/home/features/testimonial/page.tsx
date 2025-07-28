import CustomCard from "../../components/UI/custom-card";
import { motion } from "framer-motion";
import PageSection from "../../components/UI/page-section";
import { useState } from "react";


const cardsData = [
  {
    desciption: "Working with Deleshwar was a game-changer. His ability to turn our vision into reality was incredible.",
    person_name: "Sneha Kapoor",
    profile_image_url: "https://randomuser.me/api/portraits/women/",
    about: "Frontend Engineer at Arham Technologies"
  },
  {
    desciption: "Deleshwar brought structure to our backend systems. Our APIs have never been more reliable and scalable.",
    person_name: "Rohan Mehta",
    profile_image_url: "https://randomuser.me/api/portraits/men/",
    about: "Backend Developer at NovaStack Technologies"
  },
  {
    desciption: "His attention to detail in UI/UX elevated our user experience beyond expectations.",
    person_name: "Aarav Sharma",
    profile_image_url: "https://randomuser.me/api/portraits/men/",
    about: "Tech Lead Designer at Nirvana Group"
  },

];


export default function Testimonial(){
    const [activeCard, setActiveCard] = useState<number | null>(null);

    return ( 
       <PageSection>
      <div className="relative bg-[#07051c] backdrop-blur-md rounded-xl shadow-2xl p-3 sm:p-5 w-full min-w-[320px] sm:min-w-[480px] md:min-w-[768px] lg:min-w-[72rem] max-w-6xl min-h-[650px] md:max-h-[600px] border border-white/10 mx-auto">
           {/* Top absolute header block */}
  <div className="absolute top-0 left-0 bg-[#14102c] rounded-xl w-full min-h-[200px] sm:min-h-[250px] md:min-h-[275px] lg:min-h-[275px] lg:max-h-[300px] px-4 sm:px-6 md:px-8 py-4 sm:py-6 text-center shadow-md">
    <p className="uppercase text-xs sm:text-sm text-gray-400 tracking-widest">What Others Say</p>
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2 relative text-white no-underline transition-colors duration-300 hover:text-cyan-400 group">
      Testimonials<span className="text-blue-400">.</span>
    </h1>
  </div>

  {/* Mobile stacked cards design */}
  <div className="block md:hidden absolute left-0 right-0 top-[180px] px-4 z-10">
    <div className="flex flex-col space-y-[-120px]">
      {cardsData.map((card, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            height: activeCard === idx ? "auto" : "160px",
            zIndex: activeCard === idx ? 20 : 10 - idx
          }}
          transition={{ 
            delay: idx * 0.2, 
            duration: 0.6, 
            type: "spring",
            height: { duration: 0.3, ease: "easeInOut" }
          }}
          className={`bg-[#0d0d23] rounded-xl p-4 w-full relative shadow-lg cursor-pointer border-2 overflow-hidden ${
            activeCard === idx ? 'border-blue-400 shadow-blue-400/20' : 'border-white/10'
          }`}
          onClick={() => setActiveCard(activeCard === idx ? null : idx)}
          style={{ zIndex: activeCard === idx ? 20 : 10 - idx }}
        >
          <CustomCard>
            {/* Quote mark */}
            <div className="text-2xl text-blue-300 mb-2">❝</div>
            
            {/* Always visible header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">
                  <span className="text-blue-400">@</span> {card.person_name}
                </p>
                <p className="text-xs text-gray-400">{card.about}</p>
              </div>
              <div className="h-8 w-8 ml-2 flex-shrink-0">
                <img
                  src={card.profile_image_url}
                  alt="profile"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Expandable content */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: activeCard === idx ? 1 : 0,
                height: activeCard === idx ? "auto" : 0
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="border-t border-white/10 pt-3">
                <h3 className="text-sm leading-relaxed text-white">{card.desciption}</h3>
              </div>
            </motion.div>

            {/* Expand indicator */}
            <div className="absolute bottom-4 right-4">
              <motion.div
                animate={{ rotate: activeCard === idx ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-blue-400"
              >
                ▼
              </motion.div>
            </div>
          </CustomCard>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Desktop grid layout */}
  <div className="hidden md:block absolute left-0 right-0 top-[195px] px-5 z-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cardsData.map((card, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.4, duration: 0.6, type: "spring" }}
          className="bg-[#0d0d23] rounded-xl p-6 max-w-sm w-full relative shadow-md"
        >
          <CustomCard>
            {/* Quote mark */}
            <div className="text-3xl text-blue-300 mb-4">❝</div>
            <h3 className="text-sm leading-relaxed text-white">{card.desciption}</h3>
            <div className="flex items-center justify-between mt-4">
              <div>
                <p className="text-white font-semibold">
                  <span className="text-blue-400">@</span> {card.person_name}
                </p>
                <p className="text-sm text-gray-400">{card.about}</p>
              </div>
              <div className="h-8 w-8">
                <img
                  src={card.profile_image_url}
                  alt="profile"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
            </div>
          </CustomCard>
        </motion.div>
      ))}
    </div>
  </div>
        </div>
       </PageSection>

    )
}