import React, { useEffect, useState } from 'react';

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "<Hye... />";
    const typingSpeed = 100; // Adjust for speed of typing effect

    useEffect(() => {
        let index = 0;
        let animationFrame;

        const typeEffect = () => {
            setText(fullText.substring(0, index + 1));
            index++;

            if (index <= fullText.length) {
                animationFrame = setTimeout(typeEffect, typingSpeed);
            } else {
                setTimeout(onComplete, 1000); // Wait before completing
            }
        };

        typeEffect();

        return () => clearTimeout(animationFrame);
    }, [onComplete]);

    return (
        <div className='fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center'>
            {/* Typing Effect */}
            <div className='mb-4 text-4xl font-mono font-bold tracking-wide'>
                {text}<span className='animate-blink ml-1'>|</span>
            </div>

            {/* Loading Bar */}
            <div className='w-[200px] h-[4px] bg-gray-800 rounded relative overflow-hidden'>
                <div className='w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar'></div>
            </div>
        </div>
    );
};
