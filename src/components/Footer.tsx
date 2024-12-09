export default function Footer() {
    return (
        <footer className="bg-slate-900 h-96 mt-36 text-white">
            <div className="flex flex-col justify-between h-full pt-16 pb-8 px-16">
                <div className="flex justify-between items-top gap-4">
                    <h4 className="logo">Khaled Ashraf</h4>
                    <div className="flex gap-16">
                        <div className="flex flex-col gap-4">
                            <h4 className="uppercase text-white/80 text-sm">Socials</h4>
                            <p><a href="https://www.instagram.com/designedbykhaled" target="_blank" rel="noopener noreferrer">Instagram</a></p>
                            <p><a href="https://www.linkedin.com/in/khaledaelmaleh/" target="_blank" rel="noopener noreferrer">Linkedin</a></p>
                            <p><a href="https://www.behance.net/khaledaelmaleh/" target="_blank" rel="noopener noreferrer">Behance</a></p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="uppercase text-white/80  text-sm">Contact</h4>
                            <p><a href="mailto:khaledaelmaleh@gmail.com">Email</a></p>
                            <p><a href="/Khaled Ashraf resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></p>
                        </div>
                    </div>
                </div>
                <p className="w-full text-center text-base text-white/80">&copy; {new Date().getFullYear()} Khaled Ashraf. All rights reserved.</p>
            </div>
        </footer>
    );
};
