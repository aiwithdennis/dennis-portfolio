export default function Footer() {
    const year = new Date().getFullYear()
  
    return (
      <footer className="section-pad py-8 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-heading font-extrabold text-lg">
            <span className="text-gradient">DA</span>
          </div>
  
          <p className="text-xs text-white/20">
            &copy; {year} Dennis Akinsete. Built with React, TypeScript, and Tailwind CSS.
          </p>
  
          <div className="flex items-center gap-2">
            <a
              href="https://www.facebook.com/leadplug"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/20 hover:text-white/50 transition-colors px-3 py-2 rounded-lg hover:bg-white/[0.04]"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/aiwithdennis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/20 hover:text-white/50 transition-colors px-3 py-2 rounded-lg hover:bg-white/[0.04]"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    )
  }