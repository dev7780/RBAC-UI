// src/pages/UserManagement.jsx
import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import UserTable from '../Components/UserTable';
import { mockUsers } from '../services/mockData';

const UserManagement = () => {
  const [users, setUsers] = useState(mockUsers);

  // Example function to handle user deletion (mock)
  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>
      <UserTable users={users} onDeleteUser={handleDeleteUser} />
    </Container>
  );
};

export default UserManagement;
