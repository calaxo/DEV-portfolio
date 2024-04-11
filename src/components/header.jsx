
import React from 'react';

const Header = () => {
    return (
        <header className="px-6 py-4 text-white bg-gray-800">
            <a href='/'><h1 className="text-2xl font-bold">My Portfolio</h1></a>
            <nav className="mt-4">
                <ul className="flex space-x-4">
                    <li>
                        <a href="/" className="hover:text-gray-300">Home</a>
                        
                    </li>
                    <li>
                        <a href="/dashboard" className="hover:text-gray-300">dashboard</a>
                    </li>
                    <li>
                        <a href="/dashboard/minidash" className="hover:text-gray-300">mini</a>
                    </li>
                    <li>
                        <a href="/a" className="hover:text-gray-300">a</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;