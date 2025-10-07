import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/project/${project.id}`);
    };

    return (
        <div className="project-card" onClick={handleClick}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </div>
    );
};

export default ProjectCard;