
import { useState } from "react";
import { BrainCircuit, Calendar, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

// Easy to edit content
const websiteContent = {
  company: {
    name: "Beyond AI Cloud",
    description: "Transform Your Business with Enterprise AI & Cloud Solutions",
    subDescription: "Leverage cutting-edge artificial intelligence and cloud technology to accelerate growth, optimize operations, and drive innovation in your enterprise.",
    calendlyLink: "YOUR_CALENDLY_LINK_HERE"
  },
  services: [
    {
      title: "Advanced AI Solutions",
      description: "Cutting-edge AI technologies for intelligent business operations",
      features: ["Agentic AI Development", "Large Language Models", "Custom AI Agents"]
    },
    {
      title: "AI Automation",
      description: "Streamline workflows with intelligent automation",
      features: ["Process Automation", "Workflow Optimization", "Custom Scripts"]
    },
    {
      title: "Data Engineering",
      description: "Build robust data infrastructure",
      features: ["ETL Pipelines", "Data Warehousing", "Real-time Processing"]
    }
  ],
  contact: {
    email: "contact@beyondaicloud.com",
    phone: "+1 (555) 123-4567",
    address: "123 Tech Street, AI City"
  }
};

const Index = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const handleConsultation = () => {
    window.open(websiteContent.company.calendlyLink, "_blank");
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BrainCircuit className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-gray-900">{websiteContent.company.name}</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a>
              <Button onClick={handleConsultation} variant="outline">
                Book Consultation
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container px-4 pt-32 pb-20 mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {websiteContent.company.description}
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {websiteContent.company.subDescription}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button onClick={handleConsultation} className="group relative px-6 py-6 text-lg">
            Schedule a Free AI Consultation
            <Calendar className="ml-2 inline-block w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="container px-4 py-16 mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Comprehensive AI and technology solutions for modern enterprises
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websiteContent.services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl transition-all duration-300 ${
                isHovered === index
                  ? "bg-white shadow-lg border border-primary/20"
                  : "bg-white/80 hover:bg-white hover:shadow-md border border-gray-100"
              }`}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BrainCircuit className="w-8 h-8" />
                <span className="text-xl font-bold">{websiteContent.company.name}</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail className="w-5 h-5" />
                  <span>{websiteContent.contact.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone className="w-5 h-5" />
                  <span>{websiteContent.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-5 h-5" />
                  <span>{websiteContent.contact.address}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} {websiteContent.company.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
