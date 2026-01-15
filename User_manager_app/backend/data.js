import  express  from "express";
const router  = express.Router();

const employees = {
  fullTimeEmployee: {
    id: 1,
    name: "Aman Sharma",
    role: "Software Engineer",
    department: "Engineering",
    salary: 750000,
    joiningDate: "2022-06-15"
  },

  partTimeEmployee: {
    id: 2,
    name: "Riya Verma",
    role: "UI Designer",
    department: "Design",
    hourlyRate: 600,
    workingHours: 20
  },

  intern: {
    id: 3,
    name: "Kunal Mehta",
    college: "IIT Delhi",
    duration: "6 months",
    mentor: "Rahul Singh",
    stipend: 15000
  },

  contractEmployee: {
    id: 4,
    name: "Neha Kapoor",
    contractLength: "12 months",
    projectName: "User Manager Revamp",
    payRate: 120000
  },

  remoteEmployee: {
    id: 5,
    name: "Arjun Rao",
    role: "Backend Developer",
    department: "Engineering",
    salary: 900000,
    workLocation: "Remote",
    timezone: "IST"
  }
};

router.get("/" , (req , res)=>{
    res.json(employees)
})

export default router;