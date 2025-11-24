import { Target, Eye, Heart, Users, TrendingUp, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import HoneycombPattern from "@/components/HoneycombPattern";
import aboutImage from "@/assets/about-team.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Creativity",
      description: "We push boundaries to deliver innovative solutions that stand out.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Honest, transparent relationships built on trust and respect.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Staying ahead with cutting-edge strategies and technologies.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together with clients as partners in success.",
    },
    {
      icon: Award,
      title: "Measurable Growth",
      description: "Delivering tangible results that drive business forward.",
    },
  ];

  const timeline = [
    {
      year: "Discovery",
      title: "Understanding Your Business",
      description: "We dive deep into your brand, goals, and target audience.",
    },
    {
      year: "Strategy",
      title: "Crafting Your Roadmap",
      description: "Data-driven strategies tailored to your unique needs.",
    },
    {
      year: "Creation",
      title: "Bringing Ideas to Life",
      description: "Designing and developing compelling campaigns.",
    },
    {
      year: "Launch",
      title: "Going Live",
      description: "Executing campaigns across all chosen platforms.",
    },
    {
      year: "Optimize",
      title: "Continuous Improvement",
      description: "Analyzing data and refining for maximum impact.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary text-secondary-foreground overflow-hidden">
        <HoneycombPattern className="text-primary" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-background">
              About Beezhive
            </h1>
            <p className="text-xl md:text-2xl text-background/90">
              Empowering businesses with outstanding digital marketing that delivers real results
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src={aboutImage}
                alt="Beezhive Team"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-4xl font-display font-bold mb-6">
                Your Success is Our Hive's Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Beezhive is a full-service digital marketing agency designed to help brands grow through creativity, strategy, and data-driven digital solutions. We blend modern design, powerful storytelling, and advanced marketing tools to turn businesses into strong and memorable brands.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                From social media campaigns to complete brand transformations, we work alongside our clients to create digital experiences that not only look great but deliver measurable results.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4">
                  <p className="text-4xl font-bold text-primary mb-2">150+</p>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
                <div className="text-center p-4">
                  <p className="text-4xl font-bold text-primary mb-2">98%</p>
                  <p className="text-muted-foreground">Client Satisfaction</p>
                </div>
                <div className="text-center p-4">
                  <p className="text-4xl font-bold text-primary mb-2">5+</p>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-2 border-primary/20 hover-lift">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-3xl font-display font-bold mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground">
                  To empower businesses with outstanding digital marketing solutions that deliver real, measurable results. We strive to be the trusted partner that helps brands grow, evolve, and succeed in the digital landscape.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover-lift">
              <CardContent className="p-8">
                <Eye className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-3xl font-display font-bold mb-4">Our Vision</h3>
                <p className="text-lg text-muted-foreground">
                  To become Sri Lanka's most innovative and result-driven digital marketing agency, recognized for transforming businesses through creative excellence and strategic thinking.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Timeline */}
      <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
        <HoneycombPattern className="text-primary" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-background">
              Our Workflow
            </h2>
            <p className="text-xl text-background/90">
              A proven process that delivers results
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((step, index) => (
              <div
                key={index}
                className="flex gap-8 mb-12 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-32 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {index + 1}
                    </span>
                  </div>
                  <p className="font-bold text-primary">{step.year}</p>
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-2xl font-bold mb-2 text-background">{step.title}</h3>
                  <p className="text-background/80">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
