
import { FaHardHat, FaGlassMartiniAlt, FaTools } from "react-icons/fa";

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
    return (
        <section id='servicos' className="py-30 bg-gray-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-extrabold text-gray-80 mb-12">
                    Nossos Serviços
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {servicesData.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                            
                            {service.icon}
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>

                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services;