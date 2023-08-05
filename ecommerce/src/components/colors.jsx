import React, { useState } from "react";
import "./Colors.css"


function Colors({button, filter}) {

    return (
        <>
        <h4 className="colorTitle">Product Color</h4>
        <div className="sidebar" >

            <div className="colors"> 
            <br></br>
            {
                button.map((cat, i)=> {
                    return (
                    <button className="colorButton" type="button"  onClick={()=> filter(cat)}>{cat}</button>
                    
                )})
            }
            </div>
        </div>
        </>
    )


    
}    

export default Colors;