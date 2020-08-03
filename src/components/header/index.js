import React from "react";


//===========================
//CSS
//===========================

import logo from '../../grfx/logo.svg';
import '../../App.css';






//######################################################
//######################################################
//######################################################

const Show = (props) => {



    //.log("HEADER PROPS zoneObj:" + props.zoneObj);



    return (


        <header className="App-stage-header">


            <img src={logo} className="App-logo" alt="logo" />


            <div className="App-title">

                PowerDigitalMedia - Reacter
                
            </div>



            <div className="App-react-stuff">

                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                    Learn React
                </a>

            </div>




        </header>


    );


}

export default Show



