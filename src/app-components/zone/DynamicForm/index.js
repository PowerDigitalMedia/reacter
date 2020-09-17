
import React, { 

    useState, 
    useEffect, 
    //useRef 

} from 'react';

import {

    //BrowserRouter as Router,
    //Switch,
    //Route,
    //Link,
    //useRouteMatch,
    //useLocation,   
    //useParams

} from "react-router-dom";



import { useWindowDimensions } from '../../../utils/WindowDimensionsProvider'


import '../../../App.css';
import "../../../app-style/area.css";


import Tags from './Tags';



const Index = (props) => {


    const { height } = useWindowDimensions()
    const [scrollboxHeight, setScrollboxHeight] = useState(50)

    useEffect(() => {

        var topHeight = props.stageTopHeight;
        var scrollbox_h = (height - topHeight) + "px";
        setScrollboxHeight(scrollbox_h);


    
    },[
        props,
        height
    ])
    

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




