import { useEffect, useMemo, useRef, useState, type FC, type RefObject } from 'react';

function useOnScreenHelper(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () => new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting)),
    [ref]
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}

type OnScreenProps = {
  children: React.ReactNode;
  onEnter: () => void;
  onLeave: () => void;
};

export const OnScreen: FC<OnScreenProps> = ({ children, onEnter, onLeave }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useOnScreenHelper(ref);

  useEffect(() => {
    if (isIntersecting) {
      onEnter();
    } else {
      onLeave();
    }

    return () => {
      onLeave();
    };
  }, [isIntersecting]);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-500 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};
