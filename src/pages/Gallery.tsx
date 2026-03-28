import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    "https://scontent.fbom12-1.fna.fbcdn.net/v/t51.82787-15/656299599_17905025127388380_9092526157995190458_n.jpg?stp=dst-jpegr_tt6&_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_ohc=lwwdFuznxe8Q7kNvwFNppFS&_nc_oc=AdqplhMm700HTtwFQX6a6DOlH5VHENHxL0o9PXoSWAU7mnDehXhHHVul5dG-ldAE-U4&_nc_zt=23&se=-1&_nc_ht=scontent.fbom12-1.fna&_nc_gid=z45DHh56lJR91MhdyMBGeg&_nc_ss=7a32e&oh=00_AfwFZ0bjyB5BHYgF6RzR058BIb0HfVa3-eil_9IdlCHoQA&oe=69CD7905",
    "https://scontent.fbom12-2.fna.fbcdn.net/v/t51.82787-15/625122815_17897173263388380_4556628142361060688_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_ohc=9s5253ns3LMQ7kNvwHBwprL&_nc_oc=AdrskUPvPTo6s998Oj5KKJSNnm3Yz0ixnwRGMlgemzrJzhE9uiXz6pnTz1tsJFevXkQ&_nc_zt=23&_nc_ht=scontent.fbom12-2.fna&_nc_gid=X8U7uSq8nKdsNCt8w7L9ow&_nc_ss=7a32e&oh=00_AfxMJhm2yu18pG2YFCZZXjTVUyCw6APjS6iXq2f0XkwRkg&oe=69CD7BE5",
    "https://scontent.fbom12-1.fna.fbcdn.net/v/t51.82787-15/543806757_17880189981388380_6653496524958642645_n.jpg?stp=dst-jpegr_tt6&_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_ohc=bt-un1KzZxoQ7kNvwHM_qNh&_nc_oc=AdqtFiZlqS-0Q8MtfZ975HFpIyIVnuDcDpMPaA8gCD0055kqlIQV3pq5H8QxbdOaeOo&_nc_zt=23&se=-1&_nc_ht=scontent.fbom12-1.fna&_nc_gid=cfddqp-SFWL4CvJ-HnyLQg&_nc_ss=7a32e&oh=00_Afy1X5xughqiahTJ-70rXbDAjM3QEkGZ6Tm7YAff8kMoAQ&oe=69CD6DB6",
    "https://scontent.fbom12-1.fna.fbcdn.net/v/t51.82787-15/536771891_17878400409388380_2496081500180566922_n.jpg?stp=dst-jpegr_tt6&_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_ohc=TR9H-cKISpsQ7kNvwFLvvk5&_nc_oc=AdollLjGaGcrlMe9uZF3eVKrXknlHR0UOGzmCsg2dV-krXtjoZbp2SdrJwFBbIrgdvE&_nc_zt=23&se=-1&_nc_ht=scontent.fbom12-1.fna&_nc_gid=LqGbGAIyYPVpWbJ8bYemtA&_nc_ss=7a32e&oh=00_Afzxbyzd6h0pfe2M064Lytss-MDWTOIpuxlO5s7VbNYDpA&oe=69CD648F",
    "https://scontent.fbom12-1.fna.fbcdn.net/v/t51.82787-15/523595355_17874435081388380_595470237765176600_n.jpg?stp=dst-jpegr_tt6&_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=M6dM8Bt1WOMQ7kNvwG8JnCi&_nc_oc=Adrk5gP2UIaoMbtgpVpGDDcGuEmRcg94jspNJW8kpiJho8TcwoRqOtsm4wFvsMbHXGI&_nc_zt=23&se=-1&_nc_ht=scontent.fbom12-1.fna&_nc_gid=XssORoyMOWgYzrzfIvUi_g&_nc_ss=7a32e&oh=00_Afwuf93Z6Ce4xH9CKA0p7pBcbX_ZECurug5AlebMrspiwg&oe=69CD6B0D",
    "https://scontent.fbom12-1.fna.fbcdn.net/v/t51.82787-15/520945995_17873782941388380_8559195918070664641_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=hUSQL72E4LwQ7kNvwGwAiJ0&_nc_oc=AdrMueWrVPrC5hYc0tO5he9gdQQ_QESQU_Ye6LTzQ1xDOHRejK66jN0jHChNoycM0nE&_nc_zt=23&_nc_ht=scontent.fbom12-1.fna&_nc_gid=JGzsxz7OlqjqPJx98iiKAA&_nc_ss=7a32e&oh=00_AfwRyvVBtpLv83JbYiV6qUYmMdGltPclElcj_mfek_uDUw&oe=69CD6AE3",
    "https://scontent.fbom12-1.fna.fbcdn.net/v/t51.75761-15/500647669_17866874979388380_7422229183985588944_n.jpg?stp=dst-jpegr_tt6&_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=BOZH4s2XJxwQ7kNvwFyX15d&_nc_oc=AdpAX9WP_oI56mwuYeAju35I7KUYTcVgrrNzb2AkOBQwYdSz_kukHoXfTc7N_3d3NgE&_nc_zt=23&se=-1&_nc_ht=scontent.fbom12-1.fna&_nc_gid=DzCFqPGts0IUWvhCD5q5ug&_nc_ss=7a32e&oh=00_AfzjyYAulc4ihfbpCILeqmvS1mYcQz8v30hB9T2ni1bD3Q&oe=69CD6D80",
    "https://scontent.fbom12-2.fna.fbcdn.net/v/t51.82787-15/612103577_17894204460388380_1129340743831309034_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_ohc=DnRy5VTyo8kQ7kNvwGwWpnY&_nc_oc=AdpuYc8f46A9mCcnLsgZpOUHwZV_xI3tyaUVuBNcLGlksB9f3mpfd26J2nZwsHxbsr8&_nc_zt=23&_nc_ht=scontent.fbom12-2.fna&_nc_gid=dYqiuRpUKusdcilI__3x-g&_nc_ss=7a32e&oh=00_AfwnM0F5QmA-LJk7yXF163KFZJbEMX8zjSmQlkPrvv4tpQ&oe=69CD7EF2",
    "https://scontent.fbom12-1.fna.fbcdn.net/v/t51.82787-15/656274351_17904668133388380_6968568840829595523_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_ohc=WvGegwWUuWgQ7kNvwHLqdBz&_nc_oc=Adp1Gyjwa9sS72Sej77-kuHiFqkcxYwyCCPA7L8rwLES6LPWhxO6FT8GKSSWgeAeyG8&_nc_zt=23&_nc_ht=scontent.fbom12-1.fna&_nc_gid=U5TYx9Sr3PILy7WL7RyMfQ&_nc_ss=7a32e&oh=00_AfzyN06jYHxvJJDCsecUPOgKXw-StbYTDSOl2BHpUQYOuA&oe=69CD5DA2"
  ];

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <span className="text-xs tracking-[0.3em] uppercase mb-4 font-medium text-brand-accent block">Portfolio</span>
        <h1 className="text-5xl md:text-7xl font-serif uppercase tracking-tight mb-6">Gallery</h1>
        <p className="text-brand-black/70 font-light max-w-2xl mx-auto text-lg">
          Real results on real clients. Every tan is custom-blended for a natural, flawless finish.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((src, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="aspect-[4/5] overflow-hidden group relative"
          >
            <img 
              src={src} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <a 
          href="https://www.instagram.com/skinbyjillian__" 
          target="_blank" 
          rel="noreferrer"
          className="inline-block border border-brand-black text-brand-black px-8 py-4 text-sm tracking-widest uppercase hover:bg-brand-black hover:text-brand-bg transition-all"
        >
          Follow on Instagram
        </a>
      </div>
    </div>
  );
}
