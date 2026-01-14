"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web App",
      year: "2025",
      description: "Modern e-commerce solution with seamless shopping experience",
      image: "bg-gradient-to-br from-pink-300 to-rose-300",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Fitness Tracker",
      category: "Mobile App",
      year: "2025",
      description: "Comprehensive fitness tracking application with analytics",
      image: "bg-gradient-to-br from-blue-600 to-cyan-600",
      tags: ["React Native", "Firebase"],
    },
    {
      title: "Portfolio Website",
      category: "Website",
      year: "2025",
      description: "Beautiful portfolio showcase with modern design",
      image: "bg-gradient-to-br from-pink-200 to-rose-200",
      tags: ["Next.js", "TypeScript", "Tailwind"],
    },
    {
      title: "Dashboard Analytics",
      category: "Web App",
      year: "2024",
      description: "Real-time analytics dashboard with data visualization",
      image: "bg-gradient-to-br from-green-600 to-emerald-600",
      tags: ["Vue.js", "D3.js", "Python"],
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
