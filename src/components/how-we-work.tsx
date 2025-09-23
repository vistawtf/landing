import type { FC } from 'react';
import { Work } from './work';

export const HowWeWork: FC = () => (
  <div className="flex items-center justify-center py-16" id="work">
    <div className="w-full flex justify-between flex-col md:flex-row gap-12">
      <h3 className="text-[46px] md:text-[76px] text-vista-light leading-none w-full pb-8 md:pb-16">
        <span className="text-vista-gray-light"> How we</span>
        <br />
        Work
      </h3>
      <div className="flex justify-between items-start gap-24 md:gap-4 lg:gap-16 w-full flex-col max-w-lg">
        <Work
          number={1}
          title="User first"
          description="We understand your projects through research and data. At the end of the day, your clients are ours as well."
        />

        <Work
          number={2}
          title="Data driven"
          description="We ship regular, data-backed updates so you always have working and relevant data."
        />

        <Work
          number={3}
          title="Top-tier communication"
          description="Our open-source approach, combined with direct and regular updates, ensures you're at the top of your game."
        />
      </div>
    </div>
  </div>
);
