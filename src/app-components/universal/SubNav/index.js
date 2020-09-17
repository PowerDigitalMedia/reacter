
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



// -- hooks --

//import { useLiquidNavBar } from '../../../utils/myHooks/LiquidFormula/NavBar';
import { useWindowDimensions } from '../../../utils/WindowDimensionsProvider'



import '../../../App.css';
import { Data } from './Data';




const Index = (props) => {


    const { width } = useWindowDimensions()

    //let match = useRouteMatch();
    let location = useLocation();
    //let params = useParams();
 
    const [shuttleLeft, setShuttleLeft] = useState(0)
    const [winThresh, setWinThresh] = useState(10000)

    const refA = useRef(null)
    const refB = useRef(null)

    let pathname = location.pathname;

    if(pathname.charAt(0) === '/') 
        pathname = pathname.substring(1,pathname.length);


    let thresh = {

        a:700,
        b:500,
        c:350

    };

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
    
   

    //###################################################
    //###################################################

    useEffect(() => {



        var marleft = (refA.current.offsetWidth - refB.current.offsetWidth)/2;
        setShuttleLeft(marleft);

        //var shuttleWidth = refB.current.offsetWidth;
        //setShuttleWidth(shuttleWidth);



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
        thresh
    

    ])

    



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
            var loop = subar.length;

            //console.log("SHUTTLE WIDTH: "+shuttleWidth+"\nWINTHRESH"+winThresh)

            if(width < thresh['b']
            )
            {
                loop = 1;
                
            }//==
        
            for(var i=0; i < loop; i++)
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

    return (


        <div 
        ref={refA}
        id='AppSubNav'
        className="App-subnav"
        style={{

            backgroundColor : subnavObj.bgColor,
            width : "100%",
            height : subnavH

        }}
        
        >


            <div 
            ref={refB} 
            id='AppSubNavShuttle'
            className="shuttle"
            style={{

                //backgroundColor : 'lightgreen',
                //width           : stuff.grid.width,
                width           : 'auto',
                marginLeft      : shuttleLeft + "px"
    
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
                            // current button
                            //------------------------------------
                            object['to'] === pathname ? 

            
                                <div
                                className="button-hold"
                                style={{

                                    //backgroundColor : "blue",
                                    padding         : subnavObj.padding
                                }}

                                >

                                    {object['name']}

                                </div>



                            : 
                            //------------------------------------
                            // other buttons
                            //------------------------------------


                                <div
                                className="button"
                                style={{

                                    padding : subnavObj.padding
                                }}

                                >

                                    {object['name']}

                                </div>


                            }


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



