
import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import RoleTable from '../Components/RoleTable';
import { mockRoles } from '../services/mockData';

const RoleManagement = () => {
  const [roles, setRoles] = useState(mockRoles);

  
  const handleDeleteRole = (roleId) => {
    setRoles(roles.filter(role => role.id !== roleId));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Role Management
      </Typography>
      <RoleTable roles={roles} onDeleteRole={handleDeleteRole} />
    </Container>
  );
};

export default RoleManagement;
