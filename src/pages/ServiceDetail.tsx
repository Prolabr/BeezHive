import { useParams, Link } from "react-router-dom";
import { ArrowRight, Check, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HoneycombPattern from "@/components/HoneycombPattern";

const ServiceDetail = () => {
  const { slug } = useParams();

  const services: Record<string, any> = {
    "social-media": {
      title: "Social Media Marketing",
      description: "Build your brand presence across all major platforms with engaging content that drives results.",
      overview: "Transform your social media presence into a powerful business growth engine. Our comprehensive social media marketing services help you connect with your audience, build brand awareness, and drive meaningful engagement across all major platforms.",
      included: [
        "Content strategy & planning",
        "Professional content creation",
        "Community management",
        "Platform optimization",
        "Engagement analysis",
        "Monthly performance reports",
        "Competitor analysis",
        "Hashtag research & strategy",
        "Story & reel creation",
        "Social media advertising",
      ],
      benefits: [
        "Increase brand awareness by 300%+",
        "Build engaged community of followers",
        "Drive traffic to your website",
        "Generate quality leads",
        "Improve customer relationships",
        "Boost sales through social selling",
      ],
      process: [
        "Audit current social media presence",
        "Define goals and target audience",
        "Create content strategy & calendar",
        "Design and schedule content",
        "Monitor and engage with audience",
        "Analyze and optimize performance",
      ],
    },
    branding: {
      title: "Branding & Creative",
      description: "Create memorable brand identities that resonate with your audience and stand out from the competition.",
      overview: "Build a powerful brand that captures hearts and minds. Our branding services create cohesive visual identities that tell your story and make lasting impressions.",
      included: [
        "Brand strategy development",
        "Logo design & variations",
        "Color palette selection",
        "Typography system",
        "Brand guidelines document",
        "Business card design",
        "Letterhead & stationery",
        "Social media templates",
        "Marketing collateral",
        "Brand asset library",
      ],
      benefits: [
        "Stand out from competitors",
        "Build customer trust & loyalty",
        "Command premium pricing",
        "Create consistent brand experience",
        "Attract your ideal customers",
        "Increase brand recognition",
      ],
      process: [
        "Discovery & research phase",
        "Strategy development",
        "Concept creation & refinement",
        "Design execution",
        "Brand guidelines creation",
        "Asset delivery & training",
      ],
    },
    seo: {
      title: "SEO Optimization",
      description: "Rank higher on search engines and drive organic traffic to your business with proven strategies.",
      overview: "Dominate search engine results and attract qualified organic traffic. Our SEO services combine technical expertise with content strategy to improve your visibility and drive sustainable growth.",
      included: [
        "Comprehensive SEO audit",
        "Keyword research & strategy",
        "On-page optimization",
        "Technical SEO improvements",
        "Content optimization",
        "Link building campaigns",
        "Local SEO optimization",
        "Competitor analysis",
        "Monthly ranking reports",
        "Google Analytics setup",
      ],
      benefits: [
        "Increase organic traffic by 250%+",
        "Improve search engine rankings",
        "Generate qualified leads",
        "Build long-term visibility",
        "Reduce customer acquisition costs",
        "Establish industry authority",
      ],
      process: [
        "Website & competitor analysis",
        "Keyword research & mapping",
        "Technical SEO fixes",
        "On-page optimization",
        "Content creation & optimization",
        "Ongoing monitoring & refinement",
      ],
    },
    "paid-ads": {
      title: "Paid Advertising",
      description: "Maximize ROI with data-driven campaigns across Google, Meta, TikTok, and LinkedIn.",
      overview: "Drive immediate results with strategic paid advertising. We create and manage high-performing campaigns that deliver maximum return on your advertising investment.",
      included: [
        "Campaign strategy development",
        "Audience research & targeting",
        "Ad creative design",
        "Campaign setup & optimization",
        "A/B testing",
        "Retargeting campaigns",
        "Budget management",
        "Conversion tracking",
        "Weekly performance reports",
        "Landing page optimization",
      ],
      benefits: [
        "Achieve 4-5x ROAS consistently",
        "Reach your target audience precisely",
        "Generate immediate results",
        "Scale campaigns profitably",
        "Track every dollar spent",
        "Reduce cost per acquisition",
      ],
      process: [
        "Define goals & target audience",
        "Develop campaign strategy",
        "Create compelling ad creatives",
        "Launch & monitor campaigns",
        "Optimize for performance",
        "Scale successful campaigns",
      ],
    },
    "web-development": {
      title: "Web Design & Development",
      description: "Build stunning, responsive websites that convert visitors into customers.",
      overview: "Create a powerful online presence with a website that not only looks great but drives results. Our web development services combine beautiful design with functionality and performance.",
      included: [
        "Custom responsive design",
        "Mobile optimization",
        "SEO-friendly structure",
        "Fast loading speeds",
        "Contact forms & integrations",
        "CMS integration",
        "E-commerce functionality",
        "Security features",
        "Analytics setup",
        "Ongoing maintenance",
      ],
      benefits: [
        "Increase conversion rates by 300%",
        "Provide excellent user experience",
        "Rank higher in search results",
        "Build credibility & trust",
        "Generate quality leads 24/7",
        "Showcase your offerings effectively",
      ],
      process: [
        "Discovery & planning",
        "Wireframing & design mockups",
        "Development & coding",
        "Content integration",
        "Testing & optimization",
        "Launch & ongoing support",
      ],
    },
    "content-creation": {
      title: "Content Creation",
      description: "Professional photography, videography, and graphic design that brings your brand to life.",
      overview: "Tell your brand story through stunning visuals. Our content creation services produce high-quality photos, videos, and graphics that captivate your audience and drive engagement.",
      included: [
        "Professional photography",
        "Video production & editing",
        "Graphic design",
        "Motion graphics & animation",
        "Product photography",
        "Lifestyle photography",
        "Promotional videos",
        "Social media content",
        "Infographics & illustrations",
        "Content asset library",
      ],
      benefits: [
        "Increase engagement rates by 400%",
        "Build professional brand image",
        "Stand out on social media",
        "Tell compelling brand stories",
        "Drive conversions with visuals",
        "Create versatile content library",
      ],
      process: [
        "Creative brief & planning",
        "Pre-production preparation",
        "Content shooting & creation",
        "Post-production & editing",
        "Review & revisions",
        "Asset delivery & organization",
      ],
    },
    "email-marketing": {
      title: "Email Marketing & Automation",
      description: "Nurture leads and retain customers with personalized email campaigns that convert.",
      overview: "Build stronger customer relationships through strategic email marketing. Our campaigns combine personalized messaging with automation to nurture leads and drive sales.",
      included: [
        "Email strategy development",
        "Template design & coding",
        "List segmentation",
        "Automation workflows",
        "A/B testing",
        "Personalization setup",
        "Campaign management",
        "Performance tracking",
        "List growth strategies",
        "Monthly analytics reports",
      ],
      benefits: [
        "Achieve 40%+ open rates",
        "Generate consistent revenue",
        "Nurture leads automatically",
        "Build customer loyalty",
        "Increase repeat purchases",
        "Track ROI precisely",
      ],
      process: [
        "Audit existing email marketing",
        "Develop email strategy",
        "Design templates & workflows",
        "Set up automation sequences",
        "Launch campaigns",
        "Optimize based on data",
      ],
    },
    "reputation-management": {
      title: "Reputation Management",
      description: "Monitor and enhance your online reputation to build trust and credibility.",
      overview: "Protect and enhance your brand's online reputation. We monitor, manage, and improve how your business is perceived across all digital platforms.",
      included: [
        "Online reputation audit",
        "Review monitoring",
        "Response management",
        "Review generation campaigns",
        "Brand mention monitoring",
        "Crisis management",
        "Sentiment analysis",
        "Competitor monitoring",
        "Monthly reputation reports",
        "Strategy consulting",
      ],
      benefits: [
        "Improve star ratings by 1-2 points",
        "Build customer trust",
        "Increase conversion rates",
        "Attract better customers",
        "Protect brand image",
        "Gain competitive advantage",
      ],
      process: [
        "Conduct reputation audit",
        "Set up monitoring systems",
        "Respond to reviews & mentions",
        "Generate positive reviews",
        "Address negative feedback",
        "Ongoing monitoring & improvement",
      ],
    },
    "ai-chatbot": {
      title: "AI Chatbot Setup",
      description: "Automate customer service and engagement with intelligent chatbot solutions.",
      overview: "Provide instant 24/7 customer support with AI-powered chatbots. Our solutions automate responses, qualify leads, and enhance customer experience while reducing support costs.",
      included: [
        "Chatbot strategy development",
        "Custom conversation flows",
        "Natural language processing",
        "Multi-platform integration",
        "Lead qualification setup",
        "FAQ database creation",
        "Analytics dashboard",
        "Ongoing optimization",
        "Training & documentation",
        "Monthly performance reports",
      ],
      benefits: [
        "Provide 24/7 customer support",
        "Reduce response time to seconds",
        "Qualify leads automatically",
        "Lower support costs by 60%",
        "Improve customer satisfaction",
        "Scale support without hiring",
      ],
      process: [
        "Define use cases & goals",
        "Design conversation flows",
        "Develop & train chatbot",
        "Integrate with platforms",
        "Test & refine responses",
        "Deploy & monitor performance",
      ],
    },
    analytics: {
      title: "Analytics & Reporting",
      description: "Make data-driven decisions with comprehensive analytics and insights.",
      overview: "Transform data into actionable insights. Our analytics services provide clear visibility into your marketing performance and guide strategic decision-making.",
      included: [
        "Analytics setup & configuration",
        "Custom dashboard creation",
        "Goal & conversion tracking",
        "Multi-channel attribution",
        "Audience insights",
        "Competitor benchmarking",
        "Monthly performance reports",
        "Data visualization",
        "Strategy recommendations",
        "Quarterly business reviews",
      ],
      benefits: [
        "Make data-driven decisions",
        "Identify growth opportunities",
        "Optimize marketing spend",
        "Understand customer behavior",
        "Prove marketing ROI",
        "Stay ahead of trends",
      ],
      process: [
        "Define KPIs & objectives",
        "Set up tracking & tools",
        "Create custom dashboards",
        "Collect & analyze data",
        "Generate insights & reports",
        "Provide strategic recommendations",
      ],
    },
  };

  const service = services[slug || ""] || services["social-media"];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary text-secondary-foreground overflow-hidden">
        <HoneycombPattern className="text-primary" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-background">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-background/90">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed">
              {service.overview}
            </p>
          </div>
        </div>
      </section>

      {/* What's Included & Benefits */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-primary mb-6" />
                <h2 className="text-3xl font-display font-bold mb-6">
                  What's Included
                </h2>
                <ul className="space-y-3">
                  {service.included.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-accent mb-6" />
                <h2 className="text-3xl font-display font-bold mb-6">
                  Key Benefits
                </h2>
                <ul className="space-y-3">
                  {service.benefits.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
              Our Process
            </h2>
            <div className="space-y-6">
              {service.process.map((step: string, index: number) => (
                <div
                  key={index}
                  className="flex items-start gap-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-xl font-bold text-primary-foreground">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-lg">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
        <HoneycombPattern className="text-primary" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-background">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-background/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how {service.title.toLowerCase()} can help grow your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get a Free Consultation <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-background text-background hover:bg-background hover:text-secondary">
              <Link to="/pricing">View Pricing Plans</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
