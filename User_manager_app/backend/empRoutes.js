import  express, { Router }  from "express";
const router  = express.Router();

const emp = {
  fullTimeEmployee: [
    {
      id: 1,
      name: "Aman Sharma",
      role: "Software Engineer",
      department: "Engineering",
      salary: 750000,
      joiningDate: "2022-06-15"
    },
    {
      id: 2,
      name: "Priya Gupta",
      role: "Product Manager",
      department: "Product",
      salary: 1200000,
      joiningDate: "2021-03-10"
    },
    {
      id: 3,
      name: "Vikram Singh",
      role: "Data Analyst",
      department: "Analytics",
      salary: 650000,
      joiningDate: "2023-01-20"
    },
    {
      id: 4,
      name: "Sneha Iyer",
      role: "HR Manager",
      department: "Human Resources",
      salary: 850000,
      joiningDate: "2020-09-05"
    },
    {
      id: 5,
      name: "Rahul Menon",
      role: "Senior Software Engineer",
      department: "Engineering",
      salary: 1100000,
      joiningDate: "2019-07-12"
    },
    {
      id: 6,
      name: "Anjali Reddy",
      role: "Marketing Manager",
      department: "Marketing",
      salary: 950000,
      joiningDate: "2021-11-08"
    },
    {
      id: 7,
      name: "Karthik Nair",
      role: "DevOps Engineer",
      department: "Engineering",
      salary: 900000,
      joiningDate: "2022-02-14"
    },
    {
      id: 8,
      name: "Divya Patel",
      role: "UX Researcher",
      department: "Design",
      salary: 800000,
      joiningDate: "2023-04-01"
    },
    {
      id: 9,
      name: "Anil Kumar",
      role: "Finance Manager",
      department: "Finance",
      salary: 1000000,
      joiningDate: "2020-01-15"
    },
    {
      id: 10,
      name: "Pooja Agarwal",
      role: "Sales Executive",
      department: "Sales",
      salary: 700000,
      joiningDate: "2022-08-20"
    },
    {
      id: 11,
      name: "Sanjay Verma",
      role: "Tech Lead",
      department: "Engineering",
      salary: 1400000,
      joiningDate: "2018-05-10"
    },
    {
      id: 12,
      name: "Meera Krishnan",
      role: "Business Analyst",
      department: "Product",
      salary: 750000,
      joiningDate: "2021-09-25"
    },
    {
      id: 13,
      name: "Ravi Bose",
      role: "Quality Assurance Lead",
      department: "Quality Assurance",
      salary: 950000,
      joiningDate: "2020-06-18"
    },
    {
      id: 14,
      name: "Kavita Joshi",
      role: "Content Strategist",
      department: "Marketing",
      salary: 680000,
      joiningDate: "2023-02-10"
    },
    {
      id: 15,
      name: "Arjun Pillai",
      role: "Cloud Architect",
      department: "Engineering",
      salary: 1600000,
      joiningDate: "2019-03-22"
    },
    {
      id: 16,
      name: "Nisha Malhotra",
      role: "Recruitment Manager",
      department: "Human Resources",
      salary: 820000,
      joiningDate: "2021-12-05"
    },
    {
      id: 17,
      name: "Amit Desai",
      role: "Security Engineer",
      department: "Engineering",
      salary: 1050000,
      joiningDate: "2022-04-16"
    },
    {
      id: 18,
      name: "Lakshmi Rao",
      role: "Legal Counsel",
      department: "Legal",
      salary: 1300000,
      joiningDate: "2020-10-12"
    },
    {
      id: 19,
      name: "Suresh Choudhary",
      role: "Operations Manager",
      department: "Operations",
      salary: 900000,
      joiningDate: "2021-07-30"
    },
    {
      id: 20,
      name: "Tanvi Shah",
      role: "Data Scientist",
      department: "Analytics",
      salary: 1250000,
      joiningDate: "2022-11-08"
    }
  ],

  partTimeEmployee: [
    {
      id: 1,
      name: "Riya Verma",
      role: "UI Designer",
      department: "Design",
      hourlyRate: 600,
      workingHours: 20
    },
    {
      id: 2,
      name: "Karan Malhotra",
      role: "Content Writer",
      department: "Marketing",
      hourlyRate: 450,
      workingHours: 15
    },
    {
      id: 3,
      name: "Simran Kaur",
      role: "Graphic Designer",
      department: "Design",
      hourlyRate: 550,
      workingHours: 25
    },
    {
      id: 4,
      name: "Rohan Desai",
      role: "Social Media Manager",
      department: "Marketing",
      hourlyRate: 500,
      workingHours: 18
    },
    {
      id: 5,
      name: "Aditi Bhatt",
      role: "Video Editor",
      department: "Media",
      hourlyRate: 650,
      workingHours: 22
    },
    {
      id: 6,
      name: "Manish Gupta",
      role: "SEO Specialist",
      department: "Marketing",
      hourlyRate: 480,
      workingHours: 16
    },
    {
      id: 7,
      name: "Neha Tripathi",
      role: "Copywriter",
      department: "Marketing",
      hourlyRate: 420,
      workingHours: 20
    },
    {
      id: 8,
      name: "Vishal Pandey",
      role: "Illustrator",
      department: "Design",
      hourlyRate: 580,
      workingHours: 24
    },
    {
      id: 9,
      name: "Shruti Saxena",
      role: "Voice Over Artist",
      department: "Media",
      hourlyRate: 700,
      workingHours: 12
    },
    {
      id: 10,
      name: "Gaurav Mehta",
      role: "Photographer",
      department: "Media",
      hourlyRate: 750,
      workingHours: 15
    },
    {
      id: 11,
      name: "Priyanka Sinha",
      role: "Email Marketing Specialist",
      department: "Marketing",
      hourlyRate: 460,
      workingHours: 18
    },
    {
      id: 12,
      name: "Deepak Sharma",
      role: "Animation Designer",
      department: "Design",
      hourlyRate: 620,
      workingHours: 20
    },
    {
      id: 13,
      name: "Swati Bansal",
      role: "Event Coordinator",
      department: "Operations",
      hourlyRate: 520,
      workingHours: 16
    },
    {
      id: 14,
      name: "Ashish Tiwari",
      role: "Data Entry Specialist",
      department: "Operations",
      hourlyRate: 350,
      workingHours: 25
    },
    {
      id: 15,
      name: "Ritika Chopra",
      role: "Customer Support",
      department: "Support",
      hourlyRate: 380,
      workingHours: 20
    }
  ],

  intern: [
    {
      id: 1,
      name: "Kunal Mehta",
      college: "IIT Delhi",
      duration: "6 months",
      mentor: "Rahul Singh",
      stipend: 15000
    },
    {
      id: 2,
      name: "Naman Sharma",
      college: "IIT Bombay",
      duration: "6 months",
      mentor: "Rahul Singh",
      stipend: 15000
    },
    {
      id: 3,
      name: "Aarav Patel",
      college: "NIT Surat",
      duration: "3 months",
      mentor: "Anita Verma",
      stipend: 12000
    },
    {
      id: 4,
      name: "Diya Reddy",
      college: "BITS Pilani",
      duration: "6 months",
      mentor: "Priya Gupta",
      stipend: 18000
    },
    {
      id: 5,
      name: "Ishaan Joshi",
      college: "NIT Trichy",
      duration: "4 months",
      mentor: "Aman Sharma",
      stipend: 14000
    },
    {
      id: 6,
      name: "Ananya Nair",
      college: "IIT Madras",
      duration: "6 months",
      mentor: "Arjun Rao",
      stipend: 16000
    },
    {
      id: 7,
      name: "Yash Agarwal",
      college: "IIT Kharagpur",
      duration: "5 months",
      mentor: "Sanjay Verma",
      stipend: 17000
    },
    {
      id: 8,
      name: "Sanya Kulkarni",
      college: "NIT Warangal",
      duration: "3 months",
      mentor: "Vikram Singh",
      stipend: 11000
    },
    {
      id: 9,
      name: "Vihaan Kapoor",
      college: "IIIT Hyderabad",
      duration: "6 months",
      mentor: "Karthik Nair",
      stipend: 16500
    },
    {
      id: 10,
      name: "Isha Bansal",
      college: "DTU Delhi",
      duration: "4 months",
      mentor: "Meera Krishnan",
      stipend: 13000
    },
    {
      id: 11,
      name: "Aryan Chauhan",
      college: "IIT Roorkee",
      duration: "6 months",
      mentor: "Arjun Pillai",
      stipend: 18500
    },
    {
      id: 12,
      name: "Tara Mishra",
      college: "VIT Vellore",
      duration: "3 months",
      mentor: "Divya Patel",
      stipend: 10000
    },
    {
      id: 13,
      name: "Kabir Sen",
      college: "Manipal Institute",
      duration: "5 months",
      mentor: "Ravi Bose",
      stipend: 14500
    },
    {
      id: 14,
      name: "Myra Roy",
      college: "NIT Calicut",
      duration: "4 months",
      mentor: "Tanvi Shah",
      stipend: 13500
    },
    {
      id: 15,
      name: "Reyansh Das",
      college: "IIT Guwahati",
      duration: "6 months",
      mentor: "Amit Desai",
      stipend: 17500
    },
    {
      id: 16,
      name: "Anika Singh",
      college: "Jadavpur University",
      duration: "3 months",
      mentor: "Anjali Reddy",
      stipend: 11500
    },
    {
      id: 17,
      name: "Advait Bhardwaj",
      college: "IIT Kanpur",
      duration: "6 months",
      mentor: "Rahul Menon",
      stipend: 19000
    },
    {
      id: 18,
      name: "Saanvi Iyer",
      college: "Anna University",
      duration: "4 months",
      mentor: "Sneha Iyer",
      stipend: 12500
    },
    {
      id: 19,
      name: "Ayaan Khan",
      college: "Amity University",
      duration: "3 months",
      mentor: "Kavita Joshi",
      stipend: 9500
    },
    {
      id: 20,
      name: "Navya Pandey",
      college: "SRM University",
      duration: "5 months",
      mentor: "Pooja Agarwal",
      stipend: 13000
    },
    {
      id: 21,
      name: "Vivaan Ghosh",
      college: "IIT BHU",
      duration: "6 months",
      mentor: "Sanjay Verma",
      stipend: 18000
    },
    {
      id: 22,
      name: "Kiara Jain",
      college: "BITS Goa",
      duration: "4 months",
      mentor: "Nisha Malhotra",
      stipend: 14000
    },
    {
      id: 23,
      name: "Atharv Yadav",
      college: "NIT Rourkela",
      duration: "3 months",
      mentor: "Suresh Choudhary",
      stipend: 11000
    },
    {
      id: 24,
      name: "Zara Malik",
      college: "Pune University",
      duration: "5 months",
      mentor: "Lakshmi Rao",
      stipend: 12000
    },
    {
      id: 25,
      name: "Dhruv Sethi",
      college: "IIT Indore",
      duration: "6 months",
      mentor: "Arjun Pillai",
      stipend: 17000
    }
  ],

  contractEmployee: [
    {
      id: 1,
      name: "Neha Kapoor",
      contractLength: "12 months",
      projectName: "User Manager Revamp",
      payRate: 120000
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      contractLength: "6 months",
      projectName: "Mobile App Development",
      payRate: 150000
    },
    {
      id: 3,
      name: "Pooja Agarwal",
      contractLength: "9 months",
      projectName: "Cloud Migration",
      payRate: 140000
    },
    {
      id: 4,
      name: "Sanjay Pillai",
      contractLength: "18 months",
      projectName: "AI Integration",
      payRate: 180000
    },
    {
      id: 5,
      name: "Madhuri Shetty",
      contractLength: "8 months",
      projectName: "E-commerce Platform",
      payRate: 130000
    },
    {
      id: 6,
      name: "Tarun Bajaj",
      contractLength: "10 months",
      projectName: "CRM System Upgrade",
      payRate: 145000
    },
    {
      id: 7,
      name: "Vandana Rana",
      contractLength: "12 months",
      projectName: "Data Analytics Dashboard",
      payRate: 155000
    },
    {
      id: 8,
      name: "Harish Menon",
      contractLength: "7 months",
      projectName: "Payment Gateway Integration",
      payRate: 125000
    },
    {
      id: 9,
      name: "Sonali Dubey",
      contractLength: "15 months",
      projectName: "Machine Learning Pipeline",
      payRate: 175000
    },
    {
      id: 10,
      name: "Nikhil Varma",
      contractLength: "6 months",
      projectName: "Website Redesign",
      payRate: 110000
    },
    {
      id: 11,
      name: "Geeta Balakrishnan",
      contractLength: "11 months",
      projectName: "Blockchain Implementation",
      payRate: 165000
    },
    {
      id: 12,
      name: "Ashok Pandey",
      contractLength: "9 months",
      projectName: "Inventory Management System",
      payRate: 135000
    },
    {
      id: 13,
      name: "Ritu Chatterjee",
      contractLength: "14 months",
      projectName: "Cybersecurity Audit",
      payRate: 170000
    },
    {
      id: 14,
      name: "Varun Naik",
      contractLength: "8 months",
      projectName: "Marketing Automation",
      payRate: 128000
    },
    {
      id: 15,
      name: "Pallavi Jha",
      contractLength: "12 months",
      projectName: "HR Portal Development",
      payRate: 140000
    },
    {
      id: 16,
      name: "Manoj Thakur",
      contractLength: "10 months",
      projectName: "IoT Device Management",
      payRate: 150000
    },
    {
      id: 17,
      name: "Shweta Ghoshal",
      contractLength: "6 months",
      projectName: "Social Media Analytics",
      payRate: 115000
    },
    {
      id: 18,
      name: "Rajat Chopra",
      contractLength: "13 months",
      projectName: "Supply Chain Optimization",
      payRate: 160000
    }
  ],

  remoteEmployee: [
    {
      id: 1,
      name: "Arjun Rao",
      role: "Backend Developer",
      department: "Engineering",
      salary: 900000,
      workLocation: "Remote",
      timezone: "IST"
    },
    {
      id: 2,
      name: "Meera Krishnan",
      role: "DevOps Engineer",
      department: "Engineering",
      salary: 950000,
      workLocation: "Remote",
      timezone: "IST"
    },
    {
      id: 3,
      name: "Aditya Bhat",
      role: "Frontend Developer",
      department: "Engineering",
      salary: 800000,
      workLocation: "Remote",
      timezone: "EST"
    },
    {
      id: 4,
      name: "Kavya Menon",
      role: "QA Engineer",
      department: "Quality Assurance",
      salary: 700000,
      workLocation: "Remote",
      timezone: "PST"
    },
    {
      id: 5,
      name: "Siddharth Pillai",
      role: "Full Stack Developer",
      department: "Engineering",
      salary: 1050000,
      workLocation: "Remote",
      timezone: "IST"
    },
    {
      id: 6,
      name: "Rhea Khanna",
      role: "UX/UI Designer",
      department: "Design",
      salary: 850000,
      workLocation: "Remote",
      timezone: "GMT"
    },
    {
      id: 7,
      name: "Akash Vora",
      role: "Mobile Developer",
      department: "Engineering",
      salary: 920000,
      workLocation: "Remote",
      timezone: "IST"
    },
    {
      id: 8,
      name: "Isha Deshmukh",
      role: "Product Designer",
      department: "Design",
      salary: 880000,
      workLocation: "Remote",
      timezone: "CET"
    },
    {
      id: 9,
      name: "Pranav Joshi",
      role: "Data Engineer",
      department: "Analytics",
      salary: 1000000,
      workLocation: "Remote",
      timezone: "IST"
    },
    {
      id: 10,
      name: "Tanya Bose",
      role: "Technical Writer",
      department: "Documentation",
      salary: 650000,
      workLocation: "Remote",
      timezone: "EST"
    },
    {
      id: 11,
      name: "Rohit Malhotra",
      role: "Solutions Architect",
      department: "Engineering",
      salary: 1400000,
      workLocation: "Remote",
      timezone: "IST"
    },
    {
      id: 12,
      name: "Naina Kapoor",
      role: "Customer Success Manager",
      department: "Customer Success",
      salary: 750000,
      workLocation: "Remote",
      timezone: "PST"
    },
    {
      id: 13,
      name: "Kartik Saxena",
      role: "Machine Learning Engineer",
      department: "AI/ML",
      salary: 1300000,
      workLocation: "Remote",
      timezone: "IST"
    },
    {
      id: 14,
      name: "Leela Nambiar",
      role: "Project Manager",
      department: "Product",
      salary: 1100000,
      workLocation: "Remote",
      timezone: "GMT"
    },
    {
      id: 15,
      name: "Sameer Ahuja",
      role: "Security Analyst",
      department: "Security",
      salary: 950000,
      workLocation: "Remote",
      timezone: "IST"
    },
    {
      id: 16,
      name: "Anushka Reddy",
      role: "Business Intelligence Analyst",
      department: "Analytics",
      salary: 820000,
      workLocation: "Remote",
      timezone: "EST"
    },
    {
      id: 17,
      name: "Jay Mehta",
      role: "System Administrator",
      department: "IT",
      salary: 780000,
      workLocation: "Remote",
      timezone: "IST"
    },
    {
      id: 18,
      name: "Shreya Kulkarni",
      role: "Scrum Master",
      department: "Product",
      salary: 900000,
      workLocation: "Remote",
      timezone: "CET"
    }
  ]
};

router.get("/empdb" , (req , res)=>{
    res.json(emp)
})


export default router;