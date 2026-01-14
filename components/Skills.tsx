"use client";

import { motion } from "framer-motion";
import { Target, Users, BarChart3, Zap, FileText, GitBranch } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Target,
      title: "Product Strategy",
      description: "Defining product vision, roadmap, and strategic direction",
      color: "from-pink-400 to-rose-400",
    },
    {
      icon: Users,
      title: "Stakeholder Management",
      description: "Collaborating with cross-functional teams and stakeholders",
      color: "from-pink-300 to-rose-300",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decisions",
      description: "Analyzing metrics and user data to drive product decisions",
      color: "from-pink-200 to-rose-200",
    },
    {
      icon: Zap,
      title: "Agile Methodology",
      description: "Leading sprints and managing product backlogs efficiently",
      color: "from-rose-200 to-pink-200",
    },
    {
      icon: FileText,
      title: "Product Documentation",
      description: "Writing PRDs, user stories, and technical specifications",
      color: "from-pink-300 to-rose-400",
    },
    {
      icon: GitBranch,
      title: "Product Development",
      description: "Working closely with engineering teams to ship features",
      color: "from-rose-300 to-pink-300",
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-gray-400 mb-2 block">{" > "} Skills & services</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Skills <span className="gradient-text">& services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Product management expertise to help you build successful products
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-xl p-6 hover:scale-105 transition-transform group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-gray-900" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
