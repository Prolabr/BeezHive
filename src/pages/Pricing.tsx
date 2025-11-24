import { Link } from "react-router-dom";
import { Check, ArrowRight, Zap, Rocket, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import HoneycombPattern from "@/components/HoneycombPattern";

const Pricing = () => {
  const packages = [
    {
      name: "Starter Hive",
      icon: Zap,
      price: "25,000 - 40,000",
      currency: "LKR",
      period: "per month",
      description: "Perfect for small businesses getting started with digital marketing",
      features: [
        "1-2 social platforms",
        "8 posts per month",
        "Basic graphic design",
        "Monthly performance report",
        "Email support",
        "Content calendar",
      ],
      popular: false,
      color: "primary",
    },
    {
      name: "Growing Hive",
      icon: Rocket,
      price: "60,000 - 85,000",
      currency: "LKR",
      period: "per month",
      description: "Ideal for growing businesses looking to expand their reach",
      features: [
        "2-3 social platforms",
        "12-16 posts per month",
        "Reels & stories included",
        "1 ad campaign management",
        "Bi-weekly reports",
        "Content calendar & strategy",
        "Priority email support",
        "Basic analytics dashboard",
      ],
      popular: true,
      color: "accent",
    },
    {
      name: "Enterprise Hive",
      icon: Crown,
      price: "120,000 - 180,000",
      currency: "LKR",
      period: "per month",
      description: "Complete solution for established businesses seeking premium results",
      features: [
        "All major platforms",
        "20-24 premium posts",
        "Professional reels & photography",
        "Multiple ad campaigns",
        "Retargeting strategies",
        "Weekly performance reports",
        "Monthly strategy meetings",
        "Dedicated account manager",
        "Advanced analytics & insights",
        "Influencer collaboration support",
      ],
      popular: false,
      color: "secondary",
    },
  ];

  const comparison = [
    {
      feature: "Social Media Platforms",
      starter: "1-2",
      growing: "2-3",
      enterprise: "All",
    },
    {
      feature: "Monthly Posts",
      starter: "8",
      growing: "12-16",
      enterprise: "20-24",
    },
    {
      feature: "Reels & Stories",
      starter: "✗",
      growing: "✓",
      enterprise: "✓",
    },
    {
      feature: "Ad Campaign Management",
      starter: "✗",
      growing: "1 Campaign",
      enterprise: "Multiple",
    },
    {
      feature: "Professional Photography",
      starter: "✗",
      growing: "✗",
      enterprise: "✓",
    },
    {
      feature: "Dedicated Manager",
      starter: "✗",
      growing: "✗",
      enterprise: "✓",
    },
    {
      feature: "Strategy Meetings",
      starter: "✗",
      growing: "✗",
      enterprise: "Monthly",
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
              Packages & Pricing
            </h1>
            <p className="text-xl md:text-2xl text-background/90">
              Choose the perfect plan to grow your business
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative hover-lift border-2 ${
                  pkg.popular ? "border-primary shadow-2xl scale-105" : "border-border"
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold text-sm">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="text-center pb-8 pt-8">
                  <pkg.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-3xl font-display font-bold mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground mb-6">{pkg.description}</p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground ml-2">{pkg.currency}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{pkg.period}</p>
                </CardHeader>

                <CardContent className="space-y-4 pb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  
                  <Button
                    variant={pkg.popular ? "hero" : "outline"}
                    className="w-full mt-6"
                    asChild
                  >
                    <Link to="/contact">
                      Get Started <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Package Comparison
            </h2>
            <p className="text-xl text-muted-foreground">
              See what's included in each plan
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full bg-background rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-secondary text-secondary-foreground">
                <tr>
                  <th className="py-4 px-6 text-left font-bold text-background">Feature</th>
                  <th className="py-4 px-6 text-center font-bold text-background">Starter Hive</th>
                  <th className="py-4 px-6 text-center font-bold text-background">Growing Hive</th>
                  <th className="py-4 px-6 text-center font-bold text-background">Enterprise Hive</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="py-4 px-6 font-medium">{row.feature}</td>
                    <td className="py-4 px-6 text-center">{row.starter}</td>
                    <td className="py-4 px-6 text-center font-semibold text-primary">
                      {row.growing}
                    </td>
                    <td className="py-4 px-6 text-center">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Need a Custom Package?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Every business is unique. Let's create a tailored solution that fits your specific needs and budget.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Request Custom Quote <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
