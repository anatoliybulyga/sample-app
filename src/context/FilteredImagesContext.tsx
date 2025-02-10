import React, { createContext, useContext, useState } from 'react';

interface FilteredImagesContextType {
  selectedFilterKeys: string[];
  setSelectedFilterKeys: (keys: string[]) => void;
}

const FilteredImagesContext = createContext<FilteredImagesContextType | undefined>(undefined);

export const FilteredImagesProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedFilterKeys, setSelectedFilterKeys] = useState<string[]>([]);

  return (
    <FilteredImagesContext.Provider value={{ selectedFilterKeys, setSelectedFilterKeys }}>
      {children}
    </FilteredImagesContext.Provider>
  );
};

export const useFilteredImages = () => {
  const context = useContext(FilteredImagesContext);
  if (!context) {
    throw new Error('useFilteredImages must be used within a FilteredImagesProvider');
  }
  return context;
};
