import Link from "next/link";

const Header = () => {
    return (
        <header className="absolute top-0 left-0 w-full z-10 p-4">
            <nav className="container mx-auto flex justify-between itemc-center bg-gray-800 bg-opacity-75 backdrop-filter backdrop-blur-sm dounded-lg py-3 px-6 shadow-lg">
                <Link href="/" className="text-white text-2xl font-bold hover:text-blue-400 transition-colors duration-300">
                    Ja Vidros e Serviços
                </Link>
                <ul className="flex space-x-6">
                    <li><Link href='#servicos' className="text-white hover:text-blue-400 trabstition-colors duration-300"> Serviços </Link></li>
                    <li><Link href='#galeria' className="text-white hover:text-blue-400 trabstition-colors duration-300"> Galeria </Link></li>
                    <li><Link href='#contato' className="text-white hover:text-blue-400 trabstition-colors duration-300"> Contato </Link></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;