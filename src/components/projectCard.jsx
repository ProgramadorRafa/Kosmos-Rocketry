import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Main.css";

const ProjectCard = ({ project }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/project/${project.id}`);
    };

    return (
        <div className="project-card" onClick={handleClick}>
            <div className="image">
                <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </div>
    );
};

export default ProjectCard;