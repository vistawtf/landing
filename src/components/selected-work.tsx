import type { FC } from 'react';

export const SelectedWork: FC = () => (
  <div className="min-h-[100dvh] py-16" id="work">
    <h3 className="text-[46px] md:text-[61px] text-vista-light leading-none w-full py-12 md:py-24">
      Selected Work
    </h3>

    <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
      <div className="flex gap-2">
        <div className="text-vista-gray-light font-mono">01.</div>
        <div className="max-w-[320px] flex flex-col gap-6">
          <img src="/work/tec.svg" className="max-w-[145px]" />
          <p className="text-vista-gray-light font-light">
            →{' '}
            <a
              className="text-vista-light hover:text-vista-orange-light duration-200"
              href="https://dune.com/tec"
            >
              Comprehensive dashboard
            </a>{' '}
            of the Token Engineering Commons&apos; DAO and economy.
          </p>
          <p className="text-vista-gray-light font-light">
            → We{' '}
            <a
              href="https://forum.tecommons.org/t/a-report-on-the-distributive-impact-of-praise-part-1/1167"
              className="text-vista-light hover:text-vista-orange-light duration-200"
            >
              analyzed
            </a>{' '}
            the TEC&apos;s use of Praise, a reputation and rewards system through peer recognition.
          </p>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="text-vista-gray-light font-mono">02.</div>
        <div className="max-w-[320px] flex flex-col gap-6">
          <img src="/work/obol.svg" className="max-w-[170px]" />
          <p className="text-vista-gray-light font-light">
            → We helped the Obol Collective{' '}
            <a
              className="text-vista-light hover:text-vista-orange-light duration-200"
              href="https://community.obol.org/t/raf1-round-analysis-project-distribution-voting-behavior-and-quadratic-voting/393"
            >
              understand the results of their first Retroactive Funding round
            </a>{' '}
            and optimize decisions for the following ones.
          </p>
          <p className="text-vista-gray-light font-light">
            → Our{' '}
            <a
              className="text-vista-light hover:text-vista-orange-light duration-200"
              href="https://dune.com/vistawtf/obol-governance"
            >
              Governance dashboard
            </a>{' '}
            helped the Obol team identify holders and patterns, and helped understand delegates the
            landscape and target potential delegators.
          </p>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="text-vista-gray-light font-mono">03.</div>
        <div className="max-w-[320px] flex flex-col gap-6">
          <img src="/work/pocket.svg" className="max-w-[185px]" />
          <p className="text-vista-gray-light font-light">
            → We built the official wallet for Pocket Network from scratch
          </p>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="text-vista-gray-light font-mono">04.</div>
        <div className="max-w-[320px] flex flex-col gap-6">
          <img src="/work/gitcoin.svg" className="max-w-[210px]" />
          <p className="text-vista-gray-light font-light">
            → Adapted Gitcoin&apos;s calculator with the{' '}
            <a
              className="text-vista-light hover:text-vista-orange-light duration-200"
              href="https://github.com/gitcoinco/qf-calculator"
            >
              Tunable QF / COCM
            </a>{' '}
            algorithm to help grant programs calibrate their results based on their preferred
            signals.
          </p>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="text-vista-gray-light font-mono">05.</div>
        <div className="max-w-[320px] flex flex-col gap-6">
          <p className="text-vista-light text-4xl md:text-[39px] whitespace-nowrap">
            our own work <span className="text-vista-orange"> ₊˚⊹ </span>
          </p>
          <p className="text-vista-gray-light font-light">
            →{' '}
            <a
              className="text-vista-light hover:text-vista-orange-light duration-200"
              href="https://github.com/vistawtf/ghost-crab"
            >
              GhostCrab indexer
            </a>{' '}
            lets you index Ethereum smart contracts with an easy-to-use API for performant and
            scalable indexers. Written in Rust.
          </p>
        </div>
      </div>
    </div>
  </div>
);
