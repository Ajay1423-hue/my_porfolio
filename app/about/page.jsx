'use client';
import { motion } from 'framer-motion';
import { FaDatabase, FaChartBar, FaFileExcel, FaBullhorn } from "react-icons/fa";
import { BiBarChartAlt2 } from "react-icons/bi";
import { MdOutlineReport, MdCampaign } from "react-icons/md";

export default function About() {
  const skills = [
    {
      title: "Power BI",
      icon: <BiBarChartAlt2 className="text-3xl text-yellow-500" />,
      sub: ["Dashboard Development", "DAX Measures", "Data Modeling", "Power Query"]
    },
    {
      title: "SQL",
      icon: <FaDatabase className="text-3xl text-green-500" />,
      sub: ["Joins & Subqueries", "Stored Procedures", "Data Cleaning", "Performance Optimization"]
    },
    {
      title: "Excel",
      icon: <FaFileExcel className="text-3xl text-green-600" />,
      sub: ["Pivot Tables", "VLOOKUP / XLOOKUP", "Conditional Formatting", "Macros & Automation"]
    },
    {
      title: "Data Visualization",
      icon: <FaChartBar className="text-3xl text-blue-500" />,
      sub: ["Charts & Graphs", "KPIs & Metrics", "Storytelling with Data", "Interactive Reports"]
    },
    {
      title: "MIS Reporting",
      icon: <MdOutlineReport className="text-3xl text-purple-500" />,
      sub: ["Monthly/Weekly Reports", "KPI Dashboards", "HR & Finance Reports", "Process Automation"]
    },
    {
      title: "Ads Creation",
      icon: <MdCampaign className="text-3xl text-red-500" />,
      sub: ["Poster Design", "Video Ad Editing", "Creative Copywriting", "Brand Awareness Ads"]
    },
    {
      title: "Social Media Promotion",
      icon: <FaBullhorn className="text-3xl text-pink-500" />,
      sub: ["Campaign Management", "Target Audience Research", "Engagement Boosting", "Ad Analytics"]
    }
  ];

  return (
    <section className="relative min-h-screen py-16 px-6 overflow-hidden">
      {/* Blobs Background */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Title with Typing Animation */}
        <motion.h1
          className="section-title dark:text-white text-center"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{ overflow: "hidden", whiteSpace: "nowrap", borderRight: "2px solid #3b82f6" }}
        >
          About Me
        </motion.h1>

        {/* About Text */}
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 text-center leading-relaxed mt-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          I’m <span className="font-semibold text-blue-600">Ajay Sable</span>, a passionate Data Analyst with experience in building dashboards and ad campaigns.
        </motion.p>

        {/* Skills Section */}
        <motion.h2
          className="mt-12 text-2xl font-bold text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          My Skills
        </motion.h2>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="card p-6 rounded-2xl shadow-md bg-white/80 dark:bg-gray-800/60 backdrop-blur-md"
              initial={{ rotateY: 90, opacity: 0 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ scale: 1.08, rotateZ: 1 }}
            >
              <div className="flex items-center justify-center mb-4">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 text-center mb-3">
                {skill.title}
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                {skill.sub.map((sub, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (i * 0.3) + j * 0.15 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-blue-500">✔</span> {sub}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
