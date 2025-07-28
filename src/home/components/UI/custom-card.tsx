import React, { ReactNode, useRef } from "react";

type CustomCardProps = {
  children: ReactNode;
  className?: string;
};

const CustomCard: React.FC<CustomCardProps> = ({ children, className}) => {
  const cardRef = useRef<HTMLDivElement>(null);
return(
    <div 
    ref={cardRef}
     className={`
        rounded-2xl shadow-xl transition-all duration-300
          ${className || ""}
          group-hover:border-blue-500

        `}
    >
        {children}
    </div>
)

}
export default CustomCard;