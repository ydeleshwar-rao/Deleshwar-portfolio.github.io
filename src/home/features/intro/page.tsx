import PageSection from "../../components/UI/page-section";
import { motion } from "framer-motion";

export default function IntroPage() {
  return (
    <PageSection>
      <div className="relative min-h-[550px] flex flex-col items-center justify-center overflow-hidden">
        {/* Animated Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-12">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hi, <span className="text-[#00fff7]">It's Deleshwar</span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl font-semibold text-[#7f00ff] mb-8 tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            Software Developer &amp; Creative Technologist
          </motion.h2>
        </div>

        {/* Animated scroll-down logo */}
        <div className="absolute bottom-10 flex flex-col items-center z-10">
          <div className="animate-bounce">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="11" stroke="#00fff7" strokeWidth="2" />
              <path
                d="M8 12l4 4 4-4"
                stroke="#7f00ff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="mt-2 text-sm text-[#00fff7] opacity-80">Scroll Down</span>
        </div>
      </div>
    </PageSection>
  );
}
