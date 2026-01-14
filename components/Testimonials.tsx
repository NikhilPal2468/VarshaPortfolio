"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Exceptional work and a highly intelligent person, exceeds my expectations on every level!",
      author: "Sarah Johnson",
      role: "Sr. Creative Director, TechCorp Inc.",
    },
    {
      text: "I enjoy working with Varsha. Not only did she deliver outstanding results, but she also provided valuable insights throughout the project!",
      author: "Michael Chen",
      role: "Product Manager, StartupXYZ",
    },
    {
      text: "Highly creative and very perceptive. Knows what I wanted and meant, and delivered exceedingly fast.",
      author: "Emily Rodriguez",
      role: "Founder, DesignStudio",
    },
    {
      text: "Varsha transformed our vision into reality with her exceptional design and development skills. Truly remarkable!",
      author: "David Kim",
      role: "CEO, Innovation Labs",
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
          <span className="text-sm text-gray-400 mb-2 block">{" > "} Testimonials</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Words of trust from my clients
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
