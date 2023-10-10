
import { useState,useEffect } from "react";
import { Container,Row,Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"

export const Banner=()=>{
    const[loopNum, setloopNum]=useState(0);
    const[isDeleting,setIsDeleting]=useState(false);
    const toRotate=["Software Developer","Java Developer","Full Stack Web Developer"];
    const [text,setText]= useState('');
    const [delta,setDelta]=useState(300-Math.random()*1000);
    const period =3000;
// useEffect is used to handle the animation loop
    useEffect(()=>{
          // setInterval is used to repeatedly call the tick function with a specified delay (delta)
        let ticker = setInterval(()=>{
            tick();
        },delta)
         // Cleanup: clearInterval to stop the animation when the component unmounts
        return ()=>{clearInterval(ticker)};
    },[text]);// The effect runs whenever the 'text' state changes

    // The tick function is responsible for updating the text and controlling the animation

    const tick=()=>{
        // Calculate the index for the current job title based on 'loopNum'
        let i=loopNum%toRotate.length;
        let fullText =toRotate[i];
         // Calculate 'updatedText' based on whether text is being added or deleted
        let updatedText =isDeleting?fullText.substring(0,text.length -1):fullText.substring(0,text.length+1);
         // Update the 'text' state with the calculated 'updatedText
        setText(updatedText);
         // If text is being deleted, decrease the delay (delta) for a faster deletion effect
        if(isDeleting){
            setDelta(prvDelta =>prvDelta/3)
        }
        // If text is fully displayed, switch to deletion mode and adjust the delay (delta)
        if(!isDeleting &&updatedText ===fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        // If text is fully deleted, switch back to typing mode and reset the delay (delta)
        else if(isDeleting&&updatedText===''){
            setIsDeleting(false);
            setloopNum(loopNum+1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome</span>
                        <h1>{'Hi i am Mohit '}<br></br><span className="wrap">{text}</span></h1>
                        <p>Description</p>
                        <button onClick={()=>console.log('connect')}>Let's Connect<ArrowRightCircle sixe={25}></ArrowRightCircle></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}