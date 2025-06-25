import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Estruturas Metálicas e Instalação de Vidros | JA Vidros em Niterói e São Gonçalo / Rio de Janeiro',
  description: 'Especialistas em fabricação de estruturas metálicas e instalação de vidros temperados, laminados e fachadas. Qualidade e segurança para o seu projeto.',
  keywords: ['estruturas metálicas', 'instalação de vidros', 'serralheria', 'vidraçaria', 'portões de ferro', 'coberturas' , 'telhados' , 'pergolados metálicos' , 'São Gonçalo', 'Niterói', 'Rio de Janeiro'],
  openGraph: {
    title: 'JA Vidros e Serviços | Estruturas Metálicas e Vidros',
    description: 'Soluções completas em estruturas metálicas e vidrçaria para a sua obra. Qualidade e segurança.',
    url: 'https://calm-beijinho-35e678.netlify.app',
    siteName: 'JA Vidros e Serviços',
    images: [
      {
        url: '',
        width: '',
        height: '',
        alt: 'Estruturas metálicas e instalação de vidros'
      },
    ],
    locale: 'pt_BR',
    type: 'website'
  },

  twitter: {
    card: 'summary_large_image',
    title: 'JA Vidros e Serviços | Estruturas Metálicas e Vidros',
    description: 'Soluções completas em estruturas metálicas e vidrçaria para a sua obra. Qualidade e segurança.',
    images: ['https://www.suaempresa.com.br/images/og-image.jpg'], 
  }, 
};




import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Hero />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}