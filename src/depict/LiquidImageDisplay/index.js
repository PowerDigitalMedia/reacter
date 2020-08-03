
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
    Switch,
    Route,
    //Link,
    useRouteMatch,
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




//-----------------------------------
// subsections
//-----------------------------------

import FlexHeight from './FlexHeight';
import FixedHeight from './FixedHeight';








//######################################################################
//######################################################################
//######################################################################

const Index = (props) => {



    //=================================================

    const { height } = useWindowDimensions()

    //==================================================

    const [scrollboxHeight, setScrollboxHeight] = useState(50)

    const refA = useRef(null)
    const refB = useRef(null)
    const refC = useRef(null)

    //==================================================


    //=================================================

    let data = props.data;
    let click = props.onClick;

    let match = useRouteMatch();
    let location = useLocation();
    //let params = useParams();

    console.log("MATCH: "+match.path);
    console.log("LOC: "+JSON.stringify(location,null,2));
    //console.log("PARAMS: "+JSON.stringify(params,null,2));

    //==================================================




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
    





    //====================================================

    useEffect(() => {


        var topHeight = refA.current.offsetHeight + refB.current.offsetHeight + refC.current.offsetHeight;
        //alert(refA.current.offsetHeight+"\n"+refB.current.offsetHeight);

        var scrollbox_h = (height - topHeight) + "px";

        setScrollboxHeight(scrollbox_h);



    
    },[height])

    //====================================================







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



                    <div className='area'>


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


                            </Route>



                        </Switch>


                    </div>




                </div>


            </div>



        </div>


    )


}

export default Index


