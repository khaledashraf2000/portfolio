const Navbar: React.FC = () => {
    return (
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto">
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                <ul className="navbar flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-xl md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:px-4 md:py-2 backdrop-blur-lg uppercase">
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Journey</a>
                    </li>
                    <li>
                        <a href="#">Resume</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>

    );
};

export default Navbar;