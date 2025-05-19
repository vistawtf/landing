import { useState, type FC } from 'react';

type Props = {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  button: string;
};

export const SolutionCard: FC<Props> = ({ image, title, subtitle, description, button }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`cursor-pointer p-4 border rounded-md duration-200 flex flex-col justify-between ${hovered ? 'border-vista-gray-medium scale-105' : 'border-transparent'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        window.open('mailto:info@vista.wtf', '_blank');
      }}
    >
      <div>
        <img src={image} alt={title} className="w-full h-auto mb-12" />
        <h2 className="text-vista-light text-[34px] mb-2">{title}</h2>
        <h3 className="text-vista-gray-light text-lg mb-2">{subtitle}</h3>
        <p className="text-vista-gray-light font-mono font-light">
          <span className={`duration-600 ${hovered ? 'text-vista-orange' : ''}`}>→</span>{' '}
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
