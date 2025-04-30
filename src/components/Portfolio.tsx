
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  category: string;
  image: string;
  description: string;
  outcomes: string[];
}

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Engaged Audience Growth Strategy",
      client: "FitActive",
      category: "Fitness Brand",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&q=80",
      description:
        "We helped FitActive increase their social media engagement by implementing a content strategy focused on authentic user stories and interactive challenges.",
      outcomes: ["45% Engagement Increase", "2.5M Reach", "15K New Followers", "28% Conversion Rate"],
    },
    {
      id: 2,
      title: "Brand Awareness Campaign",
      client: "Urban Eats",
      category: "Restaurant Chain",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&q=80",
      description:
        "Urban Eats wanted to establish a stronger presence in new markets. We created a campaign that highlighted their unique dining experience and community involvement.",
      outcomes: ["3.8M Views", "62% Brand Recall", "18% Foot Traffic Increase", "250K App Downloads"],
    },
    {
      id: 3,
      title: "Product Launch Campaign",
      client: "TechVision",
      category: "Tech Startup",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&q=80",
      description:
        "We helped TechVision launch their innovative AR glasses with a social media campaign that generated buzz and positioned them as industry pioneers.",
      outcomes: ["1.2M Pre-orders", "86% Positive Sentiment", "38 Media Mentions", "5.5M Campaign Reach"],
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

  const currentCaseStudy = caseStudies[activeIndex];

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="material-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h6 className="text-primary-500 font-medium mb-2">OUR PORTFOLIO</h6>
          <h2>Case Studies</h2>
          <p className="text-gray-600 mt-4">
            Explore how we've helped brands transform their social media presence and achieve exceptional results.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white elevation-1 hover:elevation-2 text-gray-700 hover:text-primary-500 transition-all"
              onClick={prevSlide}
            >
              <ChevronLeft size={24} />
            </Button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white elevation-1 hover:elevation-2 text-gray-700 hover:text-primary-500 transition-all"
              onClick={nextSlide}
            >
              <ChevronRight size={24} />
            </Button>
          </div>

          {/* Case Study Card */}
          <div className="material-card overflow-hidden">
            <div className="material-grid">
              <div className="col-span-4 md:col-span-5 lg:col-span-7">
                <div className="h-full">
                  <img
                    src={currentCaseStudy.image}
                    alt={currentCaseStudy.title}
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                </div>
              </div>
              <div className="col-span-4 md:col-span-3 lg:col-span-5 p-6 md:p-8">
                <div className="mb-2 flex items-center">
                  <span className="text-sm font-medium text-primary-500 mr-2">
                    {currentCaseStudy.client}
                  </span>
                  <span className="text-xs text-gray-500">
                    {currentCaseStudy.category}
                  </span>
                </div>
                <h3 className="mb-4">{currentCaseStudy.title}</h3>
                <p className="text-gray-600 mb-6">
                  {currentCaseStudy.description}
                </p>

                <h6 className="text-sm font-medium mb-3">Key Outcomes:</h6>
                <div className="flex flex-wrap gap-2 mb-8">
                  {currentCaseStudy.outcomes.map((outcome, index) => (
                    <span
                      key={index}
                      className="text-xs py-1 px-3 rounded-full bg-primary-50 text-primary-600"
                    >
                      {outcome}
                    </span>
                  ))}
                </div>

                <Button className="btn-material-contained">
                  View Full Case Study
                </Button>
              </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex
                    ? "bg-primary-500"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
