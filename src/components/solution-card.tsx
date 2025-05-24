import { useState, type FC } from 'react';

import { DataEng } from './data-eng.tsx';
import { DataInt } from './data-int.tsx';
import { ModSim } from './mod-sim.tsx';

const variants = {
  dataEng: {
    component: DataEng,
    idleColor: '#FF8A65',
    hoverColor: '#FF5233'
  },
  dataInt: {
    component: DataInt,
    idleColor: '#90CAF9',
    hoverColor: '#2962FF'
  },
  modSim: {
    component: ModSim,
    idleColor: '#CE93D8',
    hoverColor: '#EA80FC'
  }
};

type Variant = keyof typeof variants;

type Props = {
  title: string;
  subtitle: string;
  description: string;
  button: string;
  variant: Variant;
};

export const SolutionCard: FC<Props> = ({ title, subtitle, description, button, variant }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`cursor-pointer p-4 border rounded-md duration-400 flex flex-col justify-between ${hovered ? 'border-vista-gray-medium scale-103' : 'border-transparent'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        window.open('mailto:info@vista.wtf', '_blank');
      }}
    >
      <div>
        <div
          className="duration-600"
          style={{
            color: hovered ? variants[variant].hoverColor : variants[variant].idleColor
          }}
        >
          {variant === 'dataEng' && <variants.dataEng.component />}
          {variant === 'dataInt' && <variants.dataInt.component />}
          {variant === 'modSim' && <variants.modSim.component />}
        </div>
        <h2 className="text-vista-light text-[34px] mb-2">{title}</h2>
        <h3 className="text-vista-gray-light text-lg mb-2">{subtitle}</h3>
        <p className="text-vista-gray-light font-mono font-light">
          <span
            className={`duration-600`}
            style={{
              color: hovered ? variants[variant].hoverColor : ''
            }}
          >
            →
          </span>{' '}
          {description}
        </p>
      </div>

      <div className="flex justify-start">
        <a
          href="mailto:info@vista.wtf"
          className={`uppercase text-xs font-bold  h-[36px] flex items-center justify-center border border-vista-light rounded mt-8 transition duration-300 ease-in-out px-4 ${
            hovered ? 'text-vista-black bg-vista-light' : 'text-vista-light'
          }`}
        >
          {button} +
        </a>
      </div>
    </div>
  );
};
