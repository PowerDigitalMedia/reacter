//=====================================
//react
//=====================================

import React, { 

    //useState, 
    //useEffect, 
    //useRef 

} from 'react';


//=====================================
//react-router-dom
//=====================================

import {

    //BrowserRouter as Router,
    //Switch,
    //Route,
    Link,

    //useRouteMatch,
    //useLocation,   
    //useParams

} from "react-router-dom";




//=====================================
// 
//=====================================

import { useLiquidNavGrid } from './Hook';

import { 

    Grid, 
    Row,

    Cell, 
    CellGraphic,

    CellTitle,
    CellName, 
    CellDescr 

} from './Styl';







//######################################################################
//######################################################################
//######################################################################

const Tags = (props) => {


    //const { width, height } = useWindowDimensions()

    //const refCel = useRef(null)
    

    //==================================================

    //let match = useRouteMatch();
    //let location = useLocation();
    //let params = useParams();




    /*
    //####################################################
    //####################################################

    useEffect(() => {



    },[
        props
    ])


    */





    /*

    //########################################################
    //########################################################
  
    const handleEventOver = (event) => {

        //console.log(JSON.parse(event.target.dataset.info));
        console.log(event.target);

        event.target.style.borderColor = 'red';


    };

    const handleEventOut = (event) => {

        //console.log(JSON.parse(event.target.dataset.info));
        console.log(event.target);


        console.log(event.target.id);

        event.target.style.borderColor = 'lightgray';



    };
    */
    



    //########################################################
    //########################################################
  
    const handleOverOut = (pack) => {

        //console.log(JSON.parse(event.target.dataset.info));

    
        document.getElementById(pack['id']).style.borderColor = pack['borderColor'];


        if(pack['backgroundColor'] && pack['backgroundColor'] !== undefined)
            document.getElementById(pack['id']).style.backgroundColor = pack['backgroundColor'];



        if(document.getElementById(pack['id']+"_graphic") 
        && document.getElementById(pack['id']+"_graphic") !== undefined)
            document.getElementById(pack['id']+"_graphic").style.backgroundColor = pack['graphic-color'];



        if(document.getElementById(pack['id']+"_name") 
        && document.getElementById(pack['id']+"_name") !== undefined)
            document.getElementById(pack['id']+"_name").style.color = pack['name-color'];


        if(document.getElementById(pack['id']+"_descr") 
        && document.getElementById(pack['id']+"_descr") !== undefined)
            document.getElementById(pack['id']+"_descr").style.color = pack['descr-color'];




    };
    
    




    



    //########################################################
    //########################################################
  
    //console.log("TAGS-PROPS-DATA: "+props.data);

    const stuff = useLiquidNavGrid(

        props.gridInfo

    );

    console.log(JSON.stringify(stuff,null,2));






    //########################################################
    //########################################################
    //########################################################

    if(props.gridInfo.gridCall === 'grid_row_cell')
    {


        return (




            <Grid 

                bgColor={stuff.grid.bgColor}

                width={stuff.grid.width}
                height={stuff.grid.height}

                margin={stuff.grid.margin}

                defWidth="100%" 
                defHeight="auto"

            >



                {
                //======================================
                //rows
                //======================================

                //Object.keys(stuff.data).map(key =>
                stuff.data.map((group, i) => (



                    <Row 

                        key={"row"+i} 
                        bgColor={group.style.bgColor}
                        width={group.style.width}
                        margin={group.style.margin}

                        defWidth="48%" 
                        
                    >




        
                        {
                        //##############################################
                        //##############################################       

                        group['data'].map((cel, j) => (



                            <Link 
                            key={"LINK_"+cel.id}
                            to={"/"+cel['to']}
                            >

                                

                                <Cell 

                                    key={cel.id}
                                    id={cel.id}

                                    //onMouseOver={handleEventOver}
                                    //onMouseOut={handleEventOut}

                                    onMouseOver={() => handleOverOut({

                                        "id"                :cel.id,       
                                        "call"              :"over",
                                        "borderColor"       :"#1e232d",
                                        "backgroundColor"   :"#f9f9f9",

                                        "graphic-color"     :"#1e232d",
                                        "name-color"        :"#1e232d",
                                        "descr-color"       :"#1e232d"

                                    })}

                                    onMouseOut={() => handleOverOut({

                                        "id"                :cel.id,       
                                        "call"              :"out",
                                        "borderColor"       :"lightgray",
                                        "backgroundColor"   :"#f9f9f9",
                               
                                        "graphic-color"     :"#f9f9f9",
                                        "name-color"        :"#1e232d",
                                        "descr-color"       :"#1e232d"


                                    })}
                                
                                    bgColor={cel.style.bgColor}
                                    width={cel.style.width}
                                    height={cel.style.height}
                                    border={cel.style.border}
                                    borderRadius={cel.style.radius}

                                    defWidth="48%" 
                                    defHeight="auto"

                                >

                                    <CellGraphic


                                        id={cel.id+"_graphic"}

                                        bgColor={cel.style.thumb.bgColor}

                                        width={cel.style.thumb.width}
                                        height={cel.style.thumb.height}

                                        margin={cel.style.thumb.margin}  
                                        
                                        defWidth="98%" 
                                        defHeight="55%"

                                    >

                            {/*

                                        <img
                                            style={{marginTop: obj.image.top, marginLeft:obj.image.left}}

                                            src={window.location.origin + obj.image.src} 
                                            width={obj.image.w}
                                            height={obj.image.h} 
                                            alt='noimage'

                                        />

                            */}

                                
                                    </CellGraphic>



                                    <CellName


                                        id={cel.id+"_name"}

                                        //bgColor='lightyellow'

                                        width={cel.style.name.width}
                                        height={cel.style.name.height}

                                        margin={cel.style.name.margin}  

                                        textAlign={cel.style.name.textAlign}
                        

                                        defWidth="98%" 
                                        defHeight="auto"

                                    >

                                        {cel.name}

                                    </CellName>




                                    <CellDescr


                                        id={cel.id+"_descr"}


                                        //bgColor='lightcoral'

                                        width={cel.style.descr.width}
                                        height={cel.style.descr.height}

                                        margin={cel.style.descr.margin}  

                                        textAlign={cel.style.name.textAlign}
                        
                                      
                                        defWidth="98%" 
                                        defHeight="auto"

                                    >

                                        {cel.descr}
                                        
                                    </CellDescr>




                                </Cell>




                            </Link>


                            
                        ))
                        

                        //##############################################
                        //##############################################
                        }





                    </Row>


                ))
                //======================================
                //rows
                //======================================
                }

            
            </Grid>





        );



    }
    else
    {


        return (



            <Grid 

                bgColor={stuff.grid.bgColor}

                width={stuff.grid.width}
                height={stuff.grid.height}

                margin={stuff.grid.margin}

                defWidth="100%" 
                defHeight="auto"

            >


                {stuff.data.map((cel, j) => (



                    <Link                     
                    to={"/"+cel['to']}>


                        <Cell 

                            key={cel.id}
                            id={cel.id}
                            

                            onMouseOver={() => handleOverOut({

                                "id"                :cel.id,       
                                "call"              :"over",
                                "borderColor"       :"#07a2e3",
                                "backgroundColor"   :"#454d5f",//"#1E232D",
                      
                                "graphic-color"     :"#fff",
                                "name-color"        :"#0291cd",
                                "descr-color"       :"#fff"


                            })}

                            onMouseOut={() => handleOverOut({

                                "id"                :cel.id,       
                                "call"              :"out",
                                "borderColor"       :"#454d5f",
                                "backgroundColor"   :"#f9f9f9",
                             
                           
                                "graphic-color"     :"#fff",
                                "name-color"        :"#1E232D",
                                "descr-color"       :"#1E232D"



                            })}


                            bgColor={cel.style.bgColor}
                            width={cel.style.width}
                            height={cel.style.height}
                            border={cel.style.border}
                            borderRadius={cel.style.radius}

                            defWidth="98%" 
                            defHeight="auto"

                        >


                            {

                            props.gridInfo.gridCall === 'grid_cell_descr'
                            ?

                                <div>




                            {/*

                                    <CellGraphic

                                        id={cel.id+"_graphic"}

                                        bgColor={cel.style.thumb.bgColor}

                                        width={cel.style.thumb.width}
                                        height={cel.style.thumb.height}

                                        margin={cel.style.thumb.margin}  
                                        float={cel.style.thumb.float}
                                        
                                        defWidth="98%" 
                                        defHeight="55%"

                                    >


                                        <img
                                            style={{marginTop: obj.image.top, marginLeft:obj.image.left}}

                                            src={window.location.origin + obj.image.src} 
                                            width={obj.image.w}
                                            height={obj.image.h} 
                                            alt='noimage'

                                        />

                  

                                
                                    </CellGraphic>



          */}


                                    

                                    <CellName


                                        id={cel.id+"_name"}


                                        //bgColor='lightyellow'

                                        width={cel.style.name.width}
                                        height={cel.style.name.height}

                                        margin={cel.style.name.margin}  

                                        textAlign={cel.style.name.textAlign}
                        

                                        defWidth="98%" 
                                        defHeight="auto"

                                    >

                                        {cel.name}

                                    </CellName>




                                    <CellDescr


                                        id={cel.id+"_descr"}

                                        //bgColor='lightcoral'

                                        width={cel.style.descr.width}
                                        height={cel.style.descr.height}

                                        margin={cel.style.descr.margin}  

                                        textAlign={cel.style.name.textAlign}
                        
                                      
                                        defWidth="98%" 
                                        defHeight="auto"

                                    >

                                        {cel.descr}
                                        
                                    </CellDescr>


                                </div>

                            :

                                <div>

                                    <CellTitle>{cel.name}</CellTitle>

                                </div>


                            }
    

                        </Cell>


                    </Link>


                    
                ))}

    
            </Grid>



    



        );


        
    }



        
}

export default Tags;

