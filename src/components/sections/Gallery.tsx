"use client"
import Image from "next/image";
import { easeOut, motion } from "framer-motion";

const galleryImages = [
    {src: '/images/glass.jpg', alt: 'vidro fachada'},
    {src: '/images/glass1.jpeg', alt: 'vidro fachada3'},
    {src: '/images/glass2.jpeg', alt: 'vidro fachada4'},
    {src: '/images/glass3.jpeg', alt: 'vidro fachada5'},
    {src: '/images/glass4.jpeg', alt: 'vidro fachada6'},
    {src: '/images/glass5.jpg', alt: 'vidro fachada7'},
    {src: '/images/glass6.jpg', alt: 'vidro fachada8'},
];

const Gallery = () => {
    const galleryVariants = {
        hidden: {opacity: 0, scale: 0.9},
        visible: { opacity: 1, scale: 1, transition: {duration: 0.5, ease: easeOut}}
    }
    return (
        <section id="galeria" className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
                <motion.h2 
                    className="text-4xl font-extrabold text-gray-800 mb-12"
                    initial={{opacity: 0, y: -20}}
                    whileInView={{opacity: 1 , y: 0}}
                    viewport={{ once: true, amount: 0.5}}
                    transition={{duration: 0.7, ease: easeOut}}>
                        Nossos Projetos
                </motion.h2>  
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryImages.map((image, index) => (
                        <motion.div key={index} 
                            className="relative overflow-hidden rounded-lg shadow-lg group transform transition-transform duration-300 hover:scale-120 hover:shadow-xl"
                            variants={galleryVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.3}}
                            transition={{delay: index * 0.15, duration: 0.5, ease: easeOut}}>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover transition-all duration-300"/>
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-center p-4 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                                <p className="text-white text-lg font-semibold px-4">{image.alt}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>      
            </div>
        </section>
    )
}

export default Gallery;