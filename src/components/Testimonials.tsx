import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Communications Director, Global NGO",
      quote: "Toba's ability to capture the essence of our mission was incredible. The final video exceeded our expectations and was used in our annual fundraising campaign."
    },
    {
      name: "David Chen",
      role: "CEO, Tech Startup",
      quote: "Professional, efficient, and creative. Toba understood our brand vision immediately and delivered a corporate film that truly stands out."
    },
    {
      name: "Elena Rossi",
      role: "Event Manager, International Summit",
      quote: "Working with Toba was a seamless experience. He managed the live coverage of our 3-day conference perfectly, delivering high-quality highlights each evening."
    }
  ];

  return (
    <section className="bg-[#0a1930] py-12 md:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h4 className="text-[10px] uppercase tracking-widest text-teal-accent mb-2">CLIENT FEEDBACK</h4>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            What Clients <span className="text-teal-accent">Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#051126] p-8 rounded-sm border border-white/5 relative"
            >
              <Quote className="w-8 h-8 text-teal-accent/20 absolute top-6 right-6" />
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <h5 className="text-white font-bold text-sm">{testimonial.name}</h5>
                <span className="text-[10px] uppercase tracking-widest text-gray-500">{testimonial.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
