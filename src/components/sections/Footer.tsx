import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-6 text-center">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <Link href="/" className="text-2xl font-bold hover:text-blue-400 transition-colors duration-300 mb-4 md:mb-0">
                        Ja Vidros
                    </Link>

                    <ul className="flex space-x-6">
                   
                        <li><Link href="#servicos" className="hover:text-blue-400 transition-colors duration-300">Serviços</Link></li>
                        <li><Link href="#galeria" className="hover:text-blue-400 transition-colors duration-300">Galeria</Link></li>
                        <li><Link href="#contato" className="hover:text-blue-400 transition-colors duration-300">Contato</Link></li>
                        
                    </ul>
                </div>
            </div>
        <div className="border-t border-gray-700 pt-6 mt-6 text-gray-400 text-sm">
          
          <p>&copy; {currentYear} Sua Empresa. Todos os direitos reservados.</p>
          <p>Desenvolvido por Gabriel Torres</p>
        </div>
        </footer>
    )
}
export default Footer;