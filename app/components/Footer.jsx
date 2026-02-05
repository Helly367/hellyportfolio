"use client";
import React from 'react';
import { Copyright, ArrowUpward } from '@mui/icons-material';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className='bg-gray-900 text-white py-12'>
            <div className='max-w-7xl mx-auto px-6 md:px-12'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    {/* Logo et copyright */}
                    <div className='text-center md:text-left'>
                        <div className='flex items-center gap-3 mb-4'>
                            <img
                                src="./logos/helly vibes logo.png"
                                alt="HellyVibes Logo"
                                className='h-10 w-60 object-contain'
                            />
                        </div>
                        <p className='text-gray-400 flex items-center gap-2'>
                            <Copyright className='w-4 h-4' />
                            {new Date().getFullYear()} Djuma Helly Vibe's. Tous droits réservés.
                        </p>
                    </div>

                    {/* Navigation rapide */}
                    <div className='text-center'>
                        <h4 className='text-lg font-bold mb-4'>Navigation</h4>
                        <div className='flex flex-wrap justify-center gap-6'>
                            {['Accueil', 'À propos', 'Services', 'Expériences', 'Portfolio', 'Contact'].map(item => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase().replace(' ', '-').replace('é', 'e')}`}
                                    className='text-gray-400 hover:text-white transition-colors'
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Bouton retour en haut */}
                    <button
                        onClick={scrollToTop}
                        className='p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors'
                        aria-label="Retour en haut"
                    >
                        <ArrowUpward />
                    </button>
                </div>

                {/* Séparateur */}
                <div className='my-8 border-t border-gray-800'></div>

                {/* Mentions légales */}
                <div className='text-center text-gray-500 text-sm'>
                    <p className='mb-2'>
                        Développeur Full-Stack & Designer • Basé à Kinshasa, Rd congo
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;