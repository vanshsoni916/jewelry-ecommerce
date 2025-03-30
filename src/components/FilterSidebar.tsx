
import React from 'react';
import { X } from 'lucide-react';
import { categories, collections, materials } from '@/lib/data';
import { Slider } from '@/components/ui/slider';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  filters: {
    categories: string[];
    collections: string[];
    materials: string[];
    priceRange: [number, number];
    inStock: boolean;
    onSale: boolean;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    categories: string[];
    collections: string[];
    materials: string[];
    priceRange: [number, number];
    inStock: boolean;
    onSale: boolean;
  }>>;
  maxPrice: number;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ 
  isOpen, 
  onClose, 
  filters, 
  setFilters,
  maxPrice
}) => {
  // Toggle category filter
  const handleCategoryChange = (categoryId: string) => {
    setFilters(prev => {
      const newCategories = prev.categories.includes(categoryId)
        ? prev.categories.filter(id => id !== categoryId)
        : [...prev.categories, categoryId];
      
      return {
        ...prev,
        categories: newCategories
      };
    });
  };

  // Toggle collection filter
  const handleCollectionChange = (collectionId: string) => {
    setFilters(prev => {
      const newCollections = prev.collections.includes(collectionId)
        ? prev.collections.filter(id => id !== collectionId)
        : [...prev.collections, collectionId];
      
      return {
        ...prev,
        collections: newCollections
      };
    });
  };

  // Toggle material filter
  const handleMaterialChange = (materialId: string) => {
    setFilters(prev => {
      const newMaterials = prev.materials.includes(materialId)
        ? prev.materials.filter(id => id !== materialId)
        : [...prev.materials, materialId];
      
      return {
        ...prev,
        materials: newMaterials
      };
    });
  };

  // Handle price range change
  const handlePriceChange = (value: number[]) => {
    setFilters(prev => ({
      ...prev,
      priceRange: [value[0], value[1] || maxPrice]
    }));
  };

  // Toggle in stock filter
  const handleInStockChange = () => {
    setFilters(prev => ({
      ...prev,
      inStock: !prev.inStock
    }));
  };

  // Toggle on sale filter
  const handleOnSaleChange = () => {
    setFilters(prev => ({
      ...prev,
      onSale: !prev.onSale
    }));
  };

  // Clear all filters
  const handleClearFilters = () => {
    setFilters({
      categories: [],
      collections: [],
      materials: [],
      priceRange: [0, maxPrice],
      inStock: false,
      onSale: false
    });
  };

  return (
    <div 
      className={`fixed inset-y-0 left-0 z-40 w-full sm:max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-elegant ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } overflow-y-auto`}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-serif">Filters</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-cream-dark rounded-full transition-colors"
            aria-label="Close filters"
          >
            <X size={24} />
          </button>
        </div>

        {/* Price Range */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Price Range</h3>
          <div className="px-2">
            <Slider
              defaultValue={[filters.priceRange[0], filters.priceRange[1]]}
              min={0}
              max={maxPrice}
              step={50}
              onValueChange={handlePriceChange}
              className="mb-6"
            />
            <div className="flex justify-between text-sm">
              <span>${filters.priceRange[0]}</span>
              <span>${filters.priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Categories</h3>
          <div className="space-y-3">
            {categories.map(category => (
              <div key={category.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`category-${category.id}`}
                  checked={filters.categories.includes(category.id)}
                  onChange={() => handleCategoryChange(category.id)}
                  className="filter-checkbox"
                />
                <label 
                  htmlFor={`category-${category.id}`}
                  className="ml-3 text-charcoal-dark cursor-pointer"
                >
                  {category.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Collections */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Collections</h3>
          <div className="space-y-3">
            {collections.map(collection => (
              <div key={collection.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`collection-${collection.id}`}
                  checked={filters.collections.includes(collection.id)}
                  onChange={() => handleCollectionChange(collection.id)}
                  className="filter-checkbox"
                />
                <label 
                  htmlFor={`collection-${collection.id}`}
                  className="ml-3 text-charcoal-dark cursor-pointer"
                >
                  {collection.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Materials */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Materials</h3>
          <div className="space-y-3">
            {materials.map(material => (
              <div key={material.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`material-${material.id}`}
                  checked={filters.materials.includes(material.id)}
                  onChange={() => handleMaterialChange(material.id)}
                  className="filter-checkbox"
                />
                <label 
                  htmlFor={`material-${material.id}`}
                  className="ml-3 text-charcoal-dark cursor-pointer"
                >
                  {material.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Availability</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="inStock"
                checked={filters.inStock}
                onChange={handleInStockChange}
                className="filter-checkbox"
              />
              <label 
                htmlFor="inStock"
                className="ml-3 text-charcoal-dark cursor-pointer"
              >
                In Stock Only
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="onSale"
                checked={filters.onSale}
                onChange={handleOnSaleChange}
                className="filter-checkbox"
              />
              <label 
                htmlFor="onSale"
                className="ml-3 text-charcoal-dark cursor-pointer"
              >
                On Sale
              </label>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 pt-6 border-t border-cream-dark">
          <button
            onClick={handleClearFilters}
            className="flex-1 py-3 px-6 border border-charcoal-dark text-charcoal-dark rounded-md hover:bg-charcoal-light/10 transition-colors"
          >
            Clear All
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-3 px-6 bg-charcoal-dark text-white rounded-md hover:bg-charcoal transition-colors"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
