import React, { ReactNode } from "react";
import Header from "./components/header";
import Footer from "./components/footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
                    typeof window !== "undefined" && window.scrollY > 10
                        ? "bg-black bg-opacity-90"
                        : "bg-transparent"
                }`}
                id="main-header"
            >
                <Header />
            </header>
            <main className="pt-16 bg-black min-h-screen transition-colors duration-300">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
