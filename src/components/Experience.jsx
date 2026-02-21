import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            type: 'work',
            year: '2026',
            title: 'Individual Web Project',
            subtitle: 'Estate Agent Application',
            description: 'Designed and built a dynamic, responsive user interface utilizing modern web technologies, specifically React and JavaScript. Implemented effective version control and source code management using Git and GitHub. Focused on clean UI design principles and code architecture.',
            icon: <Briefcase />
        },
        {
            type: 'work',
            year: '2025',
            title: 'Software Development Group Project (SDGP)',
            subtitle: 'FarmSmart Application',
            description: 'Collaborated in a fast-paced team environment to design and develop the "FarmSmart" application. Applied strong Object-Oriented Programming (OOP) principles to build robust, logical, and scalable features. Contributed to comprehensive technical documentation.',
            icon: <Briefcase />
        },
        {
            type: 'edu',
            year: '2024 - Present',
            title: "Bachelor's Degree",
            subtitle: 'BSc (Hons) Computer Science, University of Westminster (UK)',
            description: 'Undergraduate studies focused on modern software engineering practices, algorithms, and application development.',
            icon: <GraduationCap />
        },
        {
            type: 'edu',
            year: '2023 - 2024',
            title: 'Foundation Programme',
            subtitle: 'Informatic Institute of Technology (IIT)',
            description: 'Preparatory programme emphasizing programming fundamentals, mathematics, and introductory computer science concepts.',
            icon: <GraduationCap />
        }
    ];

    return (
        <section id="experience" className="section" style={{ minHeight: '80vh', padding: '100px 2rem' }}>
            <h2 className="section-title">
                Experience & <span className="text-gradient">Education</span>
            </h2>

            <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                {/* Vertical Line */}
                <div style={{
                    position: 'absolute', top: 0, bottom: 0, left: '24px', width: '2px',
                    background: 'var(--border-color)', zIndex: 0
                }}></div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {experiences.map((exp, index) => (
                        <div key={index} className="animate-fade-up" style={{
                            display: 'flex', gap: '2rem', position: 'relative', zIndex: 1, animationDelay: `${index * 0.1}s`
                        }}>
                            {/* Timeline Icon */}
                            <div style={{
                                width: '50px', height: '50px', borderRadius: '50%', flexShrink: 0,
                                background: 'var(--bg-color)', border: `2px solid var(--${exp.type === 'work' ? 'primary' : 'secondary'}-color)`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center', color: `var(--${exp.type === 'work' ? 'primary' : 'secondary'}-color)`
                            }}>
                                {exp.icon}
                            </div>

                            {/* Card */}
                            <div className="glass-panel" style={{ padding: '2rem', flexGrow: 1, transition: 'transform 0.3s ease' }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                    <Calendar size={16} /> <span>{exp.year}</span>
                                </div>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.2rem', color: 'var(--text-primary)' }}>{exp.title}</h3>
                                <h4 style={{ fontSize: '1.1rem', color: `var(--${exp.type === 'work' ? 'primary' : 'secondary'}-color)`, marginBottom: '1rem', fontWeight: '500' }}>
                                    {exp.subtitle}
                                </h4>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
