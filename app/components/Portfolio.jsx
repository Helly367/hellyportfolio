"use client";
import React, { useState, useEffect } from 'react';
import { Launch, GitHub, Code, Download, ArrowForward } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Portfolio = () => {
    const router = useRouter();
    const [activeFilter, setActiveFilter] = useState('tous');
    const [displayedProjects, setDisplayedProjects] = useState([]);
    const [loading, setLoading] = useState(false);

    const categories = [
        { id: 'tous', label: 'Tous' },
        { id: 'web', label: 'Web' },
        { id: 'mobile', label: 'Mobile' },
        { id: 'design', label: 'Design' }
    ];

    const projects = [
        {
            "id": 1,
            "title": "Astra",
            "category": "web",
            "description": "Plateforme de téléchargement des documents",
            "image": "/projects/web1.webp",
            "technologies": ["React", "Node.js", "Mysql"],
            "demoLink": "#",
            "codeLink": "#"
        },
        {
            "id": 2,
            "title": "Blog personnel",
            "category": "web",
            "description": "Plateforme pour publier des contenus personnel",
            "image": "/projects/web2.webp",
            "technologies": ["Next.js", "Tailwind"],
            "demoLink": "#",
            "codeLink": "#"
        },
        {
            "id": 3,
            "title": "Aryo Resto",
            "category": "design",
            "description": "Affiche professionnelle pour un restaurant",
            "image": "/projects/design1.webp",
            "technologies": ["Photoshop", "Illustrator"],
            "demoLink": "#",
            "codeLink": "#"
        },
        {
            "id": 4,
            "title": "Burger",
            "category": "design",
            "description": "Affiche professionnelle pour la vente des burgers",
            "image": "/projects/design2.webp",
            "technologies": ["Photoshop", "Illustrator"],
            "demoLink": "/projects/design2.png",
            "codeLink": "#"
        },
        {
            "id": 5,
            "title": "Anniversaire",
            "category": "design",
            "description": "Affiche professionnelle pour les anniversaires",
            "image": "/projects/design3.png",
            "technologies": ["Photoshop", "Illustrator"],
            "demoLink": "/projects/design3.webp",
            "codeLink": "#"
        },
        {
            "id": 6,
            "title": "Makup",
            "category": "design",
            "description": "Affiche professionnelle pour les salons de coiffure pour femmes",
            "image": "/projects/design4.png",
            "technologies": ["Photoshop", "Illustrator"],
            "demoLink": "/projects/design4.webp",
            "codeLink": "#"
        }
    ];

    // Filtrer les projets selon la catégorie active
    useEffect(() => {
        setLoading(true);

        const filtered = activeFilter === 'tous'
            ? projects
            : projects.filter(project => project.category === activeFilter);

        setDisplayedProjects(filtered);

        // Simuler un léger délai pour l'UI
        const timer = setTimeout(() => {
            setLoading(false);
        }, 100);

        return () => clearTimeout(timer);
    }, [activeFilter]);

    const renderButtons = (project) => {
        if (project.category === "design") {
            return (
                <div className='flex gap-3'>
                    <a
                        href={project.demoLink || '#'}
                        className='flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Download />
                        Télécharger
                    </a>
                </div>
            );
        }

        return (
            <div className='flex gap-3'>
                {project.demoLink && project.demoLink !== '#' && (
                    <a
                        href={project.demoLink}
                        className='flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Launch />
                        Démo
                    </a>
                )}
                {project.codeLink && project.codeLink !== '#' && (
                    <a
                        href={project.codeLink}
                        className='flex-1 flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <GitHub />
                        Code
                    </a>
                )}
                {(!project.demoLink || project.demoLink === '#') && (!project.codeLink || project.codeLink === '#') && (
                    <div className='text-center text-gray-500 py-3 w-full'>
                        Liens bientôt disponibles
                    </div>
                )}
            </div>
        );
    };

    return (
        <section className='py-12 md:py-20 px-6 md:px-12 bg-white' id="portfolio">
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-12 md:mb-16'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                        Mes <span className='text-orange-500'>Projets</span>
                    </h2>
                    <p className='text-lg text-gray-600 max-w-2xl mx-auto mb-8'>
                        Découvrez une sélection de mes réalisations les plus significatives
                    </p>

                    {/* Filtres */}
                    <div className='flex flex-wrap justify-center gap-3 mb-10'>
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveFilter(cat.id)}
                                disabled={loading}
                                className={`px-5 py-2 rounded-full font-medium transition-colors ${activeFilter === cat.id
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Affichage chargement */}
                {loading ? (
                    <div className='text-center py-12'>
                        <div className='inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600'></div>
                        <p className='mt-4 text-gray-600'>Chargement des projets...</p>
                    </div>
                ) : (
                    <>
                        {/* Grille de projets */}
                        {displayedProjects.length > 0 ? (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                                {displayedProjects.map(project => (
                                    <div
                                        key={project.id}
                                        className='group bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300'
                                    >
                                        {/* Image du projet */}
                                        <div className='relative h-56 overflow-hidden bg-gray-100'>
                                            {project.image ? (
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    className='object-cover group-hover:scale-105 transition-transform duration-500'
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                    }}
                                                />
                                            ) : (
                                                <div className='flex flex-col items-center justify-center h-full p-4'>
                                                    <Code className='w-12 h-12 text-gray-400 mb-3' />
                                                    <span className='text-gray-500 text-sm text-center'>
                                                        {project.category?.toUpperCase() || 'PROJET'}
                                                    </span>
                                                </div>
                                            )}

                                            <div className='absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                                            {/* Badge de catégorie */}
                                            <div className='absolute top-4 left-4'>
                                                <span className='px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full'>
                                                    {project.category?.toUpperCase() || 'PROJET'}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Contenu du projet */}
                                        <div className='p-6'>
                                            <h3 className='text-xl font-bold text-gray-900 mb-3 line-clamp-1'>
                                                {project.title}
                                            </h3>
                                            <p className='text-gray-600 mb-4 line-clamp-2'>
                                                {project.description || 'Pas de description disponible'}
                                            </p>

                                            {/* Technologies */}
                                            {project.technologies && project.technologies.length > 0 && (
                                                <div className='flex flex-wrap gap-2 mb-6'>
                                                    {project.technologies.slice(0, 3).map((tech, index) => (
                                                        <span
                                                            key={index}
                                                            className='px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full'
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                    {project.technologies.length > 3 && (
                                                        <span className='px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full'>
                                                            +{project.technologies.length - 3}
                                                        </span>
                                                    )}
                                                </div>
                                            )}

                                            {/* Boutons d'action */}
                                            {renderButtons(project)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className='text-center py-12 bg-gray-50 rounded-2xl border border-gray-200'>
                                <Code className='w-16 h-16 text-gray-400 mx-auto mb-4' />
                                <h3 className='text-xl font-semibold text-gray-700 mb-2'>Aucun projet trouvé</h3>
                                <p className='text-gray-500'>Essayez une autre catégorie</p>
                            </div>
                        )}


                    </>
                )}
            </div>
        </section>
    );
};

export default Portfolio;