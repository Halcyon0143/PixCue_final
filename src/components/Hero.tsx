
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Fact {
  value: string;
  label: string;
}

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  
  // Facts and figures to display
  const facts: Fact[] = [
    { value: "98%", label: "Client Satisfaction Rate" },
    { value: "250+", label: "Projects Completed" },
    { value: "85%", label: "Increase in Engagement" },
    { value: "12M+", label: "Social Impressions" },
    { value: "40%", label: "Average ROI Increase" }
  ];

  // Click handler for dots
  const handleDotClick = (dotIndex: number) => {
    // Change to a random fact when dots are clicked
    const randomFactIndex = Math.floor(Math.random() * facts.length);
    setCurrentFactIndex(randomFactIndex);
  };

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Rotate through facts
  useEffect(() => {
    const factInterval = setInterval(() => {
      setCurrentFactIndex((prevIndex) => (prevIndex + 1) % facts.length);
    }, 3000); // Change every 3 seconds
    
    return () => clearInterval(factInterval);
  }, [facts.length]);
  
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
              <h6 className="text-primary-400 font-medium mb-2">SOCIAL MEDIA MANAGEMENT</h6>
              <h1 className="mb-6 font-light tracking-tight">
                Welcome to <span className="text-gradient font-medium">PixCue</span>
              </h1>
              <h2 className="text-2xl md:text-3xl mb-6 text-gray-300">
                Transform Your Social Media Presence
              </h2>
              
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl font-light">
                We create engaging, data-driven social media strategies that connect your brand with your audience and drive measurable results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-material-contained group rounded-full shadow-lg hover:shadow-xl transition-all" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                  <span className="mr-2">Our Services</span>
                  <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
                </Button>
                
                <Button variant="outline" className="btn-material-outlined rounded-full" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Get a Quote
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
              {/* Animated Background Elements */}
              <div className="absolute inset-0 rounded-full bg-primary-500/10 animate-pulse" style={{ animationDuration: '3s' }}></div>
              <div className="absolute h-full w-full rounded-full bg-secondary-500/5 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
              
              {/* Main Circle */}
              <div className="relative h-full w-full flex items-center justify-center">
                <div className="h-64 w-64 rounded-full elevation-3 bg-[#1E1E1E] p-4 flex items-center justify-center backdrop-blur-lg overflow-hidden">
                  {/* Animated content */}
                  <div className="text-center relative">
                    {facts.map((fact, index) => (
                      <div 
                        key={index}
                        className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-700"
                        style={{ 
                          opacity: currentFactIndex === index ? 1 : 0,
                          transform: `translateY(${currentFactIndex === index ? 0 : 20}px)`,
                          pointerEvents: 'none'
                        }}
                      >
                        <h3 className="text-3xl font-bold text-gradient mb-2">
                          {fact.value}
                        </h3>
                        <p className="text-gray-300">{fact.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Interactive Orbiting Dots */}
              <div className="absolute inset-0 rounded-full" style={{ animation: 'spin 20s linear infinite' }}>
                <div 
                  onClick={() => handleDotClick(0)}
                  className="absolute top-1/2 -translate-y-1/2 left-0 h-3 w-3 rounded-full bg-primary-400 hover:scale-150 hover:bg-primary-300 transition-all cursor-pointer"
                  title="Click me"
                ></div>
              </div>
              <div className="absolute inset-0 rounded-full" style={{ animation: 'spin 15s linear infinite reverse' }}>
                <div 
                  onClick={() => handleDotClick(1)}
                  className="absolute top-0 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-secondary-400 hover:scale-150 hover:bg-secondary-300 transition-all cursor-pointer"
                  title="Click me"
                ></div>
              </div>
              
              {/* Additional interactive dots with different orbits */}
              <div className="absolute inset-0 rounded-full" style={{ animation: 'spin 25s linear infinite' }}>
                <div 
                  onClick={() => handleDotClick(2)}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-primary-300 hover:scale-150 hover:bg-primary-200 transition-all cursor-pointer"
                  title="Click me"
                ></div>
              </div>
              <div className="absolute inset-0 rounded-full" style={{ animation: 'spin 18s linear infinite reverse' }}>
                <div 
                  onClick={() => handleDotClick(3)}
                  className="absolute top-1/2 -translate-y-1/2 right-0 h-3 w-3 rounded-full bg-secondary-300 hover:scale-150 hover:bg-secondary-200 transition-all cursor-pointer"
                  title="Click me"
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Expertise Areas */}
        <div 
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          style={{ 
            transform: `translateY(${scrollY * -0.03}px)`,
            transition: "transform 0.1s ease-out"
          }}
        >
          <div className="glass p-4 rounded-xl elevation-1 hover:elevation-2 transition-all">
            <p className="text-lg font-bold text-gradient">Strategy</p>
            <p className="text-sm text-gray-400">Content Planning & Analytics</p>
          </div>
          <div className="glass p-4 rounded-xl elevation-1 hover:elevation-2 transition-all">
            <p className="text-lg font-bold text-gradient">Creation</p>
            <p className="text-sm text-gray-400">Graphics, Videos & Copywriting</p>
          </div>
          <div className="glass p-4 rounded-xl elevation-1 hover:elevation-2 transition-all">
            <p className="text-lg font-bold text-gradient">Engagement</p>
            <p className="text-sm text-gray-400">Community Building & Growth</p>
          </div>
          <div className="glass p-4 rounded-xl elevation-1 hover:elevation-2 transition-all">
            <p className="text-lg font-bold text-gradient">Advertising</p>
            <p className="text-sm text-gray-400">Paid Campaigns & ROI Tracking</p>
          </div>
        </div>
      </div>
      
      {/* Keyframes for the spinning animation */}
      <style>
        {`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        `}
      </style>
    </section>
  );
};

export default Hero;
