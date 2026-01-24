
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group"
    >
      <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-beige-50 mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-700" role="figure" aria-label={`${product.name} image`}>
        <Link to={`/product/${product.id}`} aria-label={`View details for ${product.name}`} className="block h-full">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
        </Link>
        
        {/* Product Name Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white font-bold serif text-lg truncate">{product.name}</h3>
          <p className="text-white/80 text-sm truncate">${product.price}</p>
        </div>
        
        {/* Floating Actions */}
        <button className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-md rounded-full shadow-sm hover:bg-clay hover:text-white transition-all scale-0 group-hover:scale-100 origin-center duration-300" aria-label="Add to wishlist">
          <Heart size={18} />
        </button>

        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-full bg-gray-900 text-white py-4 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-clay shadow-xl transition-all"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag size={14} />
            Add to Sanctuary
          </button>
        </div>
        
        {/* Badge for featured products */}
        {product.featured && (
          <div className="absolute top-6 left-6 px-3 py-1 bg-clay text-white text-xs font-bold rounded-full">
            Featured
          </div>
        )}
      </div>

      <div className="px-2 pt-4">
        <div className="flex justify-between items-start mb-1">
          <span className="text-gray-400 text-[9px] uppercase tracking-[0.3em] font-bold">{product.category}</span>
          <span className="text-lg font-light text-gray-900">${product.price}</span>
        </div>
        <div className="flex items-center justify-between">
          <Link to={`/product/${product.id}`} className="text-clay text-[9px] uppercase tracking-[0.2em] font-bold flex items-center gap-1" aria-label="View product details">
            Details <ArrowUpRight size={10} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
