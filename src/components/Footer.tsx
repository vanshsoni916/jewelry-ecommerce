
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-dark text-white pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-2xl font-serif tracking-wider text-gold mb-2">
              LUMINA
            </Link>
            <p className="text-cream-light/70 max-w-xs">
              Exquisite jewelry that captures moments and creates memories. Each piece is crafted with precision and passion.
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cream-light/50 hover:text-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cream-light/50 hover:text-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cream-light/50 hover:text-gold transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-medium mb-4 text-gold">Shop</h3>
            <Link to="/products" className="text-cream-light/70 hover:text-gold transition-colors py-1">
              All Jewelry
            </Link>
            <Link to="/products?category=rings" className="text-cream-light/70 hover:text-gold transition-colors py-1">
              Rings
            </Link>
            <Link to="/products?category=necklaces" className="text-cream-light/70 hover:text-gold transition-colors py-1">
              Necklaces
            </Link>
            <Link to="/products?category=earrings" className="text-cream-light/70 hover:text-gold transition-colors py-1">
              Earrings
            </Link>
            <Link to="/products?category=bracelets" className="text-cream-light/70 hover:text-gold transition-colors py-1">
              Bracelets
            </Link>
            <Link to="/products?category=watches" className="text-cream-light/70 hover:text-gold transition-colors py-1">
              Watches
            </Link>
          </div>

          {/* Company Column */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-medium mb-4 text-gold">Company</h3>
            <Link to="/about" className="text-cream-light/70 hover:text-gold transition-colors py-1">
              About Us
            </Link>
            <Link to="/craftsmanship" className="text-cream-light/70 hover:text-gold transition-colors py-1">
              Craftsmanship
            </Link>
            <Link to="/sustainability" className="text-cream-light/70 hover:text-gold transition-colors py-1">
              Sustainability
            </Link>
            <Link to="/careers" className="text-cream-light/70 hover:text-gold transition-colors py-1">
              Careers
            </Link>
            <Link to="/press" className="text-cream-light/70 hover:text-gold transition-colors py-1">
              Press
            </Link>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-medium mb-4 text-gold">Contact</h3>
            <div className="flex items-start space-x-3">
              <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
              <p className="text-cream-light/70">
                123 Luxury Lane, <br />
                Fashion District, <br />
                New York, NY 10001
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={18} className="text-gold flex-shrink-0" />
              <a href="tel:+12125551234" className="text-cream-light/70 hover:text-gold transition-colors">
                +1 (212) 555-1234
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={18} className="text-gold flex-shrink-0" />
              <a href="mailto:contact@luminajewelry.com" className="text-cream-light/70 hover:text-gold transition-colors">
                contact@luminajewelry.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-charcoal-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-cream-light/50 text-sm">
              &copy; {currentYear} Lumina Jewelry. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-cream-light/50 hover:text-gold text-sm transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="text-cream-light/50 hover:text-gold text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/shipping" className="text-cream-light/50 hover:text-gold text-sm transition-colors">
                Shipping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
