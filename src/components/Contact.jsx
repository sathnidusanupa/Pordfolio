import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ minHeight: '80vh', padding: '100px 2rem' }}>
            <h2 className="section-title">
                Get In <span className="text-gradient">Touch</span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                {/* Contact Info */}
                <div className="animate-fade-up">
                    <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: '500' }}>Let's Connect</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                        I am always open to discussing new projects, creative ideas or opportunities to be part of your visions. Start a conversation today.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                            <div style={{
                                background: 'rgba(79, 70, 229, 0.1)', color: 'var(--primary-color)',
                                padding: '1rem', borderRadius: '50%', flexShrink: 0
                            }}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: '500' }}>Location</h4>
                                <p style={{ color: 'var(--text-secondary)' }}>No 49, Matara Road, Akuressa</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                            <div style={{
                                background: 'rgba(6, 182, 212, 0.1)', color: 'var(--secondary-color)',
                                padding: '1rem', borderRadius: '50%', flexShrink: 0
                            }}>
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: '500' }}>Email</h4>
                                <a href="mailto:sathnidusaupa@gmail.com" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}
                                    onMouseOver={(e) => e.target.style.color = 'var(--secondary-color)'}
                                    onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
                                    sathnidusaupa@gmail.com
                                </a>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                            <div style={{
                                background: 'rgba(79, 70, 229, 0.1)', color: 'var(--primary-color)',
                                padding: '1rem', borderRadius: '50%', flexShrink: 0
                            }}>
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: '500' }}>Phone</h4>
                                <a href="tel:+94740367451" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}
                                    onMouseOver={(e) => e.target.style.color = 'var(--primary-color)'}
                                    onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
                                    +94 740367451
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="glass-panel animate-fade-up" style={{ padding: '3rem', animationDelay: '0.2s' }}>
                    <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Name</label>
                            <input type="text" placeholder="John Doe" style={{
                                width: '100%', padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.03)',
                                border: '1px solid var(--border-color)', color: 'white', fontFamily: 'var(--font-body)', outline: 'none'
                            }} onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'} onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'} />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email</label>
                            <input type="email" placeholder="john@example.com" style={{
                                width: '100%', padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.03)',
                                border: '1px solid var(--border-color)', color: 'white', fontFamily: 'var(--font-body)', outline: 'none'
                            }} onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'} onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'} />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Message</label>
                            <textarea placeholder="Your message here..." rows="5" style={{
                                width: '100%', padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.03)',
                                border: '1px solid var(--border-color)', color: 'white', fontFamily: 'var(--font-body)', outline: 'none', resize: 'vertical'
                            }} onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'} onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '1rem' }}>
                            Send Message <Send size={20} />
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;
