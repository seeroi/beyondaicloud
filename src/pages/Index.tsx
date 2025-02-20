
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, BrainCircuit, BarChart3, Database, Code, Server, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <BrainCircuit className="w-8 h-8" />,
    title: "AI & AI Agents",
    description: "Cutting-edge artificial intelligence solutions tailored to your needs",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Generative AI",
    description: "Transform your business with state-of-the-art generative AI technology",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Analytics",
    description: "Data-driven insights to power your decision making",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data Engineering",
    description: "Robust data infrastructure and pipeline solutions",
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "DevOps & AWS",
    description: "Seamless cloud infrastructure and deployment automation",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Full Stack Development",
    description: "End-to-end web and application development",
  },
];

const Index = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const handleConsultation = () => {
    window.open("YOUR_CALENDLY_LINK_HERE", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="container px-4 pt-32 pb-20 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <span className="px-3 py-1 text-sm font-medium text-primary-dark bg-primary/10 rounded-full">
            Innovation Through Technology
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Transform Your Business with Advanced Technology Solutions
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Leverage cutting-edge AI and technology solutions to drive your business forward. Expert services tailored to your unique needs.
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
      <section className="container px-4 py-20 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
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
                  ? "bg-white shadow-lg scale-105"
                  : "bg-white/80 hover:bg-white hover:shadow-md"
              }`}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
              <ArrowRight
                className={`absolute bottom-6 right-6 w-5 h-5 transition-all duration-300 ${
                  isHovered === index
                    ? "text-primary translate-x-1"
                    : "text-gray-400"
                }`}
              />
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
          className="relative isolate overflow-hidden bg-primary rounded-3xl px-6 py-24 text-center shadow-2xl sm:px-16"
        >
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
    </div>
  );
};

export default Index;
