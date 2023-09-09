import { useTools } from '../contexts/ToolsContext';
import Link from 'next/link';  // Importiere das Link-Element von Next.js
import React, { useState } from 'react';


const ToolsLayout = ({ children }) => {
    const { tools } = useTools();
    const [selectedCategories, setSelectedCategories] = useState([]);
  
    if (!tools || tools.length === 0) {
      return <div>Loading...</div>;
    }
  
    // Sammle alle Kategorien ohne Duplikate (ohne Set)
    const allCategories = tools.reduce((acc, toolData) => {
      const tool = toolData.frontmatter;
      tool.category.forEach(cat => {
        if (!acc.includes(cat)) {
          acc.push(cat);
        }
      });
      return acc;
    }, []);
  
    // Überprüfe, ob die ausgewählte Kategorie im Tool vorhanden ist
    const filteredTools = tools.filter(toolData => {
      const tool = toolData.frontmatter;
      return selectedCategories.length === 0 || selectedCategories.some(cat => tool.category.includes(cat));
    });
  
    return (
      <div>
        <div>
          <select className="mt-4 cursor-pointer border p-2 rounded-lg w-60 hover:bg-gray-50" onChange={(e) => setSelectedCategories(e.target.value ? [e.target.value] : [])}>
            <option value="">Alle Kategorien</option>
            {allCategories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="tools-container flex flex-wrap mt-8">
        {filteredTools.map((toolData, index) => {
            const tool = toolData.frontmatter;
            return (
                <Link href={`/tools/${toolData.slug}`}>
                    <div key={index} className="mr-4 mb-4 p-2 border rounded-lg w-60 hover:bg-gray-50">
                    <div className="flex mb-2">
                    {/* Link und Logo hinzugefügt */}
                    
                        <div className="flex items-center">
                        <img src={tool.icon} alt={`${tool.title} Logo`} width={25} className="mr-2"/>
                        <h2 className="font-bold">{tool.title}</h2>
                        </div>
                    
                    </div>

                    <div>
                        {tool.description}
                    </div>
                    
                </div>
                </Link>
            );
        })}
        {children}
        </div>
    </div>
  );
};

export default ToolsLayout;
