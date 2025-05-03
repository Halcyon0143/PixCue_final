
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  category: string;
  image: string;
  summary: string;
  description: string;
  role: string;
  technologies: string[];
  challenges: string[];
  solutions: string[];
  outcomes: string[];
}

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      client: "FashionCo",
      category: "UX/UI Design & Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&q=80",
      summary: "Complete redesign and development of a fashion e-commerce platform focusing on mobile optimization and conversion rate optimization.",
      description: "FashionCo wanted to revamp their outdated e-commerce platform to improve user experience and boost sales. The goal was to create a modern, mobile-first shopping experience that would appeal to their target demographic while improving key performance metrics.",
      role: "Lead Designer & Frontend Developer",
      technologies: ["React", "Next.js", "Tailwind CSS", "Stripe", "Contentful"],
      challenges: [
        "3.5 second load time on mobile devices",
        "15% cart abandonment rate",
        "Poor mobile navigation experience",
        "Complex product filtering system"
      ],
      solutions: [
        "Implemented code splitting and image optimization",
        "Redesigned checkout flow to reduce steps",
        "Created intuitive mobile navigation pattern",
        "Built faceted search with instant filtering"
      ],
      outcomes: [
        "45% Faster Load Time",
        "22% Conversion Rate Increase",
        "37% Mobile Usage Growth",
        "53% Reduction in Support Tickets"
      ],
    },
    {
      id: 2,
      title: "Financial Dashboard Application",
      client: "InvestSmart",
      category: "Data Visualization & Web App",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&q=80",
      summary: "A comprehensive dashboard for financial analysts with real-time data visualization, alerts, and reporting capabilities.",
      description: "InvestSmart needed a robust financial dashboard to help their clients monitor investments, track performance, and make data-driven decisions. The solution needed to handle complex data visualization while maintaining a clear, intuitive interface.",
      role: "Full Stack Developer & UX Designer",
      technologies: ["React", "TypeScript", "D3.js", "Node.js", "MongoDB"],
      challenges: [
        "Rendering performance with large datasets",
        "Complex data relationships visualization",
        "Real-time updates without performance impact",
        "Accessible interface for financial data"
      ],
      solutions: [
        "Implemented data virtualization and chunking",
        "Created custom D3.js visualizations",
        "Built WebSocket system for efficient updates",
        "Designed with WCAG AA compliance in mind"
      ],
      outcomes: [
        "87% User Satisfaction Rating",
        "2M+ Data Points Processed Daily",
        "35% Increase in Client Retention",
        "68% Reduction in Analysis Time"
      ],
    },
    {
      id: 3,
      title: "Healthcare Patient Portal",
      client: "MedConnect",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&q=80",
      summary: "A secure, accessible patient portal allowing users to schedule appointments, access medical records, and communicate with healthcare providers.",
      description: "MedConnect needed to modernize patient engagement by providing a digital portal that would streamline healthcare management while meeting strict security and accessibility requirements.",
      role: "Technical Lead & Accessibility Specialist",
      technologies: ["React", "Express.js", "PostgreSQL", "JWT", "FHIR API"],
      challenges: [
        "HIPAA compliance requirements",
        "Integration with legacy systems",
        "Accessibility for diverse user groups",
        "Complex appointment scheduling logic"
      ],
      solutions: [
        "Implemented end-to-end encryption",
        "Built custom API adapters for legacy systems",
        "Achieved WCAG 2.1 AAA compliance",
        "Created intelligent scheduling algorithm"
      ],
      outcomes: [
        "42% Reduction in Scheduling Calls",
        "98.7% System Uptime",
        "4.8/5 Patient Satisfaction Score",
        "65% Increase in Portal Usage"
      ],
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1
    );
  };

  const openCaseStudy = (caseStudy: CaseStudy) => {
    setSelectedCaseStudy(caseStudy);
    setIsModalOpen(true);
  };

  return (
    <section id="portfolio" className="py-24 bg-[#121212]">
      <div className="material-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h6 className="text-primary-400 font-medium mb-2">MY WORK</h6>
          <h2 className="font-light tracking-tight">Case <span className="text-gradient font-medium">Studies</span></h2>
          <p className="text-gray-400 mt-4">
            Explore my recent projects and discover how I approach design and development challenges.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="material-grid">
          {caseStudies.map((study, index) => (
            <div 
              key={study.id} 
              className="col-span-4 mb-8"
              style={{ 
                transform: `translateY(${Math.max(0, (scrollY - 1000) * 0.03 - (index * 20))}px)`,
                transition: "transform 0.2s ease-out",
                opacity: Math.min(1, (scrollY - 100 * index) / 600),
              }}
            >
              <Card className="h-full flex flex-col hover:translate-y-[-4px] transition-all">
                <div className="h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <span>{study.client}</span>
                    <span className="mx-2">•</span>
                    <span>{study.category}</span>
                  </div>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {study.summary}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                  <Button 
                    onClick={() => openCaseStudy(study)} 
                    className="btn-material-text group flex items-center gap-2 p-0"
                  >
                    View Full Case Study
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        {selectedCaseStudy && (
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-[#1E1E1E] text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedCaseStudy.title}</DialogTitle>
              <DialogDescription className="text-gray-400">
                {selectedCaseStudy.client} • {selectedCaseStudy.category}
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6">
              {/* Case Study Image */}
              <div className="rounded-md overflow-hidden h-64 md:h-80">
                <img
                  src={selectedCaseStudy.image}
                  alt={selectedCaseStudy.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Project Description */}
              <div>
                <h3 className="text-xl font-medium mb-2">Project Overview</h3>
                <p className="text-gray-300">{selectedCaseStudy.description}</p>
              </div>
              
              {/* Role & Technologies */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">My Role</h3>
                  <p className="text-gray-300">{selectedCaseStudy.role}</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCaseStudy.technologies.map((tech, index) => (
                      <span key={index} className="bg-primary-500/20 text-primary-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Challenges & Solutions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Challenges</h3>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    {selectedCaseStudy.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Solutions</h3>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    {selectedCaseStudy.solutions.map((solution, index) => (
                      <li key={index}>{solution}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Outcomes */}
              <div>
                <h3 className="text-xl font-medium mb-2">Key Outcomes</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {selectedCaseStudy.outcomes.map((outcome, index) => (
                    <div key={index} className="glass p-3 rounded-lg text-center">
                      <p className="text-primary-300 font-medium">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Portfolio;
