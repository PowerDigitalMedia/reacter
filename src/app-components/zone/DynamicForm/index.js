//-------------------------------------
//react
//-------------------------------------

import React, { 

    useState, 
    useEffect, 
    //useRef 

} from 'react';


//-------------------------------------
//react-router-dom
//-------------------------------------

import {

    //BrowserRouter as Router,
    //Switch,
    //Route,
    //Link,
    //useRouteMatch,
    //useLocation,   
    //useParams

} from "react-router-dom";




//-------------------------------------
//hooks
//-------------------------------------

import { useWindowDimensions } from '../../../utils/WindowDimensionsProvider'




//-----------------------------------
// css
//-----------------------------------

import '../../../App.css';
import "../../../app-style/area.css";






//-------------------------------------
//tags
//-------------------------------------

import Tags from './Tags';





//######################################################################
//######################################################################
//######################################################################


const Index = (props) => {




    //=================================================

    const { height } = useWindowDimensions()

    //==================================================

    const [scrollboxHeight, setScrollboxHeight] = useState(50)

    //==================================================

    //let match = useRouteMatch();
    //let location = useLocation();
    //let params = useParams();

    //=================================================






    //####################################################
    //####################################################

    useEffect(() => {

        var topHeight = props.stageTopHeight;
        var scrollbox_h = (height - topHeight) + "px";
        setScrollboxHeight(scrollbox_h);


    
    },[
        props,
        height
    ])
    






    //####################################################
    //####################################################

    return (

        <div className="App-stage">

           
            <div 
            id="scrollbox"
            className="App-scrollbox"
            style={{

                height : scrollboxHeight
            }}
            
            >

                <div className="area" id="area">

                    {/* 
                    <div className="area-title">{props.title}</div>
                    */}


                    <Tags />


                </div>


            </div>


        </div>


    )


}

export default Index




