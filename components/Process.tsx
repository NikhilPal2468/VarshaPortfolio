"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Users, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery",
      description: "Conducting user research, analyzing market trends, and identifying opportunities to define product vision and strategy.",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Ideation",
      description: "Brainstorming solutions, creating user stories, defining product requirements, and prioritizing features.",
    },
    {
      number: "03",
      icon: Users,
      title: "Execution",
      description: "Collaborating with engineering and design teams, managing sprints, and ensuring timely delivery of features.",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch & Iterate",
      description: "Launching products, monitoring metrics, gathering user feedback, and iterating based on data-driven insights.",
    },
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-gray-400 mb-2 block">{" > "} Product process</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Product <span className="gradient-text">process</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Pipeline of how I approach, build, and deliver successful products
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-xl p-6 hover:scale-105 transition-transform group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-bold text-gray-700">{step.number}</span>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-300 to-rose-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="text-gray-900" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
