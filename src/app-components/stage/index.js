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
    //Link,

    //useRouteMatch,
    useLocation,   
    //useParams


} from "react-router-dom";


//===========================
//app-components
//===========================

import HeaderNav from "../universal/HeaderNav";
import SubNav from "../universal/SubNav";
import Zone from "../zone";



//===========================
// library
//===========================

//import { arraylib } from '../../library/array';
//import { baselib } from '../../library/base';
//import { elemlib } from '../../library/elem';
//import { formlib } from '../../library/form';
//import { stringlib } from '../../library/string';








//######################################################
//######################################################
//######################################################

const Index = () => {



    //let match = useRouteMatch();
    let location = useLocation();
    //let params = useParams();
 
    console.log("LOCATION: "+JSON.stringify(location,null,2));
    //alert("MATCH: "+JSON.stringify(match,null,2));






    //###################################################
    //###################################################

    const [stageTopHeight, setStageTopHeight] = useState(50)

    const refA = useRef(null)
    const refB = useRef(null)


    //===================================================

    let pathname = location.pathname;

    if(pathname.charAt(0) === '/') 
        pathname = pathname.substring(1,pathname.length);


    //===================================================


    useEffect(() => {

        var topHeight = refA.current.offsetHeight + refB.current.offsetHeight;
        //alert(refA.current.offsetHeight+"\n"+refB.current.offsetHeight);
        setStageTopHeight(topHeight);
    
    },[])

    


    var hasSubNav = 0;

    var arr = [

        'liquid'

    ];

    for(var i=0; i < arr.length; i++)
    {
        if(location.pathname.match(RegExp(arr[i],'gi'))
        )
        {

            hasSubNav = 1;


        }
    }

  






    //###################################################
    //###################################################

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


    );


}

export default Index
