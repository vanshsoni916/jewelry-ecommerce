
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const { totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Effect for scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle search submit
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real app, we'd navigate to search results
      console.log('Searching for:', searchQuery);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-elegant ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-serif font-medium tracking-wider text-charcoal-dark transition-colors hover:text-gold"
          >
            LUMINA
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">Shop</Link>
            <Link to="/collections" className="nav-link">Collections</Link>
            <Link to="/about" className="nav-link">About</Link>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-full hover:bg-cream-dark transition-colors"
              aria-label="Search"
            >
              <Search size={20} className="text-charcoal-dark" />
            </button>
            <Link 
              to="/cart" 
              className="p-2 rounded-full hover:bg-cream-dark transition-colors relative"
              aria-label="Shopping cart"
            >
              <ShoppingBag size={20} className="text-charcoal-dark" />
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 bg-gold text-white h-5 w-5 flex items-center justify-center p-0 text-xs rounded-full">
                  {totalItems}
                </Badge>
              )}
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-full hover:bg-cream-dark transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Menu"
            >
              <Menu size={24} className="text-charcoal-dark" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-elegant ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-8">
            <Link 
              to="/" 
              className="text-2xl font-serif font-medium tracking-wider"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              LUMINA
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} className="text-charcoal-dark" />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6">
            <Link 
              to="/" 
              className="text-xl py-2 border-b border-cream-dark"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="text-xl py-2 border-b border-cream-dark"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/collections" 
              className="text-xl py-2 border-b border-cream-dark"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Collections
            </Link>
            <Link 
              to="/about" 
              className="text-xl py-2 border-b border-cream-dark"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/cart" 
              className="text-xl py-2 border-b border-cream-dark flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cart
              {totalItems > 0 && (
                <Badge className="ml-2 bg-gold text-white">
                  {totalItems} {totalItems === 1 ? 'item' : 'items'}
                </Badge>
              )}
            </Link>
          </nav>
        </div>
      </div>

      {/* Search Overlay */}
      <div 
        className={`fixed inset-0 bg-white/95 backdrop-blur-md z-50 transform transition-transform duration-300 ease-elegant ${
          isSearchOpen ? 'translate-y-0' : '-translate-y-full'
        } flex items-center justify-center`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-end mb-8">
            <button 
              onClick={() => setIsSearchOpen(false)}
              aria-label="Close search"
              className="p-2"
            >
              <X size={24} className="text-charcoal-dark" />
            </button>
          </div>
          
          <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for jewelry..."
                className="w-full py-4 px-6 text-xl border-b-2 border-gold/30 focus:border-gold/80 bg-transparent outline-none transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button 
                type="submit" 
                className="absolute right-0 top-0 bottom-0 px-4"
                aria-label="Submit search"
              >
                <Search size={24} className="text-gold" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
