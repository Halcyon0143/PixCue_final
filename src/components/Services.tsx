
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Rocket, Award, Image, Globe, Star } from "lucide-react";

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  index 
}: { 
  icon: any, 
  title: string, 
  description: string, 
  index: number 
}) => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div 
      className="material-card p-6 flex flex-col h-full hover:translate-y-[-4px] transition-all rounded-xl backdrop-blur-sm bg-[#1E1E1E]/90 border border-white/10"
      style={{ 
        transform: `translateY(${Math.max(0, scrollY * 0.02 - (index * 20))}px)`,
        transition: "transform 0.1s ease-out",
        opacity: Math.min(1, (scrollY - 100 * index) / 400),
      }}
    >
      <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 mb-5">
        <Icon size={24} />
      </div>
      <h5 className="font-medium mb-3 text-white">{title}</h5>
      <p className="text-gray-400 text-sm flex-grow mb-4">{description}</p>
      <Button variant="outline" className="btn-material-text self-start p-0 flex items-center gap-2 group">
        Learn More
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Social Media Management",
      description: "Comprehensive management of your social accounts, including content creation, scheduling, and community engagement."
    },
    {
      icon: Image,
      title: "Content Creation",
      description: "High-quality visual content creation tailored to each platform, including photography, graphics, and video production."
    },
    {
      icon: Rocket,
      title: "Influencer Marketing",
      description: "Strategic partnerships with relevant influencers to extend your reach and build credibility with new audiences."
    },
    {
      icon: Star,
      title: "Brand Strategy",
      description: "Development of cohesive social media strategies aligned with your brand values and business objectives."
    },
    {
      icon: Award,
      title: "Analytics & Reporting",
      description: "Comprehensive performance analysis with actionable insights to continuously optimize your social media presence."
    },
    {
      icon: Briefcase,
      title: "Paid Social Advertising",
      description: "Strategic ad campaigns that target your ideal customers and maximize your return on ad spend."
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="material-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h6 className="text-primary-500 font-medium mb-2">OUR SERVICES</h6>
          <h2 className="font-light tracking-tight">What We Do <span className="font-medium">Best</span></h2>
          <p className="text-gray-400 mt-4">
            We offer a comprehensive range of services designed to elevate your brand's social media presence and drive meaningful engagement.
          </p>
        </div>

        <div className="material-grid">
          {services.map((service, index) => (
            <div key={index} className="col-span-4 mb-8">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button className="btn-material-contained rounded-full">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
