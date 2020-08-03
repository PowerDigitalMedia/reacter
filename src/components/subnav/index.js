
import React, { 

    useState, 
    useEffect, 
    useRef 

} from 'react';




import {

    //BrowserRouter as Router,
    //Switch,
    //Route,
    Link,

    //useRouteMatch,
    useLocation,   
    //useParams

} from "react-router-dom";







  

//===========================
//CSS
//===========================

import '../../App.css';



import { SubNavData } from './SubNavData';




//######################################################
//######################################################
//######################################################

const Show = (props) => {


    const [shuttleLeft, setShuttleLeft] = useState(0)

    const refA = useRef(null)
    const refB = useRef(null)



    useEffect(() => {

        var marleft = (refA.current.offsetWidth - refB.current.offsetWidth)/2;
        //alert(refA.current.offsetWidth);
        setShuttleLeft(marleft);

    },[])
    



    //==================================================
    let array = [];
    //let array = SubNavData[''];

    //let match = useRouteMatch();
    let location = useLocation();
    //let params = useParams();


    //var host = window.location.host;

    //alert("LOCATION: "+JSON.stringify(location,null,2));
    //alert("MATCH: "+JSON.stringify(match,null,2));



    var regx;
    for(var k in SubNavData)
    {


        regx = new RegExp(k,"gi");
        if(location.pathname.match(regx))
        {

            var subobj;
            var subar = SubNavData[k];
            for(var i=0; i < subar.length; i++)
            {

                subobj = subar[i];

                array.push({

                    "name"  :subobj['name'],
                    "to"    :subobj['to']
                });

            }
            break;

        }

    }//for k
    

    //==================================================




    //===================================================

    return (


        <div 
        ref={refA}
        id='AppSubNav'
        className="App-stage-subnav"
        style={{

            backgroundColor : props.subnavObj.bgColor,
            height : props.subnavH

        }}
        
        >



            <div 
            ref={refB} 
            id='AppSubNavShuttle'
            className="App-stage-subnav-shuttle"
            style={{

                //backgroundColor : 'red',
                width           : 'auto',
                marginLeft      : shuttleLeft + "px"
    
            }}

            >





                {

                //-----------------------------------------------

                array.map((object, j) => (

                    <div 
                    key={j}
                    >

                        <Link 
                        
                            to={"/"+object['to']}>

                            <div
                            className="App-stage-subnav-button"
                            style={{

                                padding : props.subnavObj.padding
                            }}

                            >

                                {object['name']}

                            </div>


                        </Link>


                    </div>

                ))

                //------------------------------------------------

                }




            </div>


        </div>

    );


}

export default Show



