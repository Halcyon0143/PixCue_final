
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, BookOpen, Share2 } from "lucide-react";

// Sample blog posts data (in a real application, this would come from an API/database)
const blogPosts = [
  {
    id: 1,
    title: "10 Social Media Trends That Will Dominate 2025",
    excerpt: "Discover the emerging social media trends that will shape the digital landscape in the coming year.",
    date: "May 1, 2025",
    category: "Social Media",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1000",
    content: `
      <h2>Introduction</h2>
      <p>The social media landscape continues to evolve at a rapid pace, with new platforms, features, and trends emerging constantly. As we look ahead to 2025, several key trends are poised to dominate the digital space, reshaping how brands connect with their audiences.</p>
      
      <h2>1. AI-Powered Content Creation</h2>
      <p>Artificial intelligence tools will become mainstream for content creation, allowing brands to produce high-quality, personalized content at scale. From automated video editing to AI-generated copywriting, these tools will revolutionize content workflows.</p>
      
      <h2>2. Virtual Reality Social Spaces</h2>
      <p>As VR technology becomes more accessible, social platforms will increasingly incorporate virtual reality experiences. Users will be able to interact in immersive digital environments, opening new possibilities for brand engagement.</p>
      
      <h2>3. Micro-Communities</h2>
      <p>While major platforms will remain important, we'll see a continued shift toward niche communities and interest-based groups. Brands will need to identify and authentically engage with these micro-communities to build deeper connections.</p>
      
      <h2>4. Sustainability Storytelling</h2>
      <p>Environmental consciousness will continue to grow, with audiences expecting brands to communicate their sustainability initiatives transparently. Social media will be the primary channel for sharing these stories.</p>
      
      <h2>5. Augmented Reality Shopping</h2>
      <p>AR will transform social commerce, allowing users to virtually try products before purchase. Brands will integrate these experiences directly into their social media presence for seamless shopping journeys.</p>
      
      <h2>6. Creator Economy Evolution</h2>
      <p>The relationship between brands and content creators will mature, with more sophisticated partnership models emerging. Expect to see more long-term collaborations and creator-led product development.</p>
      
      <h2>7. Privacy-First Engagement</h2>
      <p>As privacy regulations tighten and consumer awareness increases, brands will need to develop engagement strategies that respect user privacy while still delivering personalized experiences.</p>
      
      <h2>8. Voice and Audio Content</h2>
      <p>Building on the podcast and audio room boom, social platforms will continue to expand their audio capabilities, offering new ways for brands to connect through sound.</p>
      
      <h2>9. Blockchain-Verified Content</h2>
      <p>To combat misinformation, platforms will increasingly use blockchain technology to verify content authenticity and source. This will be particularly important for news and informational content.</p>
      
      <h2>10. Emotional Intelligence Marketing</h2>
      <p>Advanced sentiment analysis tools will help brands better understand and respond to audience emotions, enabling more empathetic and relevant communications.</p>
      
      <h2>Conclusion</h2>
      <p>As these trends take shape, the brands that will succeed are those that can adapt quickly while maintaining authentic connections with their audiences. The key will be balancing technological innovation with human-centered storytelling.</p>
    `
  },
  {
    id: 2,
    title: "How to Create Engaging Content for TikTok",
    excerpt: "Learn the secrets to creating viral content that resonates with the TikTok audience and drives engagement.",
    date: "April 28, 2025",
    category: "Content Creation",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&q=80&w=1000",
    content: `
      <h2>Understanding the TikTok Algorithm</h2>
      <p>TikTok's algorithm prioritizes content based on user interaction, video information, and device settings. Unlike other platforms, follower count matters less than content quality and engagement.</p>
      
      <h2>Keep It Short and Captivating</h2>
      <p>While TikTok allows videos up to three minutes, the most successful content is often between 15-30 seconds. The first few seconds are crucial—hook viewers immediately to prevent them from scrolling past.</p>
      
      <h2>Leverage Trending Sounds and Challenges</h2>
      <p>TikTok is driven by audio. Using trending sounds can significantly boost your visibility. Similarly, participating in popular challenges can help your content reach wider audiences.</p>
      
      <h2>Authenticity Over Production Value</h2>
      <p>Unlike Instagram, TikTok users prefer authentic, relatable content over highly polished productions. Focus on being genuine and showing personality rather than perfect aesthetics.</p>
      
      <h2>Create Educational or Value-Adding Content</h2>
      <p>The "learn on TikTok" movement is growing. Content that teaches something in an entertaining way—whether it's a life hack, industry insight, or unique skill—often performs exceptionally well.</p>
      
      <h2>Conclusion</h2>
      <p>Creating engaging TikTok content requires understanding the platform's unique culture and algorithm. By focusing on authenticity, trends, and value, brands can build meaningful connections with the TikTok community.</p>
    `
  },
  {
    id: 3,
    title: "Building Your Brand's Social Media Strategy",
    excerpt: "A comprehensive guide to developing a social media strategy that aligns with your brand goals.",
    date: "April 24, 2025",
    category: "Strategy",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    content: `
      <h2>Define Clear Objectives</h2>
      <p>Every effective social media strategy begins with clear, measurable objectives. Whether you're focused on brand awareness, community building, lead generation, or direct sales, your goals should be specific, measurable, achievable, relevant, and time-bound (SMART).</p>
      
      <h2>Know Your Audience Deeply</h2>
      <p>Develop detailed audience personas that go beyond demographics to understand behaviors, preferences, pain points, and motivations. This deep understanding will inform everything from content themes to posting times.</p>
      
      <h2>Select the Right Platforms</h2>
      <p>Not every brand needs to be on every platform. Choose channels based on where your audience spends their time and which platforms best showcase your content type. It's better to excel on two platforms than to perform mediocrely on five.</p>
      
      <h2>Develop a Content Strategy</h2>
      <p>Create a comprehensive content plan that includes content pillars, posting frequency, content formats, and voice guidelines. Establish a content calendar that balances planned campaigns with room for timely, reactive content.</p>
      
      <h2>Establish KPIs and Measurement Frameworks</h2>
      <p>Determine how you'll measure success for each objective. Set up regular reporting cadences and use analytics to continuously optimize your approach based on performance data.</p>
      
      <h2>Conclusion</h2>
      <p>A well-crafted social media strategy serves as your roadmap for social media success. By taking a methodical approach to strategy development and remaining flexible enough to evolve with changing platform dynamics, you'll build a strong foundation for meaningful social media presence.</p>
    `
  },
  {
    id: 4,
    title: "The Power of Influencer Marketing",
    excerpt: "Explore how influencer collaborations can amplify your brand's reach and credibility in the digital space.",
    date: "April 20, 2025",
    category: "Influencer Marketing",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1000",
    content: `
      <h2>The Evolution of Influencer Marketing</h2>
      <p>Influencer marketing has transformed from a niche tactic to a cornerstone of digital marketing strategy. As traditional advertising continues to lose effectiveness, authentic recommendations from trusted voices have become increasingly valuable.</p>
      
      <h2>Micro vs. Macro Influencers</h2>
      <p>While celebrity influencers offer broad reach, micro-influencers (typically with 10,000-100,000 followers) often deliver higher engagement rates and more targeted audience connections. The best approach often combines both tiers for maximum impact.</p>
      
      <h2>Building Authentic Partnerships</h2>
      <p>The most successful influencer collaborations are those that feel natural and aligned with both the influencer's personal brand and your company values. Allowing creative freedom typically results in more authentic content that resonates with audiences.</p>
      
      <h2>Measuring Influencer ROI</h2>
      <p>Beyond basic metrics like impressions and engagement, sophisticated brands are implementing multi-touch attribution models, unique tracking links, and custom discount codes to accurately measure the business impact of influencer partnerships.</p>
      
      <h2>Legal and Ethical Considerations</h2>
      <p>As regulations around sponsored content continue to evolve, maintaining transparency through proper disclosure is essential. Clear contracts that outline expectations regarding exclusivity, content rights, and disclosure requirements protect both parties.</p>
      
      <h2>Conclusion</h2>
      <p>When executed strategically, influencer marketing can significantly enhance brand perception and drive meaningful business outcomes. The key lies in finding the right partners, focusing on authentic relationships, and measuring impact effectively.</p>
    `
  },
  {
    id: 5,
    title: "Measuring Social Media ROI: A Comprehensive Guide",
    excerpt: "Learn how to effectively measure and analyze the return on investment for your social media campaigns.",
    date: "April 15, 2025",
    category: "Analytics",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    content: `
      <h2>Setting the Foundation for Measurement</h2>
      <p>Before measuring ROI, establish clear business objectives for your social media efforts. Whether you're focused on brand awareness, lead generation, or direct sales, your goals will determine which metrics matter most.</p>
      
      <h2>Moving Beyond Vanity Metrics</h2>
      <p>While likes and followers provide some insight, meaningful ROI measurement requires tracking metrics tied to business outcomes. Depending on your goals, these might include website traffic, lead form completions, email sign-ups, or direct conversions.</p>
      
      <h2>Implementing Proper Tracking</h2>
      <p>Utilize UTM parameters, conversion pixels, and cross-channel attribution models to accurately track user journeys from social touchpoints to conversion events. This technical foundation is essential for reliable ROI calculation.</p>
      
      <h2>Calculating True Social Media ROI</h2>
      <p>The basic formula for ROI is: (Value Gained - Investment) / Investment × 100. For social media, "Investment" includes agency fees, ad spend, tool costs, and internal resource allocation. "Value Gained" should account for both direct revenue and softer benefits like brand lift when possible.</p>
      
      <h2>Advanced Measurement Approaches</h2>
      <p>Consider employing controlled experiments, such as geographic testing or holdout groups, to isolate the impact of social media activities. Additionally, regression analysis can help determine which social tactics most strongly correlate with business outcomes.</p>
      
      <h2>Conclusion</h2>
      <p>Though measuring social media ROI presents challenges, a systematic approach focused on business outcomes provides clear insight into performance. By establishing proper tracking and connecting social activities to business results, marketers can demonstrate the true value of their social media investments.</p>
    `
  },
  {
    id: 6,
    title: "Video Content: The Future of Social Media Marketing",
    excerpt: "Discover why video is dominating social platforms and how to incorporate it into your marketing strategy.",
    date: "April 10, 2025",
    category: "Video Marketing",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=1000",
    content: `
      <h2>The Rise of Video Across Platforms</h2>
      <p>Video content continues to dominate engagement metrics across all major social platforms. Algorithm preferences, improved mobile connectivity, and changing user behavior have all contributed to video's ascendance in the social media hierarchy.</p>
      
      <h2>Format Diversity in Video Content</h2>
      <p>From short-form vertical videos on TikTok and Reels to longer educational content on YouTube, the video ecosystem offers diverse formats for different marketing objectives. Live streaming, in particular, has seen tremendous growth for its authentic, interactive nature.</p>
      
      <h2>Production Value vs. Authenticity</h2>
      <p>While production quality remains important for certain brand communications, many platforms now favor authentic, in-the-moment content over highly polished productions. Finding the right balance for your brand and platform is key.</p>
      
      <h2>Optimizing for Platform-Specific Features</h2>
      <p>Each platform has unique video specifications and features that can dramatically impact performance. From aspect ratios and length limitations to platform-specific features like Instagram's interactive stickers, success requires tailoring content to each platform's environment.</p>
      
      <h2>Measuring Video Performance</h2>
      <p>Beyond view counts, sophisticated video analysis examines metrics like watch time, completion rate, and viewer drop-off points. These insights allow for continuous optimization of both content and distribution strategy.</p>
      
      <h2>Conclusion</h2>
      <p>As video continues to dominate social media, brands must develop capabilities to produce engaging video content at scale. Whether working with specialized agencies or building internal resources, establishing a sustainable video production approach will be essential for social media success.</p>
    `
  }
];

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const postId = parseInt(id || "1");
  
  // Find the blog post with the matching ID
  const post = blogPosts.find(post => post.id === postId);
  
  // If post not found, show error message
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4">Post Not Found</h1>
            <p className="text-gray-400">The blog post you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Blog Post Hero */}
      <div className="relative h-[50vh] w-full">
        <div className="absolute inset-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-[#121212] opacity-90"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="material-container">
            <div className="max-w-3xl">
              <span className="px-3 py-1 bg-primary-500 text-white text-sm rounded-full mb-4 inline-block">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4">{post.title}</h1>
              <div className="flex items-center text-gray-300 text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                <span className="mr-4">{post.date}</span>
                <BookOpen className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Blog Post Content */}
      <div className="py-16 bg-[#121212]">
        <div className="material-container">
          <div className="material-grid">
            <div className="col-span-12 lg:col-span-8">
              {/* Main content */}
              <article className="prose prose-invert prose-h2:text-2xl prose-h2:font-medium prose-h2:mt-10 prose-h2:mb-4 prose-p:text-gray-300 prose-p:mb-6 prose-p:text-base max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>
              
              {/* Tags and Share */}
              <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row sm:justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#252525] text-gray-300 text-sm rounded-full">
                    {post.category}
                  </span>
                  <span className="px-3 py-1 bg-[#252525] text-gray-300 text-sm rounded-full">
                    Social Media
                  </span>
                  <span className="px-3 py-1 bg-[#252525] text-gray-300 text-sm rounded-full">
                    Digital Marketing
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">Share:</span>
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#252525] text-gray-300 hover:bg-primary-500 hover:text-white transition-colors">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="col-span-12 lg:col-span-4 mt-12 lg:mt-0 lg:pl-8">
              {/* Sidebar */}
              <div className="material-card p-6 mb-8">
                <h3 className="text-xl font-medium mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 4).filter(p => p.id !== post.id).map(recentPost => (
                    <a key={recentPost.id} href={`/blog/${recentPost.id}`} className="flex gap-4 group">
                      <div className="w-20 h-20 overflow-hidden rounded-md flex-shrink-0">
                        <img 
                          src={recentPost.image} 
                          alt={recentPost.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm group-hover:text-primary-400 transition-colors line-clamp-2">
                          {recentPost.title}
                        </h4>
                        <p className="text-xs text-gray-400 mt-1">{recentPost.date}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="material-card p-6">
                <h3 className="text-xl font-medium mb-4">Categories</h3>
                <div className="space-y-2">
                  {Array.from(new Set(blogPosts.map(p => p.category))).map((category, index) => (
                    <a 
                      key={index} 
                      href={`/blog?category=${category}`}
                      className="flex justify-between items-center py-2 border-b border-gray-800 last:border-0 hover:text-primary-400 transition-colors"
                    >
                      <span>{category}</span>
                      <span className="bg-[#252525] px-2 py-0.5 rounded-full text-xs text-gray-400">
                        {blogPosts.filter(p => p.category === category).length}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;
