
import React, { 

    useState, 
    useEffect, 
    useRef

} from 'react';


import {

    //BrowserRouter as Router,
    //Switch,
    //Route,
    //Link,
    //useRouteMatch,
    useLocation,   
    //useParams

} from "react-router-dom";





// --  library --

import { baselib } from './library/base';



// -- hooks --

import { useBrowserStore } from './utils/myHooks/BrowserStore';



// -- tags --

import HeaderNav from "../universal/HeaderNav";
import SubNav from "../universal/SubNav";
import Zone from "../zone";





const Stage = () => {



    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [zoneObj, setZoneObj] = useState({});


    const [stageTopHeight, setStageTopHeight] = useState(50)

    const refA = useRef(null)
    const refB = useRef(null)
    


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





    //===================================================
    const browserStore = useBrowserStore(

        'get',
        false

    );
    //===================================================







    useEffect(() => {


        var topHeight = refA.current.offsetHeight + refB.current.offsetHeight + refC.current.offsetHeight;
        //alert(refA.current.offsetHeight+"\n"+refB.current.offsetHeight);
        //alert(topHeight);
        setStageTopHeight(topHeight);



        //======================================================

        var _VARS = {

            "pathname"  :window.location.pathname,
            "params"    :"",
            "query"     :""

        };

        //=======================================================

        //alert("BROWSER STORE: "+JSON.stringify(browserStore));
 
        var bs = {};
        if(browserStore && browserStore !== undefined)
        {
            if(baselib.ObjectType(browserStore) === 'string')
            {
                bs = baselib.ParseIt(browserStore);
            }

        }
        bs = JSON.stringify(bs);
        console.log("BS: "+bs);

        //=========================================================



        
        //---------------------------------------------------------

        var splitter = "-|AJXPST|-"
        var amp = "&";

        var ajaxPost = ""
        + "ajaxArr[]=_VARS" + splitter + JSON.stringify(_VARS)
        + amp
        + "ajaxArr[]=_browserStore" + splitter + bs



        fetch("http://localhost:5000/reacter-fetch" , {

            method:"POST",
            headers: new Headers({

                'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type

            }),
            //body: "param1=value1&param2=value2" // <-- Post parameters

            body: ajaxPost  // <-- Post parameters ajaxArr[]

            //CORS
            //mode:"no-cors", //will result in an opaque response - fix is to set cors on express
            
        })

        
        .then(res => res.json())
        //.then((res) => {console.log(res.json())})
        .then(

            (result) => {


                console.log("RESULT: "+JSON.stringify(result['zoneObj']['result'],null,2));
          
                setIsLoaded(true);
                setZoneObj(result['zoneObj']['result']);

            },

            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {

                setIsLoaded(true);
                setError(error);

            }


        )

        //---------------------------------------------------------
        






    },[browserStore])









    if(error) 
    {
        
        return (

            <div className="area">

                <div className="area-title">Error: {error.message}</div>

            </div> 

        )



    } 
    else 
    if(!isLoaded) 
    {


        return (

            <div className="App-stage">

                <div 
                ref={refA}
                >

                    <HeaderNav />

                </div>



                {
                //------------------------------------
                // 
                //------------------------------------
                //location.pathname.match(RegExp("liquid",'gi'))
                hasSubNav === 1
                ? 

        
                    <div 
                    ref={refB}
                    >

                        <SubNav />

                    </div>


                //------------------------------------
                //
                //------------------------------------
                :

                    <div 
                    ref={refB}
                    style={{

                        height:"1px"

                    }}
                    >

                    </div>

                }






        
                <div>

                    <div className="area">

                        <div className="area-title">Loading...</div>

                    </div> 

                </div>



            
            </div>



        )
    } 
    else 
    {




        return (

            <div className="App-stage">


                <div 
                ref={refA}
                >

                    <HeaderNav />

                </div>



                {
                //------------------------------------
                // 
                //------------------------------------
                //location.pathname.match(RegExp("liquid",'gi'))
                hasSubNav === 1
                ? 

        
                    <div 
                    ref={refB}
                    >

                        <SubNav />

                    </div>


                //------------------------------------
                //
                //------------------------------------
                :

                    <div 
                    ref={refB}
                    style={{

                        height:"1px"

                    }}
                    >

                    </div>

                }

                <div>

                    <Zone stageTopHeight={stageTopHeight} />

                </div>


            </div>



        )



    }
    


}

export default Stage


