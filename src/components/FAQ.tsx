
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What licensing terms are included with the source code?",
      answer: "You receive a perpetual license to use, modify, and deploy the source code for your casino operation. The license includes the right to customize the platform, integrate with third-party services, and deploy multiple instances. You own your customizations and can operate indefinitely without additional licensing fees to us."
    },
    {
      question: "How do I integrate game content from providers?",
      answer: "Our platform includes pre-built connectors for 100+ game providers including NetEnt, Pragmatic Play, Evolution Gaming, and more. We provide detailed integration guides and sample code for each provider. Most integrations can be completed in 2-4 weeks depending on the provider's certification requirements."
    },
    {
      question: "Is the platform ready for regulatory compliance?",
      answer: "Yes, our platform is built with regulatory compliance in mind. It includes player protection tools, responsible gambling features, audit logging, and data protection measures required by most jurisdictions. However, specific regulatory requirements vary by jurisdiction, and you should consult with legal experts for your target markets."
    },
    {
      question: "What payment methods and currencies are supported?",
      answer: "The platform supports 25+ payment gateways including Stripe, PayPal, Skrill, and cryptocurrency wallets. It handles multiple currencies, automatic conversion, and has built-in anti-fraud measures. KYC/AML workflows are included with integration to major identity verification providers."
    },
    {
      question: "How scalable is the platform architecture?",
      answer: "The platform is built on microservices architecture with containerized deployment. It can handle 10,000+ concurrent users per instance and scales horizontally. We provide Kubernetes configurations and auto-scaling setups. Our largest clients process millions of transactions daily without performance issues."
    },
    {
      question: "What ongoing support is provided after purchase?",
      answer: "Enterprise licenses include 24/7 technical support during setup and ongoing assistance. We provide regular security updates, bug fixes, and platform improvements. Our team helps with deployment, third-party integrations, and performance optimization. Support includes Slack channel access and dedicated account management."
    },
    {
      question: "Can I customize the platform for my brand?",
      answer: "Absolutely. You receive full source code access, allowing complete customization of the platform. This includes UI/UX modifications, custom game development, unique bonus mechanics, and branded player experiences. Our team can provide development services for major customizations."
    },
    {
      question: "What's included in the technical documentation?",
      answer: "Complete documentation includes API references, database schemas, deployment guides, architecture diagrams, and code samples. We provide setup tutorials, integration guides for popular services, and best practices for security and performance. Documentation is regularly updated with new features and improvements."
    },
    {
      question: "How long does implementation typically take?",
      answer: "Basic deployment can be completed in 4-6 weeks for experienced development teams. This includes platform setup, basic customization, and key integrations. Full-featured casino launch typically takes 3-6 months depending on customization requirements, regulatory approvals, and testing phases."
    },
    {
      question: "Do you offer revenue sharing partnerships?",
      answer: "Yes, for qualified operators we offer revenue sharing models as an alternative to upfront licensing fees. This includes reduced initial costs in exchange for ongoing revenue share. We also consider equity partnerships for innovative casino concepts or strategic market opportunities."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our casino platform source code
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline hover:text-blue-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <div className="space-x-4">
            <a href="mailto:sales@casinosource.com" className="text-blue-600 hover:underline font-medium">
              Email our sales team
            </a>
            <span className="text-gray-400">•</span>
            <a href="tel:+15551234567" className="text-blue-600 hover:underline font-medium">
              Call +1 (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
