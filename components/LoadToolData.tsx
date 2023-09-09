// components/LoadToolData.tsx
import { useEffect } from 'react';
import { useTools } from '../contexts/ToolsContext';

const LoadToolData = () => {
  const { setTools } = useTools();

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch('/api/tools');
      const data = await res.json();
      setTools(data);
    };

    loadData();
  }, []);

  return null; // Diese Komponente rendert nichts
};

export default LoadToolData;
