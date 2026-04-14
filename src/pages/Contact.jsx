// import React from 'react';
// import { motion } from 'framer-motion';
// import { SectionHeading } from '../components/ui/SectionHeading';
// import { MapPin, Phone, Mail } from 'lucide-react';
// import { Button } from '../components/ui/Button';

// export default function Contact() {
//   return (
//     <div className="pt-24 pb-20 min-h-screen bg-gray-50 dark:bg-dark-bg">
//       <div className="container mx-auto px-4">
//         <SectionHeading title="Get In Touch" subtitle="Contact Us" />
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 max-w-6xl mx-auto">
//           {/* Contact Info */}
//           <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
//             <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Let's build something great.</h3>
//             <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
//               Whether you have a specific project in mind or just want to explore possibilities, our team is ready to help you navigate the digital landscape.
//             </p>
            
//             <div className="space-y-6 mt-8">
//               <div className="flex items-start gap-4">
//                 <div className="p-3 bg-white dark:bg-dark-card rounded-xl text-primary-600 shadow-sm"><MapPin className="w-6 h-6"/></div>
//                 <div>
//                   <h4 className="font-bold text-gray-900 dark:text-white text-lg">Our Office</h4>
//                   <p className="text-gray-600 dark:text-gray-400 mt-1">Bole Road, Tower 2, 4th Floor<br/>Addis Ababa, Ethiopia</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4">
//                 <div className="p-3 bg-white dark:bg-dark-card rounded-xl text-primary-600 shadow-sm"><Phone className="w-6 h-6"/></div>
//                 <div>
//                   <h4 className="font-bold text-gray-900 dark:text-white text-lg">Phone</h4>
//                   <p className="text-gray-600 dark:text-gray-400 mt-1">+251 911 234 567</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4">
//                 <div className="p-3 bg-white dark:bg-dark-card rounded-xl text-primary-600 shadow-sm"><Mail className="w-6 h-6"/></div>
//                 <div>
//                   <h4 className="font-bold text-gray-900 dark:text-white text-lg">Email</h4>
//                   <p className="text-gray-600 dark:text-gray-400 mt-1">hello@masatech.com</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Form */}
//           <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white dark:bg-dark-card p-8 rounded-3xl shadow-lg dark:shadow-none border border-gray-100 dark:border-dark-border">
//             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-2 text-left">
//                   <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">First Name</label>
//                   <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-bg focus:ring-2 focus:ring-primary-500 focus:outline-none dark:text-white transition-all" placeholder="John" />
//                 </div>
//                 <div className="space-y-2 text-left">
//                   <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Last Name</label>
//                   <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-bg focus:ring-2 focus:ring-primary-500 focus:outline-none dark:text-white transition-all" placeholder="Doe" />
//                 </div>
//               </div>
//               <div className="space-y-2 text-left">
//                 <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address</label>
//                 <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-bg focus:ring-2 focus:ring-primary-500 focus:outline-none dark:text-white transition-all" placeholder="john@company.com" />
//               </div>
//               <div className="space-y-2 text-left">
//                 <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Message</label>
//                 <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-bg focus:ring-2 focus:ring-primary-500 focus:outline-none dark:text-white transition-all resize-none" placeholder="How can we help you?"></textarea>
//               </div>
//               <Button size="lg" className="w-full">Send Message</Button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { MapPin, Phone, Mail, Loader2, CheckCircle2, X, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init('U9VESvsM90i4MrtTI');

// Confirmation Modal Component
const ConfirmationModal = ({ isOpen, onClose, onConfirm, formData }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white dark:bg-dark-card rounded-2xl shadow-2xl max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Confirm Your Message</h3>
              <button 
                onClick={onClose}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 dark:bg-dark-bg rounded-lg p-4 space-y-2">
                <div>
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Name</span>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {formData.firstName} {formData.lastName}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Email</span>
                  <p className="text-gray-900 dark:text-white font-medium">{formData.email}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Message</span>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">{formData.message}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  We'll respond to you within 24 hours at the email address provided.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                onClick={onClose}
                className="flex-1"
              >
                Edit
              </Button>
              <Button 
                onClick={onConfirm}
                className="flex-1"
              >
                Send Message
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Success Modal Component
const SuccessModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white dark:bg-dark-card rounded-2xl shadow-2xl max-w-md w-full p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Message Sent Successfully!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
            <Button onClick={onClose} className="w-full">
              Close
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields.');
      setStatus('error');
      return;
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }
    
    setErrorMessage('');
    setShowConfirmation(true);
  };

  const handleConfirmSend = async () => {
    setShowConfirmation(false);
    setStatus('loading');
    setErrorMessage('');

    try {
      const serviceId = 'service_gxrtmdc';
      const templateId = 'template_egovjpp';
      
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        message: formData.message,
        to_email: 'gudisagebi1@gmail.com'
      };

      console.log('Sending email...');

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );

      console.log('Email sent successfully:', response);

      if (response.status === 200) {
        setStatus('success');
        setShowSuccess(true);
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      
      setStatus('error');
      
      if (error.text) {
        setErrorMessage(`Error: ${error.text}`);
      } else if (error.message) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Unable to send message. Please try again or contact us directly at gudisagebi1@gmail.com');
      }
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50 dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <SectionHeading title="Get In Touch" subtitle="Contact Us" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Let's build something great.</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Whether you have a specific project in mind or just want to explore possibilities, our team is ready to help you navigate the digital landscape.
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-dark-card rounded-xl text-primary-600 shadow-sm">
                  <MapPin className="w-6 h-6"/>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">Our Office</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Beside Ethio Tel<br/>
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-dark-card rounded-xl text-primary-600 shadow-sm">
                  <Phone className="w-6 h-6"/>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">+251 968331095</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-dark-card rounded-xl text-primary-600 shadow-sm">
                  <Mail className="w-6 h-6"/>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">gudisagebi1@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-dark-card p-8 rounded-3xl shadow-lg dark:shadow-none border border-gray-100 dark:border-dark-border"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 text-left">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-bg focus:ring-2 focus:ring-primary-500 focus:outline-none dark:text-white transition-all" 
                    placeholder="John" 
                  />
                </div>
                <div className="space-y-2 text-left">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-bg focus:ring-2 focus:ring-primary-500 focus:outline-none dark:text-white transition-all" 
                    placeholder="Doe" 
                  />
                </div>
              </div>
              <div className="space-y-2 text-left">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-bg focus:ring-2 focus:ring-primary-500 focus:outline-none dark:text-white transition-all" 
                  placeholder="john@company.com" 
                />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-bg focus:ring-2 focus:ring-primary-500 focus:outline-none dark:text-white transition-all resize-none" 
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              {status === 'error' && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-red-600 dark:text-red-400 text-sm">{errorMessage}</p>
                </div>
              )}

              <Button 
                type="submit"
                size="lg" 
                className="w-full"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>

              <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
                We'll never share your information. We respect your privacy.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Modals */}
      <ConfirmationModal 
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={handleConfirmSend}
        formData={formData}
      />

      <SuccessModal 
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </div>
  );
}