import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative h-[600px] w-full"
        >
          <img 
            src="https://scontent.fbom12-1.fna.fbcdn.net/v/t39.30808-6/499225678_122107390718868954_995402876194757541_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=53a332&_nc_ohc=1MEkkRC2GWEQ7kNvwG4CFHk&_nc_oc=Adq0BDl6btS_hyQvwTgcJP-SCakgRrbjWkbxyoWDP8NOtACeD2L9_1bufKaN_xXeaNo&_nc_zt=23&_nc_ht=scontent.fbom12-1.fna&_nc_gid=Ov0IL6phAs_Wws_ydg0PPQ&_nc_ss=7a32e&oh=00_AfwkAKPcJaZ_WZjIYOg9aLURBATl-3mOOVg0UqiXXbzkfg&oe=69CD84BD" 
            alt="Jillian - Spray Tan Artist" 
            className="w-full h-full object-cover rounded-sm shadow-xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-accent/20 rounded-full blur-3xl -z-10"></div>
        </motion.div>

        {/* Text Side */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <span className="text-xs tracking-[0.3em] uppercase mb-4 font-medium text-brand-accent">Meet Your Artist</span>
          <h1 className="text-5xl md:text-6xl font-serif uppercase tracking-tight mb-6">Hi, I'm <span className="font-script text-7xl lowercase tracking-normal -ml-2">Jillian!</span></h1>
          
          <div className="space-y-6 text-base font-light leading-relaxed text-brand-black/80">
            <p>
              Welcome to Bronzed By Jillian! I am so thrilled you're here. I'm your go-to for personalized, luxury spray tans right here in Topeka, KS.
            </p>
            <p>
              My passion is helping women feel confident, beautiful, and radiant in their own skin. Whether you're preparing for your wedding day, heading out on a tropical vacation, or just needing a mid-winter glow-up, I believe a flawless tan is the perfect accessory.
            </p>
            <p>
              I specialize in custom-blended solutions that complement your natural undertones, ensuring you never look orange or unnatural. Every appointment is a luxury experience designed to make you feel comfortable and pampered.
            </p>
            <p>
              When I'm not in the studio perfecting glows, you can find me exploring local coffee shops or spending time with my family. I can't wait to meet you and give you the confidence boost you deserve!
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-brand-black/10">
            <h3 className="text-lg font-serif uppercase tracking-widest mb-4">Studio Details</h3>
            <ul className="space-y-2 text-sm font-light text-brand-black/70">
              <li><strong>Location:</strong> 1919 SW 10th St Suite 23, Topeka, KS 66604</li>
              <li><strong>Phone:</strong> (785) 319-9802</li>
              <li><strong>Specialties:</strong> Bridal Tans, Bronze Parties, Custom Blends</li>
            </ul>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
