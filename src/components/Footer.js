import React from "react";
import Twitter from "../images/twitter.png"
import Facebook from "../images/facebook.png"
import Instagram from "../images/instagram.png"
import Github from "../images/github (1).png"


export default function Footer(){
    return(
        <footer>
        <a href="https://www.linkedin.com/in/jessica-jones-571360278/"> <img src={Twitter} alt="Twitter" className="twitter social-icon"/></a>
         <a href="https://www.linkedin.com/in/jessica-jones-571360278/"><img src={Facebook} alt="Facebook" className="facebook social-icon"/></a>
         <a href="https://www.linkedin.com/in/jessica-jones-571360278/"><img src={Instagram} alt="Instagram" className="instagram social-icon"/></a>
         <a href="https://www.linkedin.com/in/jessica-jones-571360278/"><img src={Github} alt="Github" className="github social-icon"/></a>


        </footer>
    )
}