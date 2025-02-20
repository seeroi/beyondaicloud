
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BrainCircuit } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Enterprise AI and how can it benefit my business?",
    answer: "Enterprise AI refers to the implementation of artificial intelligence solutions across an organization's operations. It can benefit your business through automation of routine tasks, enhanced decision-making with data analytics, improved customer service with AI chatbots, and optimization of business processes leading to increased efficiency and reduced costs."
  },
  {
    question: "How do I know if my business is ready for AI implementation?",
    answer: "Key indicators of AI readiness include: having clear business problems to solve, access to quality data, technical infrastructure to support AI systems, and a team willing to adapt to new technologies. We offer free consultations to assess your organization's AI readiness and identify the most impactful starting points."
  },
  {
    question: "What's the difference between cloud computing and traditional infrastructure?",
    answer: "Cloud computing provides on-demand access to computing resources over the internet, offering greater flexibility, scalability, and cost-efficiency compared to traditional infrastructure. Instead of maintaining physical servers, cloud solutions allow you to pay only for the resources you use and easily scale up or down based on demand."
  },
  {
    question: "How long does it typically take to implement an AI solution?",
    answer: "Implementation timelines vary based on the complexity of the solution and your organization's readiness. Simple automation projects might take 2-3 months, while complex enterprise-wide AI implementations could take 6-12 months. We provide detailed timelines during our initial consultation based on your specific needs."
  },
  {
    question: "What kind of ROI can I expect from AI implementation?",
    answer: "ROI varies by industry and use case, but common results include: 20-30% reduction in operational costs through automation, 15-25% improvement in customer satisfaction through AI-powered services, and 30-40% increase in productivity through optimized workflows. We can provide industry-specific case studies and ROI calculations during consultation."
  },
  {
    question: "How do you ensure data security and privacy in AI implementations?",
    answer: "We implement multiple layers of security including encryption, access controls, and compliance measures. Our solutions adhere to industry standards (GDPR, HIPAA, etc.) and we conduct regular security audits. We also provide training on data security best practices for your team."
  }
];

const FAQ = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <BrainCircuit className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-gray-900">Beyond AI Cloud</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link to="/faq" className="text-gray-600 hover:text-primary transition-colors">FAQ</Link>
              <Link to="/blog" className="text-gray-600 hover:text-primary transition-colors">Blog</Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="container px-4 pt-32 pb-20 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </main>
  );
};

export default FAQ;
