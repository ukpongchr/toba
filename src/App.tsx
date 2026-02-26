import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Play, 
  Menu, 
  X,
  Clock,
  Share2,
  Check
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#work' },
    { name: 'Why Me', href: '#why-me' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-[#051126] py-6 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#051126] font-bold text-xs">
            T
          </div>
          <span className="font-display font-bold text-sm tracking-widest text-white">TOBA<br/>ODUWAIYE</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs font-bold uppercase tracking-widest text-gray-300 hover:text-teal-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-xs">
            Request a Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-[#051126] border-b border-white/10 p-6 flex flex-col space-y-4 z-50">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-bold uppercase tracking-widest text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="bg-[#051126] pt-12 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm bg-gray-800 relative group">
               <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                alt="Toba Oduwaiye" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051126] via-transparent to-transparent opacity-20" />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-teal-accent text-xs font-bold uppercase tracking-widest mb-4">
              Professional Videographer in Geneva, Switzerland
            </h4>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold leading-[1.1] mb-6 text-white">
              Broadcast-<br/>
              Quality<br/>
              Video<br/>
              Production<br/>
              for <span className="text-teal-accent">Global<br/>Organisations</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
              Broadcast-quality video production trusted by UN agencies, NGOs, embassies, and global organizations. Based in Geneva. Available across Switzerland and internationally.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#contact" className="btn-primary">Request a Quote</a>
              <a href="#services" className="btn-outline">View Services</a>
            </div>

            <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="text-3xl font-display font-bold text-teal-accent mb-1">20+</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-teal-accent mb-1">12</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-teal-accent mb-1">24h</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500">Preview Delivery</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Logos */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 pt-12 border-t border-white/5"
        >
          <p className="text-center text-[10px] uppercase tracking-widest text-gray-600 mb-8">Trusted by Global Organisations</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            {/* Placeholder Logos */}
            {['Al Jazeera', 'Bloomberg', 'The World Bank', 'Gavi', 'UNOPS', 'Deloitte', 'ATScale'].map((logo) => (
              <div key={logo} className="h-12 w-24 bg-white rounded flex items-center justify-center text-black text-[10px] font-bold hover:scale-105 transition-transform cursor-default">
                {logo}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="bg-[#0a1930] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
            Institutional Standards.<br/>
            <span className="text-teal-accent">Human Stories.</span>
          </h2>
        </div>

        {/* Video Placeholder */}
        <div className="relative aspect-video bg-gray-900 rounded-sm overflow-hidden mb-16 group cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop" 
            alt="Video Reel" 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-white fill-white" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6 bg-black/80 px-3 py-1 text-xs font-bold text-white flex items-center gap-2">
            Watch on <span className="font-bold">YouTube</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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

const Services = () => {
  const services = [
    {
      id: "01",
      title: "Corporate Video Production",
      image: "https://images.unsplash.com/photo-1559056961-1f4dbbf9d36a?q=80&w=1974&auto=format&fit=crop",
      desc: "Professional corporate videography in Geneva designed to communicate your message clearly and powerfully, aligned with global institutional standards.",
      items: ["Institutional messaging", "Annual & sustainability reports", "Executive communications", "Brand positioning & promotional campaigns", "Internal communications"]
    },
    {
      id: "02",
      title: "Conference & Event Videography",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop",
      desc: "Trusted event videographer in Geneva for conferences, summits, panel discussions, product launches, and corporate gatherings.",
      items: ["Full conference filming", "Panel discussion recording", "Diplomatic & ministerial meetings", "Same-day recap edits", "Event highlight reels"]
    },
    {
      id: "03",
      title: "Documentary & Brand Storytelling",
      image: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=1974&auto=format&fit=crop",
      desc: "A documentary videographer in Geneva combining cinematic visuals with strong narrative structure to create compelling, authentic NGO and institutional stories.",
      items: ["Impact & field stories", "Programme outcomes", "Community engagement films", "Institutional milestones"]
    },
    {
      id: "04",
      title: "Executive Photography",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
      desc: "Professional photography for leadership teams, press, and branding — tailored to the standards of international organisations.",
      items: ["Executive portraits", "Leadership team photography", "Diplomatic event coverage", "Corporate branding imagery"]
    },
    {
      id: "05",
      title: "Interview & Testimonial Videos",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
      desc: "Clean lighting, structured storytelling, and clear audio — delivering maximum authority for CEOs, directors, ministers, diplomats, and conference speakers.",
      items: ["CEOs and directors", "Ministers and diplomats", "Conference speakers", "Programme managers & beneficiaries"]
    },
    {
      id: "06",
      title: "Professional Video Editing",
      image: "https://images.unsplash.com/photo-1574717432707-c25c8587a3ea?q=80&w=2070&auto=format&fit=crop",
      desc: "Already have footage? Professional editing — including colour grading, motion graphics, subtitles, and social media formatting.",
      items: ["Interview editing & story refinement", "Subtitles and graphics", "Social media formatting", "YouTube optimisation"]
    }
  ];

  return (
    <section id="services" className="bg-[#051126] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-white">
            Production Services<br/>
            in <span className="text-teal-accent">Geneva, Switzerland</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

const Work = () => {
  const projects = [
    {
      title: "Africa Collective — Africa Business Day",
      category: "CORPORATE EVENT FILM",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
      desc: "High-level event films for Africa Collective and the Swiss Africa Business Circle across Geneva, Baden, Basel, and Davos.",
      link: "https://youtu.be/80zF_R8pjz8"
    },
    {
      title: "Glander International Bunkering — Trader Talk",
      category: "CORPORATE VIDEO",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      desc: "Selected to produce an episode of Glander's Trader Talk series, filmed at their Geneva office with full post-production handled in-house.",
      link: "https://youtu.be/_B5SMOkPCYU"
    },
    {
      title: "Geneva — A Visual Love Letter",
      category: "CINEMATIC SHORT FILM",
      image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=2070&auto=format&fit=crop",
      desc: "A personal short film capturing the energy, culture, and beauty of Geneva — from the shimmering waters of Lake Geneva to the backdrop of the Swiss Alps.",
      link: "https://youtu.be/WMoeqReF5W0"
    },
    {
      title: "Finding Rest",
      category: "DOCUMENTARY SHORT",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
      desc: "A visually compelling short film exploring the journey from mental chaos to clarity, set against the Swiss Alps.",
      link: "https://youtu.be/WMoeqReF5W0"
    },
    {
      title: "Qubic — AI for Good Geneva",
      category: "EVENT HIGHLIGHT FILM",
      image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=2070&auto=format&fit=crop",
      desc: "Commissioned to film and edit Qubic's exclusive Geneva gathering during AI for Good week.",
      link: "https://youtu.be/WMoeqReF5W0"
    }
  ];

  return (
    <section id="work" className="bg-[#051126] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-white">
            Selected <span className="text-teal-accent">Work</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <motion.a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index} 
              className="group block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative aspect-video bg-gray-900 mb-6 overflow-hidden rounded-sm shadow-lg group-hover:shadow-teal-accent/20 transition-all duration-300">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg z-10">
                    <Play className="w-6 h-6 fill-white text-white" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-black/60 p-2 rounded-full text-white hover:bg-black/80 cursor-pointer backdrop-blur-sm"><Clock className="w-4 h-4"/></div>
                  <div className="bg-black/60 p-2 rounded-full text-white hover:bg-black/80 cursor-pointer backdrop-blur-sm"><Share2 className="w-4 h-4"/></div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/80 px-2 py-1 text-[10px] font-bold text-white flex items-center gap-1 backdrop-blur-sm">
                  Watch on <span className="font-bold">YouTube</span>
                </div>
              </div>
              
              <div className="mb-2">
                <span className="text-[10px] uppercase tracking-widest text-teal-accent font-bold group-hover:text-white transition-colors">
                  {project.category}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-teal-accent transition-colors">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {project.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyMe = () => {
  return (
    <section id="why-me" className="bg-[#0a1930] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h4 className="text-[10px] uppercase tracking-widest text-teal-accent mb-2">WHY CHOOSE ME</h4>
          <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-white">
            Why Hire a Local<br/>
            <span className="text-teal-accent">Geneva Videographer?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" 
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
              {['GENEVA', 'LAUSANNE', 'ZURICH', 'BERN', 'BASEL', 'DAVOS', 'INTERNATIONAL'].map((tag) => (
                <span key={tag} className="text-[10px] uppercase tracking-widest text-gray-500 border border-white/10 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="bg-[#051126] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h4 className="text-[10px] uppercase tracking-widest text-teal-accent mb-2">GET IN TOUCH</h4>
          <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-white">
            Request a <span className="text-teal-accent">Quote</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8 text-sm text-gray-400">
            <p>
              If you are searching for a reliable and experienced videographer in <span className="text-white font-bold">Geneva, Switzerland</span>, get in touch to discuss your corporate video, conference filming, documentary, or branded content project — including your timeline, deliverables, and budget.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <span className="text-[10px] uppercase tracking-widest text-gray-500">EMAIL</span>
                <a href="mailto:toba@oduwaiye.com" className="text-teal-accent hover:underline">toba@oduwaiye.com</a>
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

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">NAME</label>
                <input 
                  type="text" 
                  className="w-full bg-[#0a1930] border border-white/10 p-4 text-white text-sm focus:outline-none focus:border-teal-accent transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">ORGANISATION</label>
                <input 
                  type="text" 
                  className="w-full bg-[#0a1930] border border-white/10 p-4 text-white text-sm focus:outline-none focus:border-teal-accent transition-colors"
                  placeholder="Your organisation"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">EMAIL</label>
              <input 
                type="email" 
                className="w-full bg-[#0a1930] border border-white/10 p-4 text-white text-sm focus:outline-none focus:border-teal-accent transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">SERVICE REQUIRED</label>
              <select className="w-full bg-[#0a1930] border border-white/10 p-4 text-white text-sm focus:outline-none focus:border-teal-accent transition-colors appearance-none">
                <option>Select a service</option>
                <option>Corporate Video</option>
                <option>Event Coverage</option>
                <option>Documentary</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">PROJECT DETAILS</label>
              <textarea 
                rows={4}
                className="w-full bg-[#0a1930] border border-white/10 p-4 text-white text-sm focus:outline-none focus:border-teal-accent transition-colors"
                placeholder="Tell me about your project — type of project, event date, location, deliverables required, and your deadline..."
              />
            </div>

            <button 
              type="submit"
              className="btn-primary w-full md:w-auto"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#020a1a] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-teal-accent font-display font-bold text-sm">Toba Oduwaiye</div>
        <div className="text-gray-600 text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} Toba Oduwaiye. All rights reserved.
        </div>
        <div className="text-gray-600 text-[10px] uppercase tracking-widest">
          Based in Geneva, Switzerland
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-[#051126] text-white min-h-screen selection:bg-teal-accent selection:text-[#051126]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Work />
      <WhyMe />
      <Contact />
      <Footer />
    </div>
  );
}
