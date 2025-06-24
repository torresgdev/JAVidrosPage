import Image from "next/image";

const Hero = () => {
    return (
        <section className="realative h-screen flex items-center justify-center text-white text-center overflow-hidden">
            <Image 
                src="/images/header_glass.jpg"
                alt="Estruturas metálicas e instalação de vidros" // Busca do SEO
                layout="fill"
                objectFit="cover"
                quality={80}
                priority
                className="brightness-50"/>

            <div className="relative z-10 p-8 bg-black bg-opacity-40 rounded-lg max-w-3xl mx-auto shadow-xl">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">Especialistas em Estruturas Metálicas e Vidros</h1>

                <p className="text-xl md:tex-2xl mb-8 opacity-90">Qualidade, Segurança e Inovação para seu Projeto.</p>

                <a href="#contato"
                    className="inline-block bg-blue-600 hover:gb-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg trasition-all duration-300 transform hover:scale-105 shadow-lg">
                        Solicite um Orçamento Agora !
                    </a>
            </div>
        </section>
    )
}

export default Hero;