
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors: {[key: string]: string} = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Here you would typically make an API call to your serverless function
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        duration: 5000,
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#121212]">
      <div className="material-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h6 className="text-primary-400 font-medium mb-2">GET IN TOUCH</h6>
          <h2 className="text-gradient">Let's Work Together</h2>
          <p className="text-gray-400 mt-4">
            Have a project in mind or want to discuss potential opportunities? Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="material-grid">
          <div className="col-span-4 md:col-span-5 lg:col-span-4">
            <div className="glass p-6 md:p-8 rounded elevation-2 h-full">
              <h4 className="text-gradient mb-6">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400">
                      <Mail size={20} />
                    </div>
                  </div>
                  <div>
                    <h6 className="font-medium mb-1">Email</h6>
                    <p className="text-gray-400">hello@janedoe.com</p>
                    <p className="text-gray-400">contact@janedoe.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400">
                      <Phone size={20} />
                    </div>
                  </div>
                  <div>
                    <h6 className="font-medium mb-1">Phone</h6>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400">
                      <MapPin size={20} />
                    </div>
                  </div>
                  <div>
                    <h6 className="font-medium mb-1">Location</h6>
                    <p className="text-gray-400">San Francisco, CA</p>
                    <p className="text-gray-400">Available for remote work</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h6 className="font-medium mb-3">Availability</h6>
                <p className="text-gray-400">Currently accepting new projects starting from June 2024</p>
              </div>
            </div>
          </div>
          
          <div className="col-span-4 md:col-span-3 lg:col-span-8 mt-8 md:mt-0">
            <div className="glass p-6 md:p-8 rounded elevation-2">
              <h4 className="text-gradient mb-6">Send Me a Message</h4>
              
              <form onSubmit={handleSubmit}>
                <div className="material-grid">
                  <div className="col-span-4 lg:col-span-6">
                    <div className="mb-6">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`material-input ${errors.name ? 'border-red-500' : 'border-gray-600'}`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                  </div>
                  
                  <div className="col-span-4 lg:col-span-6">
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`material-input ${errors.email ? 'border-red-500' : 'border-gray-600'}`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div className="col-span-8 lg:col-span-12">
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="material-input border-gray-600"
                        placeholder="Project Inquiry"
                      />
                    </div>
                  </div>
                  
                  <div className="col-span-8 lg:col-span-12">
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                        Message*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`material-input resize-none ${errors.message ? 'border-red-500' : 'border-gray-600'}`}
                        placeholder="Tell me about your project or job opportunity..."
                      ></textarea>
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex items-center">
                  <Button 
                    type="submit" 
                    className="btn-material-contained flex items-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send size={18} />
                  </Button>
                  
                  {success && (
                    <span className="ml-4 text-green-400 animate-fade-in">
                      Message sent successfully!
                    </span>
                  )}
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
