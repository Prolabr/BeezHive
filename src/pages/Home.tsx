import { Link } from "react-router-dom";
import { ArrowRight, Target, TrendingUp, Users, Award, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HoneycombPattern from "@/components/HoneycombPattern";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const services = [
    {
      icon: Target,
      title: "Social Media Marketing",
      description: "Build your brand presence across all major platforms with engaging content.",
    },
    {
      icon: Sparkles,
      title: "Branding & Creative",
      description: "Create memorable brand identities that resonate with your audience.",
    },
    {
      icon: TrendingUp,
      title: "SEO Optimization",
      description: "Rank higher on search engines and drive organic traffic to your business.",
    },
    {
      icon: Users,
      title: "Paid Advertising",
      description: "Maximize ROI with data-driven campaigns across Google, Meta, and more.",
    },
  ];

  const whyChoose = [
    {
      title: "Data-Driven Strategy",
      description: "Every decision backed by analytics and market research.",
    },
    {
      title: "High-Quality Creatives",
      description: "Professional designs that capture attention and convert.",
    },
    {
      title: "Transparent Process",
      description: "Clear communication and regular updates on your campaigns.",
    },
    {
      title: "Measurable Results",
      description: "Track your growth with detailed monthly reports and insights.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc",
      quote: "Beezhive transformed our digital presence. Our engagement increased by 300% in just 3 months!",
    },
    {
      name: "Michael Chen",
      company: "Fashion Hub",
      quote: "The team's creativity and strategic approach helped us reach our target audience effectively.",
    },
    {
      name: "Emily Rodriguez",
      company: "FitLife Wellness",
      quote: "Professional, responsive, and results-driven. Highly recommend Beezhive for digital marketing!",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/70" />
        </div>
        <HoneycombPattern className="text-primary" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-background mb-6">
              Bring Your Brand to Life with{" "}
              <span className="text-primary">Beezhive</span>
            </h1>
            <p className="text-xl md:text-2xl text-background/90 mb-8">
              Where creativity meets strategy to build buzzing brands. Grow faster, smarter, and louder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Start Your Project <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-background text-background hover:bg-background hover:text-secondary">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover-lift border-2 hover:border-primary transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="cta" size="lg" asChild>
              <Link to="/services">
                View All Services <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Beezhive */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Why Choose Beezhive?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your success is our hive's mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from real businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <Award className="w-10 h-10 text-primary mb-4" />
                  <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
        <HoneycombPattern className="text-primary" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-background">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-background/90 mb-8 max-w-2xl mx-auto">
            Ready to take your brand to the next level? Get in touch with us today.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Get Started Now <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
