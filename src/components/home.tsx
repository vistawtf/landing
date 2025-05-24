import { ActiveTabsContext, Header, type Tabs } from '../components/header.tsx';
import { Hero } from '../components/hero.tsx';
import { Description } from '../components/description.tsx';
import { Solutions } from '../components/solutions.tsx';
import { HowWeWork } from '../components/how-we-work.tsx';
import { SelectedWork } from '../components/selected-work.tsx';
import { Team } from '../components/team.tsx';
import { Footer } from '../components/footer.tsx';
import { useState, type FC } from 'react';
import { OnScreen } from './use-on-screen.tsx';

export const Home: FC = () => {
  const [activeTabs, setActiveTabs] = useState<Set<Tabs>>(new Set());

  function addActiveTab(tab: Tabs) {
    setActiveTabs((prev) => {
      const newTabs = new Set(prev);
      newTabs.add(tab);
      return newTabs;
    });
  }

  function removeActiveTab(tab: Tabs) {
    setActiveTabs((prev) => {
      const newTabs = new Set(prev);
      newTabs.delete(tab);
      return newTabs;
    });
  }

  return (
    <ActiveTabsContext.Provider
      value={{
        activeTabs,
        setActiveTabs: (tabs: Set<Tabs>) => {
          setActiveTabs(tabs);
        }
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 pt-16 w-full">
        <Header />

        <OnScreen onEnter={() => addActiveTab('home')} onLeave={() => removeActiveTab('home')}>
          <Hero />
        </OnScreen>

        <OnScreen
          onEnter={() => addActiveTab('solutions')}
          onLeave={() => removeActiveTab('solutions')}
        >
          <Solutions />
        </OnScreen>

        <OnScreen onEnter={() => addActiveTab('work')} onLeave={() => removeActiveTab('work')}>
          <HowWeWork />
        </OnScreen>

        <OnScreen onEnter={() => addActiveTab('work')} onLeave={() => removeActiveTab('work')}>
          <SelectedWork />
        </OnScreen>

        <OnScreen onEnter={() => addActiveTab('about')} onLeave={() => removeActiveTab('about')}>
          <Description />
        </OnScreen>

        <OnScreen onEnter={() => addActiveTab('team')} onLeave={() => removeActiveTab('team')}>
          <Team />
        </OnScreen>
      </div>
      <Footer />
    </ActiveTabsContext.Provider>
  );
};
