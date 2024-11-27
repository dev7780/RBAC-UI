
export const mockUsers = [
    { id: 1, name: "John Doe", role: "Admin" },
    { id: 2, name: "Jane Smith", role: "Manager", parentRole: "Admin" },
    { id: 3, name: "Emily Davis", role: "Team Lead", parentRole: "Manager" },
    { id: 4, name: "Michael Brown", role: "Senior Developer", parentRole: "Team Lead" },
    { id: 5, name: "Chris Wilson", role: "Junior Developer", parentRole: "Senior Developer" },
  ];
  
  export const roles = [
    { id: 1, name: 'Admin', parentRole: null },
    { id: 2, name: 'Manager', parentRole: 'Admin' },
    { id: 3, name: 'Team Lead', parentRole: 'Manager' },
    { id: 4, name: 'Senior Developer', parentRole: 'Team Lead' },
    { id: 5, name: 'Junior Developer', parentRole: 'Senior Developer' },
  ];
  
  export const mockRoles = [
    { id: 1, name: 'miachel', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'lucy', permissions: ['Read', 'Write'] },
    { id: 3, name: 'john', permissions: ['Read'] },
  ];
  