"use client"
import Image from "next/image";
import {  easeOut, motion } from "framer-motion";
import WhatsAppButton from "../ui/WhatsappButton";

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

    const phoneNumber = ''; 
    const initialMessage = 'Olá! Gostaria de um orçamento para estruturas metálicas e vidros.';

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
                
                <motion.div
                    variants={buttonVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <WhatsAppButton
                        phoneNumber={phoneNumber}
                        message={initialMessage}
                        className="inline-block font-bold py-4 text-lg">
                            Solicite um Orçamento Agora!
                        </WhatsAppButton>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero;