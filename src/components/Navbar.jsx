import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
            padding: '1.5rem 2rem', transition: 'all 0.3s ease',
            background: isScrolled ? 'rgba(13, 14, 21, 0.8)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(10px)' : 'none',
            borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#home" style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>
                    Sanupa<span className="text-gradient">.</span>
                </a>

                {/* Desktop Nav */}
                <div style={{ display: 'none' }} className="nav-desktop">
                    <ul style={{ display: 'flex', gap: '2rem' }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease', fontWeight: '500' }}
                                    onMouseOver={(e) => e.target.style.color = 'var(--text-primary)'}
                                    onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile menu toggle button */}
                <button className="nav-mobile-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}>
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav Menu */}
            {isMobileMenuOpen && (
                <div style={{
                    position: 'absolute', top: '100%', left: 0, right: 0,
                    background: 'var(--bg-color)', borderBottom: '1px solid var(--border-color)',
                    padding: '1rem 2rem', display: 'flex', flexDirection: 'column', gap: '1rem',
                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
                }}>
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)}
                            style={{ display: 'block', padding: '0.5rem 0', color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                            {link.name}
                        </a>
                    ))}
                </div>
            )}

            <style>{`
        @media (min-width: 768px) {
          .nav-desktop { display: block !important; }
          .nav-mobile-btn { display: none !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
