"use client"
import Image from "next/image";
import {  easeOut, motion } from "framer-motion";

const Hero = () => {

    const titleVariants = {
        hidden: { opacity: 0, y: 50},
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut}},
    }

    const textVariants = {
        hidden: { opacity: 0, y: 50},
        visible: { opacity: 1, y: 0, transition: {delay: 0.3, duration: 0.8, ease: easeOut}}
    }

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8},
        visible: { opacity: 1, scale: 1, transition: { delay: 0.6, duration: 0.5, ease: easeOut}  }
    }

    return (
        <section className="realative h-screen flex items-center justify-center text-white text-center overflow-hidden">
            <Image 
                src="/images/header_glass.jpg"
                alt="Estruturas metálicas e instalação de vidros" // Busca do SEO
                fill
                className="brightness-50 object-cover"/>

            <div className="relative z-10 p-8 bg-black bg-opacity-10 rounded-lg max-w-3xl mx-auto shadow-xl">
                <motion.h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight"
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible">Especialistas em Estruturas Metálicas e Vidros</motion.h1>

                <motion.p className="text-xl md:text-2xl mb-8 opacity-90"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible">Qualidade, Segurança e Inovação para seu Projeto.</motion.p>
                

                <motion.a href="#contato"
                    className="inline-block bg-blue-600 hover:gb-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg trasition-all duration-300 transform hover:scale-105 shadow-lg"
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible">
                        Solicite um Orçamento Agora !
                    </motion.a>
            </div>
        </section>
    )
}

export default Hero;