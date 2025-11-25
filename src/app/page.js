"use client";

import React, { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Lottie from "lottie-react";
import loadingCat from "../../public/animations/loading-cat.json";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2 saniyelik sahte loading süresi
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        // LOADING SCREEN
        <div className="flex items-center justify-center h-screen ">
          <div className="animate-pulse h-96 w-96">
            <Lottie animationData={loadingCat} loop={true} />
          </div>
        </div>
      ) : (
        // ASIL SAYFA
        <div className="min-h-screen">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default HomePage;
