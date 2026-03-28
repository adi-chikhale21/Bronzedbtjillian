import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Booking() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    { id: 'signature', name: 'The Signature Tan', price: '$45', duration: '30 mins' },
    { id: 'bridal', name: 'The Bridal Experience', price: '$100', duration: '2 Sessions' },
    { id: 'party', name: 'Bronze Party', price: 'Varies', duration: 'Group' },
    { id: 'bestie', name: 'Bestie Tan', price: '$80', duration: '45 mins' }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService || !selectedDate || !selectedTime) {
      alert("Please select a service, date, and time.");
      return;
    }
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-brand-bg">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto p-12 bg-white/30 backdrop-blur-sm border border-brand-black/5"
        >
          <CheckCircle2 className="w-12 h-12 text-brand-black mb-8 mx-auto" strokeWidth={1} />
          <h1 className="text-4xl md:text-5xl font-serif uppercase tracking-widest mb-6">Confirmed</h1>
          <p className="text-brand-black/70 font-light text-lg leading-relaxed mb-12">
            Your reservation has been received. Jillian will contact you shortly to finalize your appointment for <br/>
            <span className="font-medium text-brand-black mt-2 block">{selectedDate} at {selectedTime}</span>
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="text-xs tracking-[0.2em] uppercase border-b border-brand-black pb-1 hover:text-brand-accent hover:border-brand-accent transition-colors"
          >
            Book Another Appointment
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-brand-bg">
      {/* Left Side - Image & Vibe (Sticky on Desktop) */}
      <div className="w-full lg:w-5/12 relative min-h-[50vh] lg:min-h-screen">
        <div className="lg:sticky lg:top-0 lg:h-screen">
          <img 
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80" 
            alt="Aesthetic spa atmosphere" 
            className="w-full h-full object-cover grayscale-[20%]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent"></div>
          
          <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-16 text-brand-bg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="font-script text-6xl md:text-8xl mb-2 block text-brand-accent">Radiance</span>
              <h2 className="text-3xl md:text-5xl font-serif uppercase tracking-widest leading-tight font-light">
                Elevate your<br/>natural glow.
              </h2>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-7/12 px-6 sm:px-12 md:px-20 lg:px-32 py-24 lg:py-32">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto"
        >
          <div className="mb-20 text-center lg:text-left">
            <span className="text-xs tracking-[0.3em] uppercase mb-4 font-medium text-brand-accent block">Reservation</span>
            <h1 className="text-4xl md:text-5xl font-serif uppercase tracking-widest">Book Studio</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-24">
            
            {/* Step 1: Service */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-end mb-10 border-b border-brand-black/10 pb-4">
                <span className="font-serif text-4xl text-brand-accent/50 mr-4 leading-none">01</span>
                <h3 className="text-sm uppercase tracking-[0.2em] font-medium">Select Service</h3>
              </div>
              
              <div className="space-y-4">
                {services.map((service) => (
                  <div 
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`group flex items-center justify-between p-6 cursor-pointer transition-all duration-500 border ${
                      selectedService === service.id 
                        ? 'border-brand-black bg-brand-black text-brand-bg' 
                        : 'border-brand-black/10 hover:border-brand-black/40 bg-white/20'
                    }`}
                  >
                    <div>
                      <h4 className={`font-serif text-2xl mb-1 ${selectedService === service.id ? 'text-brand-bg' : 'text-brand-black'}`}>
                        {service.name}
                      </h4>
                      <p className={`text-xs tracking-widest uppercase ${selectedService === service.id ? 'text-brand-bg/70' : 'text-brand-black/50'}`}>
                        {service.duration}
                      </p>
                    </div>
                    <div className="text-right flex items-center gap-6">
                      <span className={`text-sm tracking-widest ${selectedService === service.id ? 'text-brand-bg' : 'text-brand-black'}`}>
                        {service.price}
                      </span>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                        selectedService === service.id ? 'border-brand-bg' : 'border-brand-black/30 group-hover:border-brand-black'
                      }`}>
                        {selectedService === service.id && <div className="w-2 h-2 bg-brand-bg rounded-full" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <input type="text" required value={selectedService} className="opacity-0 h-0 w-0 absolute" onChange={()=>{}} />
            </motion.section>

            {/* Step 2: Date & Time */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-end mb-10 border-b border-brand-black/10 pb-4">
                <span className="font-serif text-4xl text-brand-accent/50 mr-4 leading-none">02</span>
                <h3 className="text-sm uppercase tracking-[0.2em] font-medium">Date & Time</h3>
              </div>
              
              <div className="space-y-12">
                <div className="relative pt-4">
                  <input 
                    type="date" 
                    required
                    id="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="peer w-full bg-transparent border-b border-brand-black/20 py-2 text-brand-black focus:outline-none focus:border-brand-black transition-colors rounded-none font-light text-lg cursor-pointer" 
                  />
                  <label htmlFor="date" className="absolute left-0 top-0 text-xs tracking-[0.2em] uppercase text-brand-black transition-all">
                    Select Date
                  </label>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-brand-black mb-6">Available Times</label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {timeSlots.map(slot => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`py-4 px-2 text-xs tracking-widest transition-all duration-300 border ${
                          selectedTime === slot 
                            ? 'bg-brand-black text-brand-bg border-brand-black' 
                            : 'bg-transparent border-brand-black/10 hover:border-brand-black/50 text-brand-black/70'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                  <input type="text" required value={selectedTime} className="opacity-0 h-0 w-0 absolute" onChange={()=>{}} />
                </div>
              </div>
            </motion.section>

            {/* Step 3: Details */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-end mb-10 border-b border-brand-black/10 pb-4">
                <span className="font-serif text-4xl text-brand-accent/50 mr-4 leading-none">03</span>
                <h3 className="text-sm uppercase tracking-[0.2em] font-medium">Guest Details</h3>
              </div>
              
              <div className="space-y-10 mt-6">
                <div className="relative pt-4">
                  <input 
                    required 
                    type="text" 
                    id="fullName"
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-brand-black/20 py-2 text-brand-black focus:outline-none focus:border-brand-black transition-colors rounded-none font-light text-lg" 
                  />
                  <label htmlFor="fullName" className="absolute left-0 top-6 text-brand-black/50 text-lg font-light transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:tracking-[0.2em] peer-focus:uppercase peer-focus:text-brand-black peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:tracking-[0.2em] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-brand-black">
                    Full Name
                  </label>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div className="relative pt-4">
                    <input 
                      required 
                      type="email" 
                      id="email"
                      placeholder=" "
                      className="peer w-full bg-transparent border-b border-brand-black/20 py-2 text-brand-black focus:outline-none focus:border-brand-black transition-colors rounded-none font-light text-lg" 
                    />
                    <label htmlFor="email" className="absolute left-0 top-6 text-brand-black/50 text-lg font-light transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:tracking-[0.2em] peer-focus:uppercase peer-focus:text-brand-black peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:tracking-[0.2em] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-brand-black">
                      Email Address
                    </label>
                  </div>
                  <div className="relative pt-4">
                    <input 
                      required 
                      type="tel" 
                      id="phone"
                      placeholder=" "
                      className="peer w-full bg-transparent border-b border-brand-black/20 py-2 text-brand-black focus:outline-none focus:border-brand-black transition-colors rounded-none font-light text-lg" 
                    />
                    <label htmlFor="phone" className="absolute left-0 top-6 text-brand-black/50 text-lg font-light transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:tracking-[0.2em] peer-focus:uppercase peer-focus:text-brand-black peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:tracking-[0.2em] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-brand-black">
                      Phone Number
                    </label>
                  </div>
                </div>

                <div className="relative pt-4">
                  <textarea 
                    id="notes"
                    rows={1} 
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-brand-black/20 py-2 text-brand-black focus:outline-none focus:border-brand-black transition-colors rounded-none font-light text-lg resize-none"
                  ></textarea>
                  <label htmlFor="notes" className="absolute left-0 top-6 text-brand-black/50 text-lg font-light transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:tracking-[0.2em] peer-focus:uppercase peer-focus:text-brand-black peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:tracking-[0.2em] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-brand-black">
                    Special Requests (Optional)
                  </label>
                </div>
              </div>
            </motion.section>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="group w-full bg-brand-black text-brand-bg py-6 px-8 flex items-center justify-between text-sm uppercase tracking-[0.2em] hover:bg-brand-black/90 transition-all mt-16"
            >
              <span>Confirm Reservation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" strokeWidth={1.5} />
            </motion.button>
          </form>

          {/* Contact Footer in Form */}
          <div className="mt-32 pt-16 border-t border-brand-black/10 grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-brand-black/40 mb-4">Studio Location</h4>
              <p className="font-light text-sm leading-loose text-brand-black/80">
                1919 SW 10th St Suite 23<br/>Topeka, KS 66604
              </p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-brand-black/40 mb-4">Get in Touch</h4>
              <p className="font-light text-sm leading-loose text-brand-black/80">
                <a href="tel:17853199802" className="hover:text-brand-accent transition-colors block">(785) 319-9802</a>
                <span className="block">By Appointment Only</span>
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
