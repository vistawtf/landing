import type { FC } from 'react';
import { createContext, useContext } from 'react';

type ActiveTabsContextType = {
  activeTabs: Set<Tabs>;
  setActiveTabs: (tabs: Set<Tabs>) => void;
};
export const ActiveTabsContext = createContext<ActiveTabsContextType>({
  activeTabs: new Set(),
  setActiveTabs: () => {}
});

export type Tabs = 'home' | 'solutions' | 'work' | 'about' | 'team';

function getActiveTab(tabs: Set<Tabs>): Tabs | undefined {
  if (tabs.has('team')) return 'team';
  if (tabs.has('about')) return 'about';
  if (tabs.has('work')) return 'work';
  if (tabs.has('solutions')) return 'solutions';
  if (tabs.has('home')) return 'home';
  return undefined;
}

export const Header: FC = () => {
  const { activeTabs } = useContext(ActiveTabsContext);
  const activeTab = getActiveTab(activeTabs);

  return (
    <div className="hidden md:block fixed top-0 left-0 right-0 z-[100] bg-gradient-to-t from-vista-black/0 via-vista-black/90 to-vista-black/100">
      <div className="max-w-screen-xl mx-auto px-4 py-[40px] w-full">
        <div className="items-center justify-between flex">
          <div className="text-vista-gray-medium text-lg font-mono items-center gap-8 lg:gap-16 flex">
            <Link href="#home" title="HOME" active={activeTab === 'home'} />
            <Link href="#solutions" title="SOLUTIONS" active={activeTab === 'solutions'} />
            <Link href="#work" title="WORK" active={activeTab === 'work'} />
            <Link href="#about" title="ABOUT" active={activeTab === 'about'} />
            <Link href="#team" title="TEAM" active={activeTab === 'team'} />
          </div>
          <a
            className="h-[42px] w-[165px] flex items-center justify-center bg-vista-orange-medium hover:bg-vista-light hover:text-vista-orange cursor-pointer duration-200 text-vista-black rounded-[3px] text-sm font-mono font-medium"
            href="https://cal.com/rex-vista+isaac-vista"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOOK A CALL +
          </a>
        </div>
      </div>
    </div>
  );
};

const Link: FC<{
  href: string;
  title: string;
  active: boolean;
}> = ({ href, title, active }) => {
  return (
    <a
      href={href}
      className={`duration-200 text-shadow-xl text-shadow-black/50 border-b ${
        active
          ? 'text-vista-light border-vista-light'
          : 'hover:text-vista-gray-light border-transparent'
      }`}
    >
      {title}
    </a>
  );
};
