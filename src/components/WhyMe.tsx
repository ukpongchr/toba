import React from 'react';
import { Link } from 'react-router-dom';

const WhyMe = () => {
  const locations = [
    { name: 'GENEVA', path: '/' },
    { name: 'LAUSANNE', path: '/locations/lausanne' },
    { name: 'ZURICH', path: '/locations/zurich' },
    { name: 'BERN', path: '/locations/bern' },
    { name: 'BASEL', path: '/locations/basel' },
    { name: 'DAVOS', path: '/locations/davos' },
    { name: 'INTERNATIONAL', path: '/contact' }
  ];

  return (
    <section id="why-me" className="bg-[#0a1930] py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8 md:mb-16">
          <h4 className="text-[10px] uppercase tracking-widest text-teal-accent mb-2">WHY CHOOSE ME</h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight text-white">
            Why Hire a Local<br/>
            <span className="text-teal-accent">Geneva Videographer?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="space-y-12">
            {[
              { id: "I", title: "20+ YEARS INTERNATIONAL EXPERIENCE", desc: "Working with organisations such as Al Jazeera, Bloomberg, The World Bank Group, UN agencies, and CNBC — ensuring international production standards for clients in Switzerland." },
              { id: "II", title: "FAMILIARITY WITH GENEVA & SWITZERLAND", desc: "Deep knowledge of filming locations across Geneva and surrounding Swiss cities, with an understanding of local business culture and quick response times for projects in Switzerland." },
              { id: "III", title: "MULTICULTURAL & INTERNATIONAL EXPERTISE", desc: "Extensive experience working with international clients across three continents and 12 countries — with the cultural fluency and professional discretion that Geneva's global environment demands." },
              { id: "IV", title: "FULL PRODUCTION SUPPORT — CONCEPT TO DELIVERY", desc: "Every project is tailored to meet your communication objectives: pre-production planning, professional filming, post-production, colour grading, motion graphics, and final delivery." },
            ].map((item) => (
              <div key={item.id} className="flex gap-6">
                <div className="w-10 h-10 border border-teal-accent/30 flex items-center justify-center text-teal-accent font-display text-xs font-bold shrink-0">
                  {item.id}
                </div>
                <div>
                  <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-gray-800 rounded-sm overflow-hidden relative">
               <img 
                src="https://i.imgur.com/mO4ZOL1.jpeg" 
                alt="Filming in Alps" 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1930] via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-xl font-display font-bold text-white mb-4 leading-relaxed">
                  "Being locally based allows me to efficiently manage production logistics while maintaining global production standards."
                </p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400">— TOBA ODUWAIYE, GENEVA</p>
              </div>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {locations.map((loc) => (
                <Link 
                  key={loc.name} 
                  to={loc.path}
                  className="text-[10px] uppercase tracking-widest text-gray-500 border border-white/10 px-3 py-1 hover:border-teal-accent hover:text-teal-accent transition-colors"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
