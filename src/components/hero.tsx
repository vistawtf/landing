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
    <div className="text-vista-gray-light text-3xl md:text-[46px] lg:text-[76px] max-w-[800px] md:leading-[56px] lg:leading-[86px] mt-8 md:mb-16 mb-8">
      Make{' '}
      <div className="md:border-b-4 border-b-2 border-vista-gray-dark-light border-box inline-block">
        better decisions
      </div>
      with world-class <span className="text-vista-light">data systems</span>,{' '}
      <span className="text-vista-light">analysis</span>, and
      <span className="text-vista-light"> modeling</span>.
    </div>
    <a
      className="flex items-center justify-center gap-4 border border-white text-vista-light hover:text-black hover:border-transparent hover:bg-vista-light duration-200 hover:font-medium cursor-pointer rounded-[3px] font-mono h-[66px] w-[314px] md:mb-[114px] text-base"
      href="#solutions"
    >
      EXPLORE OUR SOLUTIONS
      <ArrowDownRight />
    </a>
  </div>
);
