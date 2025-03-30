
import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AddToCartButtonProps {
  productId: number;
  productName: string;
  productPrice: number;
  productImage: string;
  className?: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ 
  productId, 
  productName, 
  productPrice, 
  productImage,
  className = '' 
}) => {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addItem({
      id: productId,
      name: productName,
      price: productPrice,
      image: productImage
    });
    
    setIsAdded(true);
    
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <Button
      onClick={handleAddToCart}
      className={`relative overflow-hidden btn-shine ${
        isAdded ? 'bg-green-600 hover:bg-green-700' : 'bg-charcoal-dark hover:bg-charcoal text-white'
      } ${className}`}
      disabled={isAdded}
    >
      <span className={`flex items-center justify-center transition-opacity duration-300 ${isAdded ? 'opacity-0' : 'opacity-100'}`}>
        <ShoppingBag className="mr-2 h-4 w-4" />
        Add to Cart
      </span>
      <span className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isAdded ? 'opacity-100' : 'opacity-0'}`}>
        <Check className="mr-2 h-4 w-4" />
        Added to Cart
      </span>
    </Button>
  );
};

export default AddToCartButton;
