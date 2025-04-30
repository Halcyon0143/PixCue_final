
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-primary-500/5 to-secondary-500/10 z-0"></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary-200/20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-secondary-200/20 blur-3xl"></div>
      
      <div className="material-container relative z-10">
        <div className="material-grid">
          <div className="col-span-4 md:col-span-6 lg:col-span-7">
            <div className="animate-fade-in">
              <h1 className="mb-6">
                <span className="text-primary-500">Elevate</span> Your Social Media Presence
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
                PixCue helps brands create authentic connections through strategic social media management and premium content creation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-material-contained flex items-center gap-2 group">
                  Get Started 
                  <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
                </Button>
                
                <Button variant="outline" className="btn-material-outlined">
                  Our Services
                </Button>
              </div>
            </div>
          </div>
          
          <div className="col-span-4 md:col-span-6 lg:col-span-5 hidden md:flex items-center justify-center">
            <div className="relative h-80 w-80 animate-scale-in">
              <div className="absolute inset-0 rounded-full bg-primary-500/10 animate-pulse" style={{ animationDuration: '3s' }}></div>
              <div className="relative h-full w-full flex items-center justify-center">
                <div className="h-64 w-64 rounded-full elevation-3 bg-white p-4 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                      45%
                    </h3>
                    <p className="text-gray-700">Average Engagement Increase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded elevation-1 hover:elevation-2 transition-shadow">
            <p className="text-2xl font-bold text-primary-500">200+</p>
            <p className="text-sm text-gray-600">Brands Managed</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded elevation-1 hover:elevation-2 transition-shadow">
            <p className="text-2xl font-bold text-primary-500">45%</p>
            <p className="text-sm text-gray-600">Engagement Growth</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded elevation-1 hover:elevation-2 transition-shadow">
            <p className="text-2xl font-bold text-primary-500">10M+</p>
            <p className="text-sm text-gray-600">Audience Reach</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded elevation-1 hover:elevation-2 transition-shadow">
            <p className="text-2xl font-bold text-primary-500">24/7</p>
            <p className="text-sm text-gray-600">Support Team</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
