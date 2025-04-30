
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  position: string;
  company: string;
  image: string;
}

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        "PixCue transformed our social media strategy. Their team understands our brand voice perfectly and has helped us connect with our audience in a more authentic way. The results have exceeded our expectations.",
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "Urban Lifestyle Co.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&q=80&w=150&h=150&fit=crop",
    },
    {
      id: 2,
      quote:
        "Working with PixCue has been a game-changer for our brand. Their strategic approach to content creation and community management has significantly increased our engagement and conversion rates.",
      name: "Mark Thompson",
      position: "CEO",
      company: "Innovate Tech",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&q=80&w=150&h=150&fit=crop",
    },
    {
      id: 3,
      quote:
        "The team at PixCue doesn't just create beautiful content—they create content that drives results. Their data-driven approach has helped us refine our targeting and messaging to reach the right audience.",
      name: "Laura Chen",
      position: "Brand Manager",
      company: "Glow Cosmetics",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&q=80&w=150&h=150&fit=crop",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-24">
      <div className="material-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h6 className="text-primary-500 font-medium mb-2">TESTIMONIALS</h6>
          <h2>What Our Clients Say</h2>
          <p className="text-gray-600 mt-4">
            Don't just take our word for it—here's what the brands we've worked with have to say about our services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="material-card p-8 md:p-12 relative">
            <div className="absolute top-6 left-6 text-primary-200">
              <Quote size={48} />
            </div>

            <div className="relative">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={testimonial.id}
                  className={`transition-opacity duration-500 ${
                    idx === activeIndex ? "block" : "hidden"
                  }`}
                >
                  <blockquote className="text-lg md:text-xl text-gray-700 mb-8 pl-8">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="flex items-center">
                    <div className="mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              className="btn-material-outlined"
              onClick={prevTestimonial}
            >
              Previous
            </Button>
            <Button
              className="btn-material-contained"
              onClick={nextTestimonial}
            >
              Next Testimonial
            </Button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
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

export default Testimonials;
