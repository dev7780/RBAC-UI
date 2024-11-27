import React, { useEffect, useState } from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

const RoleHierarchyFlow = ({ roles, users }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    const roleNodes = [];
    const roleEdges = [];
    
    let yOffset = 0;
    let parentNodes = {}; 
    roles.forEach((role, index) => {
      const nodeId = `node-${role.id}`;
      
      const roleUsers = users.filter(user => user.role === role.name);
      
      
      const roleLabel = roleUsers.length > 0
        ? `${role.name}\n${roleUsers.map(user => user.name).join(", ")}`
        : role.name;

      const node = {
        id: nodeId,
        data: { label: roleLabel }, 
        position: { x: 200, y: yOffset }, 
      };

      
      if (role.parentRole) {
        const parentNodeId = parentNodes[role.parentRole];
        if (parentNodeId) {
          roleEdges.push({
            id: `edge-${role.id}-${parentNodeId}`,
            source: parentNodeId,
            target: nodeId,
          });
        }
      }

      
      roleNodes.push(node);
      parentNodes[role.name] = nodeId; 

      
      yOffset += 100;
    });

    setNodes(roleNodes);
    setEdges(roleEdges);

  }, [roles, users]); 

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default RoleHierarchyFlow;
