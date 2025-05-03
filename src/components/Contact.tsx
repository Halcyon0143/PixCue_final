
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Define form schema with Zod
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize react-hook-form with zod validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Submit to Email.js service
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "YOUR_SERVICE_ID", // You'll need to replace this with actual ID
          template_id: "YOUR_TEMPLATE_ID", // You'll need to replace this with actual ID
          user_id: "YOUR_PUBLIC_KEY", // You'll need to replace this with actual public key
          template_params: {
            from_name: data.name,
            from_email: data.email,
            subject: data.subject || "PixCue Contact Form Submission",
            message: data.message,
            to_email: "your-email@gmail.com", // Replace with your Gmail address
          },
        }),
      });
      
      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. We'll get back to you soon.",
          duration: 5000,
        });
        
        // Reset form
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Contact form error:", error);
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
            Have a project in mind or want to discuss potential social media management opportunities? Fill out the form below and we'll get back to you as soon as possible.
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
                    <p className="text-gray-400">hello@pixcue.com</p>
                    <p className="text-gray-400">contact@pixcue.com</p>
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
                    <p className="text-gray-400">Available for clients worldwide</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h6 className="font-medium mb-3">Availability</h6>
                <p className="text-gray-400">Currently accepting new clients for social media management</p>
              </div>
            </div>
          </div>
          
          <div className="col-span-4 md:col-span-3 lg:col-span-8 mt-8 md:mt-0">
            <div className="glass p-6 md:p-8 rounded elevation-2">
              <h4 className="text-gradient mb-6">Send Me a Message</h4>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="material-grid">
                    <div className="col-span-4 lg:col-span-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300">Full Name*</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="John Doe" 
                                className="material-input border-gray-600" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="text-red-500 text-xs mt-1" />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="col-span-4 lg:col-span-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300">Email Address*</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="john@example.com" 
                                className="material-input border-gray-600" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="text-red-500 text-xs mt-1" />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="col-span-8 lg:col-span-12">
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300">Subject</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Social Media Management Inquiry" 
                                className="material-input border-gray-600" 
                                {...field} 
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="col-span-8 lg:col-span-12">
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300">Message*</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your project or social media needs..." 
                                className="material-input resize-none border-gray-600" 
                                rows={5} 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="text-red-500 text-xs mt-1" />
                          </FormItem>
                        )}
                      />
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
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
