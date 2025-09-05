'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Home() {
  // Typing effect texts
  const texts = ["Data Analyst", "Power BI Developer | MIS executive", "Ads Maker & Promoter"];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (index >= texts.length) return;

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (forward ? 1 : -1));
      if (forward && subIndex === texts[index].length) {
        setForward(false);
      } else if (!forward && subIndex === 0) {
        setForward(true);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, forward ? 100 : 60);

    setCurrentText(texts[index].substring(0, subIndex));
    return () => clearTimeout(timeout);
  }, [subIndex, index, forward]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background blobs */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <motion.div
        className="relative z-10 px-6 max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Photo */}
        <div className="flex justify-center mb-6">
          <img
            src="/profile.jpg"
            alt="Ajay Sable"
            className="w-32 h-32 rounded-full border-4 border-blue-600 shadow-lg object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-extrabold dark:text-white">
          Hi, I’m <span className="text-blue-600">Ajay Sable</span>
        </h1>

        {/* Typing effect subtitle */}
        <p className="mt-4 text-lg md:text-2xl text-gray-700 dark:text-gray-300 h-10">
          {currentText}
          <span className="animate-pulse">|</span>
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <a href="/projects" className="btn btn-primary">View My Work</a>
          <a href="/Resume-A.Sable.pdf" download className="btn btn-outline">Download CV</a>
          <a href="/contact" className="btn btn-primary bg-green-600 hover:bg-green-700">
            Hire Me
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center gap-6 text-2xl">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:scale-110 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-white hover:scale-110 transition">
            <FaGithub />
          </a>
          <a href="mailto:ajay2sabale@gmail.com" className="text-red-600 hover:scale-110 transition">
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
