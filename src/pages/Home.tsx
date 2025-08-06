import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ngoLogo from "@/assets/ngo-logo.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-glow to-ngo-care py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <div className="max-w-4xl mx-auto">
            <img 
              src={ngoLogo} 
              alt="Hope for All Logo" 
              className="mx-auto mb-8 w-48 h-24 object-contain rounded-lg shadow-lg"
            />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Hope for All
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Empowering communities through compassion, education, and sustainable development
            </p>
            <p className="text-lg mb-10 max-w-2xl mx-auto opacity-85">
              We believe every person deserves access to basic necessities, quality education, and opportunities to thrive. Join us in building a world where hope transforms lives.
            </p>
            <Link to="/volunteer">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-ngo-warm hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl">
                Become a Volunteer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-foreground">Our Mission</h2>
            <Card className="p-8 shadow-lg border-l-4 border-l-primary">
              <CardContent className="p-0">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Hope for All, we are dedicated to creating lasting positive change in underserved communities. 
                  Our mission is to provide essential resources, educational opportunities, and sustainable solutions 
                  that empower individuals and families to break the cycle of poverty and build brighter futures.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
            Our Impact Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-t-primary">
              <CardContent className="p-0">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">Healthcare Access</h3>
                <p className="text-muted-foreground">
                  Providing essential medical care, health education, and wellness programs to underserved communities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-t-ngo-care">
              <CardContent className="p-0">
                <Users className="h-12 w-12 text-ngo-care mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">Education Support</h3>
                <p className="text-muted-foreground">
                  Offering educational resources, scholarships, and skill development programs for children and adults.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-t-ngo-warm">
              <CardContent className="p-0">
                <Globe className="h-12 w-12 text-ngo-warm mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">Community Development</h3>
                <p className="text-muted-foreground">
                  Building sustainable infrastructure and fostering economic opportunities within communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Together, we can make a difference. Every volunteer, every donation, every act of kindness brings us closer to a world filled with hope.
          </p>
          <Link to="/volunteer">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-ngo-warm hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Involved Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;