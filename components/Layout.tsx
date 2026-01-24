
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, Instagram, Facebook, Twitter, ArrowRight, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { CartProvider, useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-[100] transition-all duration-700 ${scrolled ? 'bg-white/90 backdrop-blur-xl py-4 border-b border-gray-100' : 'bg-transparent py-10'}`} aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 group">
            <Link to="/" className="text-4xl font-bold tracking-tighter serif text-gray-900 flex items-center" aria-label="Home page">
              Homiee<span className="text-clay group-hover:translate-x-1 transition-transform">.</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all hover:text-clay ${
                  location.pathname === link.path ? 'text-clay border-b border-clay/30 pb-1' : 'text-gray-400'
                }`}
                aria-current={location.pathname === link.path ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-900 hover:text-clay transition-all scale-110"
              aria-label={`Shopping cart with ${totalItems} items`}
            >
              <ShoppingBag size={18} strokeWidth={2} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-clay text-white text-[8px] flex items-center justify-center rounded-full shadow-sm font-bold animate-in fade-in zoom-in" aria-label="Items in cart">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-6">
            <button onClick={() => setIsCartOpen(true)} className="relative p-3 text-gray-900 hover:text-clay transition-all" aria-label={`Shopping cart with ${totalItems} items}`}>
              <ShoppingBag size={22} strokeWidth={2} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-clay text-white text-[10px] flex items-center justify-center rounded-full shadow-sm font-bold" aria-label="Items in cart">
                  {totalItems}
                </span>
              )}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 focus:outline-none" aria-label={isOpen ? "Close menu" : "Open menu"}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white fixed inset-0 z-50 flex flex-col pt-32 px-12"
            aria-modal="true"
            role="dialog"
          >
            <div className="flex flex-col space-y-10">
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.path}
                >
                  <Link
                    to={link.path}
                    className="text-6xl font-bold serif text-gray-900 hover:text-clay transition-colors"
                    onClick={() => setIsOpen(false)}
                    aria-current={location.pathname === link.path ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.1 }}
                className="flex items-center gap-4 mt-8"
              >
                <button 
                  onClick={() => { setIsOpen(false); setIsCartOpen(true); }}
                  className="relative p-3 text-gray-900 hover:text-clay transition-all"
                  aria-label={`Shopping cart with ${totalItems} items`}
                >
                  <ShoppingBag size={24} strokeWidth={2} />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-clay text-white text-[10px] flex items-center justify-center rounded-full shadow-sm font-bold">
                      {totalItems}
                    </span>
                  )}
                </button>
                <span className="text-2xl font-bold serif text-gray-900">Cart</span>
              </motion.div>
            </div>
            <div className="mt-auto pt-16 border-t border-gray-100">
              <button 
                onClick={() => { setIsOpen(false); setIsCartOpen(true); }}
                className="relative flex items-center gap-4 p-3 text-gray-900 hover:text-clay transition-all w-full"
                aria-label={`Shopping cart with ${totalItems} items`}
              >
                <ShoppingBag size={24} strokeWidth={2} />
                <span className="text-2xl font-bold serif text-gray-900">Cart</span>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-clay text-white text-[10px] flex items-center justify-center rounded-full shadow-sm font-bold">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
            <div className="mt-auto pb-20 border-t border-gray-100 pt-10 flex justify-between items-center">
               <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Curated Living</p>
               <div className="flex gap-6">
                 <Instagram size={20} className="text-gray-400" aria-label="Instagram" />
                 <Twitter size={20} className="text-gray-400" aria-label="Twitter" />
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-32 pb-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-32">
          <div className="md:col-span-6">
            <h3 className="text-6xl font-bold serif leading-[0.9] mb-12 tracking-tighter">
              Homiee<span className="text-clay italic">.</span> <br /> 
              <span className="text-gray-300 font-light italic">Sanctuary Design</span>
            </h3>
            <p className="text-gray-400 max-w-sm mb-12 text-lg font-light leading-relaxed">
              We create space for the moments that matter, one object at a time.
            </p>
            <div className="flex space-x-10">
              <Instagram size={22} className="text-gray-400 hover:text-clay transition-colors cursor-pointer" aria-label="Instagram" />
              <Facebook size={22} className="text-gray-400 hover:text-clay transition-colors cursor-pointer" aria-label="Facebook" />
              <Twitter size={22} className="text-gray-400 hover:text-clay transition-colors cursor-pointer" aria-label="Twitter" />
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-10 text-clay">Collections</h4>
            <ul className="space-y-6 text-sm text-gray-500 font-medium">
              <li><Link to="/shop" className="hover:text-gray-900 transition-colors">Living Room</Link></li>
              <li><Link to="/shop" className="hover:text-gray-900 transition-colors">Bedroom</Link></li>
              <li><Link to="/shop" className="hover:text-gray-900 transition-colors">Art & Objects</Link></li>
              <li><Link to="/shop" className="hover:text-gray-900 transition-colors">The Archives</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-10 text-clay">Inquiries</h4>
            <div className="space-y-4 mb-12">
               <p className="text-xl font-bold serif text-gray-900">hello@homiee.studio</p>
               <p className="text-gray-400 font-light">12/F Creative Loft, London UK</p>
            </div>
            <div className="relative group">
              <label htmlFor="newsletter-email" className="sr-only">Newsletter Email</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="The Newsletter"
                className="w-full bg-transparent border-b border-gray-200 py-4 text-sm focus:outline-none focus:border-clay transition-all"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 group-hover:text-clay transition-all" aria-label="Subscribe to newsletter">
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-16 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.3em] text-gray-400 font-bold">
          <p>© 2024 Studio Homiee. All rights reserved.</p>
          <div className="flex space-x-12">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutContent: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <motion.main 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="flex-grow"
      >
        {children}
      </motion.main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <CartProvider>
      <LayoutContent {...props} />
    </CartProvider>
  );
};

export default Layout;
