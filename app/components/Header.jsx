import React from 'react';

const navbar = [
    { item: "Accueil", id: "accueil" },
    { item: "À propos", id: "apropos" },
    { item: "Expériences", id: "experiences" },
    { item: "Services", id: "services" },
];

const Header = () => {
    return (
        <header className='bg-white flex justify-between items-center py-4 px-6 md:px-12 shadow-md'>
            {/* Logo */}
            <div className='w-60 h-15 relative'>
                <img
                    src="./logos/helly vibes logo.png"
                    alt="HellyVibes Logo"
                    className='w-full h-full object-contain'
                />
            </div>

            {/* Navigation */}
            <nav className='flex items-center gap-4 md:gap-8'>

                <ul className='flex items-center gap-6 md:gap-10'>
                    {navbar.map((nav, index) => (
                        <li key={index}>
                            <a
                                href={`#${nav.id}`}
                                className='text-lg md:text-xl text-blue-600 font-semibold hover:text-blue-800 transition-colors cursor-pointer'
                            >
                                {nav.item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Bouton Contact */}
                <a
                    href='#contact'
                    className='bg-blue-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-700 transition-colors whitespace-nowrap'>
                    Contactez-moi
                </a>
            </nav>
        </header>
    );
};

export default Header;