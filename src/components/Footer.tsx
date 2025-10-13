import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6 mt-auto">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between">
                <p className="text-sm">© {new Date().getFullYear()} Javad • Developer</p>

                <div className="flex space-x-4 mt-2 sm:mt-0">
                    <a href="https://github.com/JavadShamekhi" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        <FaGithub size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/javadshamekhi/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        <FaLinkedin size={18} />
                    </a>
                </div>
            </div>
        </footer>
    )
}