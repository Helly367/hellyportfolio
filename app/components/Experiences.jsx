"use client";
import React from 'react';
import { School, Work, Star } from '@mui/icons-material';

const Experiences = () => {
    const experiences = [
        {
            type: 'Auto-formation',
            title: 'Diplôme en Informatique',
            institution: "platformes en ligne Udemi & Coursera ",
            period: '2020 - 2023',
            description: 'Spécialisation en développement web et design UX/UI',
            icon: <School />,
            color: 'bg-blue-100 text-blue-600'
        },
        {
            type: 'experience',
            title: 'Développeur Full-Stack',
            institution: 'Aryotech Inc.',
            period: '2022 - Présent',
            description: 'Développement d\'applications web et mobiles pour clients internationaux',
            icon: <Work />,
            color: 'bg-green-100 text-green-600'
        },
        {
            type: 'certification',
            title: 'Certification React Avancé',
            institution: 'Meta (ex-Facebook)',
            period: '2023',
            description: 'Certification officielle en développement React avancé',
            icon: <Star />,
            color: 'bg-purple-100 text-purple-600'
        }
    ];

    return (
        <section className='py-12 md:py-20 px-6 md:px-12 bg-white' id="experiences">
            <div className='max-w-6xl mx-auto'>
                <div className='text-center mb-12 md:mb-16'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                        Mon <span className='text-orange-500'>Parcours</span>
                    </h2>
                    <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                        Formation, expériences professionnelles et certifications
                    </p>
                </div>

                <div className='relative'>
                    {/* Timeline line */}
                    <div className='absolute left-0 md:left-1/2 h-full w-1 bg-gray-200 transform md:-translate-x-1/2'></div>

                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12 md:text-left'
                                } ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} md:w-1/2`}
                        >
                            <div className={`relative ${index % 2 === 0 ? 'md:right-0' : 'md:left-0'}`}>
                                {/* Timeline dot */}
                                <div className={`absolute ${index % 2 === 0
                                    ? 'right-0 md:-right-5'
                                    : 'left-0 md:-left-5'
                                    } top-6 w-10 h-10 ${exp.color} rounded-full flex items-center justify-center z-10`}>
                                    {exp.icon}
                                </div>

                                {/* Content card */}
                                <div className={`bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-0' : 'md:ml-0'
                                    }`}>
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${exp.color} mb-4`}>
                                        <span className='text-sm font-semibold'>
                                            {exp.type === 'formation' ? 'FORMATION' :
                                                exp.type === 'experience' ? 'EXPÉRIENCE' : 'CERTIFICATION'}
                                        </span>
                                    </div>

                                    <h3 className='text-xl font-bold text-gray-900 mb-2'>{exp.title}</h3>
                                    <p className='text-lg font-semibold text-gray-700 mb-1'>{exp.institution}</p>
                                    <p className='text-blue-600 font-medium mb-3'>{exp.period}</p>
                                    <p className='text-gray-600'>{exp.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiences;