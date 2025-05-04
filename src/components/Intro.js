import React from 'react';

const About = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative z-10">
            <div className="max-w-4xl w-full text-left ml-4 md:ml-12">
                {/* Small muted intro */}
                <p className="text-gray-400 uppercase tracking-widest font-[Firas-Bold] text-[18px] md:text-[20px] mb-4">
                    Mark Nisnea
                </p>

                {/* Big Main Heading */}
                <h2 className="text-white text-4xl md:text-6xl font-[Firas-Medium] mb-6 leading-tight">
                    <span className='text-red-400'>Building</span> my career, one <span className='text-red-400'>Project</span> at a time.
                </h2>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mt-8">
                    <button
                        onClick={() => {
                            const target = document.getElementById('project');
                            target?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="border border-gray-600 px-6 py-2 sm:py-3 text-white font-[Firas-Bold] tracking-widest hover:bg-gray-800 transition"
                    >
                        PROJECTS
                    </button>

                    <button
                        onClick={() => {
                            const target = document.getElementById('contact');
                            target?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="border border-gray-600 px-6 py-2 sm:py-3 text-white font-[Firas-Bold] tracking-widest hover:bg-gray-800 transition"
                    >
                        CONTACT
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
