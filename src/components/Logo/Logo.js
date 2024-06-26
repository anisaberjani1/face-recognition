import React from "react";
import Tilt from 'react-parallax-tilt';
import face from './logo.png'
import './Logo.css'

const Logo= () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" style={{ height: 150,width:150 }}>
                <div className="pa3">
                    <img style={{paddingTop:'5px'}} src={face} alt="logo"/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;