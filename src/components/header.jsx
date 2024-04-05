
const Header = () => {
    return (
        <header className="px-6 py-4 text-white bg-gray-800">
            <h1 className="text-2xl font-bold">My Portfolio</h1>
            <nav className="mt-4">
                <ul className="flex space-x-4">
                    <li>
                        <a href="/dashboard" className="hover:text-gray-300">Home</a>
                        
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-300">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-300">Projects</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-300">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;