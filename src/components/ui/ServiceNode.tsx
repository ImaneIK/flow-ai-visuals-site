import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Card } from './card';
import { Rocket, Workflow, Zap } from "lucide-react"; // add more icons as needed

interface ServiceNodeProps {
  data: {
    label: string;
    description: string;
    step: number;
    icon?: string; // optional icon name
  };
}

const iconMap: Record<string, JSX.Element> = {
  rocket: <Rocket className="w-6 h-6 text-lime-400" />,
  workflow: <Workflow className="w-6 h-6 text-blue-400" />,
  zap: <Zap className="w-6 h-6 text-yellow-400" />,
};

function ServiceNode({ data }: ServiceNodeProps) {
  const icon = data.icon ? iconMap[data.icon] : <Zap className="w-6 h-6 text-lime-400" />;

  return (
    <Card >
      <div className="relative w-64 h-40 p-6">
        

        {/* Icon + Label */}
        <div className="flex items-center gap-2 mb-2">
          {icon}
          <h2 className="text-lg md:text-xl font-medium text-left">
            <span className="text-lime-200">{data.label}</span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {data.description}
        </p>

        {/* Connection handles (hidden but functional) */}
        {["Top", "Bottom", "Left", "Right"].map((pos) => (
          <Handle
            key={`target-${pos}`}
            type="target"
            position={(Position as any)[pos]}
            className="opacity-0"
          />
        ))}
        {["Top", "Bottom", "Left", "Right"].map((pos) => (
          <Handle
            key={`source-${pos}`}
            type="source"
            position={(Position as any)[pos]}
            className="opacity-0"
          />
        ))}
      </div>
    </Card>
  );
}

export default memo(ServiceNode);
