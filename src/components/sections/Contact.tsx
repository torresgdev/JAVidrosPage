import React, {useState} from "react";
import { FaPhone, FaEnvelope, FaMapMarkedAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await new Promise(resolve => setTimeout(resolve,2000))
            console.log('Formulário enviado: ', {name, email, message});
            setSubmitStatus('success');
            setName('')
            setEmail('')
            setMessage('')
        } catch (error) {
            console.error('Error ao enviar formulário: ', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        };
    };

    return ( 
        <section id="contato" className="py-20 bg-blue-600 text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-extrabold mb-12">Fale Conosco</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="text-left bg-blue-700 p-8 rounded-lg shadow-xl">
                        <h3 className="text-3xl font-bold mb-6">Informações de Contato</h3>
                        <ul className="space-y-4 text-lg">
                            <li className="flex items-center">
                                <FaPhone className="mr-3 text-blue-300" /> (XX) XXXX-XXXX (WhatsApp)
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="mr-3 text-blue-300" /> contato@email.com
                            </li>
                            <li className="flex items-center">
                                <FaMapMarkedAlt className="mr-3 text-blue-300" /> Rua Exemplo, 123 - São Gonçalo, Rio de Janeiro, Brasil
                            </li>
                        </ul>

                        <div className="mt-8">
                            <h4 className="text-2xl font-bold mb-4">Horário de Atendimento</h4>
                            <p className="text-lg">Segunda a Sexta: 08:00 - 18:00</p>
                            <p className="text-lg">Sábado: 08:00 - 12:00</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-xl text-gray-800">
                        <h3 className="text-3xl font-bold mb-6">Envie-nos uma Mensagem</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-lg font-semibold mb-2">Seu Nome</label>
                                <input type="text"
                                    id="name"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focis:ring-2 focus:ring-blue-500"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} 
                                    required
                                    />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-lg font-semibold mb-2">Seu E-mail</label>
                                <input type="email"
                                    id="email"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focis:ring-2 focus:ring-blue-500"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required
                                    />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-lg font-semibold mb-2">Sua Mensagem</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focis:ring-2 focus:ring-blue-500"
                                    value={name}
                                    onChange={(e) => setMessage(e.target.value)} 
                                    required
                                    />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md text-lg transition-colors duration-300"
                                disabled={isSubmitting}>
                                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                            </button>
                            {submitStatus === 'success' && (
                                <p className="text-green-600 mt-4">Mensagem enviada com Sucesso</p>
                            )}

                            {submitStatus === 'error' && (
                                <p className="text-red-600 mt-4">Ocorreu um erro ao enviar a mensagem. Tente novamente</p>

                            )}
                        </form>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;