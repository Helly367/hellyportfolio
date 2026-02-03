import React from 'react';
import {
    Code,
    PhoneAndroid,
    Palette,
    Movie
} from "@mui/icons-material";

const services = [
    {
        categorie: "Développement Web",
        description: "Création de sites et applications web statiques et dynamiques, optimisés et performants.",
        icon: <Code />,
        image: './images/web.jpg',
        color: "from-blue-500 to-cyan-500",
        iconColor: "text-blue-600",
        iconBg: "bg-blue-100"
    },
    {
        categorie: "Développement Mobile & Desktop",
        description: "Applications mobiles et logiciels bureau adaptés à vos besoins spécifiques.",
        icon: <PhoneAndroid />,
        image: './images/mobile.jpg',
        color: "from-purple-500 to-pink-500",
        iconColor: "text-purple-600",
        iconBg: "bg-purple-100"
    },
    {
        categorie: "Design & Graphisme",
        description: "Logos, flyers, illustrations et identités visuelles personnalisées.",
        icon: <Palette />,
        image: './images/design.png',
        color: "from-orange-500 to-yellow-500",
        iconColor: "text-orange-600",
        iconBg: "bg-orange-100"
    },
    {
        categorie: "Montage Photo & Vidéo",
        description: "Retouches photo et montages vidéo professionnels pour vos projets.",
        icon: <Movie />,
        image: './images/video.jpg', // À ajouter
        color: "from-green-500 to-emerald-500",
        iconColor: "text-green-600",
        iconBg: "bg-green-100"
    }
];

const Services = () => {
    return (
        <section className='py-12 md:py-20 px-6 md:px-12 bg-gray-50' id="services">
            <div className='max-w-7xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-12 md:mb-16'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                        Mes
                        <span className='text-orange-500'> Services</span>
                    </h2>
                    <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                        Des solutions digitales complètes pour concrétiser vos projets
                    </p>
                </div>

                {/* Services Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className='group bg-white rounded-2xl overflow-hidden border border-gray-200'
                        >
                            {/* Image Container */}
                            <div className='relative h-48 overflow-hidden'>
                                <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-10`}></div>
                                <img
                                    src={service.image}
                                    alt={service.categorie}
                                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                                />
                                {/* Overlay Gradient */}
                                <div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent'></div>

                                {/* Icon Badge */}
                                <div className='absolute top-4 left-4'>
                                    <div className={`p-3 ${service.iconBg} rounded-xl shadow-lg`}>
                                        <div className={`w-6 h-6 ${service.iconColor}`}>
                                            {service.icon}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className='p-6'>
                                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                                    {service.categorie}
                                </h3>
                                <p className='text-gray-600 leading-relaxed'>
                                    {service.description}
                                </p>

                                {/* CTA Button */}
                                <button className='mt-6 w-full py-3 bg-gray-100 text-gray-800 font-semibold 
                                  rounded-lg hover:bg-gray-200 transition-colors group-hover:bg-blue-50 
                                  group-hover:text-blue-600'>
                                    Découvrir
                                </button>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default Services;