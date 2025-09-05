'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200 dark:border-gray-800 py-6 bg-white/70 dark:bg-gray-900/70 backdrop-blur">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-400">
        <p className="mb-3 md:mb-0">
          © {new Date().getFullYear()} Ajay Sable. All rights reserved.
        </p>
        <nav className="flex gap-4 mb-3 md:mb-0">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/experience" className="hover:underline">Experience</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
        <div className="flex gap-3">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:ajaysable@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
