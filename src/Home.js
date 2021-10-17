import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div>
        <div className="home">
                <h2 className="heading11">Covid-19</h2>

                <div className="nav">
                    <ul className="listsinhome">
                        <Link to=""> <h4 className="ta">Home</h4></Link> 
                      <Link to="/Hospitals">   <h4 className="ta">Hospitals</h4></Link>
                        <Link to="/login"><h4 className="ta">Hospital Login</h4></Link>
                        
                    </ul>
                </div>


            
        </div>

        <img  className="photodisp" src={require('./photo/home.svg').default} alt=""/>
            <div className="disp">
                <h3 className="hea1">Stay Home,Stay Safe</h3>
                <h1 className="hea2">Protect Yourself<br/> From Covid-19</h1>

            </div>

        </div>
    )
}

export default Home
