import React, { useState } from 'react';
import { RevealonScroll } from '../RevealonScroll';
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID, 
            e.target, 
            import.meta.env.VITE_PUBLIC_KEY
        )
        .then(() => {
            alert("✅ Message Sent Successfully!");
            setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
            console.error("❌ EmailJS Error:", error);
            alert(`Something went wrong: ${error.text}`);
        });
    };

    return (
        <section id='contact' className='h-auto flex flex-col items-center justify-center py-16 lg:py-32 px-6'>
            <RevealonScroll>
                <div className='w-full max-w-lg md:max-w-2xl bg-black/50 p-8 rounded-xl'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>
                        Get In Touch
                    </h2>
                    <form className='space-y-6' onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
                            placeholder='Your Name'
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
                            placeholder='Email'
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        <textarea
                            name="message"
                            required
                            value={formData.message}
                            rows={10}
                            className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
                            placeholder='Your Message...'
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                        <button
                            type="submit"
                            className='w-full bg-blue-700 text-white py-3 px-6 rounded font-medium transition hover:shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealonScroll>
        </section>
    );
};
