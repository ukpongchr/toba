import React from 'react';
import { Play } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-[#0a1930] py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8 md:mb-12">
          <h4 className="text-[10px] uppercase tracking-widest text-teal-accent mb-2">ABOUT ME</h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">
            Institutional Standards.<br/>
            <span className="text-teal-accent">Human Stories.</span>
          </h2>
        </div>

        {/* Video Placeholder */}
        <a 
          href="https://youtu.be/kKBzr5esXms"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative aspect-video bg-gray-900 rounded-sm overflow-hidden mb-8 md:mb-16 group cursor-pointer shadow-lg hover:shadow-teal-accent/20 transition-all duration-300 hover:-translate-y-2"
        >
          <img 
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop" 
            alt="Video Reel" 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg z-10">
              <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white" />
            </div>
          </div>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-black/80 px-3 py-1 text-[10px] md:text-xs font-bold text-white flex items-center gap-2 backdrop-blur-sm">
            Watch on <span className="font-bold">YouTube</span>
          </div>
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p>
              I am a professional videographer in Geneva providing high-quality video production services for corporate organisations, international institutions, NGOs, and private clients across Switzerland.
            </p>
            <p>
              Based in Geneva, I specialise in corporate video production, conference filming, event videography, documentary storytelling, and branded content creation. With over 20 years of international experience, I deliver broadcast-quality visuals tailored to businesses and institutions operating in Geneva and beyond.
            </p>
            <p>
              If you are looking to hire a videographer in Geneva who understands international standards and corporate communication, I offer full production support — from concept development to filming and post-production.
            </p>
            <div className="pt-4">
              <a href="#contact" className="btn-primary">Discuss Your Project</a>
            </div>
          </div>

          <div className="border-l border-teal-accent/30 pl-8 space-y-8">
            {[
              { title: "AUDIENCE-FIRST THINKING", desc: "Before filming, I focus on understanding your audience, clarifying your key message, and aligning visuals with your brand tone." },
              { title: "INSTITUTIONAL TONE", desc: "Deep understanding of diplomatic protocol, secure environments, press-ready standards, and executive communication." },
              { title: "FAST POST-PRODUCTION", desc: "Preview options available within 24 hours. Final delivery structured to match your publication and media timelines." },
              { title: "DISCREET PRESENCE", desc: "Experienced in secure, high-level environments where minimal disruption and absolute professionalism are essential." },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[37px] top-1 w-2.5 h-2.5 bg-teal-accent rotate-45" />
                <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
