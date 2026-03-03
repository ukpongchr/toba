import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Rheinegger",
      role: "Africa Unlimited, Switzerland",
      quote: "Toba and his business partner have been covering several of our high-quality business events in the past as videographers and video editors. The work is always spot-on, top quality, capturing well the essence of the events, all summary videos with a nice story line etc. Plus, it is always a pleasure and fun to work with them. Highly recommendable!"
    },
    {
      name: "Saira Ahmed",
      role: "eCancer, United Kingdom",
      quote: "It was great working with Toba at the World Cancer Congress 2024. He is very professional, resepctful and personable! And the videos he produced are high quality."
    },
    {
      name: "Svetlomir Slavchev",
      role: "Gavi the Vaccine Alliance, Switzerland",
      quote: "Toba has been helping me on several projects as a filmmaker and video editor, and I must say his work has been great! It's been a true pleasure working with someone talented and dedicated as he is. I highly recommend him to anyone in need of a skilled filmmaker and video editor."
    },
    {
      name: "Priti Patnaik",
      role: "Founding Editor, Geneva Health Files",
      quote: "Toba is kind, professional and committed. He has a great intuitive sense of what the client seeks. And goes above and beyond to deliver on our expectations. In our case it included shooting a video within a very tight deadline, and in difficult weather conditions. I am ever grateful for his careful consideration, and the generosity of his time and expertise for Us. He came up with lots of great suggestions that helped us improve on our project. He was patient with our many demands and made changes as required. An extremely easy and affordable person to work with! We look forward to working again with him."
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#051126] p-8 rounded-sm border border-white/5 relative flex flex-col"
            >
              <Quote className="w-8 h-8 text-teal-accent/20 absolute top-6 right-6" />
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic flex-grow">"{testimonial.quote}"</p>
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
