const employees = [
  {
    id: 1,
    firstName: "John",
    email: "employee1@example.com",
    password: "pass1",
    taskCount: { active: 2, failed: 0, newTask: 1, completed: 0 },
    tasks: [
      {
        title: "Prepare Sales Report",
        description: "Compile the weekly sales data and prepare a comprehensive report.",
        date: "2024-12-26",
        category: "Reporting",
        active: true,
        newTask: false,
        failed: false,
      },
      {
        title: "Update CRM Records",
        description: "Ensure all customer interactions are logged into the CRM system.",
        date: "2024-12-27",
        category: "Data Entry",
        active: false,
        newTask: true,
        failed: false,
      },
      {
        title: "Team Meeting",
        description: "Participate in the quarterly strategy meeting with the team.",
        date: "2024-12-28",
        category: "Meetings",
        active: true,
        newTask: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    firstName: "Emma",
    email: "employee2@example.com",
    password: "pass2",
    taskCount: { active: 1, failed: 1, newTask: 1, completed: 0 },
    tasks: [
      {
        title: "Review Marketing Materials",
        description: "Check and approve the new marketing brochures.",
        date: "2024-12-26",
        category: "Marketing",
        active: false,
        newTask: true,
        failed: false,
      },
      {
        title: "Customer Feedback Analysis",
        description: "Analyze customer feedback data from the past month.",
        date: "2024-12-27",
        category: "Analysis",
        active: true,
        newTask: false,
        failed: false,
      },
      {
        title: "Inventory Audit",
        description: "Conduct an audit of current inventory levels.",
        date: "2024-12-29",
        category: "Operations",
        active: true,
        newTask: false,
        failed: true,
      },
    ],
  },
  {
    id: 3,
    firstName: "Sophia",
    email: "employee3@example.com",
    password: "pass3",
    taskCount: { active: 2, failed: 0, newTask: 1, completed: 0 },
    tasks: [
      {
        title: "Budget Planning",
        description: "Prepare a budget plan for the upcoming quarter.",
        date: "2024-12-30",
        category: "Finance",
        active: true,
        newTask: false,
        failed: false,
      },
      {
        title: "Employee Onboarding",
        description: "Assist in onboarding new team members.",
        date: "2024-12-26",
        category: "HR",
        active: false,
        newTask: true,
        failed: false,
      },
      {
        title: "System Upgrade",
        description: "Ensure smooth execution of the planned system upgrade.",
        date: "2024-12-28",
        category: "IT",
        active: true,
        newTask: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    firstName: "Liam",
    email: "employee4@example.com",
    password: "pass4",
    taskCount: { active: 2, failed: 0, newTask: 1, completed: 0 },
    tasks: [
      {
        title: "Social Media Campaign",
        description: "Design and launch a new social media campaign.",
        date: "2024-12-27",
        category: "Marketing",
        active: true,
        newTask: false,
        failed: false,
      },
      {
        title: "Vendor Negotiations",
        description: "Negotiate better terms with key vendors.",
        date: "2024-12-29",
        category: "Procurement",
        active: false,
        newTask: true,
        failed: false,
      },
      {
        title: "Website Maintenance",
        description: "Oversee regular maintenance of the company website.",
        date: "2024-12-26",
        category: "IT",
        active: true,
        newTask: false,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    firstName: "Oliver",
    email: "employee5@example.com",
    password: "pass5",
    taskCount: { active: 2, failed: 1, newTask: 1, completed: 0 },
    tasks: [
      {
        title: "Client Meeting",
        description: "Attend a meeting with a key client to discuss project progress.",
        date: "2024-12-28",
        category: "Client Relations",
        active: true,
        newTask: false,
        failed: false,
      },
      {
        title: "Prepare Training Materials",
        description: "Create training materials for the new software rollout.",
        date: "2024-12-30",
        category: "Training",
        active: false,
        newTask: true,
        failed: false,
      },
      {
        title: "Policy Review",
        description: "Review and update company policies.",
        date: "2024-12-27",
        category: "Compliance",
        active: true,
        newTask: false,
        failed: true,
      },
    ],
  },
];


const Admin =[
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "admin"
      }
]
  
  export  const SetLocalstorage=()=>{

    localStorage.setItem("employee",JSON.stringify(employees))
    localStorage.setItem("Admin",JSON.stringify(Admin))
  }

  export const GetLocalstorage = () => {
    const employeedata = JSON.parse(localStorage.getItem("employee")); // Retrieve and parse employee data
    const admindata = JSON.parse(localStorage.getItem("Admin"));  

    return {employeedata,admindata}
  
  };
  
  