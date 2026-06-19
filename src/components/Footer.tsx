import {
	FaGithub, FaLinkedin, FaInstagram,
	FaEnvelope, FaPhoneAlt, FaWhatsapp, FaTelegramPlane
} from "react-icons/fa";

export default function Footer() {
	return (
			<footer
					className="relative bg-gray-300/50 dark:bg-blue-950/30 text-gray-600 dark:text-gray-400 py-20 mt-auto overflow-hidden transition-colors duration-300">

				{/* Background Image with Low Opacity */}
				<div
						className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none grayscale"
						style={{
							backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")', // Professional subtle pattern
							backgroundSize: '200px',
						}}
				></div>

				<div className="relative z-10 max-w-6xl mx-auto px-6">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

						{/* 1. Branding & About */}
						<div className="space-y-4 text-center md:text-left">
							<div className="flex items-center space-x-3 mb-4">
								<img
										src="/images/myphoto-copy.jpg"
										alt="Javad Shamekhi"
										className="w-12 h-12 rounded-full border-2 border-gray-700 object-cover"
								/>
								<h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tighter">
									JAVAD SHAMEKHI
								</h2>
							</div>
							<p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
								Frontend Developer specializing in building exceptional digital experiences.
								Focused on clean code and user-centric design.
							</p>
						</div>

						{/* 2. Direct Contact (Phone, Email, Chat) */}
						<div className="flex flex-col items-center md:items-start space-y-4">
							<h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900 dark:text-gray-200">Contact</h3>
							<div className="space-y-3 w-full">
								<a href="mailto:javad.shamekhi.80@gmail.com"
								   className="flex items-center justify-center md:justify-start gap-3 hover:text-blue-500 transition-colors">
									<FaEnvelope className="text-lg"/>
									<span className="text-sm">javad.shamekhi.80@gmail.com</span>
								</a>
								<a href="tel:+989117851260"
								   className="flex items-center justify-center md:justify-start gap-3 hover:text-gray-900 dark:hover:text-white transition-colors">
									<FaPhoneAlt className="text-lg"/>
									<span className="text-sm">+98 911 785 1260</span>
								</a>
								<a href="https://wa.me/+989117851260" target="_blank" rel="noreferrer"
								   className="flex items-center justify-center md:justify-start gap-2 hover:text-green-500 transition-colors" title="WhatsApp">
									<FaWhatsapp size={22}/>
									<span className="text-sm">+98 911 785 1260</span>
								</a>
								<a href="https://t.me/javadshamekhi" target="_blank" rel="noreferrer"
								   className="flex items-center justify-center md:justify-start gap-2 hover:text-blue-400 transition-colors" title="Telegram">
									<FaTelegramPlane size={22}/>
									<span className="text-sm">@javadshamekhi</span>
								</a>
							</div>
						</div>

						{/* 3. Social Presence */}
						<div className="flex flex-col items-center md:items-end space-y-4">
							<h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900 dark:text-gray-200">Socials</h3>
							<div className="flex gap-2">
								<a href="https://github.com/JavadShamekhi" target="_blank" rel="noreferrer"
								   className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
									<FaGithub size={20}/>
								</a>
								<a href="https://www.linkedin.com/in/javadshamekhi/" target="_blank" rel="noreferrer"
								   className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-[#0077b5] hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
									<FaLinkedin size={20}/>
								</a>
								<a href="https://instagram.com/javadshamekhi" target="_blank" rel="noreferrer"
								   className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-[#e1306c] hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
									<FaInstagram size={20}/>
								</a>
							</div>
						</div>
					</div>

					{/* Bottom Bar */}
					<div
							className="mt-20 pt-8 border-t border-gray-500 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-medium uppercase tracking-widest text-gray-600 dark:text-gray-500">
						<p>© {new Date().getFullYear()} . Designed and Developed by Javad Shamekhi</p>
						<div className="flex gap-6">
							<span
									className="hover:text-gray-900 dark:hover:text-white cursor-default transition-colors">Based in Iran</span>
							<span className="hover:text-gray-900 dark:hover:text-white cursor-default transition-colors">Available for Work</span>
						</div>
					</div>
				</div>
			</footer>
	);
}