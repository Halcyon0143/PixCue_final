
import { useState, useEffect } from "react";
import { Check } from "lucide-react";

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden">
      <div className="material-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h6 className="text-primary-500 font-medium mb-2">ABOUT PIXCUE</h6>
          <h2 className="font-light tracking-tight">Why Choose <span className="font-medium">Our Agency?</span></h2>
          <p className="text-gray-600 mt-4">
            We're more than just a social media agency. We're your strategic partner in creating meaningful connections with your audience.
          </p>
        </div>
        
        <div className="material-grid">
          <div className="col-span-4 md:col-span-4 lg:col-span-6 flex items-center">
            <div 
              className="relative"
              style={{ 
                transform: `translateY(${Math.max(0, (scrollY - 600) * 0.08)}px)`,
                transition: "transform 0.1s ease-out"
              }}
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary-100 rounded-xl"></div>
              <div className="relative z-10 bg-white/90 rounded-xl p-6 elevation-2 backdrop-blur-sm">
                <h3 className="mb-6 font-light tracking-tight">Our <span className="font-medium">Core Values</span></h3>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "Authenticity",
                      description: "We believe in creating genuine connections between brands and audiences."
                    },
                    {
                      title: "Innovation",
                      description: "We stay ahead of trends to keep your social media strategy fresh and effective."
                    },
                    {
                      title: "Results-Driven",
                      description: "We focus on metrics that matter - engagement, conversion, and ROI."
                    },
                    {
                      title: "Partnership",
                      description: "We work as an extension of your team, not just as an external agency."
                    }
                  ].map((value, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 mr-3">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-500">
                          <Check size={16} />
                        </div>
                      </div>
                      <div>
                        <h6 className="font-medium">{value.title}</h6>
                        <p className="text-gray-600 text-sm">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-span-4 md:col-span-4 lg:col-span-6 mt-12 lg:mt-0">
            <div 
              className="space-y-6"
              style={{ 
                transform: `translateY(${Math.max(0, (scrollY - 600) * 0.04)}px)`,
                transition: "transform 0.1s ease-out"
              }}
            >
              <h3 className="font-light tracking-tight">Your Brand's <span className="font-medium">Social Media Partner</span></h3>
              <p className="text-gray-600">
                At PixCue, we understand that social media is more than just posting content—it's about 
                creating a digital experience that resonates with your audience and drives meaningful business results.
              </p>
              <p className="text-gray-600">
                Our team of experts combines creative thinking with data-driven strategies to help brands 
                cut through the noise and make a lasting impression in today's crowded digital landscape.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="bg-white/80 rounded-xl p-4 elevation-1 hover:elevation-2 transition-all backdrop-blur-sm">
                  <h5 className="text-lg font-medium mb-2">10+ Years</h5>
                  <p className="text-gray-600 text-sm">Industry experience across various sectors</p>
                </div>
                <div className="bg-white/80 rounded-xl p-4 elevation-1 hover:elevation-2 transition-all backdrop-blur-sm">
                  <h5 className="text-lg font-medium mb-2">35+ Experts</h5>
                  <p className="text-gray-600 text-sm">Specialists in content, strategy, and analytics</p>
                </div>
                <div className="bg-white/80 rounded-xl p-4 elevation-1 hover:elevation-2 transition-all backdrop-blur-sm">
                  <h5 className="text-lg font-medium mb-2">24/7 Support</h5>
                  <p className="text-gray-600 text-sm">Always available to address your concerns</p>
                </div>
                <div className="bg-white/80 rounded-xl p-4 elevation-1 hover:elevation-2 transition-all backdrop-blur-sm">
                  <h5 className="text-lg font-medium mb-2">200+ Clients</h5>
                  <p className="text-gray-600 text-sm">From startups to Fortune 500 companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
