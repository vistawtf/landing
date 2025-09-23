import type { FC } from 'react';

export const SelectedWork: FC = () => (
  <div className="py-8" id="work">
    <h3 className="text-[46px] md:text-[61px] text-vista-light leading-none w-full py-4 md:py-8">
      Trusted by
    </h3>

    <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
      <div className="flex gap-2">
        <div className="text-vista-gray-light font-mono">01.</div>
        <div className="max-w-[320px] flex flex-col gap-6">
          <img src="/work/tec.svg" className="max-w-[145px]" />
        </div>
      </div>

      <div className="flex gap-2">
        <div className="text-vista-gray-light font-mono">02.</div>
        <div className="max-w-[320px] flex flex-col gap-6">
          <img src="/work/obol.svg" className="max-w-[170px]" />
        </div>
      </div>
    </div>
  </div>
);
