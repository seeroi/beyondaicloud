import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, BarChart3, Database, Cloud, Calendar, Mail, Phone, MapPin, Users, Bot, MessageSquareCode, GitBranch, FileCode2, Zap, Workflow, Cog, Server, Terminal, Briefcase, Kanban, ListTree, ChartBar } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <BrainCircuit className="w-10 h-10" />,
    title: "Advanced AI Solutions",
    description: "Cutting-edge AI technologies for intelligent business operations",
    features: [
      "Agentic AI Development",
      "Large Language Models (LLMs)",
      "Custom AI Agents",
      "RAG (Retrieval Augmented Generation)",
      "Autonomous AI Systems",
      "Knowledge Base Integration",
      "Text & Code Generation",
      "Image & Video Synthesis",
      "Voice & Speech Processing",
      "Custom GPT Models",
      "Prompt Engineering",
      "Fine-tuning & Training"
    ],
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "AI Automation",
    description: "Streamline workflows with intelligent automation",
    features: [
      "Zapier Integration",
      "N8N Workflow Design",
      "Custom Automation Scripts",
      "Process Optimization",
      "API Integrations",
      "Automated Testing"
    ],
  },
  {
    icon: <Database className="w-10 h-10" />,
    title: "Data Engineering",
    description: "Build robust data infrastructure and pipelines",
    features: [
      "ETL Pipeline Development",
      "Data Warehouse Design",
      "Real-time Processing",
      "Data Lake Architecture",
      "Stream Processing",
      "Data Quality Management"
    ],
  },
  {
    icon: <Cloud className="w-10 h-10" />,
    title: "DevOps Solutions",
    description: "End-to-end cloud infrastructure and deployment",
    features: [
      "AWS/GCP/Azure Services",
      "Digital Ocean Setup",
      "Lambda Functions",
      "Container Orchestration",
      "CI/CD Pipelines",
      "Infrastructure as Code"
    ],
  },
  {
    icon: <Briefcase className="w-10 h-10" />,
    title: "Product Management",
    description: "Strategic product development and lifecycle management",
    features: [
      "Product Strategy",
      "Agile Development",
      "Sprint Planning",
      "Feature Prioritization",
      "User Story Mapping",
      "Release Management"
    ],
  },
  {
    icon: <ChartBar className="w-10 h-10" />,
    title: "Analytics & BI",
    description: "Transform data into actionable insights",
    features: [
      "Business Intelligence",
      "Custom Dashboards",
      "Predictive Analytics",
      "KPI Tracking",
      "Data Visualization",
      "Performance Metrics"
    ],
  }
];

const Index = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const handleConsultation = () => {
    window.open("YOUR_CALENDLY_LINK_HERE", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BrainCircuit className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-gray-900">Beyond AI Cloud</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a>
              <Button
                onClick={handleConsultation}
                variant="outline"
                className="bg-transparent border-primary text-primary hover:bg-primary hover:text-white"
              >
                Book Consultation
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container px-4 pt-32 pb-20 mx-auto text-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=2000')] 
          bg-cover bg-center opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto relative"
        >
          <span className="px-3 py-1 text-sm font-medium text-primary-dark bg-primary/10 rounded-full">
            Beyond Imagination, Beyond Limits
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Elevate Your Business with Cloud-Powered AI Solutions
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Where innovation meets implementation. Transforming possibilities into reality with cutting-edge AI technology.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              onClick={handleConsultation}
              className="group relative px-6 py-6 text-lg bg-primary hover:bg-primary-dark transition-all duration-300"
            >
              Schedule a Free Consultation
              <Calendar className="ml-2 inline-block w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section id="services" className="container px-4 py-16 mx-auto relative">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2000')] 
          bg-cover bg-fixed bg-center opacity-10 saturate-150"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-white/80 to-transparent" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8 relative"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Comprehensive AI and technology solutions for modern enterprises
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-4 rounded-xl transition-all duration-300 ${
                isHovered === index
                  ? "bg-white shadow-lg scale-102 border border-primary/20"
                  : "bg-white/80 hover:bg-white hover:shadow-md border border-gray-100"
              }`}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div className="flex items-start space-x-4">
                <div className={`text-primary transform transition-all duration-300 ${
                  isHovered === index ? "scale-110" : ""
                }`}>
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1 h-1 rounded-full bg-primary mr-2 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-20 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative isolate overflow-hidden bg-gradient-to-br from-primary to-primary-dark rounded-3xl px-6 py-24 text-center shadow-2xl sm:px-16"
        >
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=2000')] 
            bg-cover bg-center opacity-10"
          />
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90">
            Schedule a free consultation and discover how our technology solutions can help you achieve your goals.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              onClick={handleConsultation}
              className="group bg-white text-primary hover:bg-gray-100 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 inline-block w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 text-white mb-4">
                <BrainCircuit className="w-8 h-8" />
                <span className="text-xl font-bold">Beyond AI Cloud</span>
              </div>
              <p className="text-gray-400 max-w-sm">
                Breaking barriers in AI innovation. Transforming businesses through cutting-edge cloud solutions.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail className="w-5 h-5" />
                  <span>contact@beyondaicloud.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span>123 Tech Street, AI City</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <nav className="space-y-3">
                <a href="#services" className="block text-gray-400 hover:text-white transition-colors">Services</a>
                <a href="#" onClick={handleConsultation} className="block text-gray-400 hover:text-white transition-colors">Book Consultation</a>
              </nav>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Beyond AI Cloud. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
