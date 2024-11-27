import React, { useState } from "react";
import { Container, Typography, Grid, Button } from "@mui/material";
import UserTable from "../Components/UserTable";
import AddUserDialog from "../Components/AddUserDialog";
import EditUserDialog from "../Components/EditUserDialog";
import RoleHierarchyFlow from "../Components/RoleHierarchyFlow";
import { mockUsers, roles as initialRoles } from "../services/mockData"; 

const UserManagement = () => {
  const [users, setUsers] = useState(mockUsers);
  const [roles, setRoles] = useState(initialRoles); 
  const [editingUser, setEditingUser] = useState(null);
  const [addingUser, setAddingUser] = useState(false); 

  
  const handleEdit = (user) => {
    setEditingUser(user); 
  };

  const handleSaveEdit = (updatedUser) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
    );

    
    const updatedRoles = [...roles];
    const roleIndex = updatedRoles.findIndex((role) => role.name === updatedUser.role);
    if (roleIndex === -1) {
      updatedRoles.push({ name: updatedUser.role, parentRole: updatedUser.parentRole || null });
    }
    setRoles(updatedRoles);

    setEditingUser(null);
  };

  
  const handleDelete = (id) => {
    const deletedUser = users.find(user => user.id === id);
    setUsers((prev) => prev.filter((user) => user.id !== id));

    
    const updatedRoles = roles.filter((role) => {
      
      return users.some(user => user.role === role.name && user.id !== id);
    });
    
    setRoles(updatedRoles);
  };

 
  const handleAddUser = (newUser) => {
    setUsers((prev) => [
      ...prev,
      { id: users.length + 1, ...newUser }, 
    ]);

    
    const newRole = { name: newUser.role, parentRole: newUser.parentRole || null };
    if (!roles.some(role => role.name === newRole.name)) {
      setRoles((prevRoles) => [...prevRoles, newRole]); 
    }

    setAddingUser(false); 
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        User Management with Role Hierarchy
      </Typography>

      
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => setAddingUser(true)}
        style={{ marginBottom: '20px' }}
      >
        Add User
      </Button>

      <Grid container spacing={3}>
        
        <Grid item xs={12} md={6}>
          <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
        </Grid>

        
        <Grid item xs={12} md={6}>
          <RoleHierarchyFlow roles={roles}  users={users}/> 
        </Grid>
      </Grid>

     
      {editingUser && (
        <EditUserDialog
          user={editingUser}
          onClose={() => setEditingUser(null)}
          onSave={handleSaveEdit}
        />
      )}

      
      {addingUser && (
        <AddUserDialog
          onClose={() => setAddingUser(false)}
          onSave={handleAddUser} 
          roles={roles} 
        />
      )}
    </Container>
  );
};

export default UserManagement;
