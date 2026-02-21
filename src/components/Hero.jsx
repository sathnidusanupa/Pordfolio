import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', width: '100%' }}>

                {/* Text Content */}
                <div className="animate-fade-up">
                    <p style={{ color: 'var(--secondary-color)', fontWeight: '600', marginBottom: '1rem', letterSpacing: '0.1em' }}>
                        WELCOME TO MY WORLD
                    </p>
                    <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: '1.1', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                        Hi, I'm <br />
                        <span className="text-gradient">Sanupa Sathnidu</span>
                    </h1>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '2rem', fontWeight: '400' }}>
                        Computer Science Undergraduate
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '500px', lineHeight: '1.8' }}>
                        Passionate about applying logical problem-solving skills to build efficient, user-centric applications and continuous learning.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="#projects" className="btn btn-primary">
                            View My Work <ArrowRight size={20} />
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Image/Visual Content */}
                <div className="animate-fade-up" style={{ animationDelay: '0.2s', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ position: 'relative', width: '350px', height: '450px' }}>
                        {/* Replace src with the user's uploaded photo path */}
                        <div style={{
                            width: '100%', height: '100%', borderRadius: '30px', overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.4)', position: 'relative', zIndex: 1,
                            border: '1px solid var(--border-color)', background: 'var(--surface-color)'
                        }}>
                            <img
                                src={profileImg}
                                alt="Sanupa Sathnidu"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        {/* Decoration */}
                        <div style={{
                            position: 'absolute', inset: '-20px', border: '2px solid var(--primary-color)',
                            borderRadius: '40px', zIndex: 0, opacity: 0.5, transform: 'translate(20px, 20px)'
                        }}></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
