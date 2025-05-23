import type { FC } from 'react';

export const Header: FC = () => (
  <div className="hidden md:block fixed top-0 left-0 right-0 z-[100] bg-gradient-to-t from-vista-black/0 via-vista-black/90 to-vista-black/100">
    <div className="max-w-screen-xl mx-auto px-4 py-[40px] w-full">
      <div className="items-center justify-between flex">
        <div className="text-vista-gray-medium text-lg font-mono items-center gap-8 lg:gap-16 flex">
          <a href="#home" className="text-vista-light border-b text-shadow-xl text-shadow-black/50">
            HOME
          </a>
          <a
            href="#solutions"
            className="hover:text-vista-gray-light duration-200 text-shadow-xl text-shadow-black/50"
          >
            SOLUTIONS
          </a>
          <a
            href="#work"
            className="hover:text-vista-gray-light duration-200 text-shadow-xl text-shadow-black/50"
          >
            WORK
          </a>
          <a
            href="#about"
            className="hover:text-vista-gray-light duration-200 text-shadow-xl text-shadow-black/50"
          >
            ABOUT
          </a>

          <a
            href="#team"
            className="hover:text-vista-gray-light duration-200 text-shadow-xl text-shadow-black/50"
          >
            TEAM
          </a>
        </div>
        <a
          className="h-[42px] w-[165px] flex items-center justify-center bg-vista-orange-medium hover:bg-vista-light hover:text-vista-orange cursor-pointer duration-200 text-vista-black rounded-[3px] text-sm font-mono font-medium"
          href="mailto:info@vista.wtf"
        >
          BOOK A CALL +
        </a>
      </div>
    </div>
  </div>
);
