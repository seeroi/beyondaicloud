import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, BrainCircuit, BarChart3, Database, Cloud, Calendar, Mail, Phone, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <BrainCircuit className="w-10 h-10" />,
    title: "AI Automations",
    description: "Transform your workflows with intelligent automation",
    features: ["Process Automation", "Smart Workflows", "AI-Driven Decisions"],
  },
  {
    icon: <Rocket className="w-10 h-10" />,
    title: "Generative AI",
    description: "Create content and solve problems with AI",
    features: ["Text Generation", "Image Creation", "Code Generation"],
  },
  {
    icon: <BarChart3 className="w-10 h-10" />,
    title: "Analytics & Insights",
    description: "Turn data into actionable business insights",
    features: ["Predictive Analytics", "Real-time Dashboards", "Custom Reports"],
  },
  {
    icon: <Database className="w-10 h-10" />,
    title: "Data Engineering",
    description: "Build robust data infrastructure solutions",
    features: ["Data Pipelines", "ETL Processing", "Data Warehousing"],
  },
  {
    icon: <Cloud className="w-10 h-10" />,
    title: "Cloud Solutions",
    description: "Scale your infrastructure across clouds",
    features: ["Multi-cloud Strategy", "Cloud Migration", "DevOps"],
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Product Management",
    description: "Strategic product development and planning",
    features: ["Product Strategy", "Roadmap Planning", "Agile Development"],
  },
];

const Index = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const handleConsultation = () => {
    window.open("YOUR_CALENDLY_LINK_HERE", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-primary/10 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BrainCircuit className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-primary">Beyond AI Cloud</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-gray-200 hover:text-primary transition-colors">Services</a>
              <Button
                onClick={handleConsultation}
                variant="outline"
                className="bg-transparent border-primary text-primary hover:bg-primary hover:text-white font-semibold"
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
          bg-cover bg-center opacity-15 saturate-150"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white/50 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto relative"
        >
          <span className="px-4 py-2 text-sm font-semibold text-white bg-primary/30 rounded-full inline-block shadow-lg">
            Beyond Imagination, Beyond Limits
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl text-gradient">
            Elevate Your Business with Cloud-Powered AI Solutions
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            Where innovation meets implementation. Transforming possibilities into reality with cutting-edge AI technology.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              onClick={handleConsultation}
              className="group relative px-6 py-6 text-lg bg-primary hover:bg-primary-dark transition-all duration-300 text-white font-semibold shadow-xl"
            >
              Schedule a Free Consultation
              <Calendar className="ml-2 inline-block w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section id="services" className="container px-4 py-20 mx-auto relative">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2000')] 
          bg-cover bg-fixed bg-center opacity-10 saturate-150"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-white/80 to-transparent" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive technology solutions for modern businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                isHovered === index
                  ? "bg-white shadow-xl scale-105 border border-primary/20"
                  : "bg-white/80 hover:bg-white hover:shadow-lg border border-gray-100"
              }`}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div className={`text-primary mb-6 transform transition-all duration-300 ${
                isHovered === index ? "scale-110" : ""
              }`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className={`absolute bottom-6 right-6 flex items-center text-sm font-medium ${
                isHovered === index ? "text-primary" : "text-gray-500"
              }`}>
                Learn More
                <ArrowRight className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                  isHovered === index ? "translate-x-1" : ""
                }`} />
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
          className="relative isolate overflow-hidden bg-gradient-to-br from-primary/90 to-primary rounded-3xl px-6 py-24 text-center shadow-2xl sm:px-16"
        >
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=2000')] 
            bg-cover bg-center opacity-20 saturate-150"
          />
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl text-gradient">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
            Schedule a free consultation and discover how our technology solutions can help you achieve your goals.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              onClick={handleConsultation}
              className="group bg-white text-primary hover:bg-gray-100 transition-all duration-300 font-semibold shadow-xl"
            >
              Get Started
              <ArrowRight className="ml-2 inline-block w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BrainCircuit className="w-8 h-8 text-primary" />
                <span className="text-xl font-bold text-primary">Beyond AI Cloud</span>
              </div>
              <p className="text-gray-300 max-w-sm">
                Breaking barriers in AI innovation. Transforming businesses through cutting-edge cloud solutions.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>contact@beyondaicloud.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors">
                  <MapPin className="w-5 h-5" />
                  <span>123 Tech Street, AI City</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <nav className="space-y-3">
                <a href="#services" className="block text-gray-300 hover:text-primary transition-colors">Services</a>
                <a href="#" onClick={handleConsultation} className="block text-gray-300 hover:text-primary transition-colors">Book Consultation</a>
              </nav>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Beyond AI Cloud. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
