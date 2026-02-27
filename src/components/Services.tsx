import React from 'react';

const Services = () => {
  const services = [
    {
      id: "01",
      title: "Corporate Video Production",
      image: "https://i.imgur.com/B0GKKVs.webp",
      desc: "Professional corporate videography in Geneva designed to communicate your message clearly and powerfully, aligned with global institutional standards.",
      items: ["Institutional messaging", "Annual & sustainability reports", "Executive communications", "Brand positioning & promotional campaigns", "Internal communications"]
    },
    {
      id: "02",
      title: "Conference & Event Videography",
      image: "https://i.imgur.com/MoIjC0Q.webp",
      desc: "Trusted event videographer in Geneva for conferences, summits, panel discussions, product launches, and corporate gatherings.",
      items: ["Full conference filming", "Panel discussion recording", "Diplomatic & ministerial meetings", "Same-day recap edits", "Event highlight reels"]
    },
    {
      id: "03",
      title: "Documentary & Brand Storytelling",
      image: "https://i.imgur.com/jJwZq2Q.webp",
      desc: "A documentary videographer in Geneva combining cinematic visuals with strong narrative structure to create compelling, authentic NGO and institutional stories.",
      items: ["Impact & field stories", "Programme outcomes", "Community engagement films", "Institutional milestones"]
    },
    {
      id: "04",
      title: "Executive Photography",
      image: "https://i.imgur.com/YTsnFxD.webp",
      desc: "Professional photography for leadership teams, press, and branding — tailored to the standards of international organisations.",
      items: ["Executive portraits", "Leadership team photography", "Diplomatic event coverage", "Corporate branding imagery"]
    },
    {
      id: "05",
      title: "Interview & Testimonial Videos",
      image: "https://i.imgur.com/mdn8yOl.webp",
      desc: "Clean lighting, structured storytelling, and clear audio — delivering maximum authority for CEOs, directors, ministers, diplomats, and conference speakers.",
      items: ["CEOs and directors", "Ministers and diplomats", "Conference speakers", "Programme managers & beneficiaries"]
    },
    {
      id: "06",
      title: "Professional Video Editing",
      image: "https://i.imgur.com/aynkfV6.webp",
      desc: "Already have footage? Professional editing — including colour grading, motion graphics, subtitles, and social media formatting.",
      items: ["Interview editing & story refinement", "Subtitles and graphics", "Social media formatting", "YouTube optimisation"]
    }
  ];

  return (
    <section id="services" className="bg-[#051126] py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8 md:mb-16">
          <h4 className="text-[10px] uppercase tracking-widest text-teal-accent mb-2">MY SERVICES</h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight text-white">
            Production Services<br/>
            in <span className="text-teal-accent">Geneva, Switzerland</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div key={service.id} className="group">
              <div className="h-48 overflow-hidden mb-6">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="text-5xl font-display font-bold text-[#112240] mb-4">{service.id}</div>
              <h3 className="text-xl font-display font-bold text-white mb-4 h-14">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.desc}</p>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-teal-accent">
                    <span className="mt-1 w-2 h-[2px] bg-teal-accent block"></span>
                    <span className="text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
