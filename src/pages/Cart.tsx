
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart, totalPrice } = useCart();
  
  // Format price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-cream-light pt-12 pb-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif text-center mb-12 animate-fade-up">Your Cart</h1>
        
        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6 animate-fade-in">
              {items.map((item, index) => (
                <div 
                  key={item.id}
                  className="bg-white rounded-lg p-6 elegant-shadow flex flex-col sm:flex-row gap-6 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Product Image */}
                  <div className="w-full sm:w-32 h-32 bg-cream-light rounded-md overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex justify-between mb-3">
                      <Link 
                        to={`/product/${item.id}`}
                        className="text-lg font-medium hover:text-gold transition-colors"
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-charcoal-light hover:text-charcoal-dark transition-colors"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <X size={20} />
                      </button>
                    </div>
                    
                    <p className="text-gold-dark font-medium mb-4">
                      {formatPrice(item.price)}
                    </p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center">
                      <span className="mr-3 text-sm text-charcoal-light">Quantity:</span>
                      <div className="flex items-center">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="w-8 h-8 flex items-center justify-center border border-cream-dark rounded-l-md disabled:opacity-50"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <div className="w-10 h-8 border-y border-cream-dark flex items-center justify-center text-sm">
                          {item.quantity}
                        </div>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border border-cream-dark rounded-r-md"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      
                      <div className="ml-auto font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="flex justify-between items-center pt-4">
                <button
                  onClick={clearCart}
                  className="text-charcoal-light hover:text-charcoal-dark transition-colors text-sm flex items-center"
                >
                  <X size={16} className="mr-1" />
                  Clear Cart
                </button>
                
                <Link 
                  to="/products"
                  className="text-gold hover:text-gold-dark transition-colors text-sm flex items-center"
                >
                  <ShoppingBag size={16} className="mr-1" />
                  Continue Shopping
                </Link>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="bg-white rounded-lg p-6 elegant-shadow sticky top-24">
                <h2 className="text-xl font-serif mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-charcoal-light">Subtotal</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal-light">Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal-light">Tax</span>
                    <span>{formatPrice(totalPrice * 0.05)}</span>
                  </div>
                  
                  <div className="border-t border-cream-dark pt-4 flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span className="text-gold-dark">{formatPrice(totalPrice * 1.05)}</span>
                  </div>
                </div>
                
                <Button asChild className="w-full bg-charcoal-dark hover:bg-charcoal">
                  <Link to="/checkout">Proceed to Checkout</Link>
                </Button>
                
                <p className="text-xs text-center text-charcoal-light mt-4">
                  Secure checkout. All payment information is encrypted.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg p-16 elegant-shadow text-center max-w-2xl mx-auto animate-fade-in">
            <div className="w-24 h-24 bg-cream-light rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={36} className="text-charcoal-light" />
            </div>
            <h2 className="text-2xl font-serif mb-4">Your Cart is Empty</h2>
            <p className="text-charcoal-light mb-8">
              Looks like you haven't added any jewelry to your cart yet.
            </p>
            <Button asChild className="bg-charcoal-dark hover:bg-charcoal">
              <Link to="/products">Explore Collection</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
