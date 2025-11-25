"use client";

import React from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import Lottie from "lottie-react";
import rocket from "../../public/animations/rocket.json";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(199,89%,48%,0.1),transparent_50%)]" />

      <div className="container mx-auto text-center z-10 animate-fade-in">
        
        
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-sm font-medium">
            👋 Hoş geldiniz
          </span>
        
        <div className="relative w-30 h-30 mx-auto avatar-glow">
          <Image
            src="/myPhoto.png"
            alt="Görkem Avatar"
            fill
            className="rounded-full object-cover border-4 border-white"
          />
        </div>
        <Typewriter
          words={["Web Developer", "Frontend Developer", "React Developer"]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tigh select-none">
          Merhaba, Ben <span className="gradient-text">Görkem Karagöl </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto select-none">
          Modern ve kullanıcı dostu web uygulamaları geliştiriyorum.
          <br />
          Harika projeler için birlikte çalışalım!
        </p>
        <div className="h-24 w-24 flex justify-center mx-auto mb-8">
          <Lottie animationData={rocket} loop={true} />
        </div>
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Link href="#contact">
            <Button size="lg" className="hover-glow">
              <Mail className="mr-2 h-5 w-5" />
              İletişime Geç
            </Button>
          </Link>

          <Link href="#projects">
            <Button href="#contact" size="lg" variant="secondary">
              Projelerimi Gör
            </Button>
          </Link>
        </div>

        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/gorkemkaragl"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors hover-glow"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/gorkemkaragol"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors hover-glow"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:gorkemkaragol0@gmail.com"
            className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors hover-glow"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
