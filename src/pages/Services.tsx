import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 1,
      title: "The Signature Tan",
      price: "$45",
      time: "30 mins",
      description: "A custom-blended solution tailored specifically to your skin type and desired depth. Includes a pH balancing prep spray, custom color mix, and a moisture-lock setting powder to eliminate stickiness.",
      image: "https://scontent.fbom12-1.fna.fbcdn.net/v/t51.82787-15/656299599_17905025127388380_9092526157995190458_n.jpg?stp=dst-jpegr_tt6&_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_ohc=lwwdFuznxe8Q7kNvwFNppFS&_nc_oc=AdqplhMm700HTtwFQX6a6DOlH5VHENHxL0o9PXoSWAU7mnDehXhHHVul5dG-ldAE-U4&_nc_zt=23&se=-1&_nc_ht=scontent.fbom12-1.fna&_nc_gid=z45DHh56lJR91MhdyMBGeg&_nc_ss=7a32e&oh=00_AfwFZ0bjyB5BHYgF6RzR058BIb0HfVa3-eil_9IdlCHoQA&oe=69CD7905"
    },
    {
      id: 2,
      title: "The Bridal Experience",
      price: "$100",
      time: "2 Sessions",
      description: "The ultimate package for brides. Includes two full signature tans: a trial run 2-4 weeks before the big day (perfect for your bridal shower or bachelorette), and your final wedding glow 2 days prior.",
      image: "https://scontent.fbom12-2.fna.fbcdn.net/v/t51.82787-15/625122815_17897173263388380_4556628142361060688_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_ohc=9s5253ns3LMQ7kNvwHBwprL&_nc_oc=AdrskUPvPTo6s998Oj5KKJSNnm3Yz0ixnwRGMlgemzrJzhE9uiXz6pnTz1tsJFevXkQ&_nc_zt=23&_nc_ht=scontent.fbom12-2.fna&_nc_gid=X8U7uSq8nKdsNCt8w7L9ow&_nc_ss=7a32e&oh=00_AfxMJhm2yu18pG2YFCZZXjTVUyCw6APjS6iXq2f0XkwRkg&oe=69CD7BE5"
    },
    {
      id: 3,
      title: "Bronze Parties",
      price: "Varies",
      time: "Group",
      description: "Grab your besties! Host a tanning party of 4 or more and the host tans for FREE. Perfect for bachelorettes, vacations, sorority events, or just a girls' night in. Contact for group pricing.",
      image: "https://scontent.fbom12-1.fna.fbcdn.net/v/t51.82787-15/543806757_17880189981388380_6653496524958642645_n.jpg?stp=dst-jpegr_tt6&_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_ohc=bt-un1KzZxoQ7kNvwHM_qNh&_nc_oc=AdqtFiZlqS-0Q8MtfZ975HFpIyIVnuDcDpMPaA8gCD0055kqlIQV3pq5H8QxbdOaeOo&_nc_zt=23&se=-1&_nc_ht=scontent.fbom12-1.fna&_nc_gid=cfddqp-SFWL4CvJ-HnyLQg&_nc_ss=7a32e&oh=00_Afy1X5xughqiahTJ-70rXbDAjM3QEkGZ6Tm7YAff8kMoAQ&oe=69CD6DB6"
    },
    {
      id: 4,
      title: "Bestie Tans",
      price: "$80",
      time: "45 mins",
      description: "Bring a friend and save! Two signature tans booked back-to-back. The perfect excuse to catch up while getting your glow on.",
      image: "https://scontent.fbom12-1.fna.fbcdn.net/v/t51.82787-15/536771891_17878400409388380_2496081500180566922_n.jpg?stp=dst-jpegr_tt6&_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_ohc=TR9H-cKISpsQ7kNvwFLvvk5&_nc_oc=AdollLjGaGcrlMe9uZF3eVKrXknlHR0UOGzmCsg2dV-krXtjoZbp2SdrJwFBbIrgdvE&_nc_zt=23&se=-1&_nc_ht=scontent.fbom12-1.fna&_nc_gid=LqGbGAIyYPVpWbJ8bYemtA&_nc_ss=7a32e&oh=00_Afzxbyzd6h0pfe2M064Lytss-MDWTOIpuxlO5s7VbNYDpA&oe=69CD648F"
    }
  ];

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <span className="text-xs tracking-[0.3em] uppercase mb-4 font-medium text-brand-accent block">Menu</span>
        <h1 className="text-5xl md:text-7xl font-serif uppercase tracking-tight mb-6">Services</h1>
        <p className="text-brand-black/70 font-light max-w-2xl mx-auto text-lg">
          Choose one of my specialties. Every tan is custom-blended for your unique skin tone.
        </p>
      </div>

      <div className="space-y-24">
        {services.map((service, index) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 h-[400px] md:h-[500px]">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover rounded-sm shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="flex justify-between items-end mb-6 border-b border-brand-black/10 pb-6">
                <h2 className="text-3xl md:text-4xl font-serif uppercase tracking-tight">{service.title}</h2>
                <div className="text-right">
                  <span className="block text-xl font-serif">{service.price}</span>
                  <span className="block text-xs uppercase tracking-widest text-brand-black/50">{service.time}</span>
                </div>
              </div>
              
              <p className="text-base font-light leading-relaxed text-brand-black/80 mb-10">
                {service.description}
              </p>
              
              <Link 
                to="/booking" 
                className="inline-flex items-center text-sm tracking-widest uppercase font-medium hover:text-brand-accent transition-colors group w-fit"
              >
                Book This Service
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add-ons / Extras */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-32 bg-white/40 backdrop-blur-sm border border-brand-black/5 p-12 text-center"
      >
        <h3 className="text-2xl font-serif uppercase tracking-widest mb-8">Studio Policies</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm font-light text-brand-black/70">
          <div>
            <h4 className="font-medium uppercase tracking-wider text-brand-black mb-2">Preparation</h4>
            <p>Exfoliate and shave 24 hours prior. Arrive with clean skin, free of lotions, deodorants, or makeup.</p>
          </div>
          <div>
            <h4 className="font-medium uppercase tracking-wider text-brand-black mb-2">Cancellation</h4>
            <p>Please provide 24 hours notice for cancellations to avoid a 50% fee. No-shows will be charged 100%.</p>
          </div>
          <div>
            <h4 className="font-medium uppercase tracking-wider text-brand-black mb-2">Aftercare</h4>
            <p>Wear loose, dark clothing after your session. Avoid water and sweating until your first rinse.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
