"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "App Dev Lead",
      company: "Indihood",
      period: "Jan 2025 - Jul 2025",
      location: "Bengaluru, India",
      description: "Led end-to-end delivery of the National ID verification feature by defining product requirements and aligning stakeholders, resulting in 46,000 new borrower registrations and a 70% reduction in verification time. Drove product roadmap strategy for OTP verification, using data-driven vendor evaluation across 8+ providers to define requirements and select a scalable solution, reducing projected operating costs by 18%. Led 5-developer team managing 8 PRDs, reducing loan application defects by 40% by validating edge cases and coordinating partner integrations across high-volume workflows.",
    },
    {
      title: "Application Developer",
      company: "Indihood",
      period: "Feb 2024 – Dec 2024",
      location: "Bengaluru, India",
      description: "Built real-time API performance dashboard with vendor SLA tracking, reducing failed calls by 35% and enabling data-driven product ops decisions. Integrated AI/ML-powered liveness detection and OCR into onboarding, processing 90k+ user profiles while reducing rejection rates by 60% and onboarding time by 25% (12→9 minutes).",
    },
    {
      title: "Associate Software Dev II",
      company: "Capgemini",
      period: "Sep 2022 – Jan 2024",
      location: "Bengaluru, India",
      description: "Delivered cross-functional process improvement by designing and building supersede workflow, improving document transfer efficiency by 20% and strengthening collaboration across international teams. Mitigated critical program delivery risk by leading 12+ UAT cycles and coordinating disaster recovery protocols across 10+ Teamcenter modules with Microsoft UK and Norway teams, ensuring system resilience.",
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
                  <p className="text-sm text-gray-400 mb-1">{exp.period}</p>
                  {exp.location && <p className="text-sm text-gray-500 mb-3">{exp.location}</p>}
                  <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
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
