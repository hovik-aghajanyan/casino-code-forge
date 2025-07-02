
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Check, Download, FileText, Code } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadCaptureModal = ({ isOpen, onClose }: LeadCaptureModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    projectType: "",
    timeline: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Request Submitted Successfully!",
      description: "We'll send you the technical documentation and code samples within 24 hours.",
    });
    
    setIsSubmitting(false);
    onClose();
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      role: "",
      projectType: "",
      timeline: "",
      budget: "",
      message: ""
    });
  };

  const benefits = [
    "Complete technical documentation",
    "Live code samples and demos", 
    "Architecture overview and diagrams",
    "Pricing and licensing details",
    "Free consultation call with our experts"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Get Full Access to Casino Platform Documentation</DialogTitle>
          <DialogDescription className="text-base">
            Complete technical specs, code samples, and implementation guides for our casino source code platform.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  placeholder="John Doe"
                />
              </div>
              <div>
                <Label htmlFor="email">Business Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  required
                  placeholder="Your Casino/Agency"
                />
              </div>
              <div>
                <Label htmlFor="role">Your Role</Label>
                <Select value={formData.role} onValueChange={(value) => setFormData({...formData, role: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ceo">CEO/Founder</SelectItem>
                    <SelectItem value="cto">CTO/Tech Lead</SelectItem>
                    <SelectItem value="pm">Product Manager</SelectItem>
                    <SelectItem value="dev">Developer</SelectItem>
                    <SelectItem value="consultant">Consultant</SelectItem>
                    <SelectItem value="investor">Investor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="projectType">Project Type</Label>
                <Select value={formData.projectType} onValueChange={(value) => setFormData({...formData, projectType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new-casino">New Casino Launch</SelectItem>
                    <SelectItem value="platform-migration">Platform Migration</SelectItem>
                    <SelectItem value="white-label">White Label Solution</SelectItem>
                    <SelectItem value="custom-development">Custom Development</SelectItem>
                    <SelectItem value="evaluation">Technology Evaluation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="timeline">Launch Timeline</Label>
                <Select value={formData.timeline} onValueChange={(value) => setFormData({...formData, timeline: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">ASAP (&lt; 3 months)</SelectItem>
                    <SelectItem value="short">3-6 months</SelectItem>
                    <SelectItem value="medium">6-12 months</SelectItem>
                    <SelectItem value="long">12+ months</SelectItem>
                    <SelectItem value="exploring">Just exploring</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="message">Project Details (Optional)</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Tell us about your casino project, target markets, specific requirements..."
                className="min-h-[100px]"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Get Complete Documentation"}
              {!isSubmitting && <Download className="ml-2 h-5 w-5" />}
            </Button>

            <p className="text-sm text-gray-500 text-center">
              By submitting this form, you agree to receive technical documentation and product updates.
            </p>
          </form>

          {/* Benefits */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">What You'll Receive:</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                Technical Documentation Includes:
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">API</Badge>
                  <span>Complete REST API documentation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">DB</Badge>
                  <span>Database schema and migrations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">CODE</Badge>
                  <span>Sample implementations and SDKs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">DEPLOY</Badge>
                  <span>Deployment guides and Docker configs</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Fast Response Guarantee</h4>
              <p className="text-sm text-gray-600">
                Our team responds to all qualified requests within 4 business hours. 
                Technical consultations typically scheduled within 24-48 hours.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureModal;
