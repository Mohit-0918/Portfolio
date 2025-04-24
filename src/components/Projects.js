import React from 'react'
import { Col, Container, Nav,Tab, Row, TabContainer, TabContent } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img9.jpg"
import projImg2 from "../assets/img/project-img5.png"
import projImg3 from "../assets/img/project-img6.png"
import projImg4 from "../assets/img/project-img7.png"
import projImg5 from "../assets/img/project-img8.jpg"
import colorSharp2 from "../assets/img/color-sharp2.png"
export const Projects=()=>{
    const projects = [
        {
            title: "Vidya Vatra",
            description: "An educational platform for academic content and learning tools.",
            imgUrl: projImg1,
            githubUrl: "https://github.com/Mohit-0918/Vidya-Vatra",
        },
        {
            title: "Aura - AI Voice Assistant",
            description: "A personal voice assistant capable of performing intelligent tasks.",
            imgUrl: projImg4,
            githubUrl: "https://github.com/Mohit-0918/AURA",
        },
        {
            title: "Library Management",
            description: "A system to manage book inventories, members, and borrowing records.",
            imgUrl: projImg3,
            githubUrl: "https://github.com/Mohit-0918/Library_Management_Software",
        },
        {
            title: "Emotion Detection",
            description: "A tool that detects human emotions using facial expression analysis.",
            imgUrl: projImg5,
            githubUrl: "https://github.com/Mohit-0918/AURA",
        },
        {
            title: "Ganpati Grid",
            description: "A platform to mange the project tasks for college students.",
            imgUrl: projImg2,
            githubUrl: "https://github.com/Mohit-0918/Ganpati-Grid",
        },
    ];
    
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p></p>
                    <Row className='g-4 mt-3'>
                    { projects.map((project, index) => {
                            return (
                                <ProjectCard key={index} {...project} />
                            );
                        })
                    }
                    </Row>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src ={colorSharp2}></img>
        </section>
    )
}