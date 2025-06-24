import Image from "next/image";

const galleryImages = [
    {src: '/images/glass.jpg', alt: ''},
    {src: '/images/glass1.jpg', alt: ''},
    {src: '/images/glass2.jpg', alt: ''},
    {src: '/images/glass3.jpg', alt: ''},
    {src: '/images/glass4.jpg', alt: ''},
    {src: '/images/glass5.jpg', alt: ''},
    {src: '/images/glass6.jpg', alt: ''},
];

const Gallery = () => {
    return (
        <section id="galeria" className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
                    Nossos Projetos
                </h2>  
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cold-3 gap8">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="relative oferflow-hidden rounded-lg shadow-lg group">
                            <Image
                                src={image.src}
                                alt={image.src}
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover transition-transform duration-300 grou-hover:scale-110"/>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-lg font-semibold px-4">{image.alt}</p>
                        </div>
                        </div>
                    ))}
                </div>      
            </div>
        </section>
    )
}

export default Gallery;