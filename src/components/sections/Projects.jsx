import React from 'react'
import { RevealonScroll } from '../RevealonScroll'

export const Projects = () => {
  return (
    <section id='projects' className='min-h-screen py-16 px-4 bg-black'>
        <RevealonScroll>
            <div className='max-w-5xl mx-auto'>
                <h2 className='text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center'>
                    Featured Projects
                </h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                    {[1, 2, 3, 4].map((project, index) => (
                        <div key={index} className='p-6 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 border border-white/10 hover:border-blue-500/30 hover:shadow-lg transition-all transform hover:-translate-y-1'>
                            <h3 className='text-xl sm:text-2xl font-bold mb-2 text-white'>
                                E-Commerce Project
                            </h3>
                            <p className='text-gray-400 mb-4'>
                                A simple description of the project goes here.
                            </p>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {["React", "Node.js", "Tailwind", "Express", "MongoDB"].map((tech, key) => (
                                    <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 cursor-pointer rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className='flex justify-between items-center'>
                                <a 
                                    href="#"
                                    className='text-blue-400 hover:text-blue-300 transition-colors my-4 text-lg font-medium transform hover:scale-105'
                                    aria-label={`View details of project ${index + 1}`}
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>   
        </RevealonScroll>
    </section>
  )
}
