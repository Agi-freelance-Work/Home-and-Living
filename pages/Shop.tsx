
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, Heart, Search } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Category } from '../types';
import ProductCard from '../components/ProductCard';
import MetaTags from '../components/MetaTags';

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [sortBy, setSortBy] = useState<'default' | 'priceLow' | 'priceHigh'>('default');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }
    if (searchQuery) {
      result = result.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    if (sortBy === 'priceLow') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceHigh') {
      result.sort((a, b) => b.price - a.price);
    }
    return result;
  }, [activeCategory, sortBy, searchQuery]);

  const categories = ['All', ...Object.values(Category)];

  return (
    <>
      <MetaTags 
        title="Shop | Homiee"
        description="Browse our curated collection of exceptional furniture and decor. Discover timeless pieces designed to elevate your living space."
        keywords="shop furniture, buy decor, home accessories, modern furniture, curated collection, interior design"
        canonicalUrl="https://www.homiee.studio/shop"
      />
      <div className="bg-white pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <header className="mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-bold serif mb-6"
          >
            Fine Furniture <br /> & Decor
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg font-light"
          >
            Discover objects designed for longevity, crafted with precision, and chosen for their ability to define a space.
          </motion.p>
        </header>

        {/* Filters Bar */}
        <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-y border-gray-100 py-6 mb-16 px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat as any)}
                  className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                    activeCategory === cat 
                      ? 'bg-gray-900 text-white shadow-xl scale-105' 
                      : 'bg-beige-100 text-gray-500 hover:bg-beige-50'
                  }`}
                  aria-label={`Filter by ${cat} category`}
                  aria-pressed={activeCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-6 w-full lg:w-auto">
              <div className="relative flex-grow lg:w-64">
                <label htmlFor="search-input" className="sr-only">Search collection</label>
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  id="search-input"
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search collection..."
                  className="w-full bg-beige-50 rounded-full py-3 pl-12 pr-6 text-sm focus:outline-none focus:ring-1 focus:ring-clay border-none"
                  aria-label="Search collection"
                />
              </div>
              <div className="flex items-center gap-2 bg-beige-50 px-6 py-3 rounded-full cursor-pointer hover:bg-beige-100 transition-colors">
                <SlidersHorizontal size={16} className="text-gray-500" />
                <span className="text-xs uppercase tracking-widest font-bold text-gray-700">Sort</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-xs font-bold uppercase tracking-widest focus:outline-none cursor-pointer"
                  aria-label="Sort products by"
                >
                  <option value="default">Latest</option>
                  <option value="priceLow">Price Asc</option>
                  <option value="priceHigh">Price Desc</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-40 text-center"
          >
            <div className="w-24 h-24 bg-beige-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Search size={32} className="text-gray-300" />
            </div>
            <h3 className="text-2xl font-bold serif text-gray-400">No objects found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your filters or search query.</p>
          </motion.div>
        )}
      </div>
    </div>
    </>
  );
};

export default Shop;
