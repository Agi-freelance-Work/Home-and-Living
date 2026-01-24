
import React, { useState } from 'react';
import MetaTags from '../components/MetaTags';
import { validateName, validateEmail, validateSubject, validateMessage, ValidationResult } from '../utils/validation';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'firstName':
        return validateName(value, 'First name').errorMessage || '';
      case 'lastName':
        return validateName(value, 'Last name').errorMessage || '';
      case 'email':
        return validateEmail(value).errorMessage || '';
      case 'subject':
        return validateSubject(value).errorMessage || '';
      case 'message':
        return validateMessage(value).errorMessage || '';
      default:
        return '';
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {
      firstName: validateField('firstName', formData.firstName),
      lastName: validateField('lastName', formData.lastName),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message)
    };
    
    setErrors(newErrors);
    
    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    
    if (!hasErrors) {
      // Form is valid, submit data
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    }
  };
  
  return (
    <>
      <MetaTags 
        title="Contact | Homiee"
        description="Get in touch with Homiee for inquiries about our collections or assistance with orders. Our team is here to help create your perfect living space."
        keywords="contact homiee, customer service, support, interior design help, furniture inquiry"
        canonicalUrl="https://www.homiee.studio/contact"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl font-bold serif mb-8">Get in Touch</h1>
          <p className="text-gray-600 text-lg mb-12">
            Have questions about our collections or need help with an order? 
            Our dedicated team is here to assist you in creating your perfect living space.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-clay/10 p-3 rounded-lg text-clay">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Our Studio</h4>
                <p className="text-gray-500">123 Design Avenue, Suite 100<br />Creative District, NY 10001</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-clay/10 p-3 rounded-lg text-clay">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Email Us</h4>
                <p className="text-gray-500">hello@homiee.decor<br />support@homiee.decor</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-clay/10 p-3 rounded-lg text-clay">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Call Us</h4>
                <p className="text-gray-500">+1 (555) 000-0000<br />Mon-Fri, 9am - 6pm EST</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <form className="space-y-6" aria-label="Contact form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input 
                  id="firstName"
                  name="firstName"
                  type="text" 
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.firstName ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-clay focus:outline-none`}
                />
                {errors.firstName && <p className="mt-1 text-sm text-red-500" role="alert">{errors.firstName}</p>}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input 
                  id="lastName"
                  name="lastName"
                  type="text" 
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.lastName ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-clay focus:outline-none`}
                />
                {errors.lastName && <p className="mt-1 text-sm text-red-500" role="alert">{errors.lastName}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input 
                id="email"
                name="email"
                type="email" 
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-clay focus:outline-none`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500" role="alert">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <select 
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${errors.subject ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-clay focus:outline-none`}
              >
                <option value="">Select a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Order Status">Order Status</option>
                <option value="Partnership">Partnership</option>
                <option value="Press">Press</option>
              </select>
              {errors.subject && <p className="mt-1 text-sm text-red-500" role="alert">{errors.subject}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full h-32 px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-clay focus:outline-none resize-none`}
              />
              {errors.message && <p className="mt-1 text-sm text-red-500" role="alert">{errors.message}</p>}
            </div>
            <button 
              type="submit" 
              className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-clay transition-all shadow-lg" 
              aria-label="Send message"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitSuccess && (
              <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg text-center">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
