'use client';
import { motion } from 'framer-motion';
import { Briefcase, Megaphone } from 'lucide-react';
import { useState } from 'react';

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: <Briefcase size={40} />,
      title: "Data Analyst with Data Visualization",
      desc: "Power BI, SQL, Excel dashboards, MIS reporting and business insights.",
      btn: "Explore Data Services",
      link: "#projects", 
      subServices: [
        "📊 Business Dashboard Development (Power BI / Excel / Tableau)",
        "🗄️ Data Cleaning & Transformation (Power Query, Excel, SQL)",
        "📈 Data Analysis & Insights (KPIs, reports, forecasting)",
        "📑 MIS Reports & Automation (Monthly/Weekly automated reports)",
        "🔍 Market & Salary Trend Analysis (like AI Jobs dashboard)",
        "🧾 HR & Employee Analytics (Attrition, diversity, performance)",
        "😊 Customer Sentiment Analysis (Reviews, feedback, NPS/CSAT)"
      ]
    },
    {
      icon: <Megaphone size={40} />,
      title: "Ads Maker & Promoter",
      desc: "Creative ad designs, campaign promotions, social media branding.",
      btn: "Explore Ad Services",
      link: "#projects",
      subServices: [
        "🎨 Ad Banner Design (Social Media Ads, Posters, Flyers)",
        "📱 Social Media Ad Campaigns (Facebook, Instagram, Google Ads creatives)",
        "🛍️ Product & Service Promotions (E-commerce, cafés, gyms, coaching classes)",
        "✨ Brand Identity Visuals (logo, color theme, ad templates)",
        "📊 Ad Campaign Reporting (engagement, reach & conversion insights)",
        "⚡ Creative Copywriting for Ads (catchy slogans, CTAs, ad taglines)"
      ]
    }
  ];

  return (
    <section className="relative min-h-screen py-16 px-6">
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="section-title dark:text-white">My Services</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="card p-8 flex flex-col items-center text-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="text-blue-600">{s.icon}</div>
              <h3 className="text-xl font-semibold dark:text-white">{s.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{s.desc}</p>

              {/* Button to toggle sub-services */}
              <button
                className="btn btn-primary"
                onClick={() =>
                  setActiveService(activeService === i ? null : i)
                }
              >
                {activeService === i ? "Hide Services" : s.btn}
              </button>

              {/* Sub-services expand/collapse */}
              {activeService === i && (
                <motion.div
                  className="mt-4 text-left w-full"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    {s.subServices.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Smooth scroll to Projects */}
                  <div className="mt-4 text-right">
                    <button
                      onClick={() => scrollToSection(s.link)}
                      className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                    >
                      Learn More →
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
