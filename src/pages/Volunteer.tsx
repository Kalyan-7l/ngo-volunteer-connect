import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Users, Heart } from "lucide-react";

interface FormData {
  fullName: string;
  contactNumber: string;
  city: string;
}

const Volunteer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    contactNumber: "",
    city: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required";
    } else if (!/^\+?[\d\s-()]{10,}$/.test(formData.contactNumber.trim())) {
      newErrors.contactNumber = "Please enter a valid contact number";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Store in localStorage (as requested for simple data persistence)
      const volunteers = JSON.parse(localStorage.getItem("volunteers") || "[]");
      const newVolunteer = {
        ...formData,
        id: Date.now(),
        registeredAt: new Date().toISOString(),
      };
      volunteers.push(newVolunteer);
      localStorage.setItem("volunteers", JSON.stringify(volunteers));

      // Show success toast
      toast({
        title: "Registration Successful!",
        description: `Thank you for registering, ${formData.fullName}! We'll be in touch soon.`,
        variant: "default",
      });

      // Reset form
      setFormData({
        fullName: "",
        contactNumber: "",
        city: "",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Users className="h-10 w-10 text-primary mr-3" />
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Become a Volunteer</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our community of dedicated volunteers and help us make a real difference in people's lives. 
            Your time and skills can transform communities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground rounded-t-lg">
              <CardTitle className="text-2xl flex items-center">
                <Heart className="h-6 w-6 mr-2" />
                Volunteer Registration
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={errors.fullName ? "border-destructive" : ""}
                  />
                  {errors.fullName && (
                    <p className="text-sm text-destructive">{errors.fullName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactNumber" className="text-sm font-medium">
                    Contact Number *
                  </Label>
                  <Input
                    id="contactNumber"
                    name="contactNumber"
                    type="tel"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    placeholder="Enter your contact number"
                    className={errors.contactNumber ? "border-destructive" : ""}
                  />
                  {errors.contactNumber && (
                    <p className="text-sm text-destructive">{errors.contactNumber}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city" className="text-sm font-medium">
                    City *
                  </Label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Enter your city"
                    className={errors.city ? "border-destructive" : ""}
                  />
                  {errors.city && (
                    <p className="text-sm text-destructive">{errors.city}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Submit Registration
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info Panel */}
          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-l-ngo-care">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Why Volunteer?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-ngo-care mt-0.5 mr-3 flex-shrink-0" />
                  Make a meaningful impact in your community
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-ngo-care mt-0.5 mr-3 flex-shrink-0" />
                  Develop new skills and gain valuable experience
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-ngo-care mt-0.5 mr-3 flex-shrink-0" />
                  Connect with like-minded people
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-ngo-care mt-0.5 mr-3 flex-shrink-0" />
                  Flexible scheduling to fit your lifestyle
                </li>
              </ul>
            </Card>

            <Card className="p-6 border-l-4 border-l-ngo-warm">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Volunteer Opportunities</h3>
              <div className="space-y-3 text-muted-foreground">
                <div>
                  <h4 className="font-medium text-foreground">Community Outreach</h4>
                  <p className="text-sm">Help organize and participate in community events</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Educational Support</h4>
                  <p className="text-sm">Assist with tutoring and educational programs</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Healthcare Assistance</h4>
                  <p className="text-sm">Support health awareness campaigns</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Administrative Help</h4>
                  <p className="text-sm">Assist with office work and event coordination</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;