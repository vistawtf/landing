import type { FC } from 'react';
import { ArrowDownRight } from './arrow-down-right.tsx';

export const Hero: FC = () => (
  <div
    className="min-h-[calc(100vh - 114px)] flex flex-col justify-center w-full py-16 overflow-hidden"
    style={{ minHeight: 'calc(100vh - 114px)' }}
    id="home"
  >
    <div className="absolute top-32 right-0 -z-10 w-full h-full overflow-hidden">
      <div className="max-w-screen-xl mx-auto relative">
        <img src="/header-bg.svg" alt="background" className="absolute top-0 -right-64" />
      </div>
    </div>

    <img src="/logo.svg" alt="logo" className="w-[140px]" />
    <div className="text-vista-gray-light text-2xl md:text-[38px] lg:text-[64px] max-w-[800px] md:leading-[45px] lg:leading-[71px] mt-8 md:mb-10 mb-7">
      Make{' '}
      <div className="md:border-b-4 border-b-2 border-vista-gray-dark-light border-box inline-block">
        better decisions
      </div>{' '}
      with world-class <span className="text-vista-light">data systems</span>,{' '}
      <span className="text-vista-light">analysis</span>, and
      <span className="text-vista-light"> modeling</span>.
    </div>
    <a
      className="inline-flex items-center justify-center gap-3 md:gap-4 border border-vista-light text-vista-light hover:text-black hover:border-transparent hover:bg-vista-light hover:font-bold duration-200 cursor-pointer rounded font-mono font-medium px-4 md:px-6 py-3 md:py-4 mb-20 text-sm md:text-base uppercase leading-relaxed tracking-wide w-fit"
      href="#solutions"
    >
      EXPLORE OUR SOLUTIONS
      <ArrowDownRight />
    </a>

    <div className="mb-16">
      <h4 className="text-vista-gray-light text-xs font-mono uppercase mb-4">Trusted by</h4>
      <div className="flex items-center gap-6">
        <a href="https://apecoin.com/" target="_blank" rel="noopener noreferrer">
          <img src="/work/apeco.svg" className="max-w-[115px] opacity-60 hover:opacity-100 transition-opacity duration-200" alt="Apeco" />
        </a>
        <a href="https://obol.org/" target="_blank" rel="noopener noreferrer">
          <img src="/work/obol.svg" className="max-w-[138px] opacity-60 hover:opacity-100 transition-opacity duration-200" alt="Obol" />
        </a>
      </div>
    </div>
  </div>
);
