import React from 'react';
import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [toRotate, setToRotate] = useState([]);
    const [description, setDescription] = useState('');
    const delta = useRef(300 - Math.random() * 1000);
    const period = 3000;

    useEffect(() => {
        // Fetch toRotate and description from text files in the public folder
        const fetchData = async () => {
            const toRotateResponse = await fetch('/data/toRotate.txt');
            const descriptionResponse = await fetch('/data/description.txt');
            const toRotateData = await toRotateResponse.text();
            const descriptionData = await descriptionResponse.text();

            setToRotate(toRotateData.split('\n')); // Split lines into an array
            setDescription(descriptionData);
        };

        fetchData();
    }, []);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta.current);

        return () => clearInterval(ticker);
    }, [text, toRotate]);

    const tick = () => {
        if (toRotate.length === 0) return; // Wait until toRotate is loaded

        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            delta.current = 100; // Faster deletion speed
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            delta.current = period; // Pause before deleting
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            delta.current = 1000; // Pause before typing the next word
        } else {
            delta.current = 200; // Default typing speed
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome</span>
                        <h1>{'Hi I am Mohit '}<br /><span className="wrap">{text}</span></h1>
                        <p>{description}</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};