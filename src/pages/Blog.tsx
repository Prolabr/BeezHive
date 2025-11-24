import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HoneycombPattern from "@/components/HoneycombPattern";

const Blog = () => {
  const posts = [
    {
      title: "Top 10 Digital Marketing Trends for 2025",
      excerpt: "Stay ahead of the curve with these emerging trends that are reshaping the digital marketing landscape.",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=600&fit=crop",
      category: "Trends",
      date: "March 15, 2024",
      author: "Beezhive Team",
      readTime: "8 min read",
    },
    {
      title: "How SEO Can Transform Your Business in 2025",
      excerpt: "Discover proven SEO strategies that can boost your online visibility and drive sustainable growth.",
      image: "https://images.unsplash.com/photo-1571677227136-f8c48f21ea7f?w=800&h=600&fit=crop",
      category: "SEO",
      date: "March 10, 2024",
      author: "Sarah Marketing",
      readTime: "6 min read",
    },
    {
      title: "Why Branding Matters More Than Ever",
      excerpt: "Learn why strong branding is crucial for business success and how to build a memorable brand identity.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
      category: "Branding",
      date: "March 5, 2024",
      author: "Alex Creative",
      readTime: "7 min read",
    },
    {
      title: "Social Media Marketing: A Complete Guide",
      excerpt: "Master the art of social media marketing with our comprehensive guide covering all major platforms.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      category: "Social Media",
      date: "February 28, 2024",
      author: "Mike Digital",
      readTime: "10 min read",
    },
    {
      title: "The ROI of Content Marketing",
      excerpt: "Understanding how quality content creation drives business results and maximizes your marketing investment.",
      image: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=800&h=600&fit=crop",
      category: "Content Marketing",
      date: "February 22, 2024",
      author: "Emma Writer",
      readTime: "5 min read",
    },
    {
      title: "Paid Advertising Strategies That Work",
      excerpt: "Unlock the secrets to creating high-converting ad campaigns across Google and social media platforms.",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=600&fit=crop",
      category: "Advertising",
      date: "February 18, 2024",
      author: "Chris Ads",
      readTime: "9 min read",
    },
  ];

  const categories = [
    "All Posts",
    "Trends",
    "SEO",
    "Branding",
    "Social Media",
    "Content Marketing",
    "Advertising",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary text-secondary-foreground overflow-hidden">
        <HoneycombPattern className="text-primary" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-background">
              Blog & Insights
            </h1>
            <p className="text-xl md:text-2xl text-background/90">
              Expert tips, trends, and strategies to grow your business
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold mb-6">
              Featured Post
            </span>
            <Card className="overflow-hidden hover-lift border-2 border-primary/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-[400px] lg:h-auto">
                  <img
                    src={posts[0].image}
                    alt={posts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                    {posts[0].category}
                  </span>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {posts[0].date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {posts[0].readTime}
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                    {posts[0].title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {posts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-3 mb-6">
                    <User className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      By {posts[0].author}
                    </span>
                  </div>
                  <Button variant="hero" size="lg" className="w-fit">
                    Read Article <ArrowRight className="ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-muted-foreground">
              Stay updated with our latest insights and tips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <Card
                key={index}
                className="hover-lift overflow-hidden group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                    {post.category}
                  </span>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="cta" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
        <HoneycombPattern className="text-primary" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-background">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-background/90 mb-8">
              Get the latest digital marketing tips and insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              />
              <Button variant="hero" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
