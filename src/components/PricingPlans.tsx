
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

interface PricingPlansProps {
  onSelectPlan: () => void;
}

const PricingPlans = ({ onSelectPlan }: PricingPlansProps) => {
  const plans = [
    {
      name: "Startup License",
      price: "$549,000",
      period: "One-time",
      description: "Perfect for new casino operators and small to medium operations",
      popular: false,
      features: [
        "Complete source code access",
        "Basic admin panel",
        "Player management system",
        "Payment integration (5 gateways)",
        "Game API connections (50 providers)",
        "Basic bonus engine",
        "6 months technical support",
        "Documentation & deployment guides",
        "Single production deployment"
      ]
    },
    {
      name: "Enterprise License",
      price: "$1,599,000",
      period: "One-time + Annual Updates",
      description: "Advanced features for established operators with high traffic",
      popular: true,
      features: [
        "Everything in Startup License",
        "Advanced admin panel with analytics",
        "Sophisticated bonus & loyalty engine",
        "Multi-brand management",
        "Advanced risk management tools",
        "Payment integration (25+ gateways)",
        "Game API connections (100+ providers)",
        "24/7 priority technical support",
        "Unlimited production deployments",
        "Custom white-label development",
        "Revenue share option available"
      ]
    },
    {
      name: "Custom Solution",
      price: "Contact Us",
      period: "Tailored pricing",
      description: "Fully customized platform with dedicated development team",
      popular: false,
      features: [
        "Everything in Enterprise License",
        "Custom feature development",
        "Dedicated development team",
        "Custom UI/UX design",
        "Advanced compliance tools",
        "Multi-jurisdiction support",
        "Custom game development",
        "Dedicated account manager",
        "On-site training and setup",
        "Revenue share partnerships",
        "Equity investment options"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the license that fits your business needs. No hidden fees, no monthly charges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'border-2 border-blue-500 shadow-xl scale-105' : 'border'} transition-all hover:shadow-lg`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-4 py-1 flex items-center gap-1">
                    <Star className="h-4 w-4 fill-white" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="py-4">
                  <div className="text-4xl font-bold text-blue-600">{plan.price}</div>
                  <div className="text-sm text-gray-500 mt-1">{plan.period}</div>
                </div>
                <CardDescription className="text-base">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full h-12 text-lg ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                  }`}
                  onClick={onSelectPlan}
                >
                  {plan.price === "Contact Us" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white p-8 rounded-xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-semibold mb-2">Flexible Payment Terms</h4>
              <p className="text-sm text-gray-600">
                We offer flexible payment schedules and revenue-share options for qualified operators.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Money-Back Guarantee</h4>
              <p className="text-sm text-gray-600">
                30-day money-back guarantee if our platform doesn't meet your technical requirements.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Ongoing Support</h4>
              <p className="text-sm text-gray-600">
                All licenses include comprehensive support during setup and ongoing maintenance assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
