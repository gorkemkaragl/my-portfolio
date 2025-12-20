"use client";

import { Hero, About, Skills, Projects, Contact } from "@/components/sections";
import React, { useEffect, useState } from "react";
import Footer from "@/components/layout/Footer";
import Lottie from "lottie-react";
import loadingCat from "../../public/animations/loading-cat.json";
import ScrollToTop from "@/components/common/ScrollToTop";
import { SettingsSidebar } from "@/components/layout/SettingsSidebar";
import { useLocale } from "../../context/LocaleContext";

const HomePage = () => {
  const { dict,lang } = useLocale();
  console.log(lang)

  /*const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="h-96 w-96">
          <Lottie animationData={loadingCat} loop />
        </div>
      </div>
    );
  }*/

  return (
    <div className="min-h-screen">
      <SettingsSidebar dict={dict} />
      <Hero dict={dict} />
      <About dict={dict} />
      <Skills dict={dict} />
      <Projects dict={dict} />
      <Contact dict={dict} />

      <Footer dict={dict} />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;
