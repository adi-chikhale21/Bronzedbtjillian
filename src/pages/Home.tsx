import { Link } from 'react-router-dom';
import { ArrowRight, Star, Sparkles, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80" 
            alt="Beautiful glowing skin" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/40 via-brand-bg/20 to-brand-bg"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm tracking-[0.3em] uppercase mb-6 font-medium"
          >
            Topeka's Premier Spray Tanning
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tighter uppercase leading-[0.9] mb-8"
          >
            Flawless Glow, <br className="hidden md:block"/>
            <span className="font-script text-6xl md:text-8xl lg:text-9xl lowercase tracking-normal -ml-4 md:-ml-8 text-brand-black/90">every time</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg font-light max-w-xl mx-auto mb-12 leading-relaxed text-brand-black/80"
          >
            Experience the ultimate luxury in sunless tanning. Personalized, natural-looking results tailored to your unique skin tone.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link 
              to="/booking" 
              className="bg-brand-black text-brand-bg px-8 py-4 text-sm tracking-widest uppercase hover:bg-brand-black/80 transition-all flex items-center justify-center group"
            >
              Book Your Glow
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/services" 
              className="border border-brand-black text-brand-black px-8 py-4 text-sm tracking-widest uppercase hover:bg-brand-black/5 transition-all flex items-center justify-center"
            >
              View Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif uppercase tracking-tight mb-4">Signature Services</h2>
          <p className="text-brand-black/70 font-light max-w-2xl mx-auto">Tailored tanning experiences designed to make you look and feel your absolute best.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "The Signature Tan",
              desc: "A custom-blended solution tailored to your skin type and desired depth. Includes pH balancing prep spray and moisture lock setting powder.",
              icon: <Sparkles className="w-6 h-6 mb-4 text-brand-accent" />
            },
            {
              title: "The Bridal Experience",
              desc: "Two tans included: a trial run 2-4 weeks before the big day, and your final wedding glow. Perfect for brides wanting flawless perfection.",
              icon: <Star className="w-6 h-6 mb-4 text-brand-accent" />
            },
            {
              title: "Bronze Parties",
              desc: "Grab your besties! Host a tanning party of 4 or more and the host tans for free. Perfect for bachelorettes, vacations, or girls' nights.",
              icon: <Calendar className="w-6 h-6 mb-4 text-brand-accent" />
            }
          ].map((service, i) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/40 backdrop-blur-sm border border-brand-black/5 p-8 flex flex-col items-center text-center hover:bg-white/60 transition-colors"
            >
              {service.icon}
              <h3 className="text-xl font-serif uppercase tracking-wider mb-4">{service.title}</h3>
              <p className="text-brand-black/70 font-light text-sm leading-relaxed mb-8 flex-grow">{service.desc}</p>
              <Link to="/services" className="text-xs tracking-widest uppercase border-b border-brand-black pb-1 hover:text-brand-accent hover:border-brand-accent transition-colors">
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Image Break */}
      <section className="h-[60vh] relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80" 
          alt="Tanning details" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-black/30 flex items-center justify-center">
          <div className="text-center text-brand-bg p-8 max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-serif uppercase tracking-tight mb-6">Confidence looks good on you.</h2>
            <Link 
              to="/booking" 
              className="inline-block bg-brand-bg text-brand-black px-8 py-4 text-sm tracking-widest uppercase hover:bg-white transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <Star className="w-8 h-8 mx-auto mb-8 text-brand-accent" />
        <h3 className="text-2xl md:text-4xl font-serif italic font-light leading-relaxed mb-8">
          "Jillian is absolutely amazing! She made me feel so comfortable and my tan looks incredibly natural. I've never felt more confident for my vacation. Highly recommend the signature tan!"
        </h3>
        <p className="text-sm tracking-widest uppercase font-medium mb-12">— Sarah M.</p>
        <Link to="/testimonials" className="text-xs tracking-widest uppercase border-b border-brand-black pb-1 hover:text-brand-accent hover:border-brand-accent transition-colors">
          Read More Reviews
        </Link>
      </section>
    </div>
  );
}
