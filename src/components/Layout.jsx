import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Layout() {
  const { isDark, setIsDark } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About Us', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Insights', path: '/insights' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-gray-100 dark:border-dark-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold flex items-center gap-2 text-primary-600 dark:text-primary-400">
            <div className="w-8 h-8 rounded-lg bg-primary-600 dark:bg-primary-500 flex items-center justify-center text-white text-lg font-bold">
              M
            </div>
            Masa Tech
          </Link>
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            {navLinks.map(link => (
              <Link key={link.name} to={link.path} className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-card transition-colors">
              {isDark ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>
            <Link to="/contact" className="hidden md:inline-flex bg-primary-600 text-white px-5 py-2.5 rounded-lg font-medium shadow-sm hover:shadow-md hover:bg-primary-700 transition-all active:scale-95">
              Contact Us
            </Link>
            <button className="md:hidden p-2 text-slate-600 dark:text-slate-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white dark:bg-dark-bg border-b border-gray-100 dark:border-dark-border shadow-sm absolute w-full"
            >
              <nav className="flex flex-col p-4 space-y-4">
                {navLinks.map(link => (
                  <Link key={link.name} to={link.path} className="text-gray-900 dark:text-gray-100 font-medium hover:text-primary-600">
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-100 dark:border-dark-border">
                  <Link to="/contact" className="inline-flex bg-primary-600 text-white px-5 py-3 rounded-lg font-medium justify-center w-full shadow-sm hover:bg-primary-700">
                    Contact Us
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      
      <main className="flex-1 w-full flex flex-col relative bg-white dark:bg-dark-card">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="flex-1 flex flex-col w-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-slate-50 dark:bg-dark-bg border-t border-gray-100 dark:border-dark-border py-12 text-slate-600 dark:text-slate-400">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400">Masa Technology PLC</h3>
            <p className="text-sm leading-relaxed">
              Empowering businesses with innovative software solutions, cutting-edge AI, and secure cloud infrastructures.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-primary-500 transition-colors">Custom Software</Link></li>
              <li><Link to="/services" className="hover:text-primary-500 transition-colors">Mobile Apps</Link></li>
              <li><Link to="/services" className="hover:text-primary-500 transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services" className="hover:text-primary-500 transition-colors">Cloud & DevOps</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary-500 transition-colors">About Us</Link></li>
              <li><Link to="/team" className="hover:text-primary-500 transition-colors">Our Team</Link></li>
              <li><Link to="/careers" className="hover:text-primary-500 transition-colors">Careers</Link></li>
              <li><Link to="/insights" className="hover:text-primary-500 transition-colors">Insights & Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="hover:text-primary-500 transition-colors">Contact Us</Link></li>
              <li>hello@masatech.com</li>
              <li>+251 911 234 567</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-200 dark:border-dark-border text-center text-sm">
          <p>© {new Date().getFullYear()} Masa Technology PLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
