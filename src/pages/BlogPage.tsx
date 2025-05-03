
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, BookOpen, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// Sample blog posts data (in a real application, this would come from an API/database)
const allBlogPosts = [
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
  },
  {
    id: 4,
    title: "The Power of Influencer Marketing",
    excerpt: "Explore how influencer collaborations can amplify your brand's reach and credibility in the digital space.",
    date: "April 20, 2025",
    category: "Influencer Marketing",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 5,
    title: "Measuring Social Media ROI: A Comprehensive Guide",
    excerpt: "Learn how to effectively measure and analyze the return on investment for your social media campaigns.",
    date: "April 15, 2025",
    category: "Analytics",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 6,
    title: "Video Content: The Future of Social Media Marketing",
    excerpt: "Discover why video is dominating social platforms and how to incorporate it into your marketing strategy.",
    date: "April 10, 2025",
    category: "Video Marketing",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=1000"
  }
];

// Categories for filtering
const categories = [
  "All Categories", 
  "Social Media", 
  "Content Creation", 
  "Strategy", 
  "Influencer Marketing",
  "Analytics",
  "Video Marketing"
];

const BlogCard = ({ post }: { post: typeof allBlogPosts[0] }) => {
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
          <Button variant="outline" className="btn-material-text p-0 flex items-center gap-2 group">
            Read More
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  
  // Filter posts based on search term and category
  const filteredPosts = allBlogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Blog Hero Section */}
      <section className="py-20 bg-[#121212]">
        <div className="material-container">
          <div className="text-center max-w-3xl mx-auto">
            <h6 className="text-primary-500 font-medium mb-2">OUR BLOG</h6>
            <h1 className="font-light tracking-tight mb-4">Latest <span className="font-medium">Insights</span></h1>
            <p className="text-gray-400">
              Explore our collection of articles covering the latest trends, tips, and strategies in social media marketing and content creation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Search and Filter */}
      <section className="py-8 bg-[#1A1A1A]">
        <div className="material-container">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 bg-[#252525] border border-gray-700 rounded-md focus:outline-none focus:border-primary-500 text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="bg-[#252525] border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-primary-500 text-white"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-16 flex-grow">
        <div className="material-container">
          {filteredPosts.length > 0 ? (
            <div className="material-grid">
              {filteredPosts.map(post => (
                <div key={post.id} className="col-span-4 mb-8">
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
