import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, MapPin, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Layout({ children }: { children: ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Booking', path: '/booking' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-brand-black text-brand-bg py-2 px-4 text-xs md:text-sm flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="tel:17853199802" className="flex items-center hover:text-brand-accent transition-colors">
            <Phone className="w-3 h-3 mr-2" />
            (785) 319-9802
          </a>
          <span className="hidden md:flex items-center">
            <MapPin className="w-3 h-3 mr-2" />
            1919 SW 10th St Suite 23, Topeka, KS
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://www.instagram.com/skinbyjillian__" target="_blank" rel="noreferrer" className="hover:text-brand-accent transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61576068646844" target="_blank" rel="noreferrer" className="hover:text-brand-accent transition-colors">
            <Facebook className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-brand-bg/90 backdrop-blur-md border-b border-brand-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link to="/" className="flex flex-col items-center justify-center group">
              <span className="text-[10px] tracking-[0.2em] uppercase mb-1">Topeka, KS</span>
              <div className="relative flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-serif tracking-tight uppercase leading-none">Bronzed By</span>
                <span className="font-script text-4xl md:text-5xl -mt-4 ml-4 transform -rotate-2 group-hover:scale-105 transition-transform duration-300">Jillian</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-sm tracking-widest uppercase transition-colors hover:text-brand-black/60",
                    location.pathname === link.path ? "font-semibold border-b border-brand-black" : "font-light"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/booking"
                className="bg-brand-black text-brand-bg px-6 py-3 text-sm tracking-widest uppercase hover:bg-brand-black/80 transition-colors"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-brand-black focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-24 left-0 w-full bg-brand-bg border-b border-brand-black/10 shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-4 text-base tracking-widest uppercase text-center border-b border-brand-black/5",
                    location.pathname === link.path ? "font-semibold" : "font-light"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block mt-6 bg-brand-black text-brand-bg px-6 py-4 text-center text-sm tracking-widest uppercase"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-black text-brand-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            
            {/* Brand */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex flex-col items-center md:items-start mb-6">
                <span className="text-2xl font-serif tracking-tight uppercase leading-none">Bronzed By</span>
                <span className="font-script text-3xl -mt-2 ml-4">Jillian</span>
              </div>
              <p className="text-sm text-brand-bg/70 max-w-xs font-light leading-relaxed">
                Your go-to for personalized spray tans in Topeka, KS. Offering the bridal experience, bronze parties, and signature tans.
              </p>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-serif uppercase tracking-widest mb-6">Contact</h3>
              <ul className="space-y-4 text-sm font-light text-brand-bg/70">
                <li className="flex items-center justify-center md:justify-start">
                  <MapPin className="w-4 h-4 mr-3" />
                  1919 SW 10th St Suite 23<br/>Topeka, KS 66604
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <Phone className="w-4 h-4 mr-3" />
                  <a href="tel:17853199802" className="hover:text-brand-accent transition-colors">(785) 319-9802</a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-serif uppercase tracking-widest mb-6">Explore</h3>
              <ul className="space-y-3 text-sm font-light text-brand-bg/70">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="hover:text-brand-accent transition-colors uppercase tracking-wider text-xs">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-brand-bg/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-brand-bg/50 font-light tracking-wider">
              &copy; {new Date().getFullYear()} Bronzed By Jillian. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://www.instagram.com/skinbyjillian__" target="_blank" rel="noreferrer" className="text-brand-bg/50 hover:text-brand-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61576068646844" target="_blank" rel="noreferrer" className="text-brand-bg/50 hover:text-brand-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
