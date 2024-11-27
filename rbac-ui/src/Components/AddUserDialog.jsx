import React, { useState, useEffect } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem, Select, FormControl, InputLabel, Button } from "@mui/material";

const AddUserDialog = ({ onClose, onSave, roles }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [parentRole, setParentRole] = useState("");

  useEffect(() => {
    if (roles.length > 0 && !role) {
      setRole(roles[0].name);
    }
  }, [roles, role]);

  const handleSave = () => {
    const newUser = {
      name,
      role,
      parentRole,
    };
    onSave(newUser);
    onClose();
  };

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);

    const selectedRoleData = roles.find((r) => r.name === selectedRole);
    setParentRole(selectedRoleData?.parentRole || "");
  };

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>Add New User</DialogTitle>
      <DialogContent>
        <TextField
          label="User Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Role</InputLabel>
          <Select
            value={role}
            onChange={handleRoleChange}
            label="Role"
          >
            {roles.map((role) => (
              <MenuItem key={role.id} value={role.name}>
                {role.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {role && (
          <FormControl fullWidth margin="normal">
            <InputLabel>Parent Role</InputLabel>
            <Select
              value={parentRole}
              onChange={(e) => setParentRole(e.target.value)}
              label="Parent Role"
              disabled={role === "Admin"}
            >
              {roles
                .filter((r) => r.name !== role)
                .map((role) => (
                  <MenuItem key={role.id} value={role.name}>
                    {role.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Cancel</Button>
        <Button onClick={handleSave} color="primary">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddUserDialog;
