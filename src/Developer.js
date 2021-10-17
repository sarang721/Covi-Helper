import React from 'react'
import './Developer.css'

function Developer() {
    return (
        <div className="developer"> 

        <img className="image" src={require("./photo/myphoto1.jfif").default}></img>

        <h4>Developed By Sarang Rajurkar</h4>
        <h5>Student at Vishwakarma Institute of Technology ,Pune</h5>
        </div>
    )
}

export default Developer
