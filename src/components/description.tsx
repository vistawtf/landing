import type { FC } from 'react';

export const Description: FC = () => (
  <div className="min-h-[100dvh] flex items-center justify-center font-light py-16" id="about">
    <div className="max-w-[600px] md:text-[25px] flex flex-col gap-6">
      <h3 className="text-vista-orange-medium">the blockchain observatory*</h3>
      <p className="text-vista-gray-light">
        <span className="text-vista-light">Information</span> is the{' '}
        <span className="text-vista-light">most valuable asset</span> of blockchains. We help teams
        in the space make the most out of it with{' '}
        <span className="text-vista-light">data pipelines</span>,{' '}
        <span className="text-vista-light">research systems</span>
        and <span className="text-vista-light">production-ready products</span>.
      </p>
      <p className="text-vista-gray-light">
        Radical <span className="text-vista-light">transparency</span>,{' '}
        <span className="text-vista-light">quality</span> without compromise and the{' '}
        <span className="text-vista-light">continued relevance</span> of{' '}
        <span className="border-b">Ethereum</span> and its values is key to us. We consider
        ourselves paladins in the Ethereum Renaissance.
      </p>
    </div>
  </div>
);
