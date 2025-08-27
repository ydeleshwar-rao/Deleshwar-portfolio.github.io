import { useState, useEffect } from "react";


const ExcitingLoader: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);
  const [loadingText, setLoadingText] = useState<string>("Initializing...");

  const loadingSteps = [
    "Initializing...",
    "Loading Assets...",
    "Preparing Interface...",
    "Almost Ready...",
    "Welcome!"
  ];

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        const increment = Math.random() * 15 + 5;
        return Math.min(prev + increment, 100);
      });
    }, 50);

    // Text updates
    const textInterval = setInterval(() => {
      setProgress((currentProgress) => {
        if (currentProgress < 25) setLoadingText(loadingSteps[0]);
        else if (currentProgress < 50) setLoadingText(loadingSteps[1]);
        else if (currentProgress < 75) setLoadingText(loadingSteps[2]);
        else if (currentProgress < 95) setLoadingText(loadingSteps[3]);
        else setLoadingText(loadingSteps[4]);
        return currentProgress;
      });
    }, 50);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  // Inject CSS animations dynamically
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg);} 50% { transform: translateY(-20px) rotate(180deg);} }
      @keyframes pulse { 0%, 100% { transform: scale(1);} 50% { transform: scale(1.1);} }
      @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(52, 152, 219, 0.5);} 50% { box-shadow: 0 0 40px rgba(52, 152, 219, 1);} }
      @keyframes rainbow { 0% { background-position: 0% 50%;} 50% { background-position: 100% 50%;} 100% { background-position: 0% 50%;} }
      @keyframes slideIn { 0% { transform: translateX(-100%); opacity: 0;} 100% { transform: translateX(0); opacity: 1;} }
      @keyframes bounce {0%, 20%, 53%, 80%, 100% {transform: translate3d(0,0,0);} 40%, 43% {transform: translate3d(0, -30px, 0);} 70% {transform: translate3d(0, -15px, 0);} 90% {transform: translate3d(0, -4px, 0);} }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#0d0d23",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        overflow: "hidden",
      }}
    >
        {/* Text */}
        <h1
          style={{
            color: "white",
            fontSize: "28px",
            margin: "20px 0",
            fontWeight: "600",
            animation: "bounce 2s infinite",
          }}
        >
          {loadingText}
        </h1>

        {/* Progress Bar */}
        <div
          style={{
            width: "300px",
            height: "8px",
            backgroundColor: "rgba(95, 92, 197, 0.03)",
            borderRadius: "10px",
            margin: "30px 0",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background:
                "#e5e3efff",
              borderRadius: "10px",
              transition: "width 0.3s ease",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "linear-gradient(90deg, transparent, rgba(13, 12, 59, 0.4), transparent)",
                animation: "rainbow 1.5s linear infinite",
              }}
            />
          </div>
        </div>

        {/* Progress % */}
        <div
          style={{
            color: "white",
            fontSize: "18px",
            fontWeight: "500",
            marginBottom: "20px",
          }}
        >
          {Math.round(progress)}%
        </div>

        <p
          style={{
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: "14px",
            marginTop: "20px",
            fontStyle: "italic",
          }}
        >
           Creating an amazing experience for you...
        </p>
    </div>
  );
};

export default ExcitingLoader;
