import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      text: "Jillian is absolutely amazing! She made me feel so comfortable and my tan looks incredibly natural. I've never felt more confident for my vacation. Highly recommend the signature tan!",
      rating: 5
    },
    {
      id: 2,
      name: "Emily R.",
      text: "I booked Jillian for my wedding and she was a dream to work with. The trial run was perfect, and she adjusted the color slightly for the big day to make it exactly what I wanted. Flawless.",
      rating: 5
    },
    {
      id: 3,
      name: "Jessica T.",
      text: "We had a bronze party for my bachelorette and it was so much fun! Jillian came to us, set everything up quickly, and made sure we all looked amazing. The color lasted so long!",
      rating: 5
    },
    {
      id: 4,
      name: "Amanda L.",
      text: "Best spray tan in Topeka, hands down. I've been to several places and Jillian's solution is the only one that doesn't smell bad or turn me orange. She's also just the sweetest person.",
      rating: 5
    },
    {
      id: 5,
      name: "Chloe B.",
      text: "I was so nervous for my first spray tan, but Jillian walked me through everything and made me feel completely at ease. The results were stunning. I'm officially addicted.",
      rating: 5
    },
    {
      id: 6,
      name: "Megan K.",
      text: "Always professional, always on time, and always a perfect tan. I love that she custom mixes the color based on what I need that week. 10/10 recommend.",
      rating: 5
    }
  ];

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <span className="text-xs tracking-[0.3em] uppercase mb-4 font-medium text-brand-accent block">Client Love</span>
        <h1 className="text-5xl md:text-7xl font-serif uppercase tracking-tight mb-6">Testimonials</h1>
        <p className="text-brand-black/70 font-light max-w-2xl mx-auto text-lg">
          Don't just take my word for it. See what my beautiful clients have to say about their glow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <motion.div 
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/40 backdrop-blur-sm border border-brand-black/5 p-10 flex flex-col"
          >
            <div className="flex mb-6 text-brand-accent">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            
            <p className="text-base font-light leading-relaxed text-brand-black/80 mb-8 flex-grow italic">
              "{review.text}"
            </p>
            
            <div className="border-t border-brand-black/10 pt-6 mt-auto">
              <span className="font-serif uppercase tracking-widest text-sm">{review.name}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <h3 className="text-2xl font-serif uppercase tracking-widest mb-6">Ready for your own glow?</h3>
        <a 
          href="/booking" 
          className="inline-block bg-brand-black text-brand-bg px-8 py-4 text-sm tracking-widest uppercase hover:bg-brand-black/80 transition-all"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
