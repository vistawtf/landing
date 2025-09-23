import { useState, type FC } from 'react';

export const MobileMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile CTA Button */}
      <div className="md:hidden fixed top-6 left-6 z-[200]">
        <a
          href="https://cal.com/rex-vista+isaac-vista"
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 px-3 flex items-center justify-center bg-vista-orange-medium hover:bg-vista-light hover:text-vista-orange cursor-pointer duration-200 text-vista-black rounded-[3px] text-xs font-mono font-medium"
        >
          BOOK A CALL +
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-6 right-6 z-[200]">
        <button
          onClick={toggleMenu}
          className="w-10 h-10 flex flex-col justify-center items-center gap-1 bg-vista-black/80 backdrop-blur-sm rounded border border-vista-gray-medium/30 hover:border-vista-light duration-200"
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-vista-light transition-transform duration-200 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-5 h-0.5 bg-vista-light transition-opacity duration-200 ${isOpen ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-vista-light transition-transform duration-200 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[150] bg-vista-black/90 backdrop-blur-sm">
          <div className="flex flex-col items-end justify-center h-full gap-6 pr-8">

            {/* Navigation */}
            <div className="flex flex-col items-end gap-3">
              <h4 className="text-vista-light text-lg font-mono mb-1 uppercase">NAVIGATION</h4>
              <div className="flex flex-col items-end gap-2 font-mono text-vista-gray-light">
                <a
                  href="#home"
                  className="hover:text-vista-orange-light duration-300 text-lg"
                  onClick={closeMenu}
                >
                  HOME
                </a>
                <a
                  href="#solutions"
                  className="hover:text-vista-orange-light duration-300 text-lg"
                  onClick={closeMenu}
                >
                  SOLUTIONS
                </a>
                <a
                  href="#work"
                  className="hover:text-vista-orange-light duration-300 text-lg"
                  onClick={closeMenu}
                >
                  WORK
                </a>
                <a
                  href="#team"
                  className="hover:text-vista-orange-light duration-300 text-lg"
                  onClick={closeMenu}
                >
                  TEAM
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="flex flex-col items-end gap-3">
              <h4 className="text-vista-light text-lg font-mono mb-1 uppercase">SOCIALS</h4>
              <div className="flex flex-col items-end gap-2 font-mono text-vista-gray-light">
                <a
                  href="https://x.com/vistawtf"
                  className="hover:text-vista-orange-light duration-300 text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  X (TWITTER)
                </a>
                <a
                  href="https://github.com/vistawtf"
                  className="hover:text-vista-orange-light duration-300 text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  GITHUB
                </a>
                <a
                  href="https://paragraph.com/@vista"
                  className="hover:text-vista-orange-light duration-300 text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  BLOG
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-end gap-2 mt-16">
              <p className="text-vista-gray-light text-sm font-mono text-right uppercase">
                GET IN TOUCH: <span className="text-vista-light">INFO@VISTA.WTF</span>
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
};