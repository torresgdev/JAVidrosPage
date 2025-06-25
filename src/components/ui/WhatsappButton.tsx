
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

interface WhatsAppButtonProps {
    phoneNumber: string;
    message?: string;
    className?: string;
    children?: React.ReactNode;
    isFloating?: boolean;

}

const WhatsAppButton : React.FC<WhatsAppButtonProps> = ({
    phoneNumber, 
    message,
    className = '',
    children,
    isFloating = false}) => {
   
    const whatsappUrl = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}`: ''}`;

    const floatingClasses = isFloating
        ? "fixed bottom-6 right-6 p-4 rounded-full text-3xl md:text-4xl z-50 transform hover:scale-110 animate-bounce-slow" : "";

    return (
        <Link
            href={whatsappUrl}
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all duration-300 flex items-center justify-center ${floatingClasses} ${className}`}
            aria-label={children ? undefined : "Fale conosco pelo WhatsApp"}>
               {children ? children : <FaWhatsapp />} 
            </Link>
    )
}
export default WhatsAppButton;