
import { motion } from "framer-motion";
import { Link, useParams, useNavigate } from "react-router-dom";
import { BrainCircuit, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const blogPosts = {
  "ai-transformation-enterprise": {
    title: "AI Transformation in Enterprise: A Comprehensive Guide",
    category: "Enterprise AI",
    date: "2024-03-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200",
    content: `
      <h2>Introduction to Enterprise AI Transformation</h2>
      <p>Artificial Intelligence (AI) is revolutionizing how enterprises operate, make decisions, and serve their customers. This comprehensive guide explores the key aspects of AI transformation and how organizations can successfully implement AI solutions.</p>

      <h2>Key Components of AI Transformation</h2>
      <ul>
        <li>Data Infrastructure and Management</li>
        <li>Machine Learning Operations (MLOps)</li>
        <li>Change Management and Team Training</li>
        <li>Integration with Existing Systems</li>
      </ul>

      <h2>Implementation Strategy</h2>
      <p>A successful AI transformation requires a well-planned strategy that considers:</p>
      <ul>
        <li>Business objectives and KPIs</li>
        <li>Technical requirements and infrastructure</li>
        <li>Team capabilities and training needs</li>
        <li>Budget and resource allocation</li>
      </ul>

      <h2>Real-World Applications</h2>
      <p>Learn from successful AI implementations across various industries:</p>
      <ul>
        <li>Predictive maintenance in manufacturing</li>
        <li>Customer service automation in retail</li>
        <li>Risk assessment in financial services</li>
        <li>Supply chain optimization in logistics</li>
      </ul>
    `
  },
  // Add more blog posts here
};

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts[slug as keyof typeof blogPosts];

  useEffect(() => {
    if (!post) {
      navigate("/blog");
    }
  }, [post, navigate]);

  if (!post) return null;

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
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Link to="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-xl mb-8"
          />

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </time>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-8">{post.title}</h1>

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.article>
      </div>
    </main>
  );
};

export default BlogPost;
