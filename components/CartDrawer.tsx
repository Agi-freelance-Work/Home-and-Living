
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[110]"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[120] flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-title"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-clay" />
                <h2 id="cart-title" className="text-xl font-bold serif">Your Sanctuary</h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-50 rounded-full transition-colors"
                aria-label="Close cart"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 rounded-full bg-beige-50 flex items-center justify-center mb-6">
                    <ShoppingBag size={32} className="text-gray-300" />
                  </div>
                  <h3 className="text-lg font-bold serif text-gray-400">Your bag is empty</h3>
                  <p className="text-gray-500 text-sm mt-2 max-w-[200px]">
                    Looks like you haven't added any masterpieces yet.
                  </p>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-4"
                    role="listitem"
                  >
                    <div className="w-24 h-32 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                      <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow flex flex-col">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-gray-900 leading-tight">{item.name}</h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-clay transition-colors"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-auto">
                        {item.category}
                      </p>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center border border-gray-100 rounded-full px-2 py-1 bg-gray-50" role="group" aria-label="Quantity selector">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:text-clay transition-colors"
                            aria-label={`Decrease quantity for ${item.name}`}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-xs font-bold" aria-live="polite" aria-label={`Quantity: ${item.quantity}`}>{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:text-clay transition-colors"
                            aria-label={`Increase quantity for ${item.name}`}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="font-bold text-gray-900" aria-label={`Price: ${(item.price * item.quantity).toFixed(0)} dollars`}>${(item.price * item.quantity).toFixed(0)}</span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 bg-beige-50 border-t border-gray-100 space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Shipping</span>
                    <span className="uppercase text-[10px] font-bold tracking-widest">Calculated at Checkout</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold serif pt-4 border-t border-gray-200">
                    <span>Total</span>
                    <span>${totalPrice.toFixed(0)}</span>
                  </div>
                </div>
                <button className="w-full bg-gray-900 text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-clay transition-all shadow-xl shadow-gray-900/10" aria-label="Proceed to checkout">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
