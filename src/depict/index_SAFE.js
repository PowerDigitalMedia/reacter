import React from 'react'

import {
  //BrowserRouter as Router,
  Switch,
  Route
  //Link
} from "react-router-dom";


import { useWindowDimensions } from '../utils/WindowDimensionsProvider'





//===========================
//CSS
//===========================

import '../App.css';



//===========================
//PAGES
//===========================

import Home from "./Home";
import LiquidImageDisplay from "./LiquidImageDisplay";
import DynamicForm from "./DynamicForm";







//######################################################
//######################################################
//######################################################


const lorem = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed iure blanditiis voluptatum nulla quidem minus quam tempora obcaecati necessitatibus inventore! Vitae totam quam pariatur facilis fugit maxime adipisci eaque.";

const testData = [

    {

        position: 1, 

        id: Math.random(),
        title: "Ferrari",
        text: lorem,
        bgColor: "#D5CAFA",

        image:{

            src:"/images/raceaway.jpg",
            w:"150",
            h:"150"

        }
    },


    {

        position: 2,

        id: Math.random(),
        title: "Ferrari",
        text: lorem,
        bgColor: "#EDA9A9",

        image:{

            src:"/images/wheel.jpg",
            w:"150",
            h:"150"

        }


    },



    {

        position: 3,

        id: Math.random(),
        title: "Ferrari",
        text: lorem,
        bgColor: "#F2EE8D",

        image:{

            src:"/images/engine.jpg",
            w:"150",
            h:"150"

        }


    },
    {
        position: 4,

        id: Math.random(),
        title: "Ferrari",
        text: lorem,
        bgColor: "#9FEACD",

        image:{

            src:"/images/ferrari-red-bw.jpg",
            w:"150",
            h:"150"

        }


    },



    
    {

        position: 5, 

        id: Math.random(),
        title: "Ferrari",
        text: lorem,
        bgColor: "#D5CAFA",

        image:{

            src:"/images/ferrari-snow.jpg",
            w:"150",
            h:"150"

        }
    },


    {

        position: 6,

        id: Math.random(),
        title: "Ferrari",
        text: lorem,
        bgColor: "#EDA9A9",

        image:{

            src:"/images/ferrari-fender-logo.jpg",
            w:"150",
            h:"150"

        }


    },


    {

        position: 7,

        id: Math.random(),
        title: "Ferrari",
        text: lorem,
        bgColor: "#F2EE8D",

        image:{

            src:"/images/ferrari-frontlight.jpg",
            w:"150",
            h:"150"

        }


    },



    {
        position: 8,

        id: Math.random(),
        title: "Ferrari",
        text: lorem,
        bgColor: "#9FEACD",

        image:{

            src:"/images/ferrari-towards.jpg",
            w:"150",
            h:"150"

        }


    },




    {
        position: 9,

        id: Math.random(),
        title: "Ferrari",
        text: lorem,
        bgColor: "#9FEACD",

        image:{

            src:"/images/formula1.jpg",
            w:"150",
            h:"150"

        }


    },





    
    {

        position: 10, 

        id: Math.random(),
        title: "Ferrari",
        text: lorem,
        bgColor: "#D5CAFA",

        image:{

            src:"/images/wheel.jpg",
            w:"150",
            h:"150"

        }
    },








    {
        position: 11,

        id: Math.random(),
        title: "Ferrari",
        text: lorem,
        bgColor: "#9FEACD",

        image:{

            src:"/images/ferrari-red-backlight.jpg",
            w:"150",
            h:"150"

        }


    }







];





//######################################################
//######################################################
//######################################################

function handleClick(v){


    if(Object.prototype.toString.call(v) === "[object Object]")
    {
        alert(JSON.stringify(v,null,2));
    }
    else
    {
        alert(v);

    }//==


}//===





//######################################################
//######################################################
//######################################################

const Depict = (props) => {


    const { height } = useWindowDimensions()

    const scrollbox_h = (height - props.stageTopHeight) + "px";

    //console.log("SCROLLBOX H: "+scrollbox_h);



    return (


        <Switch>

           

            <Route path="/dynamicform">

                <div 
                id="scrollbox"
                className="App-stage-scrollbox"
                style={{

                    height : scrollbox_h
                }}
                
                >
                    <DynamicForm

                        data={testData} 
                        title="Dynamic Form" 
                        onClick={(v)=>handleClick(v)} 
                        
                    />

                </div>

            </Route>



            <Route path="/liquid-image-display">

                <div 
                id="scrollbox"
                className="App-stage-scrollbox"
                style={{

                    height : scrollbox_h
                }}
                
                >
                    <LiquidImageDisplay 
                    
                        data={testData} 
                        title="LiquidImageDisplay" 
                        onClick={(v)=>handleClick(v)} 
                        
                    />

                </div>

            </Route>



            <Route path="/">

                <div 
                id="scrollbox"
                className="App-stage-scrollbox"
                style={{

                    height : scrollbox_h
                }}
                
                >
                    <Home />

                </div>

            </Route>

        </Switch>


    )


}

export default Depict
