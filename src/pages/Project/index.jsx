import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProjectCard from "../../components/projectCard";

const projectData = [
    {
        id: 1,
        title: "Project One",
        description: "Description for project one.",
        image: "/images/project/project1.png"
    },
    {
        id: 2,
        title: "Hagemeyer",
        description: "Foi o primeiro grande projeto da equipe sem ser categorizado como mini foguete, tendo apogeu de 1 km para competir na LASC 2019. Seu motor foi o primeiro com...",
        image: "/images/project/project2.png"

    },
    {
        id: 3,
        title: "Project Three",
        description: "Description for project three.",
        image: "/images/project/project3.png"

    }
];

export default function Projects() {
    const navigate = useNavigate();

    const handleProjectClick = (id) => {
        navigate(`/project/${id}`);
    };

    return (
        <>
            <Header />
            <section className="projects">
                <h1>Nossos projetos</h1>
                <div className="project-list">
                    {projectData.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={() => handleProjectClick(project.id)}
                        />
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
}




// import React from "react";
// import Header from "../../components/Header"

// function Project() {
//     return(
//         <>
//             <Header />
//             <h1>Olá Mundo!</h1>
//         </>
//     )
// }

// export default Project;