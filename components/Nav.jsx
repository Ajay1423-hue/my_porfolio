'use client';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link href="/" className="font-bold text-lg dark:text-white">
          Ajay Sable
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/experience" className="hover:underline">Experience</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          <a className="btn btn-outline text-sm" href="/Resume-A.Sable.pdf" download>Resume</a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
