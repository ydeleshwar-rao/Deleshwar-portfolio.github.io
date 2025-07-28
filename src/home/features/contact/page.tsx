import { motion } from "framer-motion";
import CustomCard from "../../components/UI/custom-card";
import PageSection from "../../components/UI/page-section";


export default function Contact() {
    return(
        <PageSection>
             <div className="relative bg-[#07051c] backdrop-blur-md rounded-xl shadow-2xl p-3 sm:p-5 w-full min-w-[320px] sm:min-w-[480px] md:min-w-[768px] lg:min-w-[72rem] max-w-6xl min-h-[650px] md:max-h-[600px] border border-white/10 mx-auto">
              
               {/* Top absolute header block */}
  <div className="absolute top-0 left-0 bg-[#14102c] rounded-xl w-full min-h-[200px] sm:min-h-[250px] md:min-h-[275px] lg:min-h-[275px] lg:max-h-[300px] px-4 sm:px-6 md:px-8 py-4 sm:py-6 text-center shadow-md"> 
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2 relative text-white no-underline transition-colors duration-300 hover:text-cyan-400 group">
      Contact<span className="text-blue-400">.</span>
    </h1> </div>
        
   <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
        className="absolute left-2 sm:left-8 md:left-16 lg:left-60 top-[180px] sm:top-[200px] md:top-[155px] px-3 sm:px-5 bg-[#0d0d23] rounded-xl w-[calc(100%-1rem)] sm:w-[calc(100%-4rem)] md:w-[calc(100%-8rem)] lg:max-w-2xl lg:w-full min-h-[400px] shadow-md"
      >
        <CustomCard>
            <form className="space-y-4 sm:space-y-6">
                <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1">
                        Your name
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="What is your good name?"
                        className="w-full px-3 sm:px-4 py-2 rounded-md bg-[#18143a] text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1">
                        Your Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-3 sm:px-4 py-2 rounded-md bg-[#18143a] text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        placeholder="What do you want to say?"
                        className="w-full px-3 sm:px-4 py-2 rounded-md bg-[#18143a] text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[80px] sm:min-h-[100px] resize-none text-sm sm:text-base"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition text-sm sm:text-base"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </CustomCard>
      </motion.div>
             </div>
        
      </PageSection>
    )
}
