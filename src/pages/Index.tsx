
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const featuredProducts = products.filter(product => product.featured);
  const newArrivals = products.filter(product => product.new);
  const heroBannerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (heroBannerRef.current) {
        const scrollPosition = window.scrollY;
        const opacity = Math.max(1 - scrollPosition / 1000, 0.4);
        const scale = Math.max(1 + scrollPosition / 5000, 1);
        const translateY = scrollPosition * 0.4;
        
        heroBannerRef.current.style.opacity = opacity.toString();
        heroBannerRef.current.style.transform = `scale(${scale}) translateY(${translateY}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div 
          ref={heroBannerRef}
          className="absolute inset-0 w-full h-full bg-center bg-cover transition-transform duration-300 ease-elegant brightness-50 "
          style={{ 
            backgroundImage: "url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)", 
            transformOrigin: 'center bottom'
          }}
        />
        
        <div className="absolute inset-0" />
        
        <div className="relative h-full container mx-auto px-4 flex items-center justify-center text-center">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 drop-shadow-md">
              Timeless Elegance<br />Crafted with Passion
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discover our exquisite collection of fine jewelry, where each piece tells a unique story of beauty and craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gold hover:bg-gold-dark text-white px-8 py-6 text-lg">
                <Link to="/products">
                  Explore Collection
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-zinc-900 hover:bg-white/10 px-8 py-6 text-lg">
                <Link to="/about">
                  Our Story
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-10 h-10 border-2 border-white/60 rounded-full flex items-center justify-center">
            <ArrowRight size={20} className="text-white/60 -rotate-90" />
          </div>
        </div>
      </section>

      {/* Featured Collection Section */}
      <section className="py-24 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Featured Collection</h2>
            <p className="text-lg text-charcoal-light">
              Discover our most sought-after pieces, meticulously crafted for those who appreciate refined luxury and timeless elegance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <div key={product.id} className="animate-fade-up" style={{ animationDelay: `${product.id * 100}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-charcoal-dark hover:bg-charcoal text-white">
              <Link to="/products" className="inline-flex items-center">
                View All Collections
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589826875981-c11131312406?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Meticulous Craftsmanship</h2>
              <p className="text-lg text-charcoal-light mb-6">
                Every piece in our collection is crafted by master artisans who bring decades of experience and a passion for perfection to their work.
              </p>
              <p className="text-lg text-charcoal-light mb-8">
                From selecting the finest materials to the final polish, we ensure that each jewelry piece meets our uncompromising standards of quality and beauty.
              </p>
              <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white">
                <Link to="/craftsmanship">
                  Discover Our Process
                </Link>
              </Button>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <div className="aspect-square relative z-10 rounded-full overflow-hidden elegant-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1589365278144-c9e705f843ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Jewelry craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-1/4 -right-12 w-48 h-48 bg-gold/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">New Arrivals</h2>
            <p className="text-lg text-charcoal-light">
              Be the first to discover our latest creations, each designed to inspire and captivate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {newArrivals.map(product => (
              <div key={product.id} className="animate-fade-up" style={{ animationDelay: `${product.id * 100}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-charcoal-dark hover:bg-charcoal text-white">
              <Link to="/products" className="inline-flex items-center">
                Explore All New Arrivals
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-charcoal-dark text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-serif mb-6">Find Your Perfect Piece</h2>
            <p className="text-xl mb-8 text-white/80">
              Explore our curated collection and discover jewelry that speaks to your personal style.
            </p>
            <Button asChild className="bg-gold hover:bg-gold-dark text-white px-8 py-6 text-lg">
              <Link to="/products">
                Shop Now
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gold/5 blur-3xl"></div>
      </section>
    </div>
  );
};

export default Index;
