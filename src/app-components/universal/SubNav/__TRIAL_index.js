
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

import '../../../App.css';


//===========================
//HOOKS
//===========================

import { useLiquidNavBar } from '../../../utils/myHooks/LiquidFormula/NavBar';


//===========================
//DATA
//===========================

import { Data } from './Data';






//######################################################
//######################################################
//######################################################

const Index = (props) => {



    //let match = useRouteMatch();
    let location = useLocation();
    //let params = useParams();
 
    //alert("LOCATION: "+JSON.stringify(location,null,2));
    //alert("MATCH: "+JSON.stringify(match,null,2));


    //###################################################
    //###################################################
    //const [shuttleArray, setShuttleArray] = useState([])
    const [shuttleWidth, setShuttleWidth] = useState(0)
    //const [shuttleLeft, setShuttleLeft] = useState(0)

    const refA = useRef(null)
    const refB = useRef(null)


    
    //###################################################
    //###################################################

    let array = [];
    //let array = Data[''];

    //var host = window.location.host;

    var regx;
    for(var k in Data)
    {

        regx = new RegExp(k,"gi");
        if(location.pathname.match(regx))
        {

            var subobj;
            var subar = Data[k];
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



    //###################################################
    //###################################################

    useEffect(() => {

        //var marleft = (refA.current.offsetWidth - refB.current.offsetWidth)/2;
        //alert(refA.current.offsetWidth);
        //setShuttleLeft(marleft);
        setShuttleWidth(refB.current.offsetWidth);
    

    },[])

    

    
    

    
    //###################################################
    //###################################################

    //const { width, height } = useWindowDimensions()

    //console.log("PROPS: "+JSON.stringify(props,null,2));
    //console.log("TAGS-PROPS-DATA: "+props.data);


    const gridCall = "grid_cell";//grid_column_cell or grid_cell
    const cellInfo = {

        "border":{

            "boolean"     :true,
            "thickness"   :1,
            "color"       :"lightgray",
            "radius"      :10
        }

    };

    const across = false;


    const stuff = useLiquidNavBar(

        array,
        gridCall,
        cellInfo,
        shuttleWidth,
        across

    );



    console.log("STUFF:::: "+JSON.stringify(stuff,null,2));

    



    //###################################################
    //###################################################
    //###################################################

    return (


        <div 
        ref={refA}
        id='AppSubNav'
        className="App-stage-subnav"
        style={{

            backgroundColor : props.subnavObj.bgColor,
            width : props.subnavW,
            height : props.subnavH

        }}
        
        >


            <div 
            ref={refB} 
            id='AppSubNavShuttle'
            className="App-stage-subnav-shuttle"
            style={{

                backgroundColor : stuff.grid.bgColor,
                //width           : stuff.grid.width,
                width           : 'auto',
                marginLeft      : stuff.grid.left
                //marginLeft      : shuttleLeft + "px"
    
            }}

            >






                {

                //-----------------------------------------------

                stuff.data.map((object, j) => (
                //array.map((object, j) => (

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

export default Index



