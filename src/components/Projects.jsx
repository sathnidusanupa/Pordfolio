import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Estate Agent Application',
            category: 'Web Application',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            description: 'A dynamic, responsive user interface built with React. Features modern web technologies and clean UI design principles.',
            tech: ['React', 'JavaScript', 'HTML/CSS', 'Git'],
            links: {
                github: '#',
                live: '#'
            }
        },
        {
            title: 'FarmSmart',
            category: 'Group Project (SDGP)',
            image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            description: 'Collaborative agricultural application built applying strong Object-Oriented Programming (OOP) principles. Robust, logical, and scalable.',
            tech: ['Java/Python', 'OOP', 'Teamwork', 'Documentation'],
            links: {
                github: '#',
                live: '#'
            }
        },
        {
            title: 'Lanka Quest',
            category: 'Mobile Application',
            image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            description: 'A location-based mobile app featuring real-time directions to quest locations utilizing the Google Directions API and MapView.',
            tech: ['React Native', 'Google Maps API', 'Geolocation'],
            links: {
                github: '#',
                live: '#'
            }
        }
    ];

    return (
        <section id="projects" className="section" style={{ minHeight: '80vh', padding: '100px 2rem' }}>
            <h2 className="section-title">
                Featured <span className="text-gradient">Projects</span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
                {projects.map((project, index) => (
                    <div key={index} className="glass-panel animate-fade-up" style={{
                        overflow: 'hidden', display: 'flex', flexDirection: 'column', animationDelay: `${index * 0.2}s`
                    }}>
                        {/* Project Image */}
                        <div style={{ position: 'relative', height: '220px', width: '100%', overflow: 'hidden' }}>
                            <img
                                src={project.image}
                                alt={project.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                            <div style={{
                                position: 'absolute', top: '1rem', right: '1rem', background: 'var(--glass-bg)',
                                backdropFilter: 'blur(10px)', padding: '0.4rem 1rem', borderRadius: '20px',
                                fontSize: '0.8rem', fontWeight: '500', color: 'var(--text-primary)'
                            }}>
                                {project.category}
                            </div>
                        </div>

                        {/* Project Content */}
                        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '600' }}>{project.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.7', flexGrow: 1 }}>
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                                {project.tech.map((tech, i) => (
                                    <span key={i} style={{
                                        background: 'rgba(255,255,255,0.05)', color: 'var(--secondary-color)',
                                        padding: '0.3rem 0.8rem', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '500'
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div style={{ display: 'flex', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
                                <a href={project.links.github} target="_blank" rel="noreferrer" style={{
                                    display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', transition: 'color 0.3s ease'
                                }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                                    <Github size={20} /> Code
                                </a>
                                <a href={project.links.live} target="_blank" rel="noreferrer" style={{
                                    display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary-color)', transition: 'color ' + '0.3s ease'
                                }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary-color)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--secondary-color)'}>
                                    <ExternalLink size={20} /> Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
