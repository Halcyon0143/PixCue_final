
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 z-0"></div>
      
      {/* Parallax abstract shapes */}
      <div 
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary-500/10 blur-3xl"
        style={{ 
          transform: `translateY(${scrollY * 0.1}px)`,
          transition: "transform 0.1s ease-out"
        }}
      ></div>
      <div 
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-secondary-500/10 blur-3xl"
        style={{ 
          transform: `translateY(${scrollY * -0.05}px)`,
          transition: "transform 0.1s ease-out"
        }}
      ></div>
      
      <div className="material-container relative z-10">
        <div className="material-grid">
          <div className="col-span-4 md:col-span-8 lg:col-span-8">
            <div className="animate-fade-in">
              <h6 className="text-primary-400 font-medium mb-2">PORTFOLIO</h6>
              <h1 className="mb-6 font-light tracking-tight">
                Hi, I'm <span className="text-gradient font-medium">Jane Doe</span>
              </h1>
              <h2 className="text-2xl md:text-3xl mb-6 text-gray-300">
                UX Designer & Full Stack Developer
              </h2>
              
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl font-light">
                I create beautiful, functional, and accessible digital experiences that solve real-world problems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-material-contained group rounded-full shadow-lg hover:shadow-xl transition-all" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                  <span className="mr-2">View My Work</span>
                  <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
                </Button>
                
                <Button variant="outline" className="btn-material-outlined rounded-full" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
          
          <div className="col-span-4 md:col-span-8 lg:col-span-4 hidden lg:flex items-center justify-center">
            <div 
              className="relative h-80 w-80 animate-scale-in"
              style={{ 
                transform: `translateY(${scrollY * -0.08}px)`,
                transition: "transform 0.1s ease-out"
              }}
            >
              <div className="absolute inset-0 rounded-full bg-primary-500/10 animate-pulse" style={{ animationDuration: '3s' }}></div>
              <div className="relative h-full w-full flex items-center justify-center">
                <div className="h-64 w-64 rounded-full elevation-3 bg-[#1E1E1E] p-4 flex items-center justify-center backdrop-blur-lg">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-gradient">
                      5+ Years
                    </h3>
                    <p className="text-gray-300">Professional Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills */}
        <div 
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          style={{ 
            transform: `translateY(${scrollY * -0.03}px)`,
            transition: "transform 0.1s ease-out"
          }}
        >
          <div className="glass p-4 rounded-xl elevation-1 hover:elevation-2 transition-all">
            <p className="text-lg font-bold text-gradient">Frontend</p>
            <p className="text-sm text-gray-400">React, NextJS, Tailwind</p>
          </div>
          <div className="glass p-4 rounded-xl elevation-1 hover:elevation-2 transition-all">
            <p className="text-lg font-bold text-gradient">Backend</p>
            <p className="text-sm text-gray-400">Node.js, Express, MongoDB</p>
          </div>
          <div className="glass p-4 rounded-xl elevation-1 hover:elevation-2 transition-all">
            <p className="text-lg font-bold text-gradient">Design</p>
            <p className="text-sm text-gray-400">Figma, Adobe XD, Sketch</p>
          </div>
          <div className="glass p-4 rounded-xl elevation-1 hover:elevation-2 transition-all">
            <p className="text-lg font-bold text-gradient">DevOps</p>
            <p className="text-sm text-gray-400">CI/CD, AWS, Vercel</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
