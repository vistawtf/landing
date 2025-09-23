import type { FC } from 'react';

const XIcon: FC<{ href: string }> = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group transition-colors duration-100"
  >
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1772_6576)">
        <path d="M15.3023 2.22754H18.1295L11.9528 9.28772L19.2196 18.8931H13.53L9.07418 13.0667L3.97457 18.8931H1.14589L7.7528 11.3412L0.781738 2.22831H6.6158L10.6437 7.55379L15.3023 2.22754ZM14.3105 17.2014H15.877L5.76458 3.83087H4.08366L14.3105 17.2014Z" fill="#999999" className="group-hover:fill-vista-orange transition-colors duration-100"/>
      </g>
      <defs>
        <clipPath id="clip0_1772_6576">
          <rect width="20" height="20" fill="white" transform="translate(0.000488281 0.561035)"/>
        </clipPath>
      </defs>
    </svg>
  </a>
);


export const Team: FC = () => (
  <div className="min-h-[100dvh] flex items-center justify-center py-16" id="team">
    <div>
      <h1 className="text-vista-light text-[46px] md:text-[61px] text-center">The Team</h1>
      <p className="text-vista-gray-light text-lg text-center">
        We have built the team you always wanted,{' '}
        <span className="md:block">so you don&apos;t have to.</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 justify-items-center">
        <div className="w-72 px-4 pt-6 pb-5 bg-vista-black rounded-xl border border-[#2D2D2D] inline-flex flex-col justify-center items-start gap-2">
          <div className="self-stretch inline-flex justify-between items-center">
            <div className="px-2 py-1.5 bg-[#191919] rounded-sm border border-[#2D2D2D] flex justify-center items-center">
              <div className="justify-start text-vista-light text-sm font-medium font-mono uppercase leading-none tracking-wide">
                RESEARCH
              </div>
            </div>
            <div className="flex justify-start items-center gap-3 pr-1">
              <XIcon href="https://x.com/entigdd" />
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-end items-start gap-3">
            <div className="self-stretch justify-start text-vista-light text-2xl font-normal leading-normal">Isaac (enti)</div>
          </div>
        </div>

        <div className="w-72 px-4 pt-6 pb-5 bg-vista-black rounded-xl border border-[#2D2D2D] inline-flex flex-col justify-center items-start gap-2">
          <div className="self-stretch inline-flex justify-between items-center">
            <div className="px-2 py-1.5 bg-[#191919] rounded-sm border border-[#2D2D2D] flex justify-center items-center">
              <div className="justify-start text-vista-light text-sm font-medium font-mono uppercase leading-none tracking-wide">
                DATA
              </div>
            </div>
            <div className="flex justify-start items-center gap-3 pr-1">
              <XIcon href="https://x.com/0xr3x" />
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-end items-start gap-3">
            <div className="self-stretch justify-start text-vista-light text-2xl font-normal leading-normal">Rex</div>
          </div>
        </div>

        <div className="w-72 px-4 pt-6 pb-5 bg-vista-black rounded-xl border border-[#2D2D2D] inline-flex flex-col justify-center items-start gap-2">
          <div className="self-stretch inline-flex justify-between items-center">
            <div className="px-2 py-1.5 bg-[#191919] rounded-sm border border-[#2D2D2D] flex justify-center items-center">
              <div className="justify-start text-vista-light text-sm font-medium font-mono uppercase leading-none tracking-wide">
                STORYTELLER
              </div>
            </div>
            <div className="flex justify-start items-center gap-3 pr-1">
              <XIcon href="https://x.com/0xefra" />
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-end items-start gap-3">
            <div className="self-stretch justify-start text-vista-light text-2xl font-normal leading-normal">Efra</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
