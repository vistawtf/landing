import { useState, type FC } from 'react';

type Props = {
  number: number;
  title: string;
  description: string;
};

export const Work: FC<Props> = ({ number, title, description }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="flex gap-2"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`duration-200 font-mono ${hover ? 'text-vista-light' : 'text-vista-gray-light'}`}
      >
        0{number}.
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-start">
          <h4
            className={`relative box-border text-vista-light text-[39px]  border-vista-gray-light leading-none duration-200`}
          >
            {title}
            <div
              className={`h-[2px] w-full -bottom-1 absolute left-0 duration-200 ${hover ? 'bg-white' : 'bg-transparent'}`}
            ></div>
          </h4>
        </div>
        <p className="text-vista-gray-light text-sm font-mono">{description}</p>
      </div>
    </div>
  );
};
