import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    organisation: '',
    email: '',
    service: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const inputClasses = "w-full bg-[#0a1930] border border-white/10 p-4 text-white text-sm focus:outline-none focus:border-teal-accent transition-all duration-300 placeholder:text-gray-600 focus:bg-[#0d2140]";

  return (
    <section id="contact" className="bg-[#051126] py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8 md:mb-12">
          <h4 className="text-[10px] uppercase tracking-widest text-teal-accent mb-2">GET IN TOUCH</h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight text-white">
            Request a <span className="text-teal-accent">Quote</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          <div className="space-y-8 text-sm text-gray-400">
            <p>
              If you are searching for a reliable and experienced videographer in <span className="text-white font-bold">Geneva, Switzerland</span>, get in touch to discuss your corporate video, conference filming, documentary, or branded content project — including your timeline, deliverables, and budget.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <span className="text-[10px] uppercase tracking-widest text-gray-500">EMAIL</span>
                <a href="mailto:oduwaiye.toba@gmail.com" className="text-teal-accent hover:underline">oduwaiye.toba@gmail.com</a>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <span className="text-[10px] uppercase tracking-widest text-gray-500">LOCATION</span>
                <span className="text-white">Geneva, Switzerland</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <span className="text-[10px] uppercase tracking-widest text-gray-500">COVERAGE</span>
                <span className="text-white">All Switzerland + International</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <span className="text-[10px] uppercase tracking-widest text-gray-500">RESPONSE</span>
                <span className="text-white">Within one business day</span>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-[10px] uppercase tracking-widest text-teal-accent mb-4">TO HELP ME QUOTE ACCURATELY, INCLUDE:</h4>
              <ul className="space-y-2">
                {['Type of project', 'Event date and location', 'Estimated filming duration', 'Deliverables required', 'Publishing channels (website, YouTube, LinkedIn, press)', 'Deadline for final delivery'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-[2px] bg-teal-accent block"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#0a1930] border border-teal-accent/20 p-8 rounded-sm text-center h-full flex flex-col items-center justify-center min-h-[400px]"
              >
                <div className="w-16 h-16 bg-teal-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 text-teal-accent" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400 mb-8 max-w-xs mx-auto">
                  Thank you for your enquiry. I will get back to you within one business day.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-teal-accent text-sm font-bold uppercase tracking-widest hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">NAME</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Your name"
                    />
                  </motion.div>
                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">ORGANISATION</label>
                    <input 
                      type="text" 
                      name="organisation"
                      value={formState.organisation}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Your organisation"
                    />
                  </motion.div>
                </div>
                
                <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">EMAIL</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="your@email.com"
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">SERVICE REQUIRED</label>
                  <div className="relative">
                    <select 
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className={`${inputClasses} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="Corporate Video">Corporate Video</option>
                      <option value="Event Coverage">Event Coverage</option>
                      <option value="Documentary">Documentary</option>
                      <option value="Photography">Photography</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">PROJECT DETAILS</label>
                  <textarea 
                    rows={4}
                    name="details"
                    required
                    value={formState.details}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Tell me about your project — type of project, event date, location, deliverables required, and your deadline..."
                  />
                </motion.div>

                <motion.button 
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`btn-primary w-full md:w-auto flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#051126] border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Enquiry'
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
