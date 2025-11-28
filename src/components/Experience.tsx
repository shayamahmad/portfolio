import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      role: "Partnership Relations & AI Development Associate",
      company: "CAARYA",
      location: "Hyderabad, India",
      period: "Sep 2025 - Present",
      highlights: [
        "Handled partnership and stakeholder coordination with structured communication",
        "Developed AI platform analyzing FAQs and podcasts for early-stage founders",
        "Applied computational thinking to enhance decision-logic and platform accuracy",
      ],
    },
    {
      role: "Research Intern",
      company: "C.V. Raman Global University",
      location: "Bhubaneswar, India",
      period: "Aug 2025 - Present",
      highlights: [
        "Conducting research on Brain Tumor Detection using MRI images",
        "Developing models with EfficientNet-B3, Inception V3, ResNet-50, and GNNs",
        "Achieved 97% accuracy on tumor detection model",
        "Contributing to research paper on spatial feature learning",
      ],
    },
    {
      role: "Web Developer",
      company: "Bluestock Fintech",
      location: "Chennai, India",
      period: "Dec 2024 - Jan 2025",
      highlights: [
        "Built responsive interfaces with HTML, CSS, and JavaScript",
        "Created modular components improving stability and maintainability",
        "Collaborated with designers and backend teams for seamless integration",
      ],
    },
    {
      role: "Tutor",
      company: "I.T. Circle",
      location: "Dhanbad, India",
      period: "Feb 2024 - May 2025",
      highlights: [
        "Taught Mathematics and Computer Science to 85+ students",
        "Developed personalized learning plans with data-informed evaluation",
        "Strengthened analytical reasoning and computational thinking skills",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Building, learning, and contributing across AI, research, and development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50" />

                <div className={index % 2 === 0 ? "md:pr-12" : "md:col-start-2 md:pl-12"}>
                  <div className="glass-card p-6 md:p-8 rounded-2xl hover:bg-card/50 transition-all ml-8 md:ml-0">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <div className={index % 2 === 0 ? "md:text-right flex-1" : "flex-1"}>
                        <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
