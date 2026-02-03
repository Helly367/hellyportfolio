"use client";
import { useEffect, useState } from 'react';

export default function MesProjectsPage() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/data/projects.json')
            .then(res => res.json())
            .then(setProjects);
    }, []);

    return (
        <div>
            <h2>Tous mes projets ({projects.length})</h2>
            <div className="projects-grid">
                {projects.map(project => (
                    <div key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}