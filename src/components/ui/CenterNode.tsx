import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Globe } from 'lucide-react';

interface CenterNodeProps {
  data: {
    label: string;
    description: string;
  };
}

function CenterNode({ data }: CenterNodeProps) {
  return (
    <div className="relative flex flex-col items-center justify-center w-80 h-80 p-8 text-center">
      {/* Tech grid overlay */}
      <div className="absolute inset-4 rounded-full opacity-30"
           style={{
             backgroundImage: `
               repeating-linear-gradient(0deg, transparent, transparent 8px, hsl(var(--graph-center-primary) / 0.1) 8px, hsl(var(--graph-center-primary) / 0.1) 9px),
               repeating-linear-gradient(90deg, transparent, transparent 8px, hsl(var(--graph-center-primary) / 0.1) 8px, hsl(var(--graph-center-primary) / 0.1) 9px)
             `
           }} />
      
      <div className="relative z-10 flex items-center justify-center w-20 h-20 mb-4">
        <div className="relative">
          <Globe className="w-14 h-14 text-white animate-pulse drop-shadow-lg" 
                 style={{ filter: 'drop-shadow(0 0 8px hsl(var(--graph-center-primary)))' }} />
          <div className="absolute inset-0 w-14 h-14 rounded-full border-2 border-white/20 animate-ping" />
        </div>
      </div>
      
      <h3 className="relative z-10 text-2xl font-bold text-white mb-3 leading-tight tracking-wide" 
          style={{ textShadow: '0 0 10px hsl(var(--graph-center-primary) / 0.8)' }}>
        {data.label}
      </h3>
      
      <p className="relative z-10 text-white/90 text-sm leading-relaxed max-w-64 font-medium">
        {data.description}
      </p>

      {/* Connection handles - hidden but functional */}
      <Handle
        type="source"
        position={Position.Top}
        id="top"
        className="opacity-0"
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right"
        className="opacity-0"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom"
        className="opacity-0"
      />
      <Handle
        type="source"
        position={Position.Left}
        id="left"
        className="opacity-0"
      />
      <Handle
        type="source"
        position={Position.Top}
        id="top-right"
        className="opacity-0"
        style={{ top: '25%', left: '75%' }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom-left"
        className="opacity-0"
        style={{ bottom: '25%', left: '25%' }}
      />
    </div>
  );
}

export default memo(CenterNode);