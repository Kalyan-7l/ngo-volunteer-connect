import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Calendar, Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary via-primary-glow to-ngo-care py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Hope for All</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Learn about our journey, mission, and the impact we're making in communities around the world.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Our Story */}
          <Card className="shadow-lg">
            <CardHeader className="bg-muted/50">
              <CardTitle className="text-2xl flex items-center">
                <Heart className="h-6 w-6 mr-3 text-primary" />
                Our Story
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hope for All was founded in 2015 by a group of passionate individuals who witnessed the stark 
                inequalities in access to basic necessities like healthcare, education, and clean water. What 
                started as a small community initiative has grown into a comprehensive NGO serving over 50 
                communities across multiple regions.
              </p>
              <p>
                Our journey began when our founder, Maria Santos, organized a medical camp in her hometown after 
                seeing families struggle to afford basic healthcare. That single event treated over 200 patients 
                and sparked the realization that organized, sustained effort could create lasting change.
              </p>
              <p>
                Today, we operate through a network of dedicated volunteers, partner organizations, and local 
                community leaders who share our vision of a world where everyone has the opportunity to thrive. 
                Our programs have directly impacted over 25,000 lives and continue to grow each year.
              </p>
            </CardContent>
          </Card>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-primary shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl flex items-center">
                  <Target className="h-5 w-5 mr-2 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To empower underserved communities by providing access to healthcare, education, and sustainable 
                  development opportunities, while fostering dignity, hope, and self-reliance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-ngo-care shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl flex items-center">
                  <Eye className="h-5 w-5 mr-2 text-ngo-care" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A world where every individual, regardless of their circumstances, has equal access to opportunities 
                  that enable them to live with dignity and reach their full potential.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-ngo-warm shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-ngo-warm" />
                  Our Values
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• Compassion & Empathy</li>
                  <li>• Transparency & Accountability</li>
                  <li>• Community-Centered Approach</li>
                  <li>• Sustainable Impact</li>
                  <li>• Dignity & Respect</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Our Impact */}
          <Card className="shadow-lg">
            <CardHeader className="bg-muted/50">
              <CardTitle className="text-2xl">Our Impact by Numbers</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">25,000+</div>
                  <div className="text-sm text-muted-foreground">Lives Impacted</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-ngo-care mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Communities Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-ngo-warm mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Active Volunteers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">8</div>
                  <div className="text-sm text-muted-foreground">Years of Service</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Our Programs */}
          <Card className="shadow-lg">
            <CardHeader className="bg-muted/50">
              <CardTitle className="text-2xl">Our Core Programs</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Healthcare Initiative</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Mobile medical clinics, health awareness campaigns, and partnerships with local healthcare 
                    providers to ensure accessible medical care for remote communities.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Education Support</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Scholarship programs, adult literacy classes, vocational training, and school infrastructure 
                    development to break the cycle of poverty through education.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Clean Water Access</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Construction of wells, water purification systems, and hygiene education programs to ensure 
                    communities have access to clean, safe drinking water.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Women's Empowerment</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Microfinance programs, skills training, and leadership development initiatives specifically 
                    designed to empower women and promote gender equality.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team Leadership */}
          <Card className="shadow-lg">
            <CardHeader className="bg-muted/50">
              <CardTitle className="text-2xl">Leadership Team</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Maria Santos</h3>
                  <p className="text-primary font-medium mb-3">Founder & Executive Director</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A former nurse with 15 years of healthcare experience, Maria founded Hope for All after 
                    witnessing healthcare disparities in rural communities. She holds a Master's in Public 
                    Health and is passionate about community-driven development.
                  </p>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Dr. James Chen</h3>
                  <p className="text-primary font-medium mb-3">Medical Director</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A practicing physician and public health specialist, Dr. Chen leads our healthcare initiatives 
                    and coordinates with medical professionals. He brings 20 years of experience in community 
                    health and preventive medicine.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="shadow-lg">
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle className="text-2xl">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">Email</h4>
                      <p className="text-muted-foreground">contact@hopeforall.org</p>
                      <p className="text-muted-foreground">volunteers@hopeforall.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">Phone</h4>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-muted-foreground">+1 (555) 123-4568 (Emergency)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">Address</h4>
                      <p className="text-muted-foreground">
                        1234 Hope Street<br />
                        Community Center, Suite 200<br />
                        Springfield, ST 12345
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">Office Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button className="w-full bg-gradient-to-r from-primary to-primary-glow">
                      Visit Our Office
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;