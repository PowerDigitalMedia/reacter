
import React, { 

    useState, 
    useEffect, 
    //useRef 

} from 'react';


import {

    //BrowserRouter as Router,
    Switch,
    Route,
    //Link,
    useRouteMatch,
    useLocation,   
    //useParams

} from "react-router-dom";



// -- utils --
import { useWindowDimensions } from '../../../utils/WindowDimensionsProvider'
import NavGrid from '../../../utils/myBuilds/NavGrid/Tags';


import '../../../App.css';
import "../../../app-style/area.css";

import FlexHeight from './FlexHeight';
import FixedHeight from './FixedHeight';
//import { reduce } from 'async';


import { zoneObj } from './zoneObj';






const Index = (props) => {


    const { height } = useWindowDimensions()
    const [scrollboxHeight, setScrollboxHeight] = useState(50)

   
    let data = props.data;
    let click = props.onClick;

    let match = useRouteMatch();
    let location = useLocation();
    //let params = useParams();

    console.log("MATCH: "+match.path);
    console.log("LOC: "+JSON.stringify(location,null,2));
    //console.log("PARAMS: "+JSON.stringify(params,null,2));


    useEffect(() => {

        var topHeight = props.stageTopHeight;
        var scrollbox_h = (height - topHeight) + "px";
        setScrollboxHeight(scrollbox_h);


    
    },[
        props,
        height
    ])
    

    var inProp = true;
 

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

