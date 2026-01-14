"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [typedText, setTypedText] = useState("");
  const fullText = '"Transforming ideas into successful products"';

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString("en-US", { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-300/20 via-rose-300/20 to-pink-200/20 animate-pulse" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass rounded-lg p-6 font-mono text-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-gray-400 ml-4">Terminal</span>
            </div>
            <div className="space-y-2">
              <div>
                <span className="text-green-400">varsha@portfolio</span>
                <span className="text-gray-400">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-400">$</span>
                <span className="ml-2">git status</span>
              </div>
              <div className="text-gray-500">On branch main</div>
              <div className="text-gray-500">Your branch is up to date</div>
              <div className="mt-4">
                <span className="text-green-400">varsha@portfolio</span>
                <span className="text-gray-400">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-400">$</span>
                <span className="ml-2">cat about.txt</span>
              </div>
              <div className="text-pink-300 mt-2">
                {typedText}
                <span className="terminal-cursor ml-1">|</span>
              </div>
            </div>
          </motion.div>

          {/* Right side - Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <div className="mb-6">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="gradient-text">Varsha</span>
                <br />
                <span className="text-white">Prasanna</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-2">
                Product Manager
              </p>
              <p className="text-sm text-gray-500">Available for Hire</p>
            </div>

            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Local time: {currentTime}</span>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div>
                  <span className="text-3xl font-bold gradient-text">30+</span>
                  <p className="text-gray-400">happy clients</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-pink-300 to-rose-300 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-gray-900"
              >
                Hire me
                <ArrowRight size={20} />
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-white/20 rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                View my work
                <ArrowRight size={20} />
              </a>
            </div>

            <p className="mt-8 text-sm text-gray-500">
              From India. For the world.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
