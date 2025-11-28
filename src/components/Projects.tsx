import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Brain Tumor Detection System",
      description: "Advanced deep learning model using EfficientNet-B3, Inception V3, and GNNs for MRI-based tumor detection. Achieved 97% accuracy with spatial feature learning.",
      tech: ["Python", "TensorFlow", "PyTorch", "OpenCV", "GNN"],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "AI Startup Advisory Platform",
      description: "Intelligent platform analyzing FAQs and podcast transcripts to provide data-driven guidance for early-stage founders using NLP and decision logic systems.",
      tech: ["Python", "NLP", "React", "Node.js", "MongoDB"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "3D Portfolio Website",
      description: "Immersive 3D portfolio experience built with React Three Fiber, featuring interactive elements, smooth animations, and modern glassmorphism design.",
      tech: ["React", "Three.js", "TypeScript", "Framer Motion"],
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with product management, cart functionality, and secure payment integration. Built with modern web technologies.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      gradient: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Building innovative solutions at the intersection of AI and web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl overflow-hidden group hover:bg-card/50 transition-all"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
