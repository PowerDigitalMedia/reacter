//===========================
//react
//===========================

import React, { 

    useState, 
    useEffect, 
    useRef 

} from 'react';


//===========================
//react-router-dom
//===========================

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
//HOOKS
//===========================

//import { useLiquidNavBar } from '../../../utils/myHooks/LiquidFormula/NavBar';
import { useWindowDimensions } from '../../../utils/WindowDimensionsProvider'


//===========================
//DATA
//===========================

import { Data } from './Data';


//===========================
//CSS
//===========================

import logo from '../../../grfx/logo.svg';
import '../../../App.css';
//import { fontSize } from 'pdfkit/js/mixins/fonts';





//######################################################
//######################################################
//######################################################

const Index = (props) => {



    //.log("HEADER PROPS zoneObj:" + props.zoneObj);




    const { width } = useWindowDimensions()

    

    //let match = useRouteMatch();
    let location = useLocation();
    //let params = useParams();
 
    console.log("LOCATION: "+JSON.stringify(location,null,2));
    //alert("MATCH: "+JSON.stringify(match,null,2));


    //###################################################
    //###################################################

    const [winThresh, setWinThresh] = useState(10000)

    //const [shuttleWidth, setShuttleWidth] = useState(0)
    //const [shuttleTop, setShuttleTop] = useState(5)
    //const [shuttleLeft, setShuttleLeft] = useState(15)

    //const [buttonHDif, setButtonHDif] = useState(5)

    //const [headerHeight, setHeaderHeight] = useState(0)


    const refMain = useRef(null)
    const refNB = useRef(null)
    const refNBShut = useRef(null)
    


    //===================================================

    let pathname = location.pathname;

    if(pathname.charAt(0) === '/') 
        pathname = pathname.substring(1,pathname.length);


    //-------------------------------------------


    let thresh = {

        a:700,
        b:500,
        c:350

    };

    //-------------------------------------------

    let navbarHInt = 40;
    let navbarH = navbarHInt + "px";

    let navbtnObj = {


        height      : 'auto',
        padding     : "10px 15px 13px 15px",
        fontSize    : "14px"

    };

 
    //===================================================


 


    






    //###################################################
    //###################################################

    useEffect(() => {


        //var buttonHDif = (refNB.current.offsetHeight - refNBShut.current.offsetHeight)/2;
        //setButtonHDif(buttonHDif);
    

        //var marleft = (refNB.current.offsetWidth - refNBShut.current.offsetWidth)/2;
        //setShuttleLeft(marleft);

        //var shuttleWidth = refNBShut.current.offsetWidth;
        //setShuttleWidth(shuttleWidth);




        //alert(refHdr.current.offsetHeight +"\n"+ refMain.current.offsetHeight +"\n"+ refNB.current.offsetHeight);
    
        //var headerHeight = refMain.current.offsetHeight + refNB.current.offsetHeight + "px";
        //setHeaderHeight(headerHeight);




        var threshA = thresh['a'];
        var threshB = thresh['b'];
        var threshC = thresh['c'];


        var newThresh;

        if(width < threshC
        )
        {
            newThresh = threshC;
        }
        else
        if(width < threshB
        && width > threshC
        )
        {
            newThresh = threshB;
        }
        else
        if(width < threshA
        && width > threshB
        )
        {
        
            newThresh = threshA
        }
        else
        if(width > threshA)
        {
            newThresh = 10000;
        }



        if(winThresh !== newThresh)
        {

            //alert(newThresh);
            setWinThresh(newThresh);
        
        }
     


    },[
        

        width,
        winThresh,
        thresh,
        navbtnObj
    

    ])

    




/*

    //###################################################
    //###################################################

    var gridWInt;
    var gridW;
    var gridMarl;

    gridWInt = shuttleWidth;
    gridW = gridWInt + "px";
    //gridMarl = 0 + "px";
    gridMarl = (width - gridWInt)/2 + "px";



*/






    //###################################################
    //###################################################

    let array = [];
    //let array = Data[''];

    //var host = window.location.host;


    var navobj;
    var ar = Data['navigation'];
    var loop = ar.length;

    //console.log("SHUTTLE WIDTH: "+shuttleWidth+"\nWINTHRESH"+winThresh)

    if(width < thresh['b']
    )
    {
        loop = 1;
        
    }//==

    for(var i=0; i < loop; i++)
    {

        navobj = ar[i];

        array.push({

            "name"  :navobj['name'],
            "to"    :navobj['to']
        });

    }










    //######################################################
    //######################################################
    //######################################################

    return (


        <header 
        className="App-header"
        >




            {
            //######################################
            //######################################

            //MAIN

            //######################################
            //######################################
            }


            <div 
            ref={refMain}
            className="main"
            style={{

                height : 'auto'
            }}

            >


                <img src={logo} className="logo" alt="logo" />


                <div className="title">

                    PowerDigitalMedia
                    
                </div>



                <div className="App-react-stuff">

                    <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        Learn React
                    </a>

                </div>



            </div>







            {
            //######################################
            //######################################

            //NAVBAR

            //######################################
            //######################################
            }


            <div 
            ref={refNB}
            className="App-navbar"
            style={{

                height : navbarH
            }}

            >


                <div 
                ref={refNBShut}
                className="shuttle"
                style={{

                    //backgroundColor : 'purple',
                    width           : 'auto',
                    marginLeft      : "10px",
                    //marginLeft      : shuttleLeft + "px",

                }}

                >


                    {

                    //-----------------------------------------------

                    //stuff.data.map((object, j) => (
                    array.map((object, j) => (

                        <div 
                        key={j}
                        >


                            <Link 
                            
                                to={"/"+object['to']}>

                                {
                                //------------------------------------
                                // home button (current)
                                //------------------------------------
                                object['to'] === '' 
                                && pathname === ''
                                ?

                                    <div
                                    className="button-hold"
                                    style={{

                                        height          : navbtnObj['height'],
                                        padding         : navbtnObj['padding'],
                                        fontSize        : navbtnObj['fontSize']
                
                                    }}

                                    >

                                        {object['name']}

                                    </div>


                                :
                                //------------------------------------
                                // other buttons (current)
                                //------------------------------------
                                object['to'] !== ''
                                && pathname.match(RegExp(object['to'],'gi'))
                                ? 

                
                                    <div
                                    className="button-hold"
                                    style={{

                                        height          : navbtnObj['height'],
                                        padding         : navbtnObj['padding'],
                                        fontSize        : navbtnObj['fontSize']
                
                                    }}

                                    >

                                        {object['name']}

                                    </div>


                              
                                //------------------------------------
                                // active buttons
                                //------------------------------------
                                : 

                                    <div
                                    className="button"
                                    style={{

                                        height          : navbtnObj['height'],
                                        padding         : navbtnObj['padding'],
                                        fontSize        : navbtnObj['fontSize']
                
                                    }}

                                    >

                                        {object['name']}

                                    </div>



                                //-------------------------------------
                                }
                            


                            </Link>

                        </div>

                    ))

                    //------------------------------------------------

                    }





                </div>


            </div>


        </header>


    );


}

export default Index



