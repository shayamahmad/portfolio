import { motion } from "framer-motion";
import { Brain, Code, Sparkles } from "lucide-react";

export const About = () => {
  const interests = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Deep learning, neural networks, and computational modeling",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building scalable web applications with modern frameworks",
    },
    {
      icon: Sparkles,
      title: "3D Visualization",
      description: "Creating immersive experiences with Three.js and WebGL",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Driven by curiosity about how learning systems work internally. My research focuses on
            understanding representation evolution, model stability, and the impact of input variations
            on system behavior.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl hover:bg-card/50 transition-all group"
            >
              <div className="mb-4 inline-block p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <interest.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{interest.title}</h3>
              <p className="text-muted-foreground">{interest.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Current Focus</h3>
          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              Currently pursuing B.Tech in Computer Science at C.V. Raman Global University, where I'm
              conducting research on <span className="text-primary font-semibold">Brain Tumor Detection</span> using
              advanced deep learning architectures including EfficientNet-B3, Inception V3, and Graph Neural Networks.
            </p>
            <p className="leading-relaxed">
              As a Partnership Relations & AI Development Associate at CAARYA, I'm building an AI platform
              that analyzes FAQs and podcast transcripts to guide early-stage founders, combining my
              expertise in computational thinking with practical product development.
            </p>
            <p className="leading-relaxed">
              My research interests lie at the intersection of principled machine learning and robust
              architectures, with a focus on understanding how representations evolve and why small input
              shifts can cause significant failures in learning systems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
