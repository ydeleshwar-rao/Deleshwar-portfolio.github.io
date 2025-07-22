// import React, { ReactNode, useRef } from "react";

// type AnimatedCardProps = {
//   children: ReactNode;
//   className?: string;
// };

// const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, className}) => {
//   const cardRef = useRef<HTMLDivElement>(null);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     const card = cardRef.current;
//     if (!card) return;

//     const rect = card.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;

//     const rotateX = ((y - centerY) / centerY) * 10;
//     const rotateY = ((x - centerX) / centerX) * -10;

//     card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
//   };

//   const handleMouseLeave = () => {
//     const card = cardRef.current;
//     if (card) {
//       card.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";
//     }
//   };

//   return (
//     <div
//       ref={cardRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//     >
      
//       <div
//         className={`
//           relative z-10 bg-cardColour backdrop-blur-lg border border-white/20 rounded-2xl p-4 shadow-xl transition-all duration-300
//           ${className || ""}
         
//           group-hover:border-blue-500
//            w-[270px] h-[284px] flex flex-col

//         `}
//         style={{
//           position: "relative",
//           overflow: "hidden",
//         }}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };

// export default AnimatedCard;


import React, { ReactNode, useRef } from "react";

type AnimatedCardProps = {
  children: ReactNode;
  className?: string;
  width?: string; // e.g., w-[300px]
  height?: string; // e.g., h-[384px]
};

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  className, 
  width = "w-[270px]",   // default width
  height = "h-[284px]",  // default height
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";
    }
  };

  return (
    <div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div
        className={`relative z-10 bg-cardColour backdrop-blur-lg border border-white/20 
          rounded-2xl p-4 shadow-xl transition-all duration-300
          ${className || ""} ${width} ${height} flex flex-col group-hover:border-blue-500`}
        style={{ overflow: "hidden" }}
      >
        {children}
      </div>
    </div>
  );
};

export default AnimatedCard;
