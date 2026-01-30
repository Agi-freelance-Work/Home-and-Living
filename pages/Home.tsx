
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Sparkles, MoveRight } from 'lucide-react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import MetaTags from '../components/MetaTags';
import { validateEmail } from '../utils/validation';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <div className="lg:col-span-6 z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-clay"></span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-clay">Est. 2024 — Studio Homiee</span>
            </div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] serif mb-8 tracking-tight">
              Curating <br /> <span className="italic font-light">Permanence</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 font-light max-w-md leading-relaxed mb-12">
              Exceptional objects for the modern sanctuary. We believe in furniture that tells a story and decor that calms the soul.
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <Link
                to="/shop"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full overflow-hidden transition-all hover:pr-12"
              >
                <span className="relative z-10 font-medium">Explore Collection</span>
                <ArrowUpRight size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Hero Image Layout */}
        <div className="lg:col-span-6 relative h-[600px] lg:h-[800px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute right-0 top-0 w-4/5 h-4/5 rounded-[2rem] overflow-hidden shadow-2xl z-0"
          >
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
              alt="Luxury minimal living"
              loading="lazy"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-0 bottom-10 w-3/5 h-2/5 rounded-3xl overflow-hidden shadow-2xl z-20 border-[10px] border-white"
          >
            <img
              src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop"
              className="w-full h-full object-cover"
              alt="Decor details"
              loading="lazy"
            />
          </motion.div>
          <div className="absolute top-1/2 -right-10 w-40 h-40 bg-clay/10 rounded-full blur-[100px] -z-10"></div>
        </div>
      </div>
    </section>
  );
};

const SectionHeader: React.FC<{ subtitle: string, title: string }> = ({ subtitle, title }) => (
  <div className="mb-20">
    <span className="text-clay text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">{subtitle}</span>
    <h2 className="text-5xl md:text-6xl font-bold serif leading-tight">{title}</h2>
  </div>
);

const Home: React.FC = () => {
  const featured = PRODUCTS.filter(p => p.featured).slice(0, 3);
  
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    
    // Clear error when user starts typing
    if (emailError) {
      setEmailError('');
    }
  };
  
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = validateEmail(email);
    
    if (!validation.isValid) {
      setEmailError(validation.errorMessage || '');
      return;
    }
    
    // Form is valid, submit data
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Email submitted:', email);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setEmail('');
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <>
      <MetaTags 
        title="Home | Homiee"
        description="Discover exceptional furniture and decor for the modern sanctuary. Browse our curated collection of timeless pieces designed to elevate your living space."
        keywords="home decor, furniture, interior design, modern furniture, home accessories, curated collection"
        canonicalUrl="https://www.homiee.studio/"
      />
      <div className="bg-[#fdfdfc]">
        <Hero />
        
        {/* Editorial Quote */}
        <section className="py-40 px-6 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="serif italic text-3xl md:text-5xl text-gray-800 leading-tight">
              "Design is a silent ambassador of your brand. In your home, it's the heartbeat of your lifestyle."
            </span>
          </motion.div>
        </section>

      {/* Featured Pieces - Grid Layout */}
      <section className="py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
            <div className="max-w-xl">
               <SectionHeader subtitle="Selected Works" title="The Seasonal Edit" />
               <p className="text-gray-500 font-light text-lg -mt-12">
                 Our quarterly selection of foundational pieces designed to transform your living experience.
               </p>
            </div>
            <Link to="/shop" className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] hover:text-clay transition-all">
              View Collection
              <MoveRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {featured.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Immersive Lifestyle Section */}
      <section className="py-40 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover scale-150 blur-3xl" alt="" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-clay/20 border border-clay/30 px-4 py-1 rounded-full mb-8">
                <Sparkles size={12} className="text-clay" />
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-clay">Craftsmanship First</span>
              </div>
              <h2 className="text-6xl font-bold serif leading-tight mb-10">Beyond the <br /> <span className="italic">Aesthetic</span></h2>
              <p className="text-gray-400 text-xl font-light leading-relaxed mb-12">
                We believe in the power of natural materials—the grain of the wood, the weave of the linen, the weight of the stone. Each Homiee object is selected for its tactical presence.
              </p>
              <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-12">
                <div>
                   <h4 className="text-4xl font-bold serif text-clay mb-2">12k+</h4>
                   <p className="text-gray-500 text-[10px] uppercase tracking-widest">Sanctuaries Curated</p>
                </div>
                <div>
                   <h4 className="text-4xl font-bold serif text-clay mb-2">100%</h4>
                   <p className="text-gray-500 text-[10px] uppercase tracking-widest">Sustainable Sourcing</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <motion.div 
                initial={{ rotate: 5, scale: 0.9 }}
                whileInView={{ rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10"
              >
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop" 
                  className="w-full h-full object-cover" 
                  alt="Interior details" 
                />
              </motion.div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-clay/20 rounded-full blur-[120px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter - Minimalist */}
      <section className="py-40">
        <div className="max-w-xl mx-auto px-6 text-center">
           <SectionHeader subtitle="Stay Inspired" title="The Newsletter" />
           <p className="text-gray-500 font-light mb-12 -mt-10">
             Join our community for early access to collections and editorial interiors.
           </p>
           <form onSubmit={handleEmailSubmit} className="relative group" role="form">
             <label htmlFor="newsletter-email-home" className="sr-only">Newsletter Email</label>
             <input 
               id="newsletter-email-home"
               type="email" 
               value={email}
               onChange={handleEmailChange}
               placeholder="Enter your email" 
               className={`w-full bg-transparent border-b ${emailError ? 'border-red-500' : 'border-gray-200'} py-6 text-lg focus:outline-none focus:border-clay transition-colors`}
               aria-label="Email address for newsletter subscription"
             />
             {emailError && <p className="mt-1 text-sm text-red-500" role="alert">{emailError}</p>}
             <button 
               className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-clay transition-colors uppercase text-[10px] font-bold tracking-[0.2em]" 
               aria-label="Subscribe to newsletter"
               type="submit"
               disabled={isSubmitting}
             >
               {isSubmitting ? 'Sending...' : 'Subscribe'}
             </button>
             {submitSuccess && (
               <div className="mt-2 text-sm text-green-600">
                 Thank you for subscribing!
               </div>
             )}
           </form>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
