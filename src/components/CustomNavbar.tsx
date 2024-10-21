import { useState } from 'react';
import menuItems from '../data/MenuItems';
export default function CustomNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-black text-white z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="text-lg font-bold tracking-widest"><a href="#main-data">ERICK AGUILAR</a></div>
                <div className="hidden md:flex space-x-4">
                    {menuItems.map((item) => (
                        <a
                            key={item.ref}
                            href={`#${item.ref}`}
                            className="hover:text-blue-400"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden focus:outline-none"
                    aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black`}>
                {menuItems.map((item) => (
                    <a
                        key={item.ref}
                        href={`#${item.ref}`}
                        className="block px-4 py-2 hover:bg-blue-500"
                        onClick={() => setIsMenuOpen(false)} 
                    >
                        {item.name}
                    </a>
                ))}
            </div>
        </nav>
    );
}
