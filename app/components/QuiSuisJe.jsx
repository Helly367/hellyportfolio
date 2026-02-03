import React from 'react';
import { Code, Palette, Bolt, Download, Folder } from '@mui/icons-material'

const QuiSuisJe = () => {
    const competences = [
        {
            categorie: "Frontend",
            items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
            icon: <Code />,
            color: "text-blue-600",
            bgColor: "bg-blue-100"
        },
        {
            categorie: "Backend",
            items: ["Node.js", "PHP", "Python", "MongoDB"],
            icon: <Bolt />,
            color: "text-orange-500",
            bgColor: "bg-orange-100"
        },
        {
            categorie: "Design",
            items: ["Figma", "Photoshop", "Illustrator", "UI/UX"],
            icon: <Palette />,
            color: "text-purple-600",
            bgColor: "bg-purple-100"
        }
    ];

    return (
        <section className='px-6 md:px-12 py-12 md:py-20 bg-white' id="apropos">
            <div className='max-w-6xl mx-auto'>
                <div className='flex flex-col lg:flex-row gap-10 md:gap-16 items-center'>

                    {/* Image Section */}
                    <div className='lg:w-2/5 flex justify-center'>
                        <div className='relative w-64 h-64 md:w-80 md:h-80'>
                            <div className='absolute inset-0 bg-linear-to-r from-blue-500 to-orange-500 rounded-3xl rotate-6'></div>
                            <img
                                src="./images/helly2.png"
                                alt="Djuma Helly Vibe's - Développeur Full-Stack"
                                className='relative w-full h-full object-cover rounded-3xl border-4 border-white shadow-2xl'
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className='lg:w-3/5'>
                        <div className='mb-10'>
                            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                                <span className='text-blue-600'>Qui</span> suis-je ?
                            </h2>

                            <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                                Passionné par la création numérique, je suis <span className='font-bold text-blue-600'>Helly Djuma Vibe's</span>,
                                un développeur Full-Stack et designer polyvalent. Mon expertise s'étend du développement web moderne à la
                                conception graphique, me permettant de réaliser des projets complets et cohérents.
                            </p>

                            <p className='text-lg text-gray-700 leading-relaxed'>
                                J'allie <span className='font-semibold'>rigueur technique</span> et <span className='font-semibold'>sens esthétique</span> pour créer
                                des expériences digitales à la fois fonctionnelles et visuellement impactantes.
                                Chaque projet est pour moi une opportunité d'innovation.
                            </p>
                        </div>

                        {/* Compétences Section */}
                        <div className='mb-10'>
                            <h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-8'>
                                Mes <span className='text-orange-500'>Compétences</span>
                            </h3>

                            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                                {competences.map((competence) => (
                                    <div
                                        key={competence.categorie}
                                        className='bg-gray-50 p-6 rounded-2xl border border-gray-200'>
                                        <div className='flex items-center gap-3 mb-4'>
                                            <div className={`p-2 ${competence.bgColor} rounded-lg`}>
                                                <div className={`w-6 h-6 ${competence.color}`}>
                                                    {competence.icon}
                                                </div>
                                            </div>
                                            <h4 className='text-xl font-bold text-gray-800'>
                                                {competence.categorie}
                                            </h4>
                                        </div>

                                        <ul className='space-y-2'>
                                            {competence.items.map((item) => (
                                                <li
                                                    key={item}
                                                    className='flex items-center text-gray-700'
                                                >
                                                    <span className='w-2 h-2 bg-blue-500 rounded-full mr-3'></span>
                                                    <span className='font-medium'>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className='flex flex-wrap gap-4'>
                            <button className='flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors'>
                                <Download />
                                Télécharger mon CV
                            </button>
                            <button className='flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors'>
                                <Folder />
                                Voir mes projets
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuiSuisJe;