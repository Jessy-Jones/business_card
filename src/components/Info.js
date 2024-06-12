import React from "react"
import myImage from "../images/Myself.jpg"
import Email from "../images/email.png"
import LinkedIn from "../images/linkedin.png"

export default function Info(){
    return(
        <>
            <div className="image--container"> 
                <img className="photo" src={myImage} alt="Myself"/>
                </div>
            <h3 className="name">Jessica Jones</h3>
            <p className="portfolio">Frontend Developer</p>
            <p className="work">Websites</p>
            <div className="button-container">
            <a href="mailto:jessyjones476@gmail.com"><button className="email-btn"><img src={Email} alt="Email-Icon" className="icon"/>Email</button></a>
            <a href="https://www.linkedin.com/in/jessica-jones-571360278/"><button className="linkedin-btn"><img src={LinkedIn} alt="LinkedIn-Icon" className="icon" id="linkedin-icon"/>LinkedIn</button></a>
            </div>
            </>

    )
}
