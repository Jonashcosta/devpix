'use client';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full bg-blue-900 text-white px-8 py-3 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white text-2xl font-bold tracking-wide">
                    <Link href="/">DEVPIX</Link>
                </div>

                {/* Links de navegação */}
                <div className="flex space-x-8 text-lg">
                    <Link href="/">
                        <span className="text-white hover:text-gray-300 transition duration-200">Home</span>
                    </Link>
                    <Link href="/projetos">
                        <span className="text-white hover:text-gray-300 transition duration-200">Projetos</span>
                    </Link>
                    <Link href="/blog">
                        <span className="text-white hover:text-gray-300 transition duration-200">Blog</span>
                    </Link>
                </div>

                {/* Botão de contato */}
                <Link href="/contato">
                    <button className="bg-yellow-400 text-black font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-yellow-300 transition duration-200 flex items-center">
                        Solicitar contato <span className="ml-2">➜</span>
                    </button>
                </Link>
            </div>
        </nav>
    );
}
