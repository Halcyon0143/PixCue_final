
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "10 Social Media Trends That Will Dominate 2025",
    excerpt: "Discover the emerging social media trends that will shape the digital landscape in the coming year.",
    date: "May 1, 2025",
    category: "Social Media",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    title: "How to Create Engaging Content for TikTok",
    excerpt: "Learn the secrets to creating viral content that resonates with the TikTok audience and drives engagement.",
    date: "April 28, 2025",
    category: "Content Creation",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    title: "Building Your Brand's Social Media Strategy",
    excerpt: "A comprehensive guide to developing a social media strategy that aligns with your brand goals.",
    date: "April 24, 2025",
    category: "Strategy",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
  }
];

const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="material-card h-full flex flex-col overflow-hidden transition-transform duration-300"
      style={{ transform: isHovered ? 'translateY(-8px)' : 'translateY(0)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <span className="px-2 py-1 bg-primary-500/90 text-white text-xs rounded-full">{post.category}</span>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center text-gray-400 text-xs mb-3">
          <Calendar className="h-3 w-3 mr-1" />
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <BookOpen className="h-3 w-3 mr-1" />
          <span>{post.readTime}</span>
        </div>
        
        <h5 className="font-medium text-lg mb-3">{post.title}</h5>
        <p className="text-gray-400 text-sm flex-grow mb-4">{post.excerpt}</p>
        
        <Link to={`/blog/${post.id}`} className="self-start">
          <Button variant="link" className="text-primary-400 hover:text-primary-300 p-0 flex items-center gap-2 group">
            Read More
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <section id="blog" className="py-24">
      <div className="material-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h6 className="text-primary-500 font-medium mb-2">OUR BLOG</h6>
          <h2 className="font-light tracking-tight">Latest <span className="font-medium">Articles</span></h2>
          <p className="text-gray-400 mt-4">
            Stay updated with the latest trends, tips, and insights in social media marketing and content creation.
          </p>
        </div>

        <div className="material-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-span-4 mb-8">
              <BlogCard post={post} />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/blog">
            <Button className="btn-material-contained rounded-full">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
