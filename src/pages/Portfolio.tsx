import { ExternalLink, Calendar, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import HoneycombPattern from "@/components/HoneycombPattern";

const Portfolio = () => {
  const projects = [
    {
      title: "FashionHub Social Media Campaign",
      category: "Social Media Marketing",
      description: "Complete social media transformation for a fashion retail brand, increasing engagement by 350% in 4 months.",
      results: ["350% increase in engagement", "2.5M+ reach", "45% growth in followers"],
      image: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=800&h=600&fit=crop",
      date: "March 2024",
    },
    {
      title: "TechStart Brand Identity",
      category: "Branding & Creative",
      description: "Complete brand identity design for a technology startup, from logo to brand guidelines.",
      results: ["Complete brand system", "5+ brand touchpoints", "Consistent visual language"],
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
      date: "February 2024",
    },
    {
      title: "FitLife SEO Success",
      category: "SEO Optimization",
      description: "SEO overhaul for a wellness brand, achieving first-page rankings for 20+ keywords.",
      results: ["250% organic traffic growth", "Top 3 rankings for 20+ keywords", "500% increase in leads"],
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&h=600&fit=crop",
      date: "January 2024",
    },
    {
      title: "Gourmet Eats Ad Campaign",
      category: "Paid Advertising",
      description: "Multi-platform ad campaign for a restaurant chain driving significant foot traffic and online orders.",
      results: ["4.5x ROAS", "50K+ conversions", "65% reduction in CPA"],
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
      date: "December 2023",
    },
    {
      title: "StyleHub E-commerce Website",
      category: "Web Development",
      description: "Modern, responsive e-commerce website with seamless checkout experience and inventory management.",
      results: ["95+ PageSpeed score", "300% increase in conversions", "40% lower bounce rate"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      date: "November 2023",
    },
    {
      title: "Travel Paradise Content Series",
      category: "Content Creation",
      description: "Professional photography and videography for a luxury travel agency's rebranding campaign.",
      results: ["100+ high-quality assets", "20+ video productions", "Increased bookings by 180%"],
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
      date: "October 2023",
    },
  ];

  const caseStudy = {
    client: "FashionHub Boutique",
    challenge: "Low social media engagement and brand awareness despite quality products",
    solution: "Comprehensive social media strategy with professional content creation, influencer partnerships, and targeted advertising",
    results: [
      { metric: "Engagement Rate", before: "1.2%", after: "5.4%", growth: "+350%" },
      { metric: "Followers", before: "5.2K", after: "28.5K", growth: "+448%" },
      { metric: "Monthly Reach", before: "45K", after: "2.5M", growth: "+5,455%" },
      { metric: "Sales from Social", before: "8%", after: "32%", growth: "+300%" },
    ],
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary text-secondary-foreground overflow-hidden">
        <HoneycombPattern className="text-primary" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-background">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-background/90">
              Real projects, real results. See how we've helped businesses grow.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold mb-4">
                Featured Case Study
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                {caseStudy.client}
              </h2>
            </div>

            <Card className="border-2 border-primary/20 mb-8">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-primary">Challenge</h3>
                    <p className="text-muted-foreground">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-primary">Solution</h3>
                    <p className="text-muted-foreground">{caseStudy.solution}</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <TrendingUp className="w-24 h-24 text-primary" />
                  </div>
                </div>

                <div className="border-t border-border pt-8">
                  <h3 className="text-2xl font-bold mb-6">Results Achieved</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className="text-center p-4 bg-muted rounded-lg">
                        <p className="text-sm text-muted-foreground mb-2">{result.metric}</p>
                        <p className="text-3xl font-bold text-primary mb-1">{result.growth}</p>
                        <p className="text-xs text-muted-foreground">
                          {result.before} → {result.after}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our Work
            </h2>
            <p className="text-xl text-muted-foreground">
              A showcase of successful campaigns and projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="hover-lift overflow-hidden group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full mb-2">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    {project.date}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="space-y-2 mb-4">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="font-semibold">{result}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    View Details <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's create something amazing together
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="/contact">Start Your Project</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
