import React from 'react';


import { 

    Grid, 
    Column,
    Cell, 
    CellThumb,
    CellTitle, 
    CellText 

} from './Styl';


import { useLiquidImageGrid } from '../../../../utils/myHooks/LiquidFormula/ImageGrid';



//######################################################################
//######################################################################
//######################################################################

const Tags = (props) => {


    //console.log("TAGS-PROPS-DATA: "+props.data);

    const gridCall = "grid_cell";//grid_column_cell or grid_cell
    const modCall = 'fill_div';
    const thumbCall = 'default';//flex_height or default
    const cellBorderInfo = {

        "boolean"       :true,
        "thickness"     :1,//px
        "color"         :"gray"  

    };


    const stuff = useLiquidImageGrid(

        props.data,
        gridCall,
        modCall,
        thumbCall,
        cellBorderInfo

    );



    if(gridCall === 'grid_column_cell')
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

                {stuff.data.map((col, i) => (


                    <Column 

                        key={i} 
                        //bgColor="purple"
                        width={stuff.column.width}
                        margin={stuff.column.margin}

                        defWidth="48%" 
                      
                    >


                        {col.map((box, j) => (

                            <Cell 

                                key={box.id} 
                                //bgColor={box.bgColor}

                                width={stuff.cell.width}
                                height={stuff.cell.height}
                                border={stuff.cell.border}
                           
                                defWidth="48%" 
                                defHeight="auto"

                            >


                                <CellThumb

                                    bgColor="black"

                                    width={stuff.cell.thumb.width}
                                    height={box.thumb.h}

                                    margin={stuff.cell.thumb.margin}  
                                    
                                    defWidth="98%" 
                                    defHeight="55%"

                                >


                                    <img
                                        style={{marginTop: box.image.top, marginLeft:box.image.left}}

                                        src={window.location.origin + box.image.src} 
                                        width={box.image.w}
                                        height={box.image.h} 
                                        alt='noimage'

                                    />

                            
                                </CellThumb>


                                <CellTitle>{box.title}</CellTitle>
                                <CellText>{box.text}</CellText>

                            </Cell>
                            
                        ))}

                    </Column>

                ))}


            
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





                {stuff.data.map((box, i) => (

                    <Cell 

                        key={box.id} 
                        //bgColor={box.bgColor}

                        width={stuff.cell.width}
                        height={stuff.cell.height}
                        margin={stuff.cell.margin}
                        border={stuff.cell.border}
            
                        defWidth="48%" 
                        defHeight="auto"

                    >


                        <CellThumb

                            bgColor="black"

                            width={stuff.cell.thumb.width}
                            height={box.thumb.h}

                            margin={stuff.cell.thumb.margin}  
                            
                            defWidth="98%" 
                            defHeight="55%"

                        >


                            <img
                                style={{marginTop: box.image.top, marginLeft:box.image.left}}

                                src={window.location.origin + `${process.env.PUBLIC_URL}` + box.image.src} 
                                //src={window.location.origin + box.image.src} 
                                width={box.image.w}
                                height={box.image.h} 
                                alt='noimage'

                            />

                    
                        </CellThumb>


                        <CellTitle>{box.title}</CellTitle>
                        <CellText>{box.text}</CellText>

                    </Cell>
                ))}







            </Grid>


        );



    }



}

export default Tags;

