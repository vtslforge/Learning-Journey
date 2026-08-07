const NestedMap = () => {
  const departments = [
    {
      department: "Development",
      employees: [
        { name: "Vatsalya", role: "Frontend Developer" },
        { name: "Rahul", role: "Backend Developer" },
      ],
    },
    {
      department: "Design",
      employees: [
        { name: "Priya", role: "UI Designer" },
        { name: "Aman", role: "UX Designer" },
      ],
    },
    {
      department: "HR",
      employees: [{ name: "Sneha", role: "HR Manager" }],
    },
  ];

  return (
    <div>
      <h1>Company Employees</h1>

      {departments.map((dept) => (
        <div key={dept.department}>
          <h2>{dept.department}</h2>

          {dept.employees.map((employee) => (
            <div key={employee.name}>
              <p>Name: {employee.name}</p>
              <p>Role: {employee.role}</p>
              <hr />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default NestedMap;
