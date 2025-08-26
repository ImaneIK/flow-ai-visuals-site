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
  const angle = (index * 2 * Math.PI) / total - Math.PI / 2; // Start from top
  return {
    x: centerX + radius * Math.cos(angle),
    y: centerY + radius * Math.sin(angle),
  };
}

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 });

  // Responsive center & radius
  const centerX = useMemo(() => dimensions.width / 2, [dimensions.width]);
  const centerY = useMemo(() => dimensions.height / 2, [dimensions.height]);
  const orbitRadius = useMemo(
    () => Math.min(dimensions.width, dimensions.height) / 2.1, // tweak ratio to taste
    [dimensions.width, dimensions.height]
  );

  // watch container size
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // compute nodes from dimensions (center and service nodes)
  const computeNodes = useCallback((): Node[] => {
    const centerNode: Node = {
      id: 'center',
      type: 'center',
      position: { x: centerX - 160, y: centerY - 160 }, // offsets = half of your center node size
      data: {
        label: 'Infrastructure de Croissance IA 360',
        description:
          'Une approche méthodique en 6 étapes pour transformer votre organisation avec l\'intelligence artificielle',
      },
      draggable: false,
      selectable: false,
    };

    const serviceNodes: Node[] = services.map((service, index) => {
      const pos = getCircularPosition(index, services.length, orbitRadius, centerX, centerY);
      return {
        id: service.id,
        type: 'service',
        position: { x: pos.x - 120, y: pos.y - 50 }, // offsets = half service node width/height
        data: service,
        draggable: false,
        selectable: false,
      };
    });

    return [centerNode, ...serviceNodes];
  }, [centerX, centerY, orbitRadius]);

  // init nodes with computed positions (uses memoized computeNodes result)
  const [nodes, setNodes, onNodesChange] = useNodesState(computeNodes());
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // When container size changes -> recenter nodes
  useEffect(() => {
    // replace nodes positions with new computed positions
    setNodes((prev) => {
      const newNodes = computeNodes();
      // preserve ids and replace positions/data
      return prev.map((pNode) => {
        const updated = newNodes.find((n) => n.id === pNode.id);
        return updated ? { ...pNode, position: updated.position } : pNode;
      });
    });
  }, [computeNodes, setNodes]);

  // Orbit animation
  useEffect(() => {
    let angleOffset = 0;
    const orbitSpeed = 0.006; // radians per frame, tweak to taste

    const id = window.setInterval(() => {
      angleOffset += orbitSpeed;
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id === 'center') {
            return {
              ...node,
              position: { x: centerX - 160, y: centerY - 160 },
            };
          }
          const index = services.findIndex((s) => s.id === node.id);
          const total = services.length;
          const angle = (index * 2 * Math.PI) / total + angleOffset - Math.PI / 2;
          return {
            ...node,
            position: {
              x: centerX + orbitRadius * Math.cos(angle) - 128,
              y: centerY + orbitRadius * Math.sin(angle) - 80,
            },
          };
        })
      );
    }, 16); // ~60fps

    return () => clearInterval(id);
  }, [centerX, centerY, orbitRadius, setNodes]); // restart orbit if center/radius change

  const onConnect = useCallback(() => {
    // no manual connections
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-visible py-12 mb-24" id='services'>
      <h2 className="mx-auto py-24 text-6xl md:text-7xl lg:text-8xl font-medium mt-6 text-center max-w-2xl">
            <span>Nous</span>{" "}
            <span className="text-lime-200"> Services </span>
      </h2>
      <ReactFlow  className="h-full w-full overflow-visible"
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView={false}
        proOptions={{ hideAttribution: true }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        minZoom={0.1}
        maxZoom={2}
      >
        <Background gap={20} size={1} color="hsl(var(--muted-foreground) / 0.1)" />
        <Controls showZoom={false} showFitView={false} showInteractive={false} />
      </ReactFlow>
    </div>
  );
}