
import React from "react";
import { Container, Typography } from "@mui/material";
import RoleHierarchyFlow from "../Components/RoleHierarchyFlow";
import { roleHierarchy } from "../services/roleHierarchy";

const RoleHierarchy = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Role Hierarchy Flow
      </Typography>
      <RoleHierarchyFlow roles={roleHierarchy} />
    </Container>
  );
};

export default RoleHierarchy;
