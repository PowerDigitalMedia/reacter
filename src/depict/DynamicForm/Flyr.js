
import React, { 

    useState, 
    useEffect,
    useRef

} from './node_modules/react';



import '../../css/alfabase.css';//alfa,base,tab,tab-x,flank
import './Styl.css';


import { useLiquidImageGrid } from '../../utils/myHooks/LiquidFormula/ImageGrid';




//######################################################################
//######################################################################
//######################################################################

const Flyr = ({

    width,//window
    height,//window
    box,
    func

}) => {


   

   
    /*
    alert(''
        +'WINDOW W: '+width
        +'\nBOX: '+JSON.stringify(box,null,2)
    );
    */


    //console.log("FLYR DATA: "+JSON.stringify(box,null,2));


    //################################################################
    //################################################################


    const gridCall = "grid_cell";//grid_column_cell or grid_cell
    const modCall = 'fill_div';
    const thumbCall = 'flex_height';//flex_height or default
    const cellBorderInfo = {

        "boolean"       :false,
        "thickness"     :0,//px
        "color"         :"lightgray"  

    };
    const across = 1;


    var maxWidth = 900;
    if(width < maxWidth + 50)
    {
       maxWidth = width;

    }//==


    const stuff = useLiquidImageGrid(

        [box],
        gridCall,
        modCall,
        thumbCall,
        cellBorderInfo,
        across,
        maxWidth

    );






 
    
    //##########################################################
    //##########################################################


    //----------------------------------------------

    const [baseScrollHeight, setBaseScrollHeight] = useState(0)
    const [tabHeight, setTabHeight] = useState(0)
    const [flyrHeight, setFlyrHeight] = useState(0)

    const baseRef = useRef(null)
    const tabRef = useRef(null)
    const flyrRef = useRef(null)

    useEffect(() => {

        setBaseScrollHeight(baseRef.current.scrollHeight);
        setTabHeight(tabRef.current.offsetHeight)
        setFlyrHeight(flyrRef.current.offsetHeight)

    },[])

    //----------------------------------------------





    //###########################################################
    //###########################################################

    var flyrPadBottomInt = 80;
    var flyrPadBottom = flyrPadBottomInt + "px";

     var flyrWInt;
     var flyrW;

     //var flyrHInt;
     var flyrH;

     var flyrMarl;

     var flyrMartInt;
     var flyrMart;

     var tabMartInt;
     var tabMart;

     var isShort;


     flyrWInt = maxWidth;
     flyrMarl = (width - flyrWInt)/2 + "px";

     if(width < flyrWInt+50)
     {
        flyrWInt = width;
        flyrMarl = 0 + "px";
     }//==

     flyrW = flyrWInt + "px";


    //flyrHInt = 0;
    flyrH = 'auto';
     

    /*
    if(flyrHeight === 0
    )
    {
        flyrHInt = height;
        flyrH = 'auto';

    }else{

        if(flyrHeight < height)
        {

            flyrHInt = height + 10;
            flyrH = flyrHInt + "px";

        }

    }
    */



    //--------------------------------------------

    isShort = false;

    flyrMartInt = 50;
    tabMartInt = 0;

    if(flyrHeight !== 0 && flyrHeight < height)
    {

        isShort = true;

        /*
        flyrMartInt = (height - flyrHeight)/2;
        tabMartInt = flyrMartInt - 50;

        if(flyrMartInt < 50) 
        {
            flyrMartInt = 50;
            tabMartInt = 0;
        }
        */

    }

    flyrMart = flyrMartInt + 'px';
    tabMart = tabMartInt + "px";

    //----------------------------------------------



  
    var flankLeftWidthInt;
    var flankLeftWidth;
    var flankLeftMarl;
       
    var flankRightWidthInt;
    var flankRightWidth;
    var flankRightMarl;

    var flankVertHeightInt;
    var flankVertHeight;



    flankLeftWidthInt = (width - flyrWInt)/2;
    flankLeftWidth = flankLeftWidthInt + "px";
    flankLeftMarl = "0px";
       
    flankRightWidthInt = (width - flyrWInt)/2;
    flankRightWidth = flankRightWidthInt + "px";
    flankRightMarl = flankLeftWidthInt + flyrWInt + "px";


    flankVertHeightInt = baseScrollHeight;

    if(isShort) 
    {
        //console.log("IS SHORT");
        flankVertHeightInt = height;
        if(flyrHeight < flankVertHeightInt) flyrH = flankVertHeightInt - (tabHeight+flyrPadBottomInt) + "px";

    }else{

        if(flyrHeight < flankVertHeightInt) flyrH = flankVertHeightInt - (tabHeight+flyrPadBottomInt) + "px";


        /*
        console.log(""
            +"HEIGHT: "+height
            +"\nFLYR H: "+flyrH
            +"\nflyrHeight "+flyrHeight
            +"\nflankVertHeight "+flankVertHeightInt
            +"\nbaseScrollHeight: "+baseScrollHeight
        );
        */


    }//==

    flankVertHeight = flankVertHeightInt + "px";







    //################################################################
    //################################################################




    return (


        <div>

            <div className="alfa"></div>

            <div 
            ref={tabRef}
            className="tab"
            style={{

                backgroundColor : 'white', 
                width           : flyrW,
                height          : "50px",
                margin          : "0 0 0 0",
                top             : tabMart,
                left            : flyrMarl

            }}
            >


                <div 
                className="tab-x" 
                onClick={() => func()}
                >  

                    X

                </div>


            </div>


            <div 
            ref={baseRef}
            className="base">


                <div 
                id="flankleft"
                onClick={() => func()}
                className="flank" 
                style={{

                    //backgroundColor : 'blue', 
                    width           : flankLeftWidth,
                    height          : flankVertHeight,
                    left            : flankLeftMarl
                  

                }}
                >
                </div>


                <div 
                id="flankright"
                onClick={() => func()}
                className="flank" 
                style={{

                    //backgroundColor : 'red', 
                    width           : flankRightWidth,
                    height          : flankVertHeight,
                    left            : flankRightMarl

                }}
                >
                </div>





                <div 
                id="flyr"
                ref={flyrRef}
                className="liquid-flyr" 
                style={{

                    backgroundColor : 'white', 
                    width           : flyrW,
                    height          : flyrH,
                    margin          : flyrMart+" 0 0 "+flyrMarl,
                    padding         : "0 0 "+flyrPadBottom+" 0"

                }}
                >


                    <div 
                    className="liquid-grid" 
                    style={{

                        //backgroundColor : "lightyellow", 
                        width           : stuff.grid.width,
                        height          : stuff.grid.height, 
                        margin          : "0 0 0 0"

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

                                        src={window.location.origin + box.image.src} 
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






                </div>

            </div>

        </div>


    );


}


export default Flyr;





/*

  
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

                                src={window.location.origin + box.image.src} 
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


*/

