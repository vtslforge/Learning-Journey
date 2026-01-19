import  express, { Router }  from "express";
const router  = express.Router();

const studb = {
    class_9th: [
        { id: 101, name: "Aman Singh", roll_number: 10, age: 14, gender: "Male", marks: { math: 85, science: 90 }, attendance: "95%" },
        { id: 102, name: "Sanya Iyer", roll_number: 11, age: 14, gender: "Female", marks: { math: 78, science: 88 }, attendance: "92%" }
    ],
    class_10th: [
        { id: 201, name: "Abhi Sharma", roll_number: 12, age: 15, gender: "Male", marks: { math: 92, science: 85 }, attendance: "88%" },
        { id: 202, name: "Meera Reddy", roll_number: 13, age: 15, gender: "Female", marks: { math: 80, science: 95 }, attendance: "98%" }
    ],
    class_11th: [
        { id: 301, name: "Rahul Verma", roll_number: 1, age: 16, gender: "Male", stream: "Science", marks: { physics: 75, chemistry: 82 }, attendance: "85%" },
        { id: 302, name: "Ananya Gupta", roll_number: 2, age: 16, gender: "Female", stream: "Commerce", marks: { accounts: 90, economics: 88 }, attendance: "90%" }
    ],
    class_12th: [
        { id: 401, name: "Vikram Malhotra", roll_number: 5, age: 17, gender: "Male", stream: "Arts", marks: { history: 88, pol_science: 92 }, attendance: "94%" },
        { id: 402, name: "Zoya Khan", roll_number: 6, age: 17, gender: "Female", stream: "Science", marks: { physics: 95, chemistry: 98 }, attendance: "99%" }
    ]
};

// simple get method
router.get("/studentsdb" ,  ( req , res)=>{
    res.json(studentsDatabase)
})

// get using params
// URL: http://localhost:3001/api/studb/class_10th
router.get("/studb/:className", (req, res) => {
    // 1. "className" is the KEY (e.g., "class_10th")
    const key = req.params.className;
    const data = studb[key]; 

    if (data) {
        res.json(data);
    } else {
        res.status(404).json({ error: "Class key not found" });
    }
});
//get using query
// http://localhost:3001/api/studb/class_9th?gender=Male
router.get("/studb/:className", (req, res) => {
    // 1. Get the class from Params
    const key = req.params.className; 
    // 2. Get the gender from Query (?gender=Male)
    const filterGender = req.query.gender;
    const studentClass = studb[key];
    // 3. Simple Logic: If there is a gender query, filter. If not, send the whole class.
    if (filterGender) {
        const filteredList = studentClass.filter(s => s.gender === filterGender);
        return res.json(filteredList);
    }
    res.json(studentClass);
});

export default router
