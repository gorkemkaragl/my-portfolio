"use client";
import {Hero,About,Skills,Projects,Contact} from "@/components/sections"
import React, { useEffect, useState } from "react";
import Footer from "@/components/layout/Footer";
import Lottie from "lottie-react";
import loadingCat from "../../public/animations/loading-cat.json";
import ScrollToTop from "@/components/common/ScrollToTop";
import { SettingsSidebar } from "@/components/layout/SettingsSidebar";

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
          <SettingsSidebar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </>
  );
};

export default HomePage;
