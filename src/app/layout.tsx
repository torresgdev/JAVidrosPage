import WhatsAppButton from '@/components/ui/WhatsappButton';
import './../styles/globals.css'; // 
import { Inter } from 'next/font/google'; 


const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({
  children, 
}: {
  children: React.ReactNode; 
}) {
  const phoneNumber = ''
  const initialMessage = 'Olá! estou testando uma msg automatica flw vlw'
  return (
    <html lang="pt-BR"> 
      <body className={`${inter.className} antialiased`}>
        {children} 
        < WhatsAppButton phoneNumber={phoneNumber} message={initialMessage} isFloating={true}/>
      </body>
    </html>
  );
}