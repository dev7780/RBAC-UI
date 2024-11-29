User Management with Role Hierarchy
Overview
This project provides a user management system where users can be added, edited, and deleted, with roles and a hierarchical structure for those roles. The system is built using React, Material-UI, and ReactFlow for visualizing the role hierarchy. It allows administrators to manage users and assign them roles with parent-child relationships.

Features
User Management: Add, edit, and delete users.
Role Hierarchy: Display the relationship between roles in a flowchart, showing parent-child role associations.
Role Assignment: Assign users to different roles, with the possibility to set parent roles (except for Admin).
Responsive UI: The user interface adapts well to different screen sizes.
Tech Stack
Frontend: React.js, Material-UI, ReactFlow
State Management: React Hooks (useState, useEffect)
Visualization: ReactFlow for displaying the role hierarchy
CSS Framework: Material-UI (MUI)
Setup & Installation
Prerequisites
To run this project, ensure you have the following installed:

Node.js (version 14 or higher)
npm (Node Package Manager)
Steps to Install
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/user-management-role-hierarchy.git
Navigate to the project directory:

bash
Copy code
cd user-management-role-hierarchy
Install the necessary dependencies:

bash
Copy code
npm install
Start the application:

bash
Copy code
npm start
The app will be available at http://localhost:3000.

Folder Structure
bash
Copy code
src/
├── Components/
│   ├── AddUserDialog.jsx        # Dialog for adding a new user
│   ├── EditUserDialog.jsx       # Dialog for editing an existing user
│   ├── RoleHierarchyFlow.jsx   # Displays role hierarchy as a flowchart 
│   └── UserTable.jsx            # Displays user data in a table
├── services/
│   └── mockData.js             # Mock data for users and roles
├── App.jsx                     # Main application component
├── index.js                    # Entry point for the React application
└── styles.css                  # Custom styles (if any)
Usage
Add a New User: Click the "Add User" button to open a dialog where you can input a user's name, role, and optional parent role.
Edit a User: Click the "Edit" button in the user table to modify a user's details.
Delete a User: Click the "Delete" button in the user table to remove a user from the system.
View Role Hierarchy: The roles and their parent-child relationships are displayed in a flowchart on the right side of the screen. This chart updates dynamically as users and roles are modified.
Role Hierarchy
Roles are structured in a hierarchy, where a role can have a parent role (e.g., "Manager" has "Admin" as its parent). The flowchart visualizes this structure, with the root role ("Admin") at the top and other roles branching out below.

Example Roles:
Admin: The top-level role with no parent.
Manager: A role under Admin, which can have employees under it.
Team Lead: A role under Manager, overseeing developers.
Developer: A role under Team Lead.

Dependencies
React
Material-UI
ReactFlow
React Hook Form (for form validation, if desired)
License
This project is licensed under the MIT License.

Acknowledgements
React: A JavaScript library for building user interfaces.
Material-UI: A popular React component library.
ReactFlow: A library to create node-based diagrams (used for visualizing role hierarchy).
Contribution
Feel free to fork this repository and submit pull requests. If you encounter any issues or have suggestions, open an issue, and I will get back to you.
