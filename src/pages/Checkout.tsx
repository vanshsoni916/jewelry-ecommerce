
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import QRCodePayment from '@/components/QRCodePayment';
import { ChevronRight, CreditCard, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [checkoutStep, setCheckoutStep] = useState<'information' | 'payment' | 'confirmation'>('information');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'India',
  });
  
  // Format price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleInformationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    for (const [key, value] of Object.entries(formData)) {
      if (!value && key !== 'phone') {
        toast.error(`Please enter your ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
        return;
      }
    }
    
    // Move to payment step
    setCheckoutStep('payment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handlePaymentComplete = () => {
    setCheckoutStep('confirmation');
    clearCart();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // If cart is empty and not in confirmation step, redirect to cart
  if (items.length === 0 && checkoutStep !== 'confirmation') {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-cream-light pt-12 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-charcoal-light/70 mb-8 animate-fade-in">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight size={14} className="mx-2" />
            <Link to="/cart" className="hover:text-gold transition-colors">Cart</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-charcoal-dark">Checkout</span>
          </div>
          
          {/* Checkout Steps */}
          <div className="flex justify-center mb-12">
            <div className="relative flex items-center w-full max-w-2xl">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                checkoutStep === 'information' ? 'bg-gold text-white' : 'bg-white text-gold border border-gold'
              }`}>
                {checkoutStep === 'information' ? '1' : <CheckCircle size={16} />}
              </div>
              <div className={`flex-1 h-[2px] ${
                checkoutStep === 'information' ? 'bg-cream-dark' : 'bg-gold'
              }`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                checkoutStep === 'payment' ? 'bg-gold text-white' : 
                checkoutStep === 'confirmation' ? 'bg-white text-gold border border-gold' : 'bg-white text-charcoal-light border border-cream-dark'
              }`}>
                {checkoutStep === 'confirmation' ? <CheckCircle size={16} /> : '2'}
              </div>
              <div className={`flex-1 h-[2px] ${
                checkoutStep === 'confirmation' ? 'bg-gold' : 'bg-cream-dark'
              }`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                checkoutStep === 'confirmation' ? 'bg-gold text-white' : 'bg-white text-charcoal-light border border-cream-dark'
              }`}>
                3
              </div>
            </div>
          </div>
          
          {/* Checkout Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Checkout Form */}
            <div className="lg:col-span-2 animate-fade-in">
              {checkoutStep === 'information' && (
                <div className="bg-white rounded-lg p-6 elegant-shadow">
                  <h2 className="text-2xl font-serif mb-6">Shipping Information</h2>
                  
                  <form onSubmit={handleInformationSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="mt-1"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-1"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <Label htmlFor="address">Address *</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="mt-1"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                      <div className="col-span-2">
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State *</Label>
                        <Input
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="zipCode">Zip Code *</Label>
                        <Input
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          className="mt-1"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="mt-1"
                        required
                        readOnly
                      />
                      <p className="text-xs text-charcoal-light mt-2">
                        * Only UPI payment available for India
                      </p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <Link 
                        to="/cart"
                        className="text-charcoal-light hover:text-charcoal-dark transition-colors text-sm"
                      >
                        Return to Cart
                      </Link>
                      
                      <Button type="submit" className="bg-charcoal-dark hover:bg-charcoal">
                        Continue to Payment
                      </Button>
                    </div>
                  </form>
                </div>
              )}
              
              {checkoutStep === 'payment' && (
                <div className="bg-white rounded-lg p-6 elegant-shadow">
                  <h2 className="text-2xl font-serif mb-6">Payment</h2>
                  
                  <div className="flex items-center mb-6">
                    <CreditCard size={24} className="text-gold mr-3" />
                    <h3 className="text-lg font-medium">UPI Payment</h3>
                  </div>
                  
                  <QRCodePayment 
                    amount={totalPrice * 1.05}
                    onComplete={handlePaymentComplete}
                  />
                  
                  <div className="mt-8 flex justify-between items-center">
                    <button 
                      onClick={() => setCheckoutStep('information')}
                      className="text-charcoal-light hover:text-charcoal-dark transition-colors text-sm"
                    >
                      Return to Information
                    </button>
                  </div>
                </div>
              )}
              
              {checkoutStep === 'confirmation' && (
                <div className="bg-white rounded-lg p-8 elegant-shadow text-center animate-fade-in">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  
                  <h2 className="text-2xl font-serif mb-4">Order Confirmed!</h2>
                  <p className="text-charcoal-light mb-6">
                    Thank you for your purchase. Your order has been confirmed and will be shipped soon.
                  </p>
                  
                  <div className="mb-8 text-left bg-cream-light p-4 rounded-md">
                    <p className="font-medium mb-2">Order Summary</p>
                    <p className="text-sm text-charcoal-light">Order #: LJW-{Math.floor(Math.random() * 10000)}</p>
                    <p className="text-sm text-charcoal-light">Date: {new Date().toLocaleDateString()}</p>
                    <p className="text-sm text-charcoal-light">Payment Method: UPI</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-charcoal-dark hover:bg-charcoal">
                      <Link to="/">Return to Home</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-charcoal-dark text-charcoal-dark">
                      <Link to="/products">Continue Shopping</Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Order Summary */}
            {(checkoutStep === 'information' || checkoutStep === 'payment') && (
              <div className="lg:col-span-1 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="bg-white rounded-lg p-6 elegant-shadow sticky top-24">
                  <h2 className="text-xl font-serif mb-6">Order Summary</h2>
                  
                  <div className="mb-6 max-h-80 overflow-y-auto pr-2">
                    {items.map(item => (
                      <div key={item.id} className="flex py-3 border-b border-cream-dark last:border-0">
                        <div className="w-16 h-16 bg-cream-light rounded-md overflow-hidden mr-3 relative">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-0 right-0 w-5 h-5 bg-gold rounded-full flex items-center justify-center text-white text-xs">
                            {item.quantity}
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm line-clamp-1">{item.name}</p>
                          <p className="text-charcoal-light text-xs">{formatPrice(item.price)} each</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-sm">{formatPrice(item.price * item.quantity)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
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
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
