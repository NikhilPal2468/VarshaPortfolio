"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Purdue Athletics - Recruiting Dashboards",
      category: "Project Management",
      year: "Dec 2025 – Present",
      description: "Leading a 15-member team to build recruiting dashboards for Purdue Women's Soccer by analyzing 500+ athlete profiles, conducting weekly reviews with coaching staff to support recruiting decisions",
      image: "bg-gradient-to-br from-pink-300 to-rose-300",
      tags: ["Project Management", "Data Analysis", "Stakeholder Management"],
    },
    {
      title: "Costco - Supply Chain Optimization",
      category: "Project Management",
      year: "Aug 2025 – Dec 2025",
      description: "Led a 12-member undergrad team to build ML models using weather and transport data to strengthen Costco's supply chain resilience by optimizing delivery schedules and reducing spoilage",
      image: "bg-gradient-to-br from-blue-600 to-cyan-600",
      tags: ["ML Models", "Supply Chain", "Python", "Data Science"],
    },
    {
      title: "Silo Africa - Business Model Analysis",
      category: "Consulting",
      year: "Aug 2025 – Dec 2025",
      description: "Analyzed user retention patterns and modeled 3–4 revenue scenarios, delivering data-driven recommendations to improve the scalability of Silo Africa's business model",
      image: "bg-gradient-to-br from-green-600 to-emerald-600",
      tags: ["Business Analysis", "Data Modeling", "Strategy"],
    },
    {
      title: "RuralConnect - Digital Solutions",
      category: "Social Impact",
      year: "2025",
      description: "Project focused on building digital solutions for rural communities in India. Recognized with $30,000 Duolingo Scholarship awarded to one Indian woman",
      image: "bg-gradient-to-br from-purple-600 to-pink-600",
      tags: ["Social Impact", "Digital Solutions", "Rural Development"],
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-gray-400 mb-2 block">{" > "} Featured projects</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Featured <span className="gradient-text">projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of proudly selected works
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="glass rounded-xl overflow-hidden hover:scale-[1.02] transition-transform">
                <div className={`h-64 ${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                      <ExternalLink size={16} className="text-white" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Github size={16} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">{project.category}</span>
                    <span className="text-sm text-gray-400">{project.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
