"use client";
import React, { useState } from 'react';
import { Email, Phone, LocationOn, Send, GitHub, Instagram, Facebook } from '@mui/icons-material';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const contactInfo = [
        {
            icon: <Email />,
            title: 'Email',
            info: 'hellyvibes36@gmail.com',
            link: 'mailto:hellyvibes36@gmail.com'
        },
        {
            icon: <Phone />,
            title: 'Téléphone',
            info: '+243 986 828 429',
            link: 'tel:243986828429'
        },
        {
            icon: <LocationOn />,
            title: 'Localisation',
            info: 'Kinshasa, Rd congo',
            link: '#'
        }
    ];

    const socialLinks = [
        {
            icon: <Facebook />,
            name: 'Facebook',
            url: 'https://linkedin.com/in/hellyvibes',
            color: 'bg-blue-600 hover:bg-blue-700'
        },
        {
            icon: <GitHub />,
            name: 'GitHub',
            url: 'https://github.com/hellyvibes',
            color: 'bg-gray-800 hover:bg-gray-900'
        },
        {
            icon: <Instagram />,
            name: 'Instagram',
            url: 'https://instagram.com/hellyvibes',
            color: 'bg-pink-600 hover:bg-pink-700'
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique d'envoi du formulaire
        console.log('Formulaire envoyé:', formData);
        // Réinitialiser le formulaire
        setFormData({ name: '', email: '', subject: '', message: '' });
        alert('Message envoyé avec succès !');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className='py-12 md:py-20 px-6 md:px-12 bg-gray-50' id="contact">
            <div className='max-w-6xl mx-auto'>
                <div className='text-center mb-12 md:mb-16'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                        Travaillons <span className='text-orange-500'>Ensemble</span>
                    </h2>
                    <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                        Discutons de votre projet et concrétisons vos idées
                    </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
                    {/* Informations de contact */}
                    <div className='lg:col-span-1'>
                        <div className='bg-white p-8 rounded-2xl shadow-lg'>
                            <h3 className='text-2xl font-bold text-gray-900 mb-8'>Me contacter</h3>

                            {/* Infos de contact */}
                            <div className='space-y-6 mb-10'>
                                {contactInfo.map((info, index) => (
                                    <a
                                        key={index}
                                        href={info.link}
                                        className='flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors group'
                                    >
                                        <div className='p-3 bg-blue-100 text-blue-600 rounded-lg'>
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h4 className='font-bold text-gray-900'>{info.title}</h4>
                                            <p className='text-gray-600 group-hover:text-blue-600 transition-colors'>
                                                {info.info}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Réseaux sociaux */}
                            <div>
                                <h4 className='font-bold text-gray-900 mb-4'>Suivez-moi</h4>
                                <div className='flex gap-3'>
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className={`${social.color} text-white p-3 rounded-lg hover:scale-110 transition-all duration-300`}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulaire de contact */}
                    <div className='lg:col-span-2'>
                        <div className='bg-white p-8 rounded-2xl shadow-lg'>
                            <form onSubmit={handleSubmit}>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                                    <div>
                                        <label className='block text-gray-700 font-medium mb-2'>
                                            Votre nom *
                                        </label>
                                        <input
                                            type='text'
                                            name='name'
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all'
                                            placeholder='John Doe'
                                        />
                                    </div>
                                    <div>
                                        <label className='block text-gray-700 font-medium mb-2'>
                                            Votre email *
                                        </label>
                                        <input
                                            type='email'
                                            name='email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all'
                                            placeholder='john@example.com'
                                        />
                                    </div>
                                </div>

                                <div className='mb-6'>
                                    <label className='block text-gray-700 font-medium mb-2'>
                                        Sujet *
                                    </label>
                                    <input
                                        type='text'
                                        name='subject'
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all'
                                        placeholder='Sujet de votre message'
                                    />
                                </div>

                                <div className='mb-8'>
                                    <label className='block text-gray-700 font-medium mb-2'>
                                        Votre message *
                                    </label>
                                    <textarea
                                        name='message'
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none'
                                        placeholder='Décrivez votre projet...'
                                    />
                                </div>

                                <button
                                    type='submit'
                                    className='flex items-center justify-center gap-3 w-full md:w-auto bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors'
                                >
                                    <Send />
                                    Envoyer le message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;