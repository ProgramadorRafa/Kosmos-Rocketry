import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProjectCard from "../../components/projectCard";
import HeroFlat from "../../components/HeroFlat";

const projectData = [
    {
        id: 1,
        title: "MORPHEUS",
        description: "Começou a ser desenvolvido em 2023 com o intuito de participar da International Engineering Rocket Competition (IREC), a maior competição de foguetes universitários do mundo em 2024. Porém...",
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
            <section className="project-banner">
                <div className="text-container">
                    <div className="text-projects">
                        <h1>Advancing  human <br /> spaceflight</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, debitis non at cupiditate impedit obcaecati rerum eos laudantium dicta iure minima quo voluptatibus laboriosam a.</p>
                        <Link className="btnBorder" to="/contact">Junte-se a nós <i class="ri-arrow-right-line"></i></Link>
                    </div>
                </div>
                <div className="backgound_image">
                    <img src="" alt="backgound" />
                </div>
            </section>
            <section className="projects">
                <h3 className="title">Principais Projetos</h3>
                <div className="project-list">
                    <div className="project-content">
                        {projectData.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onClick={() => handleProjectClick(project.id)}
                            />
                        ))}
                    </div>
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