
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(product.price);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  const handleLikeToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <div 
      className="group relative overflow-hidden product-card-hover elegant-shadow rounded-md bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative pb-[125%] overflow-hidden rounded-t-md">
          <img 
            src={product.image} 
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-elegant group-hover:scale-105"
          />
          
          {/* Labels */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.new && (
              <Badge className="bg-gold text-white animate-fade-in">New</Badge>
            )}
            {product.bestseller && (
              <Badge className="bg-charcoal-dark text-white animate-fade-in">Bestseller</Badge>
            )}
          </div>
          
          {/* Action buttons - visible on hover */}
          <div 
            className={`absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center transition-all duration-300 ease-elegant ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={handleLikeToggle}
              className={`p-3 rounded-full ${
                isLiked ? 'bg-gold/90 text-white' : 'bg-white/90 text-charcoal-dark'
              } hover:bg-gold/90 hover:text-white transition-colors backdrop-blur-md`}
              aria-label={isLiked ? 'Unlike' : 'Like'}
            >
              <Heart size={18} className={isLiked ? 'fill-current' : ''} />
            </button>
            
            <button
              onClick={handleAddToCart}
              className="p-3 rounded-full bg-white/90 text-charcoal-dark hover:bg-gold/90 hover:text-white transition-colors backdrop-blur-md"
              aria-label="Add to cart"
            >
              <ShoppingBag size={18} />
            </button>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-serif text-lg tracking-wide mb-1 transition-colors group-hover:text-gold">
            {product.name}
          </h3>
          <p className="text-charcoal-light text-sm mb-2">{product.category}</p>
          <p className="font-medium text-gold-dark">{formattedPrice}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
