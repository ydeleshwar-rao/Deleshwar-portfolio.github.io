import React from "react";
import Layout from "./layout";
import IntroPage from "./features/intro/page";
import AboutPage from "./features/about/page";
import WorkExperience from "./features/work/page";
import WorkExpPage from "./features/work-exp/page";
import Testimonial from "./features/testimonial/page";
import Contact from "./features/contact/page";

// Reusable Neon Background Component
const NeonBackground: React.FC = () => (
    <div className="absolute inset-0 z-0">
        <div className="w-full h-full blur-2xl opacity-60 animate-pulse">
            <svg width="100%" height="100%">
                <defs>
                    <radialGradient id="neon" cx="50%" cy="50%" r="80%">
                        <stop offset="0%" stopColor="#00fff7" />
                        <stop offset="50%" stopColor="#7f00ff" />
                        <stop offset="100%" stopColor="#000" />
                    </radialGradient>
                </defs>
                <ellipse
                    cx="50%"
                    cy="50%"
                    rx="60%"
                    ry="40%"
                    fill="url(#neon)"
                    style={{
                        transform: "rotate(-15deg)",
                        filter: "blur(60px)",
                        animation: "moveBg 8s ease-in-out infinite alternate",
                    }}
                />
                <style>
                    {`
                        @keyframes moveBg {
                            0% { transform: translateY(0) rotate(-15deg);}
                            100% { transform: translateY(40px) rotate(10deg);}
                        }
                    `}
                </style>
            </svg>
        </div>
    </div>
);

type SectionWrapperProps = React.PropsWithChildren & {
  id?: string;
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id }) => (
  <div id={id} className="bg-primary flex justify-center items-center">
    {children}
  </div>
 
);
<section className=" bg-primary text-white py-20 px-4 md:px-10"></section>

const HomePage: React.FC = () => (
    <Layout>
        <IntroPage />
        <NeonBackground />
        <SectionWrapper id="about">
            <AboutPage />
        </SectionWrapper>

    <SectionWrapper id="work">
      <WorkExpPage />
    </SectionWrapper>

     <SectionWrapper id="work-exp1">
      <WorkExperience />
    </SectionWrapper>

        <SectionWrapper id="testimonial">
            <Testimonial />
        </SectionWrapper>

        <SectionWrapper id="contact">
            <Contact />
        </SectionWrapper>
    </Layout>
);

export default HomePage;
