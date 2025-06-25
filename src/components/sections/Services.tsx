"use client"
import { FaHardHat, FaGlassMartiniAlt, FaTools } from "react-icons/fa";
import { easeOut, motion } from "framer-motion";

const servicesData = [
    {
        icon: <FaHardHat className="text-blue-600 text-5xl mb-4" />,
        title: 'Estruturas Metálicas',
        description: 'Fabricação e instalação de estruturas metálicas personalizadas para diversos fins, com engenharia e segurança.',
    },
    {
        icon: <FaGlassMartiniAlt className="text-blue-600 text-5xl mb-4" />,
        title: 'Instalação de Vidros',
        description: 'Fabricação e instalação de estruturas metálicas personalizadas para diversos fins, com engenharia e segurança.',
    },
    {
        icon: <FaTools className="text-blue-600 text-5xl mb-4" />,
        title: 'Projetos e Consultoria',
        description: 'Fabricação e instalação de estruturas metálicas personalizadas para diversos fins, com engenharia e segurança.',
    },
];

const Services = () => {

    const cardVariants = {
        hidden: { opacity: 0, y: 50},
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut}},
    }
    return (
        <section id='servicos' className="py-30 bg-gray-100">
            <div className="container mx-auto px-6 text-center">
                <motion.h2 
                    className="text-4xl font-extrabold text-gray-80 mb-12"
                    initial={{opacity: 0, y: -20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.7, ease: easeOut}}>
                    Nossos Serviços
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {servicesData.map((service, index) => (
                        <motion.div key={index} 
                            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3}}
                            transition={{delay: index * 0.1, duration: 0.6, ease: easeOut}}>
                            
                            {service.icon}
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>

                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services;