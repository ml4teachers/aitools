// contexts/ToolsContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface ToolsContextProps {
  tools: any[];
  setTools: React.Dispatch<React.SetStateAction<any[]>>;
}

const ToolsContext = createContext<ToolsContextProps | undefined>(undefined);

export const useTools = () => {
  const context = useContext(ToolsContext);
  if (!context) {
    throw new Error('useTools must be used within a ToolsProvider');
  }
  return context;
};

export const ToolsProvider: React.FC = ({ children }) => {
  const [tools, setTools] = useState<any[]>([]);
  return (
    <ToolsContext.Provider value={{ tools, setTools }}>
      {children}
    </ToolsContext.Provider>
  );
};
