import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const projectData = [
    {
        id: "1",
        title: "Project One",
        description: "This is a detailed description of Project One."
    },
    {
        id: "2",
        title: "Project Two",
        description: `
            Foi o primeiro grande projeto da equipe sem ser categorizado como mini foguete, tendo apogeu de 1 km para competir na LASC 2019. Seu motor foi o primeiro com case de aço feito inteiramente pela equipe, o qual foi utilizado no ALFA. Também foi o primeiro projeto da equipe no processo de reestruturação que aconteceu em 2019, tendo trabalho efetivo de todos os setores. O voo dele não foi nominal, mas rendeu uma boa experiência para o pessoal da época.
            Curiosidades: Tinha o formato peculiar com a ogiva maior que o corpo do foguete, pois o sistema de aviônica ficou maior do que o planejado. Além disso, seu nome é em homenagem a um antigo membro da equipe.

        `
    },
    {
        id: "3",
        title: "Project Three",
        description: "This is a detailed description of Project Three."
    }
];

export default function ProjectDetails() {
    const { id } = useParams();
    const project = projectData.find((proj) => proj.id === id);

    if (!project) {
        return (
            <>
                <h1>Projeto não encontrado</h1>
            </>
        )
    }

    return (
        <>
            <Header />
            <div className="project-details">
                <img src={`/images/project/project${id}.png`} alt="" />
                <h1>{project.title}</h1>
                <p>{project.description}</p>
            </div>
            <Link to="/project">Back to Projects</Link>
            <Footer />
        </>
    );
}