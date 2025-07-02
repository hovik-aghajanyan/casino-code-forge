
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Database, Server, Shield, Zap, Cloud, Code, GitBranch, Container } from "lucide-react";

const TechnicalOverview = () => {
  const architectureComponents = [
    {
      icon: <Server className="h-8 w-8" />,
      title: ".NET Core Backend",
      description: "High-performance API with Entity Framework, SignalR for real-time updates"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "PostgreSQL + Redis",
      description: "Primary database with Redis caching for optimal performance"
    },
    {
      icon: <Container className="h-8 w-8" />,
      title: "Microservices",
      description: "Containerized services with RabbitMQ messaging and auto-scaling"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Kubernetes Ready",
      description: "Production-ready orchestration with CI/CD pipelines included"
    }
  ];

  const securityFeatures = [
    "SSL/TLS encryption for all communications",
    "OAuth 2.0 and JWT token authentication",
    "Role-based access control (RBAC)",
    "API rate limiting and DDoS protection",
    "Data encryption at rest and in transit",
    "Comprehensive audit logging",
    "PCI DSS compliance framework",
    "GDPR data protection ready"
  ];

  const integrations = [
    { name: "Payment Gateways", count: "25+", description: "Stripe, PayPal, crypto wallets" },
    { name: "Game Providers", count: "100+", description: "Slots, live casino, sports" },
    { name: "KYC Providers", count: "10+", description: "Identity verification services" },
    { name: "Bonus Engines", count: "5+", description: "Campaign management tools" }
  ];

  return (
    <section className="py-20 px-4 bg-white" id="technical">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Architecture</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enterprise-grade technology stack designed for scale, security, and performance
          </p>
        </div>

        {/* Architecture Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {architectureComponents.map((component, index) => (
            <Card key={index} className="text-center border-2 hover:border-blue-200 transition-all">
              <CardHeader>
                <div className="text-blue-600 mx-auto mb-4">{component.icon}</div>
                <CardTitle className="text-lg">{component.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{component.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Security & Compliance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Shield className="h-8 w-8 text-blue-600" />
              Security & Compliance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Zap className="h-8 w-8 text-blue-600" />
              Performance Metrics
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">10,000+</div>
                <div className="text-sm text-gray-600">Concurrent users per instance</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">&lt; 100ms</div>
                <div className="text-sm text-gray-600">Average API response time</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">99.99%</div>
                <div className="text-sm text-gray-600">Uptime guarantee</div>
              </div>
            </div>
          </div>
        </div>

        {/* Integrations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Ready Integrations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{integration.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">{integration.count}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription>{integration.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Development Tools */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-3">
            <Code className="h-8 w-8 text-blue-600" />
            Developer Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <GitBranch className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Complete Source Access</h4>
              <p className="text-sm text-gray-600">Full source code with Git repository, no compiled libraries</p>
            </div>
            <div className="text-center">
              <Server className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">API Documentation</h4>
              <p className="text-sm text-gray-600">Interactive Swagger docs with code samples in multiple languages</p>
            </div>
            <div className="text-center">
              <Container className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Deployment Ready</h4>
              <p className="text-sm text-gray-600">Docker containers, Kubernetes manifests, and CI/CD pipelines</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalOverview;
