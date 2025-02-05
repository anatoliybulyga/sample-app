import { createContext, ReactNode, useContext, useState } from 'react';

interface HoveredItemContextProps {
  hoveredItem: { id: string; value: string } | null;
  setHoveredItem: (data: { id: string; value: string } | null) => void;
}

const HoveredItemContext = createContext<HoveredItemContextProps | null>(null);

export const HoveredItemProvider = ({ children }: { children: ReactNode }) => {
  const [hoveredItem, setHoveredItem] = useState<{ id: string; value: string } | null>(null);

  return (
    <HoveredItemContext.Provider value={{ hoveredItem, setHoveredItem }}>
      {children}
    </HoveredItemContext.Provider>
  );
};

export const useHoveredItem = () => {
  const context = useContext(HoveredItemContext);
  if (!context) {
    throw new Error('useHoveredItem must be used within a HoveredItemProvider');
  }
  return context;
};
