export function Footer() {
    return (
        <footer className="py-8 px-4 md:px-12 bg-black text-zinc-500 text-sm mt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <p>© {new Date().getFullYear()} Anshuman. All rights reserved.</p>
                </div>
                <div className="flex gap-6">
                    <a href="https://github.com/anshumandas04" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/anshumandaspecozen" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}
