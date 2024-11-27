
import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Button variant="contained" component={Link} to="/users">
        Manage Users
      </Button>
      <Button variant="contained" component={Link} to="/roles" style={{ marginLeft: '10px' }}>
        Manage Roles
      </Button>
    </Container>
  );
};

export default Dashboard;
