
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { products } from '@/lib/data';
import AddToCartButton from '@/components/AddToCartButton';
import ProductCard from '@/components/ProductCard';
import { ArrowLeft, Heart, Share2, ChevronRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState(products.find(p => p.id === Number(id)));
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  
  // Get related products (same category)
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);
  
  useEffect(() => {
    // If product not found, navigate to products page
    if (!product && id) {
      toast.error('Product not found');
      navigate('/products');
      return;
    }
    
    // Set the first image as selected image
    if (product) {
      setSelectedImage(product.image);
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [product, id, navigate]);
  
  // Update product when id changes
  useEffect(() => {
    setProduct(products.find(p => p.id === Number(id)));
  }, [id]);
  
  if (!product) {
    return null;
  }
  
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(product.price);
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };
  
  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
    toast.success(!isLiked ? 'Added to wishlist' : 'Removed from wishlist');
  };
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out this beautiful ${product.name}`,
        url: window.location.href,
      }).catch(err => {
        console.error('Error sharing:', err);
      });
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard');
    }
  };

  return (
    <div className="bg-cream-light min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-charcoal-light/70 mb-8 animate-fade-in">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <ChevronRight size={14} className="mx-2" />
          <Link to="/products" className="hover:text-gold transition-colors">Products</Link>
          <ChevronRight size={14} className="mx-2" />
          <Link to={`/products?category=${product.category.toLowerCase()}`} className="hover:text-gold transition-colors">
            {product.category}
          </Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-charcoal-dark truncate max-w-[200px]">{product.name}</span>
        </div>
        
        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg overflow-hidden elegant-shadow animate-fade-in">
              <img 
                src={selectedImage} 
                alt={product.name}
                className="w-full h-[500px] object-cover object-center"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`bg-white rounded-md overflow-hidden transition-all duration-200 ${
                    selectedImage === image ? 'ring-2 ring-gold scale-[1.02]' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-24 object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="mb-6">
              {product.new && (
                <Badge className="bg-gold text-white mb-3">New Arrival</Badge>
              )}
              <h1 className="text-3xl md:text-4xl font-serif mb-4">{product.name}</h1>
              <p className="text-2xl text-gold-dark font-medium mb-4">{formattedPrice}</p>
              <p className="text-charcoal-light mb-6">{product.description}</p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center justify-between py-3 border-t border-cream-dark">
                <span className="font-medium">Material</span>
                <span>{product.material}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-t border-cream-dark">
                <span className="font-medium">Collection</span>
                <span>{product.collection}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-t border-b border-cream-dark">
                <span className="font-medium">Availability</span>
                <span className={product.inStock ? 'text-green-600' : 'text-red-500'}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="mr-4 w-32">
                  <label htmlFor="quantity" className="block text-sm font-medium mb-2">
                    Quantity
                  </label>
                  <div className="flex">
                    <button
                      onClick={() => handleQuantityChange(quantity - 1)}
                      disabled={quantity <= 1}
                      className="w-10 h-10 flex items-center justify-center border border-cream-dark rounded-l-md disabled:opacity-50"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="quantity"
                      value={quantity}
                      onChange={(e) => handleQuantityChange(Number(e.target.value))}
                      min="1"
                      className="w-12 h-10 border-y border-cream-dark text-center [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    />
                    <button
                      onClick={() => handleQuantityChange(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center border border-cream-dark rounded-r-md"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <AddToCartButton
                    productId={product.id}
                    productName={product.name}
                    productPrice={product.price}
                    productImage={product.image}
                    className="w-full"
                  />
                </div>
                
                <div className="flex gap-4">
                  <button
                    onClick={handleLikeToggle}
                    className={`flex-1 h-10 border ${
                      isLiked ? 'border-gold bg-gold/10 text-gold' : 'border-charcoal-light/30 hover:border-gold/50'
                    } rounded-md flex items-center justify-center transition-colors`}
                    aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}
                  >
                    <Heart size={20} className={isLiked ? 'fill-gold' : ''} />
                  </button>
                  
                  <button
                    onClick={handleShare}
                    className="flex-1 h-10 border border-charcoal-light/30 hover:border-gold/50 rounded-md flex items-center justify-center transition-colors"
                    aria-label="Share product"
                  >
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div className="bg-white p-6 rounded-lg elegant-shadow">
              <h3 className="text-xl font-serif mb-4">Description</h3>
              <p className="text-charcoal-light">{product.fullDescription}</p>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-serif">You Might Also Like</h2>
              <Link 
                to={`/products?category=${product.category.toLowerCase()}`}
                className="text-gold hover:text-gold-dark transition-colors flex items-center"
              >
                See All
                <ChevronRight size={18} className="ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((product, index) => (
                <div 
                  key={product.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
