"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Contact <span className="gradient-text">me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Fill in form below or reach out directly
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>
              <p className="text-gray-400 mb-8">
                I'm currently available for new projects. Let's create something amazing together!
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:varsha@example.com"
                className="flex items-center gap-4 glass rounded-lg p-4 hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-300 to-rose-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={20} className="text-gray-900" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white">varsha@example.com</p>
                </div>
              </a>

              <a
                href="tel:+1234567890"
                className="flex items-center gap-4 glass rounded-lg p-4 hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-300 to-rose-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={20} className="text-gray-900" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white">+1 (234) 567-890</p>
                </div>
              </a>

              <div className="flex items-center gap-4 glass rounded-lg p-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-300 to-rose-300 flex items-center justify-center">
                  <MapPin size={20} className="text-gray-900" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg glass flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg glass flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg glass flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-pink-300 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-pink-300 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-6 py-3 bg-gradient-to-r from-pink-300 to-rose-300 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2 text-gray-900"
              >
                {status === "sending" ? (
                  "Sending..."
                ) : status === "success" ? (
                  "Message sent!"
                ) : (
                  <>
                    Send message
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
        <p>© 2025 Varsha Prasanna. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
