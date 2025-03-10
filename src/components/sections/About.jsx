import React from 'react'
import { RevealonScroll } from '../RevealonScroll';

export const About = () => {
    const frontendSkills = ["React", "HTML", "CSS", "TailwindCSS", "JavaScript"];
    const backendSkills = ["Node.js", "MongoDB"];

    return (
        <section id='about' className='min-h-screen flex items-center justify-center py-20 bg-black text-white'>
            <RevealonScroll>
                <div className='max-w-4xl mx-auto px-6'>
                    <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>
                        About Me
                    </h2>

                    <div className='rounded-xl p-8 border border-gray-700 hover:border-blue-500/30 transition-all bg-gray-900 shadow-lg'>
                        <p className='text-gray-300 leading-relaxed mb-6'>
                            A passionate web developer eager to create beautiful and functional web applications. 
                            Skilled in both frontend and backend development, with experience in modern technologies.
                        </p>

                        {/* Skills Section */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className='rounded-xl p-6 bg-gray-800 hover:-translate-y-1 transition-all'>
                                <h3 className='text-xl font-semibold mb-4 text-blue-400'>Frontend</h3>
                                <div className='flex flex-wrap gap-2'>
                                    {frontendSkills.map((tech, key) => (
                                        <span key={key} className='bg-blue-500/10 text-blue-400 py-1 px-3 cursor-pointer rounded-full text-sm hover:bg-blue-500/20 transition'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className='rounded-xl p-6 bg-gray-800 hover:-translate-y-1 transition-all'>
                                <h3 className='text-xl font-semibold mb-4 text-blue-400'>Backend</h3>
                                <div className='flex flex-wrap gap-2'>
                                    {backendSkills.map((tech, key) => (
                                        <span key={key} className='bg-blue-500/10 text-blue-400 py-1 px-3 cursor-pointer rounded-full text-sm hover:bg-blue-500/20 transition'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education & Work Experience */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                        <div className='p-6 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all bg-gray-900 shadow-lg'>
                            <h3 className='text-xl font-semibold mb-4 text-blue-400'>Education</h3>
                            <ul className='list-disc list-inside text-gray-300 space-y-2'>
                                <li><strong>B.A in History</strong> - IGNOU (2022-2025)</li>
                                <li><strong>DCA</strong> - Evergreen Institute Solan</li>
                            </ul>
                        </div>

                        <div className='p-6 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all bg-gray-900 shadow-lg'>
                            <h3 className='text-xl font-semibold mb-4 text-blue-400'>Work Experience</h3>
                            <div className='text-gray-300'>
                                <h4 className='font-semibold'>Fresher</h4>
                                <p>Currently seeking opportunities in web development.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealonScroll>
        </section>
    );
};
