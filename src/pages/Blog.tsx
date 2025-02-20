
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    slug: "ai-transformation-enterprise",
    title: "AI Transformation in Enterprise: A Comprehensive Guide",
    excerpt: "Learn how enterprises are leveraging AI to transform their operations and drive innovation.",
    category: "Enterprise AI",
    date: "2024-03-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200"
  },
  {
    slug: "cloud-infrastructure-optimization",
    title: "Cloud Infrastructure Optimization Strategies",
    excerpt: "Discover best practices for optimizing your cloud infrastructure and reducing costs.",
    category: "Cloud Computing",
    date: "2024-03-10",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200"
  },
  {
    slug: "llm-implementation-guide",
    title: "Implementing Large Language Models in Production",
    excerpt: "A practical guide to deploying and managing LLMs in production environments.",
    category: "AI Development",
    date: "2024-03-05",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200"
  }
];

const Blog = () => {
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
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Latest Insights</h1>
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover md:w-48"
                      src={post.image}
                      alt={post.title}
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
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
                    <Link to={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`}>
                      <Button variant="ghost" className="text-primary hover:text-primary-dark">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Blog;
