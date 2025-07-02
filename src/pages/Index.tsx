
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Check, Code, Shield, Zap, Globe, Users, BarChart3, Database, Cloud, Lock, Smartphone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import VideoDemo from "@/components/VideoDemo";
import TechnicalOverview from "@/components/TechnicalOverview";
import PricingPlans from "@/components/PricingPlans";
import FAQ from "@/components/FAQ";

const Index = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Backend Admin Panel",
      description: "Complete player management, risk controls, and real-time analytics dashboard for operators."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Bonus Engine & Loyalty System",
      description: "Sophisticated promotion management with automated triggers and player segmentation."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Real-Money Wallet System",
      description: "Multi-currency support with blockchain and fiat payment integration, automated withdrawals."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Game Aggregation APIs",
      description: "Connect to 100+ providers for slots, live casino, sports betting, and table games."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Modular Frontend",
      description: "React/Vue.js ready components with white-label customization and mobile optimization."
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Microservice Architecture",
      description: "Scalable RESTful APIs with containerized deployment and auto-scaling capabilities."
    }
  ];

  const techStack = [
    ".NET Core Backend",
    "PostgreSQL Database",
    "Redis Caching",
    "RabbitMQ Messaging",
    "Kubernetes Ready",
    "Docker Containers",
    "React Frontend",
    "TypeScript",
    "OpenAPI Docs"
  ];

  const benefits = [
    "Own your technology stack completely",
    "No monthly licensing fees to third parties",
    "Full source code with documentation",
    "Regulatory compliance framework included",
    "24/7 technical support during setup",
    "Free updates for first year"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onRequestDemo={() => setIsLeadModalOpen(true)} />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        <div className="relative max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 bg-blue-50 text-blue-700 border-blue-200">
            Trusted by 200+ Casino Operators Worldwide
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Launch Your Own Online Casino with Full Source Code
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Scalable. Secure. Modular. Own your tech stack, don't rent it. 
            Complete B2B casino platform with backend, frontend, and all integrations included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
              onClick={() => setIsLeadModalOpen(true)}
            >
              Request Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
              onClick={() => setIsLeadModalOpen(true)}
            >
              <Code className="mr-2 h-5 w-5" />
              View Code Sample
            </Button>
          </div>
          
          {/* Tech Stack Pills */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 bg-white border border-gray-200">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Complete Casino Platform Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to launch and scale your online casino operation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="text-blue-600 mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <VideoDemo />

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Buy Instead of Build?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Save 18+ months of development time and $2M+ in engineering costs. 
                Get to market faster with battle-tested casino technology.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border">
              <h3 className="text-2xl font-bold mb-6 text-center">Ready to Start?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span>Enterprise-grade security</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-6 w-6 text-blue-600" />
                  <span>High-performance architecture</span>
                </div>
                <div className="flex items-center gap-3">
                  <Lock className="h-6 w-6 text-blue-600" />
                  <span>Regulatory compliance ready</span>
                </div>
              </div>
              <Button 
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700"
                onClick={() => setIsLeadModalOpen(true)}
              >
                Get Full Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Overview */}
      <TechnicalOverview />

      {/* Pricing Plans */}
      <PricingPlans onSelectPlan={() => setIsLeadModalOpen(true)} />

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Launch Your Casino Platform?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join 200+ successful operators who chose our casino source code platform. 
            Get started with a live demo and technical consultation.
          </p>
          <Button 
            size="lg"
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
            onClick={() => setIsLeadModalOpen(true)}
          >
            Schedule Your Demo Today
          </Button>
        </div>
      </section>

      <Footer />
      <LeadCaptureModal 
        isOpen={isLeadModalOpen} 
        onClose={() => setIsLeadModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
