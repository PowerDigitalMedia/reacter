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
    //Switch,
    //Route,
    //Link,
    //useRouteMatch,
    //useLocation,   
    //useParams

} from "react-router-dom";



//-------------------------------------
//hooks
//-------------------------------------

import { useWindowDimensions } from '../../utils/WindowDimensionsProvider'


//-----------------------------------
// css
//-----------------------------------

import '../../App.css';
import "../../css/area.css";


import './Styl.css';



//===========================
//DATA
//===========================

import { Data } from './Data';




//###################################################################
//###################################################################
//###################################################################


const Index = (props) => {




    //=================================================

    const { width, height } = useWindowDimensions()

    //=================================================

    const [scrollboxHeight, setScrollboxHeight] = useState(50)
    const [groups, setGroups] = useState({})


    const refArea = useRef(null)
    
    const [areaWidth, setAreaWidth] = useState(0)
    const [areaMarl, setAreaMarl] = useState(0)
    const [lastRowMarl, setLastRowMarl] = useState(0)



    const [across, setAcross] = useState(3)
    const [boxWidth, setBoxWidth] = useState(350)



    //==================================================

    //let match = useRouteMatch();
    //let location = useLocation();
    //let params = useParams();




    //####################################################
    //####################################################

    useEffect(() => {


        var topHeight = props.stageTopHeight;
        var scrollbox_h = (height - topHeight) + "px";
        setScrollboxHeight(scrollbox_h);



        //===========================================
    
        var across = 3;
        if(width < 1225)
        {
            if(width < 750)
            {
                across = 1;
            
            }
            else
            if(width < 1200)
            {
                across = 2;
             
            }//==
    
    
        }//==

        setAcross(across);
        //===========================================





        //===========================================

        var ZoneNav = Data.navigation;
        //var total = ZoneNav.length;
        //var numofrows = Math.floor(total/across);
    
    
        var groups = {};
        var count = 0;
        var gkey = 'group-'+0;
        for(var i=0; i < ZoneNav.length; i++)
        {
    
            if((i+0) % across === 0) 
            {
                gkey = "group-" + i;
    
            }//==
                    
        
        
            var nob = ZoneNav[i];
            if(groups[gkey] && count < across
            )
            {
                count = count + 1;
                groups[gkey].push(nob);
            
            }else{
    
                count = 1;
                groups[gkey] = [];
                groups[gkey].push(nob);
    
            }//==
    
             
        }
    
    
        //console.log(JSON.stringify(groups,null,2));
        //alert('check console');

        setGroups(groups);
        //===========================================





        //===========================================

        var boxWidth = 350;
        var mardif = 18;


        switch(across)
        {
        case 2:
        case 1:

            boxWidth = (width/2) - (mardif*across);
        break;
        default:
        break;
        }//==

        if(across === 1) 
        {
            if(width < 450)
            {
                boxWidth = width - 40;
            }else{
                boxWidth = width - 100;
            }
      
        }//==

        var areaWidth = (boxWidth+mardif) * across;
        var areaMarl = (width - areaWidth)/2;


        //alert(JSON.stringify(groups[gkey],null,2))

        var lastRowWidth = (boxWidth+mardif) * parseInt(groups[gkey].length);
        var lastRowMarl = (areaWidth - lastRowWidth)/2


        setBoxWidth(boxWidth+"px")       
        setAreaWidth(areaWidth+"px")   
        setAreaMarl(areaMarl+"px")
        setLastRowMarl(lastRowMarl+"px")  

        //============================================




    },[
        props,
        width,
        height
    ])
    











    //###################################################
    //###################################################

    return (

        <div className="App-stage">

            <div 
            id="scrollbox"
            className="App-stage-scrollbox"
            style={{

                height : scrollboxHeight
            }}
            
            >

                <div 
                ref={refArea}
                className="area"
                style={{

                    width       : areaWidth,
                    marginLeft  : areaMarl

                }}
                >





                    



                    <div 
                    className="grid"
                    style={{

                        //backgroundColor : 'lightyellow',
                        width           : '100%'

                    }}
                    >

                    {
                    //====================================================
                    //rows
                    //====================================================
  
                    Object.keys(groups).map(key => 

        
                        groups[key].length < across
                        ? 

                            <div
                            key={key}
                            className="row"
                            style={{

                                //backgroundColor : 'lightgreen',
                                marginLeft      : lastRowMarl

                            }}
                            >
    

                                {groups[key].map((obj, i) => (


                                    //----------------------------------
                                    //
                                    //----------------------------------

                                    groups[key].length < across
                                    ? 


                                        <div
                                        key={i}
                                        className="iconbox"
                                        style={{

                                            width : boxWidth
                                            
                                        }}

                                        >
                
                                            <div className="icon">
                
                
                                            </div>
                
                                            <div className="title">
                
                                                {obj.name}
                
                                            </div>
                
                                            <div className="descr">
                
                                                {obj.descr}
                
                                            </div>
                
                
                                        </div>





                                    //----------------------------------
                                    //
                                    //----------------------------------
                                    :

                                        <div
                                        key={i}
                                        className="iconbox"
                                        style={{

                                            width : boxWidth
                                            
                                        }}

                                        >
                
                                            <div className="icon">
                
                
                                            </div>
                
                                            <div className="title">
                
                                                {obj.name}
                
                                            </div>
                
                                            <div className="descr">
                
                                                {obj.descr}
                
                                            </div>
                
                
                                        </div>




                                ))}
            
                            </div>




                        //===========================================
                        //===========================================
                        //===========================================
                        :

                            <div
                            key={key}
                            className="row"

                            style={{

                                //backgroundColor : 'lightblue'

                            }}

                            >

                                {groups[key].map((obj, i) => (


                                    <div
                                    key={i}
                                    className="iconbox"
                                    style={{

                                        width : boxWidth

                                    }}
                                    >
            
                                        <div className="icon">
            
            
                                        </div>
            
                                        <div className="title">
            
                                            {obj.name}
            
                                        </div>
            
                                        <div className="descr">
            
                                            {obj.descr}
            
                                        </div>
            
            
                                    </div>

                                ))}


                            </div>

                

                    )
                    //====================================================
                    //rows
                    //====================================================
                    }

                    </div>






                </div>

            </div>

        </div>



    )


}

export default Index


