"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Product Manager",
      company: "TechCorp Inc.",
      period: "2024 - present",
      description: "Leading product strategy and roadmap for multiple product lines, driving growth and user engagement",
    },
    {
      title: "Product Manager",
      company: "StartupXYZ",
      period: "2022 - 2024",
      description: "Managed end-to-end product lifecycle, collaborated with engineering and design teams to ship impactful features",
    },
    {
      title: "Associate Product Manager",
      company: "DesignStudio",
      period: "2020 - 2022",
      description: "Supported product initiatives, conducted user research, and defined product requirements",
    },
    {
      title: "Product Analyst",
      company: "Innovation Labs",
      period: "2019 - 2020",
      description: "Started my journey in product management, analyzing user data and supporting product decisions",
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-gray-400 mb-2 block">{" > "} Work journey</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Work <span className="gradient-text">journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Companies I've improved with
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-xl p-6 hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-300 to-rose-300 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-gray-900" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-pink-300 font-medium mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
