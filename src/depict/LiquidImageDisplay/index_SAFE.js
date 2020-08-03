import React from "react";
import {

    //BrowserRouter as Router,
    Switch,
    Route,
    //Link,
    useRouteMatch,
    useLocation,   
    //useParams

} from "react-router-dom";





//-----------------------------------
// style
//-----------------------------------

import "../../css/area.css";



//-----------------------------------
// tags
//-----------------------------------

//import Tags from './Tags';



//-----------------------------------
// subsections
//-----------------------------------

import FlexHeight from './FlexHeight';
import FixedHeight from './FixedHeight';










//###############################################################
//###############################################################
//###############################################################

/*
function Topic() {

    let { topicId } = useParams();
    //return <h3>Requested topic ID: {topicId}</h3>;
    return topicId;

}
*/






//###############################################################
//###############################################################
//###############################################################

function Index(props) {


    //console.log("PROPS ----------- : "+JSON.stringify(props,null,2));

    let data = props.data;
    let click = props.onClick;

    let match = useRouteMatch();
    let location = useLocation();
    //let params = useParams();

    console.log("MATCH: "+match.path);
    console.log("LOC: "+JSON.stringify(location,null,2));
    //console.log("PARAMS: "+JSON.stringify(params,null,2));


    //var topicId = '';



    return (

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
    );
}


export default Index;



