import React from 'react';

const Profile = () => {
    return (
        <section className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 bg-gray-100
        pt-5'>
            {/* Image - Priorité sur mobile */}
            <div className='order-2 md:order-1 flex justify-center'>
                <img
                    src="./images/helly.png"
                    alt="Djuma Helly Vibe's - Développeur Full-Stack"
                    className='w-64 h-80 md:w-80 md:h-96 '
                />
            </div>

            {/* Contenu textuel */}
            <div className='order-1 md:order-2 flex flex-col items-center md:items-start gap-4 text-center md:text-left'>
                <h1 className='text-3xl md:text-5xl font-bold text-gray-900'>
                    Djuma Helly Vibe's
                </h1>

                <p className='text-xl md:text-2xl font-bold text-orange-500'>
                    Développeur Full-Stack
                </p>

                <p className='text-lg md:text-xl text-gray-700'>
                    Designer & Graphiste
                </p>

                {/* Call-to-action optionnel */}
                <button className='mt-4 bg-blue-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-700 transition-colors'>
                    Voir mes projets
                </button>
            </div>
        </section>
    );
};

export default Profile;