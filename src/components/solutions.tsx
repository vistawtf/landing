import { SolutionCard } from './solution-card';

export const Solutions = () => {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center py-16" id="solutions">
      <div className="flex gap-12 w-full flex-col">
        <div className="text-[46px] md:text-[76px] text-vista-light leading-none w-full text-center">
          Our Solutions
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <SolutionCard
            title="Data Engineering"
            subtitle="Design and maintenance of pipelines, real-time indexers, and backends."
            description="Power your analytics, operations and products with reliable and high-performant infrastructure."
            button="power your data"
            variant="dataEng"
          />
          <SolutionCard
            title="Data Intelligence"
            subtitle="Dashboards and deep analysis for DeFi, DAOs, and onchain AI agents."
            description="Accelerate your growth with actionable insights on user behavior, economic activity and impact metrics."
            button="get clarity"
            variant="dataInt"
          />
          <SolutionCard
            title="Modeling & Simulation"
            subtitle="We model protocol mechanics, financial data and risk scenarios."
            description="Save money by forecasting behavior, stress-test design and align incentives."
            button="kNOW MORE"
            variant="modSim"
          />
        </div>
      </div>
    </div>
  );
};
