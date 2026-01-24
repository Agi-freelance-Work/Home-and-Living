
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowLeft, Star, Shield, Truck, RotateCcw, Plus, Minus } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import MetaTags from '../components/MetaTags';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = PRODUCTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <>
        <MetaTags 
          title="Product Not Found | Homiee"
          description="The product you're looking for could not be found. Browse our collection for similar items."
          canonicalUrl="https://www.homiee.studio/shop"
        />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl serif mb-4">Object Not Found</h2>
            <Link to="/shop" className="text-clay border-b border-clay pb-1">Return to Collection</Link>
          </div>
        </div>
      </>
    );
  }

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <>
      <MetaTags 
        title={`${product.name} | Homiee`}
        description={`${product.description} - Shop this beautiful piece from Homiee's curated collection.`}
        keywords={`${product.name}, ${product.category}, home decor, furniture, interior design`}
        canonicalUrl={`https://www.homiee.studio/product/${product.id}`}
        ogImage={product.image}
      />
      <div className="bg-[#fdfdfc] pt-32 pb-40">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-gray-400 hover:text-clay transition-colors mb-12"
          aria-label="Go back to collection"
        >
          <ArrowLeft size={14} /> Back to Collection
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40">
          {/* Gallery */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-beige-50 shadow-sm"
            >
              <img src={product.image} loading="lazy" className="w-full h-full object-cover" alt={product.name} />
            </motion.div>
            <div className="grid grid-cols-2 gap-8">
               <div className="aspect-square rounded-3xl bg-beige-50 overflow-hidden">
                 <img src={product.image} loading="lazy" className="w-full h-full object-cover opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" alt="detail" />
               </div>
               <div className="aspect-square rounded-3xl bg-beige-50 overflow-hidden">
                 <img src={product.image} loading="lazy" className="w-full h-full object-cover brightness-75 hover:brightness-100 transition-all duration-500" alt="detail" />
               </div>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="flex gap-4 overflow-x-auto pb-4">
              <div className="flex gap-4">
                {[1, 2, 3, 4].map((num) => (
                  <div 
                    key={num}
                    className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 border-transparent hover:border-clay cursor-pointer"
                  >
                    <img 
                      src={`${product.image.split('?')[0]}?w=100&h=100&q=80&num=${num}`} 
                      loading="lazy" 
                      className="w-full h-full object-cover" 
                      alt={`${product.name} view ${num}`} 
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Details Section */}
            <div className="space-y-6 pt-8 border-t border-gray-100">
              <h3 className="text-xl font-bold serif text-gray-900">Product Details</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li className="flex justify-between border-b border-gray-50 py-2">
                  <span className="font-medium">Material:</span>
                  <span>Oak Wood & Fabric</span>
                </li>
                <li className="flex justify-between border-b border-gray-50 py-2">
                  <span className="font-medium">Dimensions:</span>
                  <span>72" W × 36" D × 30" H</span>
                </li>
                <li className="flex justify-between border-b border-gray-50 py-2">
                  <span className="font-medium">Weight:</span>
                  <span>45 lbs</span>
                </li>
                <li className="flex justify-between border-b border-gray-50 py-2">
                  <span className="font-medium">Care Instructions:</span>
                  <span>Dry cloth, avoid direct sunlight</span>
                </li>
                <li className="flex justify-between border-b border-gray-50 py-2">
                  <span className="font-medium">Assembly:</span>
                  <span>Professional assembly recommended</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <span className="text-clay text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
                {product.category}
              </span>
              <h1 className="text-5xl md:text-6xl font-bold serif mb-6 leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-light text-gray-900">${product.price}</span>
                <div className="h-4 w-px bg-gray-200"></div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <span className="text-[10px] text-gray-400 font-bold ml-1">4.9 (24 Reviews)</span>
                </div>
              </div>

              <p className="text-gray-500 text-lg font-light leading-relaxed mb-12">
                {product.description} Crafted with precision and attention to detail, this piece is designed to harmonize with modern interiors while providing lasting comfort and durability.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-center gap-6">
                  <div className="flex items-center border border-gray-100 rounded-full px-4 py-2 bg-beige-50" role="group" aria-label="Quantity selector">
                    <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-1 hover:text-clay transition-colors" aria-label="Decrease quantity">
                      <Minus size={16} />
                    </button>
                    <span className="w-12 text-center font-bold" aria-live="polite" aria-label={`Quantity: ${quantity}`}>
                      {quantity}
                    </span>
                    <button onClick={() => setQuantity(q => q + 1)} className="p-1 hover:text-clay transition-colors" aria-label="Increase quantity">
                      <Plus size={16} />
                    </button>
                  </div>
                  <button 
                    onClick={() => {
                      for(let i=0; i<quantity; i++) addToCart(product);
                    }}
                    className="flex-grow bg-gray-900 text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-clay transition-all shadow-xl flex items-center justify-center gap-3"
                    aria-label={`Add ${quantity} ${product.name} to cart`}
                  >
                    <ShoppingBag size={18} /> Add to Sanctuary
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 border-t border-gray-100 pt-10">
                 <div className="flex items-start gap-3">
                   <Truck size={18} className="text-gray-400" />
                   <div>
                     <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1">Fast Delivery</h4>
                     <p className="text-[10px] text-gray-400 leading-relaxed">3-5 business days delivery globally.</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-3">
                   <RotateCcw size={18} className="text-gray-400" />
                   <div>
                     <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1">Easy Returns</h4>
                     <p className="text-[10px] text-gray-400 leading-relaxed">30-day money back guarantee.</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-3">
                   <Shield size={18} className="text-gray-400" />
                   <div>
                     <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1">2yr Warranty</h4>
                     <p className="text-[10px] text-gray-400 leading-relaxed">Against manufacturing defects.</p>
                   </div>
                 </div>
              </div>
              
              {/* Customer Reviews */}
              <div className="border-t border-gray-100 pt-10 mt-10">
                <h3 className="text-xl font-bold serif text-gray-900 mb-6">Customer Reviews</h3>
                <div className="space-y-6">
                  <div className="border border-gray-100 rounded-xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="font-bold text-gray-700">JD</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Jane D.</h4>
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star size={14} fill="currentColor" />
                          <Star size={14} fill="currentColor" />
                          <Star size={14} fill="currentColor" />
                          <Star size={14} fill="currentColor" />
                          <Star size={14} fill="currentColor" />
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">This chair has transformed my reading nook. The comfort and craftsmanship are exceptional. Worth every penny!</p>
                  </div>
                  <div className="border border-gray-100 rounded-xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="font-bold text-gray-700">MJ</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Michael J.</h4>
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star size={14} fill="currentColor" />
                          <Star size={14} fill="currentColor" />
                          <Star size={14} fill="currentColor" />
                          <Star size={14} fill="currentColor" />
                          <Star size={14} fill="currentColor" />
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">Beautiful addition to our living room. The quality exceeded my expectations. Assembly was straightforward.</p>
                  </div>
                </div>
                <button className="mt-6 text-clay font-bold text-sm hover:underline flex items-center gap-2">
                  See all 24 reviews <ArrowLeft size={12} className="rotate-180" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        {relatedProducts.length > 0 && (
          <section>
            <div className="flex items-end justify-between mb-16">
              <div>
                <span className="text-clay text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Complete the look</span>
                <h2 className="text-4xl font-bold serif">Related Pieces</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {relatedProducts.map((p, idx) => (
                <ProductCard key={p.id} product={p} index={idx} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
    </>
  );
};

export default ProductDetail;
