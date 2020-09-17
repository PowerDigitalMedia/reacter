
import React, { 

    useState, 
    useEffect,
    //useRef

} from 'react';

import {

    //BrowserRouter as Router,
    //Switch,
    //Route,
    //Link,
    useRouteMatch,
    useLocation,
    useHistory,   
    //useParams,

} from "react-router-dom";






import './Styl.css';


import { useWindowDimensions } from '../../../../utils/WindowDimensionsProvider';
import { useLiquidImageGrid } from '../../../../utils/myHooks/LiquidFormula/ImageGrid';

import Flyr from './Flyr';



const Tags = (props) => {


    let match = useRouteMatch();
    let location = useLocation();
    let history = useHistory();


    /*
    MATCH: {
        "path": "/liquid",
        "url": "/liquid",
        "isExact": true,
        "params": {}
    }

    LOCATION: {
        "pathname": "/liquid",
        "search": "",
        "hash": "",
        "key": "vu9ctd"
    }
    */
    


    const { width, height } = useWindowDimensions()

    const gridCall = "grid_column_cell";//grid_column_cell or grid_cell
    const modCall = 'fill_div';
    const thumbCall = 'flex_height';//flex_height or default
    const cellBorderInfo = {

        "boolean"       :true,
        "thickness"     :1,//px
        "color"         :"lightgray"  

    };
    const across = false;
    const maxWidth = false;

    const stuff = useLiquidImageGrid(

        props.data,
        gridCall,
        modCall,
        thumbCall,
        cellBorderInfo,
        across,
        maxWidth

    );




    
    //------------------------------------------------------
    const [hashData, setHash] = useState(false);
    const [flyrData, setFlyrData] = useState(false);
    //------------------------------------------------------
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {

       if(hashData === "#flyr" && location.hash === "")
       {

            setHash(false);
            setFlyrData(false); 
            
       }

    },[hashData,location])
    //-------------------------------------------------------

    

    const handleAddFlyr = (box,match,location,history) => {

        setHash("#flyr");
        setFlyrData(box);

        //console.log("MATCH: "+JSON.stringify(match,null,2));
        //console.log("LOCATION: "+JSON.stringify(location,null,2));
        //console.log("HISTORY: "+JSON.stringify(history,null,2));

        if(location.hash !== "#flyr") history.push("#flyr");
    
    }

    
    const handleRemoveFlyr = (location,history) => {

    
        setHash(false); 
        setFlyrData(false);

        //console.log("LOCATION: "+JSON.stringify(location,null,2));
        //console.log("HANDLE HISTORY: "+JSON.stringify(history,null,2));

        if(location.hash === "#flyr")
        {
            history.goBack();  
        }

    }
    
    

    
    if(gridCall === 'grid_column_cell')
    {


        return (


            <div>


                {
                //------------------------------------
                //FLYR
                //------------------------------------

                //CONDITIONAL RENDERING
                //https://reactjs.org/docs/conditional-rendering.html

            
                /*
                ------------------------------------

                viewFlyr &&
                    <h2>
                    You have {unreadMessages.length} unread messages.
                    </h2>

                */


                /*
                -------------------------------------
                THIS ONE WORKS - FAILS ON HOOKS
                -------------------------------------

                flyrData ? Flyr(

                    width,
                    height,
                    useLiquidImageGrid,
                    flyrData,
                    handleRemoveFlyr,
              
                ) : ''




                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>




                */







                flyrData ? 
                <Flyr 
                    width={width} 
                    height={height} 
                    box={flyrData}
                    func={() => handleRemoveFlyr(location,history)} 
                    //func={() => history.replace("")}
                
                  
                /> 
                : null







                //-------------------------------------
                }
    



                <div 
                className="liquid-grid" 
                style={{

                    backgroundColor : stuff.grid.bgColor, 
                    width           : stuff.grid.width,
                    height          : stuff.grid.height, 
                    margin          : stuff.grid.margin

                }}

                >

                    {stuff.data.map((col, i) => (


                        <div 
                        key={i} 
                        className="liquid-column" 
                        style={{

                            //backgroundColor : 'purple', 
                            width           : stuff.column.width,
                            height          : 'auto',
                            margin          : stuff.column.margin

                        }}

                        >


                        {col.map((box, j) => (

                            <div 
                            key={box.id}  

                            onClick={() => handleAddFlyr(

                                box,
                                match,
                                location,
                                history
                            
                            )}

                            className="liquid-cell"  
                            style={{

                                //backgroundColor : box.bgColor, 
                                width           : stuff.cell.width,
                                height          : stuff.cell.height,
                                border          : stuff.cell.border
                    
                            }}
                    
                            >


                                <div 
                                key={box.id} 
                                className="liquid-cell-thumb"  
                                style={{

                                    width           : stuff.cell.thumb.width,
                                    height          : box.thumb.h,
                                    margin          : stuff.cell.thumb.margin
                        
                                }}
                        
                                >


                                    <img
                                        style={{

                                            marginTop: box.image.top, 
                                            marginLeft:box.image.left

                                        }}
 
                                    


                                        src={window.location.origin + `${process.env.PUBLIC_URL}` + box.image.src} 
                                        //src={window.location.origin + box.image.src} 
                                        width={box.image.w}
                                        height={box.image.h} 
                                        alt='noimage'

                                    />

                            
                                </div>


                                <div className="liquid-cell-title">{box.title}</div>
                                <div className="liquid-cell-text">{box.text}</div>

                            </div>
                        ))}


                        </div>


                    ))}


                </div>



            </div>


        );



    }
    else
    {


        return (


            <div 
            className="liquid-grid" 
            style={{

                //backgroundColor : stuff.grid.bgColor, 
                width           : stuff.grid.width,
                height          : stuff.grid.height, 
                margin          : stuff.grid.margin

            }}

            >

                {stuff.data.map((box, i) => (

                    <div 
                    key={box.id} 
                    className="liquid-cell"  
                    style={{

                        //backgroundColor : box.bgColor, 
                        width           : stuff.cell.width,
                        height          : stuff.cell.height,
                        margin          : stuff.cell.margin,
                        border          : stuff.cell.border
                
            
                    }}
            
                    >


                        <div 
                        key={box.id} 
                        className="liquid-cell-thumb"  
                        style={{

                            width           : stuff.cell.thumb.width,
                            height          : box.thumb.h,
                            margin          : stuff.cell.thumb.margin
                
                        }}
                
                        >


                            <img
                                style={{

                                    marginTop: box.image.top, 
                                    marginLeft:box.image.left

                                }}

                                src={window.location.origin + `${process.env.PUBLIC_URL}` + box.image.src} 
                                //src={window.location.origin + box.image.src} 
                                width={box.image.w}
                                height={box.image.h} 
                                alt='noimage'

                            />

                    
                        </div>


                        <div className="liquid-cell-title">{box.title}</div>
                        <div className="liquid-cell-text">{box.text}</div>

                    </div>
                ))}


            </div>
    

        );



    }//==




}

export default Tags;

