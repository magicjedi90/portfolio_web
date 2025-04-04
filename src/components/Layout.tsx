'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import QBem from 'qbem';
import styles from './Layout.module.css';

const bem = new QBem('layout');

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <div className={styles[bem.block()]}>
            <header className={styles[bem.elem('header')]}>
                <div className={styles[bem.elem('header-content')]}>
                    <Link href="/" className={styles[bem.elem('logo')]}>
                        Jesse McIntosh
                    </Link>
                    <nav className={styles[bem.elem('nav')]}>
                        <Link 
                            href="/" 
                            className={styles[bem.elem('nav-link', isActive('/') ? ['active'] : [])]}
                        >
                            Home
                        </Link>
                        <Link 
                            href="/projects" 
                            className={styles[bem.elem('nav-link', isActive('/projects') ? ['active'] : [])]}
                        >
                            Projects
                        </Link>
                        <Link 
                            href="/experience" 
                            className={styles[bem.elem('nav-link', isActive('/experience') ? ['active'] : [])]}
                        >
                            Experience
                        </Link>
                    </nav>
                </div>
            </header>

            <main className={styles[bem.elem('main')]}>
                {children}
            </main>

            <footer className={styles[bem.elem('footer')]}>
                <div className={styles[bem.elem('footer-content')]}>
                    <div className={styles[bem.elem('footer-section')]}>
                        <h3 className={styles[bem.elem('footer-title')]}>Connect</h3>
                        <div className={styles[bem.elem('social-links')]}>
                            <a 
                                href="https://linkedin.com/in/jessemcintosh1" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles[bem.elem('social-link')]}
                            >
                                LinkedIn
                            </a>
                            <a 
                                href="https://github.com/jessemcintosh" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles[bem.elem('social-link')]}
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                    <div className={styles[bem.elem('footer-section')]}>
                        <h3 className={styles[bem.elem('footer-title')]}>Contact</h3>
                        <a 
                            href="mailto:your.jessemsmcintosh@gmail.com" 
                            className={styles[bem.elem('footer-link')]}
                        >
                            Email Me
                        </a>
                    </div>
                    <div className={styles[bem.elem('footer-section')]}>
                        <p className={styles[bem.elem('copyright')]}>
                            © {new Date().getFullYear()} Jesse McIntosh. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
} 