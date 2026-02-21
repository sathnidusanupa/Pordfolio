import React from 'react';
import { Code, Server, Layout, Database } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const About = () => {
    const skills = [
        { name: 'Programming & Development', items: 'Java, Python, C++, JavaScript (ES6+)', icon: <Code size={32} className="text-gradient" /> },
        { name: 'Web Technologies', items: 'React, HTML5, CSS3, Tailwind CSS', icon: <Layout size={32} className="text-gradient" /> },
        { name: 'Tools & Platforms', items: 'Git, GitHub, VS Code', icon: <Server size={32} className="text-gradient" /> },
        { name: 'Soft Skills', items: 'Problem Solving, Teamwork, Fast Learner', icon: <Database size={32} className="text-gradient" /> }
    ];

    return (
        <section id="about" className="section" style={{ minHeight: '80vh', padding: '100px 2rem' }}>
            <h2 className="section-title">
                About <span className="text-gradient">Me</span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '4rem', alignItems: 'start' }}>

                {/* Profile Card */}
                <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                    <div style={{
                        width: '150px', height: '150px', borderRadius: '50%', margin: '0 auto 1.5rem',
                        overflow: 'hidden', border: '3px solid var(--primary-color)'
                    }}>
                        <img
                            src={profileImg}
                            alt="Profile"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Sanupa Sathnidu</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Computer Science</p>
                    <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>Download Resume</a>
                </div>

                {/* Content & Skills */}
                <div>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: '500' }}>Motivated Developer</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '3rem' }}>
                        Motivated Computer Science undergraduate with a solid foundation in software development, algorithms, and modern web technologies.
                        Passionate about applying logical problem-solving skills to build efficient, user-centric applications. Eager to contribute to a dynamic IT environment, gain real-world industry experience, and continuously adapt to new technologies.
                    </p>

                    <h4 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontWeight: '500' }}>Tech Stack & Skills</h4>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                        {skills.map((skill, index) => (
                            <div key={index} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center', transition: 'transform 0.3s ease' }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div style={{ background: 'rgba(79, 70, 229, 0.1)', padding: '1rem', borderRadius: '12px' }}>
                                    {skill.icon}
                                </div>
                                <div>
                                    <h5 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: '600' }}>{skill.name}</h5>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{skill.items}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
