export const roleHierarchy = [
    { id: "1", label: "Admin", parent: null },
    { id: "2", label: "Manager", parent: "1" },
    { id: "3", label: "Supervisor", parent: "2" },
    { id: "4", label: "Employee", parent: "3" },
    { id: "5", label: "Intern", parent: "4" },
  ];
  