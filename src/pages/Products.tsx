
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import FilterSidebar from '@/components/FilterSidebar';
import { products, categories, collections, materials } from '@/lib/data';
import { FilterIcon, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Products = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category')?.toLowerCase() || '';
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    categories: initialCategory ? [initialCategory] : [],
    collections: [],
    materials: [],
    priceRange: [0, 6000] as [number, number],
    inStock: false,
    onSale: false
  });
  
  const [sortOption, setSortOption] = useState<string>('featured');
  const [filteredProducts, setFilteredProducts] = useState(products);

  // On initial load, filter by URL parameters if any
  useEffect(() => {
    if (initialCategory) {
      const categoryProducts = products.filter(
        product => product.category.toLowerCase() === initialCategory
      );
      setFilteredProducts(categoryProducts);
    }
  }, [initialCategory]);

  // Apply filters and sorting whenever filters or sort option changes
  useEffect(() => {
    let result = [...products];
    
    // Apply category filters
    if (filters.categories.length > 0) {
      result = result.filter(product => 
        filters.categories.includes(product.category.toLowerCase())
      );
    }
    
    // Apply collection filters
    if (filters.collections.length > 0) {
      result = result.filter(product => 
        filters.collections.includes(product.collection.toLowerCase())
      );
    }
    
    // Apply material filters
    if (filters.materials.length > 0) {
      result = result.filter(product => 
        filters.materials.includes(product.material.toLowerCase())
      );
    }
    
    // Apply price range filter
    result = result.filter(product => 
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );
    
    // Apply in stock filter
    if (filters.inStock) {
      result = result.filter(product => product.inStock);
    }
    
    // Apply on sale filter
    if (filters.onSale) {
      // In our demo, we don't have a sale flag, so we'll simulate it
      // In a real app, you'd check a sale property
      result = result.filter(product => product.bestseller);
    }
    
    // Apply sorting
    switch (sortOption) {
      case 'price-low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1));
        break;
      case 'bestselling':
        result.sort((a, b) => (a.bestseller === b.bestseller ? 0 : a.bestseller ? -1 : 1));
        break;
      case 'featured':
      default:
        result.sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1));
        break;
    }
    
    setFilteredProducts(result);
  }, [filters, sortOption]);

  // Find max price among products
  const maxPrice = Math.max(...products.map(product => product.price));

  // Handle sort change
  const handleSortChange = (value: string) => {
    setSortOption(value);
  };

  return (
    <div className="min-h-screen bg-cream-light pt-10">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 animate-fade-up">Our Collection</h1>
          <p className="text-lg text-charcoal-light animate-fade-up" style={{ animationDelay: '100ms' }}>
            Discover our carefully curated jewelry collection, where timeless elegance meets contemporary design.
          </p>
        </div>
        
        {/* Filters and Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <Button 
            variant="outline" 
            className="w-full md:w-auto border-charcoal-light text-charcoal-dark"
            onClick={() => setIsFilterOpen(true)}
          >
            <FilterIcon size={18} className="mr-2" />
            Filters
          </Button>
          
          <div className="w-full md:w-auto">
            <Select
              value={sortOption}
              onValueChange={handleSortChange}
            >
              <SelectTrigger className="w-full md:w-[180px] bg-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="bestselling">Best Selling</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Active Filters Display */}
        {(filters.categories.length > 0 || 
          filters.collections.length > 0 || 
          filters.materials.length > 0 || 
          filters.inStock || 
          filters.onSale) && (
          <div className="flex flex-wrap gap-2 mb-6 animate-fade-in">
            {filters.categories.map(category => {
              const categoryName = categories.find(c => c.id === category)?.name || category;
              return (
                <div 
                  key={`category-${category}`}
                  className="px-3 py-1 bg-cream-dark rounded-full text-sm flex items-center"
                >
                  {categoryName}
                  <button 
                    onClick={() => setFilters(prev => ({
                      ...prev,
                      categories: prev.categories.filter(c => c !== category)
                    }))}
                    className="ml-2 text-charcoal-light hover:text-charcoal-dark"
                    aria-label={`Remove ${categoryName} filter`}
                  >
                    ×
                  </button>
                </div>
              );
            })}
            
            {filters.collections.map(collection => {
              const collectionName = collections.find(c => c.id === collection)?.name || collection;
              return (
                <div 
                  key={`collection-${collection}`}
                  className="px-3 py-1 bg-cream-dark rounded-full text-sm flex items-center"
                >
                  {collectionName}
                  <button 
                    onClick={() => setFilters(prev => ({
                      ...prev,
                      collections: prev.collections.filter(c => c !== collection)
                    }))}
                    className="ml-2 text-charcoal-light hover:text-charcoal-dark"
                    aria-label={`Remove ${collectionName} filter`}
                  >
                    ×
                  </button>
                </div>
              );
            })}
            
            {filters.materials.map(material => {
              const materialName = materials.find(m => m.id === material)?.name || material;
              return (
                <div 
                  key={`material-${material}`}
                  className="px-3 py-1 bg-cream-dark rounded-full text-sm flex items-center"
                >
                  {materialName}
                  <button 
                    onClick={() => setFilters(prev => ({
                      ...prev,
                      materials: prev.materials.filter(m => m !== material)
                    }))}
                    className="ml-2 text-charcoal-light hover:text-charcoal-dark"
                    aria-label={`Remove ${materialName} filter`}
                  >
                    ×
                  </button>
                </div>
              );
            })}
            
            {filters.inStock && (
              <div className="px-3 py-1 bg-cream-dark rounded-full text-sm flex items-center">
                In Stock Only
                <button 
                  onClick={() => setFilters(prev => ({ ...prev, inStock: false }))}
                  className="ml-2 text-charcoal-light hover:text-charcoal-dark"
                  aria-label="Remove in stock filter"
                >
                  ×
                </button>
              </div>
            )}
            
            {filters.onSale && (
              <div className="px-3 py-1 bg-cream-dark rounded-full text-sm flex items-center">
                On Sale
                <button 
                  onClick={() => setFilters(prev => ({ ...prev, onSale: false }))}
                  className="ml-2 text-charcoal-light hover:text-charcoal-dark"
                  aria-label="Remove on sale filter"
                >
                  ×
                </button>
              </div>
            )}
            
            <button
              onClick={() => setFilters({
                categories: [],
                collections: [],
                materials: [],
                priceRange: [0, maxPrice],
                inStock: false,
                onSale: false
              })}
              className="px-3 py-1 bg-charcoal-dark text-white rounded-full text-sm hover:bg-charcoal transition-colors"
            >
              Clear All
            </button>
          </div>
        )}
        
        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="animate-fade-up" 
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center animate-fade-in">
            <h3 className="text-2xl font-serif mb-4">No Products Found</h3>
            <p className="text-charcoal-light mb-8">
              Try adjusting your filters to find what you're looking for.
            </p>
            <Button
              onClick={() => setFilters({
                categories: [],
                collections: [],
                materials: [],
                priceRange: [0, maxPrice],
                inStock: false,
                onSale: false
              })}
              className="bg-charcoal-dark hover:bg-charcoal text-white"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
      
      {/* Filter Sidebar */}
      <FilterSidebar
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        setFilters={setFilters}
        maxPrice={maxPrice}
      />
      
      {/* Backdrop for when sidebar is open */}
      {isFilterOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={() => setIsFilterOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Products;
