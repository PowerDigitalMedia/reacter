
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
    Switch,
    Route,
    //Link,
    useRouteMatch,
    useLocation,   
    //useParams

} from "react-router-dom";




//-------------------------------------
//Transitions
//-------------------------------------

//import { CSSTransition } from 'react-transition-group';///NOT INSTALLED






//-------------------------------------
//hooks
//-------------------------------------

import { useWindowDimensions } from '../../../utils/WindowDimensionsProvider'




//-----------------------------------
// css
//-----------------------------------

import '../../../App.css';
import "../../../app-style/area.css";




//-----------------------------------
// subsections
//-----------------------------------

import FlexHeight from './FlexHeight';
import FixedHeight from './FixedHeight';
//import { reduce } from 'async';



//=====================================
// utils
//=====================================

import NavGrid from '../../../utils/myBuilds/NavGrid/Tags';


//=====================================
// zoneObj
//=====================================

import { zoneObj } from './zoneObj';






//######################################################################
//######################################################################
//######################################################################

const Index = (props) => {



    //=================================================

    const { height } = useWindowDimensions()

    //==================================================

    const [scrollboxHeight, setScrollboxHeight] = useState(50)


    //==================================================

    let data = props.data;
    let click = props.onClick;

    let match = useRouteMatch();
    let location = useLocation();
    //let params = useParams();

    console.log("MATCH: "+match.path);
    console.log("LOC: "+JSON.stringify(location,null,2));
    //console.log("PARAMS: "+JSON.stringify(params,null,2));

    //==================================================





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
    




    var inProp = true;
 




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

               

                <div 
                className="area"
                style={{

                    //backgroundColor     : 'red',
                    width               : "100%",
                    marginLeft          : "0px"

                }}
                >


                    {/*

                    <div className="area-title">Liquid Image Display</div>


                    <ul>


                        <li>
                        <Link to={`${match.url}`}>
                            Liquid Home
                        </Link>
                        </li>


                        <li>
                        <Link to={`${match.url}/flexible-height`}>
                            Flexible Height
                        </Link>
                        </li>

                        <li>
                        <Link to={`${match.url}/fixed-height`}>
                            Fixed Height
                        </Link>
                        </li>

                    </ul>


                    */}




                    {/* 
                        The Topics page has its own <Switch> with more routes
                        that build on the /topics URL path. You can think of the
                        2nd <Route> here as an "index" page for all topics, or
                        the page that is shown when no topic is selected 

                    */}

                    <Switch>

                        <Route path={`${match.path}/:topicId`}>

                            <div>



                                {
                                //------------------------------------
                                //flexible
                                //------------------------------------
                                //topicId === 'flexible-height' ? 
                                location.pathname.match(/flexible-height/gi) ?

                                    <FlexHeight 
                                        
                                        data={data} 
                                        title="Flexible Version" 
                                        onClick={click}
                                            
                                    />

                                : null

                                }



                                {
                                //------------------------------------
                                //fixed
                                //------------------------------------
                                //topicId === 'fixed-height' ? 
                                location.pathname.match(/fixed-height/gi) ?


                                    <FixedHeight 
                                            
                                        data={data} 
                                        title="Fixed Version" 
                                        onClick={click}
                                            
                                    />

                                : null

                                }



                            </div>


                        </Route>



                        <Route path={match.path}>



                        {/* 
                            <div>

                                <h3>Please select a topic.</h3>

                                <div>

                                    <p>
                                        <strong>Match Props: </strong>
                                        <code>{JSON.stringify(match, null, 2)}</code>
                                    </p>
                                    <p>
                                        <strong>Location Props: </strong>
                                        <code>{JSON.stringify(location, null, 2)}</code>
                                    </p>

                                </div>

                            </div>

                        */}



     

                            <NavGrid gridInfo={{

                                data : zoneObj.navigation,

                                gridCall : 'grid_cell_descr',
                                cellBorderInfo : {

                                    "boolean"       :true,
                                    "thickness"     :1,//px
                                    "color"         :"#454d5f" 

                                }

                            }} />


                        
                        </Route>



                    </Switch>


                </div>


            </div>


        </div>





    )


}

export default Index








/*
<CSSTransition in={inProp} timeout={200} classNames="fade-enter">
</CSSTransition>






<CSSTransition
    in={showMessage}
    timeout={300}
    classNames="alert"
    unmountOnExit
    onEnter={() => setShowButton(false)}
    onExited={() => setShowButton(true)}
>
    <Alert
        variant="primary"
        dismissible
        onClose={() => setShowMessage(false)}
    >
    <Alert.Heading>
        Animated alert message
    </Alert.Heading>
        <p>
            This alert message is being transitioned in and
            out of the DOM.
        </p>
        <Button onClick={() => setShowMessage(false)}>
            Close
        </Button>
    </Alert>

</CSSTransition>


*/
