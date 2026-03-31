import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Leadership', path: '/leadership' },
    // { name: 'Portfolio', path: '/portfolio' },
  ];

  const legalLinks = [
    { name: 'Contact Us', path: '/contact' },
    // { name: 'Terms of Use', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/arora-innovation-llc/', label: 'LinkedIn' },
    // { icon: Twitter, href: '#', label: 'Twitter' },
    // { icon: Github, href: '#', label: 'GitHub' },
    // { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">C</span>
              </div>
              <span className="text-2xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Cosmiron
              </span>
            </div>
            <p className="text-slate-400 mb-4">
              Innovating Talent. Empowering Solutions. Building innovative platforms, automation tools, and AI-driven solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-500/10 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-400">
                <Mail size={18} className="mt-1 text-blue-400 flex-shrink-0" />
                <div className="flex flex-col">
                  <span>operations@arorainnovation.com</span>
                  <span>operations@integritypathsystems.com</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin size={18} className="mt-1 text-blue-400 flex-shrink-0" />
                <span>750 N. Saint Paul St., Ste. 250 #744032,<br/>Dallas, Texas 75201, USA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Cosmiron R&D. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
