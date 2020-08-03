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






const APP_PATH = "../../../";


//-------------------------------------
//tags
//-------------------------------------

import Header from APP_PATH + "components/header";
import Navigation from APP_PATH + "components/navigation";
import Subnav from APP_PATH + "components/subnav";
import Depict from APP_PATH + "depict";





const Stage = () => {

    const [stageTopHeight, setStageTopHeight] = useState(50)

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





    useEffect(() => {

        var topHeight = refA.current.offsetHeight + refB.current.offsetHeight + refC.current.offsetHeight;
        //alert(refA.current.offsetHeight+"\n"+refB.current.offsetHeight);
        setStageTopHeight(topHeight);
    
    },[])
    





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
                <Depict 

                    //zoneObj={zoneObj}

                    stageTopHeight={stageTopHeight} 

                />

            </div>



        </div>


    )


}

export default Stage
