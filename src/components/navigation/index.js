import React from "react";
import {
    //BrowserRouter as Router,
    //Switch,
    //Route,
    Link
} from "react-router-dom";
  

//===========================
//CSS
//===========================

import '../../App.css';






//######################################################
//######################################################
//######################################################

const Show = (props) => {

    return (


        <div 
        className="App-stage-navbar"
        style={{

            height : props.navbarH
        }}
        
        >

            <Link to="/">
                <div 
                className="App-stage-navbar-button"
                style={{

                    padding : props.navbtnObj.padding
                }}

                >
                    Home
                </div>
            </Link>



            <Link to="/liquid-image-display">
                <div 
                className="App-stage-navbar-button"
                style={{

                    padding : props.navbtnObj.padding
                }}

                >
                    Liquid Image Display
                </div>
            </Link>
            

            
            <Link to="/dynamicform">
                <div 
                className="App-stage-navbar-button"
                style={{

                    padding : props.navbtnObj.padding
                }}

                >
                    Dynamic Form
                </div>
            </Link>

    


        </div>

    );


}

export default Show



