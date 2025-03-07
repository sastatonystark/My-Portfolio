import React, { useEffect } from 'react';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
    }, [menuOpen]);

    return (
        <nav className='fixed top-0 w-full z-50 bg-[rgba(10,10,10,0.8)] backdrop-blur-md border-b border-white/10 shadow-lg'>
            <div className='max-w-6xl mx-auto px-6'>
                <div className='flex justify-between items-center h-16'>

                    {/* Logo */}
                    <a href='#home' className='font-mono text-xl font-bold text-white'>
                        Ishan <span className='text-blue-500'>Thakur</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className='hidden lg:flex items-center space-x-8'>
                        {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
                            <a 
                                key={index} 
                                href={`#${item.toLowerCase()}`} 
                                className='text-gray-300 hover:text-white transition-colors duration-300'
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className='w-8 h-8 flex items-center justify-center relative z-50 lg:hidden text-white' 
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-expanded={menuOpen}
                        aria-label='Toggle Menu'
                    >
                        {menuOpen ? '✖' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div 
                className={`fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-8 text-white text-xl transition-all duration-300 ${
                    menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                } lg:hidden`}
            >
                {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
                    <a 
                        key={index} 
                        href={`#${item.toLowerCase()}`} 
                        className='hover:text-blue-400 transition-colors duration-300 text-2xl'
                        onClick={() => setMenuOpen(false)}
                    >
                        {item}
                    </a>
                ))}
            </div>
        </nav>
    );
};
