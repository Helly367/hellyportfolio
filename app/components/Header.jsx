"use client"
import React, { useState } from 'react';
import { useDevice } from '../context/deviceSizeContext';
import { Menu, Close } from "@mui/icons-material";

const navbar = [
    { item: "Accueil", id: "accueil" },
    { item: "À propos", id: "apropos" },
    { item: "Expériences", id: "experiences" },
    { item: "Services", id: "services" },
];

const DesktopHeader = () => {
    return (
        <header className='bg-white flex justify-between items-center py-4 px-6 md:px-12 shadow-md'>
            <div className='w-60 h-15'>
                <img
                    src="./logos/helly vibes logo.png"
                    alt="HellyVibes Logo"
                    className='w-full h-full object-contain'
                />
            </div>

            <nav className='flex items-center gap-8'>
                <ul className='flex items-center gap-10'>
                    {navbar.map((nav, index) => (
                        <li key={index}>
                            <a
                                href={`#${nav.id}`}
                                className='text-xl text-blue-600 font-semibold hover:text-blue-800 transition-colors'
                            >
                                {nav.item}
                            </a>
                        </li>
                    ))}
                </ul>

                <a
                    href='#contact'
                    className='bg-blue-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-700 transition-colors'
                >
                    Contactez-moi
                </a>
            </nav>
        </header>
    );
};

const MobileHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e) => {
        e.stopPropagation(); // <-- IMPORTANT
        setIsOpen(!isOpen);
    };

    // Fermer le menu si on clique en dehors
    React.useEffect(() => {
        const handleClickOutside = () => {
            setIsOpen(false);
        };

        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <header className='bg-white flex justify-between items-center shadow-md px-4 py-3 relative'>
            <div className='w-10'>
                <img
                    src="./logos/helly vibes Icon.png"
                    alt="HellyVibes Logo"
                    className='w-full h-full object-contain'
                />
            </div>

            <button onClick={handleClick}>
                {isOpen ? <Close /> : <Menu />}
            </button>

            {isOpen && (
                <nav
                    className='absolute top-full right-0 mt-2 bg-white shadow-lg z-50 p-6 min-w-50 rounded-lg'
                    onClick={(e) => e.stopPropagation()} // Empêche la fermeture au clic dans le menu
                >
                    <ul className='flex flex-col gap-4'>
                        {navbar.map((nav, index) => (
                            <li key={index}>
                                <a
                                    href={`#${nav.id}`}
                                    onClick={() => setIsOpen(false)}
                                    className='text-lg text-blue-600 font-semibold block py-2 hover:text-blue-800'
                                >
                                    {nav.item}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a
                        href='#contact'
                        onClick={() => setIsOpen(false)}
                        className='bg-blue-600 text-white py-3 px-6 rounded-lg font-bold block text-center mt-4 hover:bg-blue-700'
                    >
                        Contactez-moi
                    </a>
                </nav>
            )}
        </header>
    );
};

const HeaderItems = () => {
    const { mobile } = useDevice();
    return mobile ? <MobileHeader /> : <DesktopHeader />;
};

export default HeaderItems;