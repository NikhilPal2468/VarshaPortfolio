"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Recipient of the $30,000 Duolingo Scholarship, awarded to one Indian woman in recognition of my RuralConnect project focused on building digital solutions for rural communities in India.",
      author: "Duolingo Student Ambassador",
      role: "Oct 2025 – Present | Duolingo Scholarship Winner",
    },
    {
      text: "Featured in Duolingo Blog, APN News, and Purdue Engineering for contributions to digital solutions and product management excellence.",
      author: "Media Recognition",
      role: "Duolingo Blog | APN News | Purdue Engineering",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-gray-400 mb-2 block">{" > "} Awards & Recognition</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Awards & Recognition</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Recognition for excellence and impact
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-xl p-8 md:p-12"
          >
            <Quote className="text-pink-300 mb-6" size={40} />
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              {testimonials[currentIndex].text}
            </p>
            <div>
              <p className="font-semibold text-lg">{testimonials[currentIndex].author}</p>
              <p className="text-gray-400">{testimonials[currentIndex].role}</p>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-pink-300 w-8"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
