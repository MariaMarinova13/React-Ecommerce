import "./footer.css"
import React from "react";


const Footer=()=>{
    return(
        <>
        <div className="footer">
            <div className="mainSection">
                <div className="links">
                    <div className="links-div">
                    <h4> ABOUT </h4>
                    <a href=""><p> About Us </p></a>
                    <a href=""><p> Careers </p></a>
                    <a href=""><p> Press </p></a>
                    </div>
                    <div className="links-div">
                    <h4> HELP </h4>
                    <a href=""><p> Help Center </p></a>
                    <a href=""><p> FAQs </p></a>
                    <a href=""><p> Contact Us </p></a>
                    </div>
                    <div className="links-div">
                    <h4> SEQURITY & PRIVACY </h4>
                    <a href=""><p> Privacy Policy </p></a>
                    <a href=""><p> Terms Of Use </p></a>
                    <a href=""><p> Return Policy </p></a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default Footer;