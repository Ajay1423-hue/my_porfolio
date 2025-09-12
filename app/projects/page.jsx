'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaGithub } from "react-icons/fa";

export default function Projects(){
  const [activeProject, setActiveProject] = useState(null);
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Global AI Jobs & Salary Trends Dashboard",
      category: "Dashboard",
      desc: "Explores the global AI job market with salary insights by country, role, and industry.",
      img: "/Global-AI.png",
      video: "/Global-AI-Salary-Trends.mp4",
      tools: "Power BI Maps, DAX, Power Query, Kaggle datasets",
      features: [
        "📊 Interactive dashboard with maps & slicers",
        "🌍 Top hiring countries & salary benchmarks",
        "💼 Role-based job demand & pay scales",
        "📈 5-year salary growth trends",
      ],
      outcome: "Helped job seekers & recruiters understand trending roles and salary expectations globally."
    },
    {
      title: "HR Analytics Dashboard",
      category: "Dashboard",
      desc: "Analyzes employee data for attrition, recruitment, and workforce performance.",
      img: "/HR-Analytic.png",
      video: "/HR-Analytics-Dashboard.mp4",
      tools: "Power BI, Power Query, Excel, KPI Cards",
      github: "https://github.com/Ajay1423-hue/HR-Analytics-Dashboard",
      features: [
        "👥 Employee overview by dept, gender, age",
        "📉 Attrition drilldowns by location & tenure",
        "📊 Recruitment & cost efficiency metrics",
        "📈 Workforce growth & forecasting"
      ],
      outcome: "Enabled HR teams to reduce attrition & improve recruitment planning."
    },
    {
      title: "Customer Sentiment Analysis Dashboard",
      category: "Dashboard",
      desc: "Measures customer satisfaction & feedback through sentiment breakdown.",
      img: "/Customer-Sentiment.png",
      github: "https://github.com/Ajay1423-hue/Customer-Sentiment-Dashboard",
      video: "/Customer-Sentiment-Analysis.mp4",
      tools: "Power BI, SQL, Word Cloud Visual, Kaggle datasets",
      features: [
        "🗣️ Sentiment breakdown (Positive/Neutral/Negative)",
        "⭐ Metrics: NPS, CSAT, CES",
        "📊 Feedback word cloud & complaints analysis",
        "🌍 Regional/product drilldowns with trends"
      ],
      outcome: "Helped business improve customer retention & product quality."
    },
    {
      title: "🏋️ Fitness Gym Banner",
      category: "Ad Campaign",
      desc: "Bold & motivational gym ad banner for memberships.",
      img: "/Fitness.png",
      tools: "Canva / Photoshop",
      features: [
        "🎨 Strong typography & contrasting colors",
        "💪 Featured muscular figure for instant impact",
        "⚡ Clear CTA: Join Now, Get Fit Today"
      ],
      outcome: "Boosted gym membership inquiries & created energetic brand image."
    },
    {
      title: "🍕 Café / Food Delivery Banner",
      category: "Ad Campaign",
      desc: "Mouth-watering banner promoting food delivery & offers.",
      img: "/Cafe.png",
      tools: "Canva / Illustrator",
      features: [
        "🍔 Food visuals (Pizza, Burger, Coffee) for appeal",
        "📢 Highlighted discount & starting price",
        "⏳ Limited-time offer to drive urgency"
      ],
      outcome: "Increased online food orders & enhanced café visibility."
    }
  ];

  // Filtering projects
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="relative min-h-screen py-16 px-6 overflow-hidden">
      {/* 🔵 Animated Background Blobs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full filter blur-3xl"
        animate={{ x: [0, 40, -30, 0], y: [0, 20, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/30 rounded-full filter blur-3xl"
        animate={{ x: [0, -50, 30, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full filter blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <motion.h1
          className="section-title dark:text-white text-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h1>
        
        {/* Filter Tabs */}
        <motion.div 
          className="flex justify-center gap-4 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {["All","Dashboard","Ad Campaign"].map(cat=>(
            <motion.button key={cat}
              onClick={()=>setFilter(cat)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-xl border transition ${
                filter===cat 
                  ? "bg-indigo-600 text-white border-indigo-600" 
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-indigo-50"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredProjects.map((p,i)=>(
            <motion.div key={i}
              className="card overflow-hidden flex flex-col cursor-pointer"
              initial={{ opacity:0, scale: 0.9 }}
              whileInView={{ opacity:1, scale:1 }}
              whileHover={{ scale: 1.05, rotateZ: 1 }}
              transition={{ duration:0.6, delay:i*0.15 }}
              onClick={()=>setActiveProject(p)}
            >
              <div className="bg-gray-200 dark:bg-gray-800 h-40 flex items-center justify-center text-gray-500">
                {p.img ? <img src={p.img} alt={p.title} className="h-full w-full object-cover"/> : "Image Placeholder"}
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg dark:text-white">{p.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">{p.desc}</p>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-outline mt-4"
                >
                  View More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh]"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <button 
                onClick={()=>setActiveProject(null)} 
                className="absolute top-4 right-4 text-gray-500"
              >
                ✖
              </button>
              
              <h2 className="text-2xl font-bold mb-2 dark:text-white">{activeProject.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">{activeProject.category}</p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">{activeProject.desc}</p>

              {/* ✅ Video or Image */}
              {activeProject.video ? (
                <motion.video 
                  src={activeProject.video} 
                  controls 
                  className="w-full rounded-xl shadow-md mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                />
              ) : (
                <motion.img 
                  src={activeProject.img} 
                  alt={activeProject.title} 
                  className="w-full rounded-xl shadow-md mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                />
              )}

              <h3 className="font-semibold dark:text-white">🛠 Tools Used:</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">{activeProject.tools}</p>

              <h3 className="font-semibold dark:text-white">✨ Key Features:</h3>
              <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-300">
                {activeProject.features.map((f,idx)=>(
                  <motion.li key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {f}
                  </motion.li>
                ))}
              </ul>

              <h3 className="font-semibold dark:text-white">🎯 Outcome:</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{activeProject.outcome}</p>

              {/* ✅ GitHub link */}
              {activeProject.github && (
                <motion.div className="mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <a 
                    href={activeProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    <FaGithub size={20}/> View on GitHub
                  </a>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
