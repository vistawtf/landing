import type { FC } from 'react';

export const Team: FC = () => (
  <div className="min-h-[100dvh] flex items-center justify-center py-16" id="team">
    <div>
      <h1 className="text-vista-light text-[46px] md:text-[61px] text-center">The Team</h1>
      <p className="text-vista-gray-light text-lg text-center">
        We have built the team you always wanted,
        <br />
        so you don&apos;t have to.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="bg-vista-black rounded-xl p-4 h-[210px] flex flex-col justify-between border border-[#2D2D2D]">
          <div className="flex">
            <div className="text-vista-light font-mono px-2 py-1 border border-[#2D2D2D] rounded text-sm bg-[#191919] uppercase">
              Research & BD
            </div>
          </div>
          <div>
            <h3 className="text-vista-light text-[21px] mb-2">Isaac González</h3>
            <p className="text-vista-light text-base font-light">
              Specializes in governance, core Ethereum and token engineering.
            </p>
          </div>
        </div>

        <div className="bg-vista-black rounded-xl p-4 h-[210px] flex flex-col justify-between border border-[#2D2D2D]">
          <div className="flex">
            <div className="text-vista-light font-mono px-2 py-1 border border-[#2D2D2D] rounded text-sm bg-[#191919] uppercase">
              DATA & ECONOMICS
            </div>
          </div>
          <div>
            <h3 className="text-vista-light text-[21px] mb-2">Rex</h3>
            <p className="text-vista-light text-base font-light">
              Economist with a background in data engineering, analytics, and modeling.
            </p>
          </div>
        </div>

        <div className="bg-vista-black rounded-xl p-4 h-[210px] flex flex-col justify-between border border-[#2D2D2D]">
          <div className="flex">
            <div className="text-vista-light font-mono px-2 py-1 border border-[#2D2D2D] rounded text-sm bg-[#191919] uppercase">
              BACKEND ENGINEER
            </div>
          </div>
          <div>
            <h3 className="text-vista-light text-[21px] mb-2">CrisOG</h3>
            <p className="text-vista-light text-base font-light">
              Specializes in building robust APIs, blockchain indexers & cloud infra.
            </p>
          </div>
        </div>

        <div className="bg-vista-black rounded-xl p-4 h-[210px] flex flex-col justify-between border border-[#2D2D2D]">
          <div className="flex">
            <div className="text-vista-light font-mono px-2 py-1 border border-[#2D2D2D] rounded text-sm bg-[#191919] uppercase">
              FULL-STACK ENGINEER
            </div>
          </div>
          <div>
            <h3 className="text-vista-light text-[21px] mb-2">Luis Herasme</h3>
            <p className="text-vista-light text-base font-light">
              Architects robust full-stack systems that bridge blockchain innovation with mainstream
              adoption
            </p>
          </div>
        </div>

        <div className="bg-vista-black rounded-xl p-4 h-[210px] flex flex-col justify-between border border-[#2D2D2D]">
          <div className="flex">
            <div className="text-vista-light font-mono px-2 py-1 border border-[#2D2D2D] rounded text-sm bg-[#191919] uppercase">
              RESEARCH & DESIGN
            </div>
          </div>
          <div>
            <h3 className="text-vista-light text-[21px] mb-2">Efraim Barriuso</h3>
            <p className="text-vista-light text-base font-light">
              Visual storyteller, simplifying complexity into compelling narratives.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
