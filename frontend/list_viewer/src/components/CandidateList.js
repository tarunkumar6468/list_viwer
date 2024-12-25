import React, { useState, useEffect } from "react";
import axios from "axios";

const CandidateList = () => {
    const [candidates, setCandidates] = useState([]);
    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(() => {
        axios.get("http://localhost:5000/api/candidates")
            .then((response) => setCandidates(response.data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const filteredCandidates = candidates.filter(candidate =>
        candidate.name.toLowerCase().includes(search.toLowerCase()) ||
        candidate.skills.toLowerCase().includes(search.toLowerCase())
    );

    // Sort candidates based on Years of Experience
    const sortedCandidates = [...filteredCandidates].sort((a, b) => {
        if (sortOrder === "asc") {
            return a.experience - b.experience; // Ascending order
        } else {
            return b.experience - a.experience; // Descending order
        }
    });

    
    const handleSort = () => {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Candidate List Viewer</h1>
            <input
                type="text"
                placeholder="Search by Name or Skills"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ marginBottom: "10px", padding: "5px" }}
            />
            <button onClick={handleSort} style={{ marginBottom: "10px" }}>
                Sort by Experience ({sortOrder === "asc" ? "Ascending" : "Descending"})
            </button>
            <table border="1" style={{ width: "100%", marginTop: "10px" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Skills</th>
                        <th>Years of Experience</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedCandidates.map((candidate, index) => (
                        <tr key={index}>
                            <td>{candidate.name}</td>
                            <td>{candidate.skills}</td>
                            <td>{candidate.experience}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};

export default CandidateList;
