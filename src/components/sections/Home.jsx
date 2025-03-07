import React from 'react';
import { RevealonScroll } from '../RevealonScroll';

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative px-6 py-12 md:px-12">
            <RevealonScroll>
                <div className="text-center z-10 max-w-4xl mx-auto">
                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                        Hi, I'm Ishan Thakur
                    </h1>

                    {/* Description */}
                    <p className="text-gray-400 text-lg sm:text-xl md:text-2xl mb-8 max-w-xl mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur veniam atque illum, blanditiis at animi ex, labore quod quos voluptatum dolor? Nisi, perferendis vel soluta aliquam modi dolores repellendus eaque.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <a 
                            href="#projects" 
                            aria-label="View my projects" 
                            className="bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition transform hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            View Projects
                        </a>

                        <a 
                            href="#contact" 
                            aria-label="Contact me" 
                            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </RevealonScroll>
        </section>
    );
};
