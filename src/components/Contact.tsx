import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "shayamahmad74@gmail.com",
      href: "mailto:shayamahmad74@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/shayamahmad",
      href: "https://www.linkedin.com/in/shayamahmad",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/shayamahmad",
      href: "https://github.com/shayamahmad",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7050640240",
      href: "tel:+917050640240",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating on research, discussing AI projects, or exploring opportunities?
            Let's connect!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-2xl"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.label !== "Email" && method.label !== "Phone" ? "_blank" : undefined}
                rel={method.label !== "Email" && method.label !== "Phone" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <method.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{method.label}</p>
                  <p className="font-medium">{method.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold neon-border">
              <a href="mailto:shayamahmad74@gmail.com">Send a Message</a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-muted-foreground"
        >
          <p>© Shayam Ahmad.</p>
        </motion.div>
      </div>
    </section>
  );
};
