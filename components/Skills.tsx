"use client";

import { motion } from "framer-motion";
import { Target, Users, BarChart3, Zap, FileText, GitBranch, Code, Database, TrendingUp, Settings } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Target,
      title: "Product Roadmap Development",
      description: "Defining product vision, roadmap, and strategic direction",
      color: "from-pink-400 to-rose-400",
    },
    {
      icon: FileText,
      title: "PRD Documentation",
      description: "Writing comprehensive PRDs, user stories, and technical specifications",
      color: "from-pink-300 to-rose-300",
    },
    {
      icon: Users,
      title: "Stakeholder Management",
      description: "Collaborating with cross-functional teams and managing stakeholder relationships",
      color: "from-pink-200 to-rose-200",
    },
    {
      icon: BarChart3,
      title: "Data Analysis & A/B Testing",
      description: "Analyzing metrics, user data, and conducting A/B tests to drive decisions",
      color: "from-rose-200 to-pink-200",
    },
    {
      icon: TrendingUp,
      title: "Go-to-Market Strategy",
      description: "Developing and executing go-to-market strategies for product launches",
      color: "from-pink-300 to-rose-400",
    },
    {
      icon: Code,
      title: "Technical Skills",
      description: "SQL, Python, REST APIs, Git, BigQuery, Tableau, Power BI",
      color: "from-rose-300 to-pink-300",
    },
    {
      icon: Settings,
      title: "Tools & Platforms",
      description: "Jira, Confluence, Agile Development, Scrum methodologies",
      color: "from-pink-400 to-rose-300",
    },
    {
      icon: Database,
      title: "User Research",
      description: "Conducting user research, competitive analysis, and feature prioritization",
      color: "from-rose-400 to-pink-400",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
