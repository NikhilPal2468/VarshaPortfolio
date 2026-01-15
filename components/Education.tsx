"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Engineering Management",
      school: "Purdue University",
      period: "May 2027 (Expected)",
      location: "West Lafayette, IN",
      gpa: "GPA: 3.8/4.0",
    },
    {
      degree: "BS in Computer Science",
      school: "Visvesvaraya Technological University",
      period: "Jun 2018 - Jul 2022",
      location: "Bengaluru, India",
      gpa: "GPA: 3.7/4.0",
    },
  ];

  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-gray-400 mb-2 block">{" > "} Education</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Academic background and achievements
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
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
                  <GraduationCap className="text-gray-900" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                  <p className="text-pink-300 font-medium mb-2">{edu.school}</p>
                  <p className="text-sm text-gray-400 mb-1">{edu.period}</p>
                  <p className="text-sm text-gray-500 mb-2">{edu.location}</p>
                  <p className="text-sm text-gray-300 font-medium">{edu.gpa}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
