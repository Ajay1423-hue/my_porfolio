'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Detect dark mode
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xgvlpzyr", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast.success("Message sent successfully ✅");
        form.reset();
      } else {
        toast.error("Oops! Something went wrong ❌");
      }
    } catch (err) {
      toast.error("Network error! Please try again ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen py-16 px-6">
      {/* Toast Container */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: isDark ? "#1f2937" : "#ffffff",
            color: isDark ? "#f9fafb" : "#111827",
            borderRadius: "8px",
            padding: "12px 16px",
            fontSize: "14px",
          },
          success: {
            style: {
              background: isDark ? "#15803d" : "#22c55e",
              color: "#fff",
            },
          },
          error: {
            style: {
              background: isDark ? "#b91c1c" : "#ef4444",
              color: "#fff",
            },
          },
        }}
      />

      {/* Background Blobs */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Title */}
        <motion.h1
          className="section-title dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Contact Me
        </motion.h1>

        <motion.p
          className="text-center text-gray-600 dark:text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Have a project in mind? Or just want to say hello?  
          Fill out the form below and I’ll get back to you soon.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="card p-6 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div>
            <label className="block text-sm font-medium dark:text-gray-200">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full mt-1 p-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium dark:text-gray-200">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full mt-1 p-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium dark:text-gray-200">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Write your message..."
              required
              className="w-full mt-1 p-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`btn btn-primary w-full flex justify-center items-center ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </motion.form>

        {/* WhatsApp & Call Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/918975622498" // 👉 इथे तुझा WhatsApp नंबर टाक
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition rounded-xl"
          >
            📱 WhatsApp Me
          </a>

          {/* Call Button */}
          <a
            href="tel:+918975622498" // 👉 इथे तुझा मोबाईल नंबर टाक
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition rounded-xl"
          >
            📞 Call Me
          </a>
        </div>
      </div>
    </section>
  );
}
