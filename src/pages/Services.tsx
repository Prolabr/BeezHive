import { Link } from "react-router-dom";
import {
  Share2,
  Palette,
  Search,
  Target,
  Globe,
  Video,
  Mail,
  Star,
  MessageSquare,
  BarChart,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HoneycombPattern from "@/components/HoneycombPattern";
import servicesImage from "@/assets/services-hero.jpg";

const Services = () => {
  const services = [
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Build your brand presence across all major platforms with engaging content that drives results.",
      features: ["Content creation", "Community management", "Analytics & reporting", "Platform optimization"],
      path: "/services/social-media",
    },
    {
      icon: Palette,
      title: "Branding & Creative",
      description: "Create memorable brand identities that resonate with your audience and stand out from the competition.",
      features: ["Logo design", "Brand guidelines", "Visual identity", "Marketing collateral"],
      path: "/services/branding",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Rank higher on search engines and drive organic traffic to your business with proven strategies.",
      features: ["Keyword research", "On-page SEO", "Technical SEO", "Link building"],
      path: "/services/seo",
    },
    {
      icon: Target,
      title: "Paid Advertising",
      description: "Maximize ROI with data-driven campaigns across Google, Meta, TikTok, and LinkedIn.",
      features: ["Campaign setup", "Ad creative", "Budget optimization", "A/B testing"],
      path: "/services/paid-ads",
    },
    {
      icon: Globe,
      title: "Web Design & Development",
      description: "Build stunning, responsive websites that convert visitors into customers.",
      features: ["Custom design", "Mobile responsive", "SEO friendly", "E-commerce solutions"],
      path: "/services/web-development",
    },
    {
      icon: Video,
      title: "Content Creation",
      description: "Professional photography, videography, and graphic design that brings your brand to life.",
      features: ["Product photography", "Video production", "Graphic design", "Animation"],
      path: "/services/content-creation",
    },
    {
      icon: Mail,
      title: "Email Marketing & Automation",
      description: "Nurture leads and retain customers with personalized email campaigns that convert.",
      features: ["Email design", "Automation workflows", "List segmentation", "Performance tracking"],
      path: "/services/email-marketing",
    },
    {
      icon: Star,
      title: "Reputation Management",
      description: "Monitor and enhance your online reputation to build trust and credibility.",
      features: ["Review monitoring", "Response management", "Brand monitoring", "Crisis management"],
      path: "/services/reputation-management",
    },
    {
      icon: MessageSquare,
      title: "AI Chatbot Setup",
      description: "Automate customer service and engagement with intelligent chatbot solutions.",
      features: ["24/7 availability", "Custom workflows", "Multi-platform", "Analytics dashboard"],
      path: "/services/ai-chatbot",
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Make data-driven decisions with comprehensive analytics and insights.",
      features: ["Custom dashboards", "Monthly reports", "Goal tracking", "ROI analysis"],
      path: "/services/analytics",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary text-secondary-foreground overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${servicesImage})` }}
        />
        <HoneycombPattern className="text-primary" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-background">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-background/90">
              Comprehensive digital marketing solutions tailored to help your business thrive
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover-lift border-2 hover:border-primary transition-all animate-fade-in group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-8">
                  <service.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                    <Link to={service.path}>
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your goals and create a custom strategy for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get a Free Consultation <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/pricing">View Pricing Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
