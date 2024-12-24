const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Hardcoded list of candidates
const candidates = [
    { name: "tarun", skills: "JavaScript, React", experience: 5 },
    { name: "kumar", skills: "Java, Spring Boot", experience: 8 },
    { name: "chandan singh ", skills: "Python, Django", experience: 4 },
    { name: "sohan", skills: "Ruby, Rails", experience: 6 },
    { name: "mohan", skills: "C++, Unreal Engine", experience: 7 },
    { name: "lokesh", skills: "HTML, CSS", experience: 3 },
    { name: "gaurav", skills: "DevOps, Docker", experience: 9 },
    { name: "hemant", skills: "PHP, Laravel", experience: 5 },
    { name: "jacky singh", skills: "C#, .NET", experience: 6 },
    { name: "mitanshu chaudaury", skills: "Go, Kubernetes", experience: 4 },
];

// API endpoint
app.get("/api/candidates", (req, res) => {
    res.json(candidates);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
