// src/services/roleService.js
import api from './api';

// CRUD Operations for Roles
export const fetchRoles = () => api.get('/roles');
export const createRole = (roleData) => api.post('/roles', roleData);
export const updateRole = (roleId, roleData) => api.put(`/roles/${roleId}`, roleData);
export const deleteRole = (roleId) => api.delete(`/roles/${roleId}`);
