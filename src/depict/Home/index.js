//-------------------------------------
//react
//-------------------------------------

import React, { 

    useState, 
    useEffect, 
    useRef 

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
    useLocation,   
    //useParams

} from "react-router-dom";





//-------------------------------------
//hooks
//-------------------------------------

import { useWindowDimensions } from '../../utils/WindowDimensionsProvider'




//-------------------------------------
//components
//-------------------------------------

import Header from "../../components/header";
import Navigation from "../../components/navigation";
import Subnav from "../../components/subnav";




//-----------------------------------
// css
//-----------------------------------

import '../../App.css';
import "../../css/area.css";






//###################################################################
//###################################################################
//###################################################################


const Index = (props) => {




    //=================================================

    const { height } = useWindowDimensions()

    //=================================================


    const [scrollboxHeight, setScrollboxHeight] = useState(50)

    const refA = useRef(null)
    const refB = useRef(null)
    const refC = useRef(null)


    //==================================================

    //let match = useRouteMatch();
    let location = useLocation();
    //let params = useParams();


    //-------------------------------------------

    let navbarH = "30px";
    let navbtnObj = {

        padding:"5px 15px 8px 15px",
        fontSize:"12px"

    };

    //-------------------------------------------

    let subnavH = "0px";

    let subnavObj = {};
    subnavObj['bgColor'] = '#edeef1';
    subnavObj['fontSize'] = '12px';

    
    if(location.pathname !== '/')
    {
        subnavH = "40px";

        subnavObj['bgColor'] = '#edeef1';
        subnavObj['fontSize'] = '12px';
    
    }
    
    //===================================================





    //###################################################
    //###################################################

    useEffect(() => {

        var topHeight = refA.current.offsetHeight + refB.current.offsetHeight + refC.current.offsetHeight;
        //alert(refA.current.offsetHeight+"\n"+refB.current.offsetHeight);

        var scrollbox_h = (height - topHeight) + "px";

        setScrollboxHeight(scrollbox_h);

    
    },[height])
    






    //###################################################
    //###################################################

    return (

        <div className="App-stage">

            <div 
            ref={refA}
            >

                <Header 
                    //zoneObj={zoneObj}
                />

            </div>
            


            <div 
            ref={refB} 
            style={{

                height : navbarH
            }}

            >

                <Navigation 

                    //zoneObj={zoneObj}

                    navbarH={navbarH} 
                    navbtnObj={navbtnObj} 

                />

            </div>


    

            <div 
            ref={refC} 
            style={{

                height : subnavH
            }}

            >
                <Subnav 

                    subnavH={subnavH} 
                    subnavObj={subnavObj} 

                />

            </div>








            <div>


                <div 
                id="scrollbox"
                className="App-stage-scrollbox"
                style={{

                    height : scrollboxHeight
                }}
                
                >

                    <div className="area">

                    {

                    <div className="area-title">Home</div>


                    }

                    </div>


                </div>


            </div>





        </div>


    )


}

export default Index


