import React, { 

    useState, 
    useEffect, 
    useRef 

} from 'react';


//===========================
//CSS
//===========================

import logo from '../../grfx/logo.svg';
import '../../../App.css';


//===========================
//HOOKS
//===========================

//import { useLiquidNavBar } from '../../utils/myHooks/LiquidFormula/NavBar';
import { useWindowDimensions } from '../../utils/WindowDimensionsProvider'






//######################################################
//######################################################
//######################################################

const Index = (props) => {



    //console.log("HEADER PROPS zoneObj:" + props.zoneObj);



    const { width } = useWindowDimensions()

    

    //let match = useRouteMatch();
    //let location = useLocation();
    //let params = useParams();
 
    //alert("LOCATION: "+JSON.stringify(location,null,2));
    //alert("MATCH: "+JSON.stringify(match,null,2));


    //###################################################
    //###################################################

    const [shuttleWidth, setShuttleWidth] = useState(0)
    const [shuttleLeft, setShuttleLeft] = useState(0)
    const [winThresh, setWinThresh] = useState(10000)

    const refA = useRef(null)
    const refB = useRef(null)





    let thresh = {

        a:700,
        b:500,
        c:350

    };






    //###################################################
    //###################################################

    useEffect(() => {



        var marleft = (refA.current.offsetWidth - refB.current.offsetWidth)/2;
        setShuttleLeft(marleft);

        var shuttleWidth = refB.current.offsetWidth;
        setShuttleWidth(shuttleWidth);



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
        thresh

    ])

    





    //###################################################
    //###################################################

    var gridWInt;
    var gridW;
    var gridMarl;

    gridWInt = shuttleWidth;
    gridW = gridWInt + "px";
    //gridMarl = 0 + "px";
    gridMarl = (width - gridWInt)/2 + "px";














    //###################################################
    //###################################################
    //###################################################
    

    return (


        <header 
        ref={refA}
        className="App-stage-header"
        >


            <img src={logo} className="App-logo" alt="logo" />


            <div className="App-title">

                PowerDigitalMedia - Reacter
                
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




        </header>


    );


}

export default Index



