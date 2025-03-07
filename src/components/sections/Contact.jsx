import React, { useState } from 'react'
import { RevealonScroll } from '../RevealonScroll'
import emailjs from 'emailjs-com'

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.VITE_SERVICE_ID, import.meta.VITE_TEMPLATE_ID, e.target, import.meta.VITE_PUBLIC_KEY).then((result) => {
            alert("Message Sent!");
            setFormData({ name: "", email: "", message: "" })
        }).catch(() => alert("Something Went Wrong. Please Try Again."));
    }

    return (
        <section id='contact' className='min-h-screen flex items-center justify-center py-16 px-4'>
            <RevealonScroll>
                <div className='w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl'>
                    <h2 className='text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center'>
                        Get In Touch
                    </h2>
                    <form className='space-y-6' onSubmit={handleSubmit}>
                        {/* Name Field */}
                        <div className='relative'>
                            <input
                                type="text"
                                id='name'
                                name="name"
                                required
                                value={formData.name}
                                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
                                placeholder='Name...'
                                aria-label="Your name"
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        {/* Email Field */}
                        <div className='relative'>
                            <input
                                type="email"
                                id='email'
                                name="email"
                                required
                                value={formData.email}
                                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
                                placeholder='example@gmail.com'
                                aria-label="Your email address"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        {/* Message Field */}
                        <div className='relative'>
                            <textarea
                                id='message'
                                name="message"
                                required
                                value={formData.message}
                                rows={10}
                                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
                                placeholder='Your Message...'
                                aria-label="Your message"
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className='w-full bg-blue-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] focus:outline-none focus:ring-2 focus:ring-blue-500'
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealonScroll>
        </section>
    );
}
