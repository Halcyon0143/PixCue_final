
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: {[key: string]: string} = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="material-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h6 className="text-primary-500 font-medium mb-2">GET IN TOUCH</h6>
          <h2>Let's Discuss Your Project</h2>
          <p className="text-gray-600 mt-4">
            Ready to elevate your social media presence? Fill out the form below and one of our experts will get back to you shortly.
          </p>
        </div>

        <div className="material-grid">
          <div className="col-span-4 md:col-span-5 lg:col-span-4">
            <div className="bg-white p-6 md:p-8 rounded elevation-2 h-full">
              <h4 className="mb-6">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-500">
                      <Mail size={20} />
                    </div>
                  </div>
                  <div>
                    <h6 className="font-medium mb-1">Email</h6>
                    <p className="text-gray-600">hello@pixcue.agency</p>
                    <p className="text-gray-600">support@pixcue.agency</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-500">
                      <Phone size={20} />
                    </div>
                  </div>
                  <div>
                    <h6 className="font-medium mb-1">Phone</h6>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 765-4321</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-500">
                      <MapPin size={20} />
                    </div>
                  </div>
                  <div>
                    <h6 className="font-medium mb-1">Office</h6>
                    <p className="text-gray-600">123 Social Media Ave</p>
                    <p className="text-gray-600">San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h6 className="font-medium mb-3">Working Hours</h6>
                <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                <p className="text-gray-600">Saturday: 10am - 4pm</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div className="col-span-4 md:col-span-3 lg:col-span-8 mt-8 md:mt-0">
            <div className="bg-white p-6 md:p-8 rounded elevation-2">
              <h4 className="mb-6">Send Us a Message</h4>
              
              <form onSubmit={handleSubmit}>
                <div className="material-grid">
                  <div className="col-span-4">
                    <div className="mb-6">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`material-input ${errors.name ? 'border-red-500' : ''}`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                  </div>
                  
                  <div className="col-span-4">
                    <div className="mb-6">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="material-input"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                  
                  <div className="col-span-4">
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`material-input ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div className="col-span-4">
                    <div className="mb-6">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="material-input"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div className="col-span-8">
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`material-input resize-none ${errors.message ? 'border-red-500' : ''}`}
                        placeholder="Tell us about your project..."
                      ></textarea>
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button 
                    type="submit" 
                    className="btn-material-contained flex items-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send size={18} />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
