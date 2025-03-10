import React, { useEffect, useState } from 'react';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        document.body.classList.toggle('overflow-hidden', menuOpen);
    }, [menuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects', 'contact'];
            let currentSection = 'home';
    
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const sectionTop = element.offsetTop;
                    const sectionHeight = element.offsetHeight;
    
                    if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
                        currentSection = section;
                    }
                }
            });
    
            setActiveSection(currentSection);
        };
    
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for navbar height
                behavior: 'smooth'
            });
            setMenuOpen(false);
        }
    };

    return (
        <>
            <nav className='fixed top-0 w-full z-50 bg-[rgba(10,10,10,0.85)] backdrop-blur-md border-b border-white/10 shadow-md'>
                <div className='max-w-7xl mx-auto px-6 md:px-10 lg:px-16'>
                    <div className='flex justify-between items-center h-20'>
                        <a href='#home' className='font-mono text-2xl md:text-3xl font-bold text-white'>
                            Ishan<span className='text-blue-500'> Thakur</span>
                        </a>

                        <div className='hidden lg:flex items-center space-x-8 text-lg'>
                            {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
                                <a 
                                    key={index} 
                                    href={`#${item.toLowerCase()}`} 
                                    className={`text-gray-300 hover:text-white transition-colors duration-300 ${activeSection === item.toLowerCase() ? 'text-blue-400' : ''}`}
                                    onClick={(e) => handleSmoothScroll(e, item.toLowerCase())}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>

                        <button 
                            className='w-10 h-10 flex items-center justify-center lg:hidden text-white relative z-50' 
                            onClick={() => setMenuOpen(prev => !prev)}
                            aria-expanded={menuOpen}
                            aria-label='Toggle Menu'
                        >
                            <span className='text-3xl'>{menuOpen ? '✖' : '☰'}</span>
                        </button>
                    </div>
                </div>
            </nav>

            <div className={`fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-8 text-white text-2xl transition-all duration-300 lg:hidden ${menuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
                    <a 
                        key={index} 
                        href={`#${item.toLowerCase()}`} 
                        className={`hover:text-blue-400 transition-colors duration-300 text-3xl md:text-4xl ${activeSection === item.toLowerCase() ? 'text-blue-400' : ''}`}
                        onClick={(e) => handleSmoothScroll(e, item.toLowerCase())}
                    >
                        {item}
                    </a>
                ))}
            </div>
        </>
    );
};
