import React from "react";
import tools from '../data/tools.json'; 

interface ToolProps {
  name: string;
}

const Tool: React.FC<ToolProps> = ({ name }) => {
  // Find the tool object by name from the imported tools array
  const tool = tools.find((tool) => tool.name === name);

  return (
    <div className="w-auto border-2 border-b1 text-center min-w-32 rounded-md flex flex-row items-center justify-center gap-2 min-h-[44px]">
      {tool ? (
        <img src={tool.image} alt={name} className="w-auto h-8" />
      ) : (
        <div className="w-5 h-5 mx-auto mb-2 bg-gray-300 rounded-full"></div>
      )}
      <span className="text-sm">{name}</span>
    </div>
  );
};

export default Tool;
