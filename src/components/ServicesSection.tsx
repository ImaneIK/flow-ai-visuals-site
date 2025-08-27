import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import CenterNode from './ui/CenterNode';
import ServiceNode from './ui/ServiceNode';

const nodeTypes = {
  center: CenterNode,
  service: ServiceNode,
};

const services = [
  { id: 'audit', label: 'Audit', description: 'Analyse de vos processus et outils', step: 1 },
  { id: 'diagnostic', label: 'Diagnostic', description: 'Identification des opportunités', step: 2 },
  { id: 'strategy', label: 'Stratégie', description: 'Plan d\'action clair et mesurable', step: 3 },
  { id: 'infrastructure', label: 'Infrastructure', description: 'Solutions IA, chatbots, automatisations', step: 4 },
  { id: 'formation', label: 'Formation', description: 'Transfert de compétences', step: 5 },
  { id: 'maintenance', label: 'Maintenance & Assistance', description: 'Suivi continu et support', step: 6 },
];

const initialEdges: Edge[] = [
  ...services.map((service) => ({
    id: `center-${service.id}`,
    source: 'center',
    target: service.id,
    className: 'center-edge',
    type: 'straight',
    style: { stroke: 'hsl(var(--graph-edge-primary))' },
  })),
  ...services.map((service, index) => {
    const nextIndex = (index + 1) % services.length;
    return {
      id: `${service.id}-${services[nextIndex].id}`,
      source: service.id,
      target: services[nextIndex].id,
      className: 'sequence-edge',
      type: 'smoothstep',
      style: { stroke: 'hsl(var(--graph-edge-secondary))' },
    };
  }),
];

function getCircularPosition(index: number, total: number, radius: number, centerX: number, centerY: number) {
  const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
  return {
    x: centerX + radius * Math.cos(angle),
    y: centerY + radius * Math.sin(angle),
  };
}

export default function ServicesSection() {
  
  return(
    <div className='max-w-screen flex flex-col justify-center mb-4' id='services'>
      {/* import image for large screens and one for smaller screens */}
      <h2 className="mx-auto py-4 text-6xl md:text-7xl lg:text-8xl font-medium mt-6 text-center ">
            <span>Nos</span>{" "}
            <span className="text-lime-200"> Services </span>
      </h2>

      <picture className=' mx-auto'>
        <source className='scale-[130%]' media="(min-width: 1024px)" srcSet="/images/1.png" />
        <img className='scale-[100%]' src="/images/2.png" alt="Description of the image"  />
      </picture>

    </div>
  );
}