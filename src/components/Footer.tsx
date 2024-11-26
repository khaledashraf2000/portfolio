export default function Footer() {
    return (
        <footer className="bg-slate-900 h-96 mt-36">
            <div className="container mx-auto pt-4 text-white h-full">
                <div className="flex justify-center items-center h-[90%] gap-[10rem]">
                    <h2 className="hover:underline"><a href="mailto:khaledaelmaleh@gmail.com">khaledaelmaleh@gmail.com</a></h2>
                    <h2 className="hover:underline"><a href="/Khaled Ashraf resume new.pdf" target="_blank" rel="noopener noreferrer">Resume</a></h2>
                </div>
                <p className="w-full text-center text-base text-white/80">&copy; {new Date().getFullYear()} Khaled Ashraf. All rights reserved.</p>
            </div>
        </footer>
    );
};
