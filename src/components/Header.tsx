import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <div className="content">
                <Link href="/" className="logo">
                    Portfolio
                </Link>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/experience">Experience</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/skills">Skills</Link>
                </nav>
            </div>
        </header>
    );
} 