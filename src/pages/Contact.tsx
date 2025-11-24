import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import HoneycombPattern from "@/components/HoneycombPattern";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "info@beezhive.lk",
      link: "mailto:info@beezhive.lk",
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+94 76 769 4612",
      link: "tel:+94XXXXXXXXX",
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "Colombo, Sri Lanka",
      link: "#",
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
              Let's Build Something Amazing Together
            </h1>
            <p className="text-xl md:text-2xl text-background/90">
              Ready to take your brand to the next level? Get in touch with us today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-3xl font-display font-bold mb-4">
                  Get In Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <a
                      href={info.link}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">{info.title}</h3>
                        <p className="text-muted-foreground">{info.detail}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}

              {/* WhatsApp Button */}
              <Card className="border-2 border-primary hover-lift">
                <CardContent className="p-6">
                  <a
                    href="https://wa.me/94767694612"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">WhatsApp Chat</h3>
                      <p className="text-sm text-muted-foreground">
                        Quick response guaranteed
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-border">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Your Name *
                        </label>
                        <Input
                          type="text"
                          placeholder="John Doe"
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Your Email *
                        </label>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          required
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          placeholder="+94 XX XXX XXXX"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Company Name
                        </label>
                        <Input
                          type="text"
                          placeholder="Your Company"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Service Interested In
                      </label>
                      <select
                          className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring">
                        <option>Social Media Marketing</option>
                        <option>Branding & Creative</option>
                        <option>SEO Optimization</option>
                        <option>Paid Advertising</option>
                        <option>Web Development</option>
                        <option>Content Creation</option>
                        <option>Email Marketing</option>
                        <option>Political Campaign</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Your Message *
                      </label>
                      <Textarea
                        placeholder="Tell us about your project..."
                        required
                        className="w-full min-h-[150px]"
                      />
                    </div>

                    <Button variant="hero" size="lg" type="submit" className="w-full">
                      Send Message <Send className="ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <Card className="overflow-hidden">
              <div className="h-[400px] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-2xl font-bold">Colombo, Sri Lanka</p>
                  <p className="text-muted-foreground mt-2">Map integration available</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
