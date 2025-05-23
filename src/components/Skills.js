import React, { useState, useEffect, useRef } from 'react';
import { Container} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter3.svg";
import meter3 from "../assets/img/meter2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import "../CSS/Skills.css";

export const Skills = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isManualChange, setIsManualChange] = useState(false);
    const carouselRef = useRef(null);

    const skillCategories = [
        { category: "Programming Languages", skills: [{ img: meter1, title: "Java" }, { img: meter2, title: "C" }, { img: meter1, title: "C++" }, { img: meter3, title: "Python" }] },
        { category: "Frameworks", skills: [{ img: meter2, title: "React" }, { img: meter3, title: "Swing" }, { img: meter1, title: "NodeJS" }, { img: meter2, title: "Spring" }] },
        { category: "Database", skills: [{ img: meter1, title: "SQL" }, { img: meter1, title: "MongoDB" }, { img: meter3, title: "pgSQL" }] },
        { category: "Others", skills: [{ img: meter1, title: "Git" }, { img: meter3, title: "Deep Learning" }, { img: meter1, title: "REST APIs" }, { img: meter2, title: "Google Cloud" }] }
    ];

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    // Auto-change every 2s unless recently manually changed
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isManualChange && carouselRef.current) {
                const nextIndex = (activeIndex + 1) % skillCategories.length;
                carouselRef.current.goToSlide(nextIndex);
            }
        }, 1500);

        return () => clearInterval(interval);
    }, [activeIndex, isManualChange, skillCategories.length]);

    const handleBeforeChange = () => {
        setIsManualChange(true);
        // Delay resetting auto mode to allow user to browse
        setTimeout(() => setIsManualChange(false), 3000);
    };

    const handleAfterChange = (_, { currentSlide }) => {
        setActiveIndex(currentSlide);
    };

    return (
        <section className="skill" id="skills">
            <Container>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <Carousel
                                ref={carouselRef}
                                responsive={responsive}
                                infinite={true}
                                className="skill-slider"
                                beforeChange={handleBeforeChange}
                                afterChange={handleAfterChange}
                                customTransition="transform 700ms ease-in-out"
                                autoPlay={false}
                                arrows={true}
                                swipeable={true}
                                draggable={true}
                                showDots={true}
                                ssr={true}
                                keyBoardControl={true}
                                containerClass="carousel-container"
                                itemClass="carousel-item-padding-40-px"
                                dotListClass="custom-dot-list-style"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                            >
                                {skillCategories.map((category, index) => (
                                    <div key={index} className="category">
                                        <h3>{category.category}</h3>
                                        <div className="skills-container">
                                            {category.skills.map((skill, skillIndex) => (
                                                <div className="item" key={skillIndex}>
                                                    <img src={skill.img} alt="Skill" className="skill-image" />
                                                    <h5>{skill.title}</h5>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Background" />
        </section>
    );
};
