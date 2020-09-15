//-------------------------------------
//hooks
//-------------------------------------

import { useWindowDimensions } from '../../WindowDimensionsProvider'




//###################################################################
//###################################################################
//###################################################################

export function useLiquidNavGrid(

    gridInfo

) {


    const R = {};
    const RevData = [];

    //=================================================

    let _DATA = gridInfo.data
    let gridCall = gridInfo.gridCall
    let cellBorderInfo = gridInfo.cellBorderInfo
    
    //=================================================

    const { width } = useWindowDimensions()

    //=================================================


    //var gridDif = 50;

    var gridWInt;
    var gridW;
    var gridMarl;

    var cellWInt;
    var cellW;
    var cellH;
    var cellMarlr;
    var cellMarDif;

    var cellBorderDif; 
    var cellBorder;
    var cellBorderRadius;




    var thumbWInt;
    var thumbW;
    var thumbHInt;
    var thumbH;
    var thumbMar;
    var thumbFloat;


    var nameW;
    var nameH;
    var nameMar;
    var nameTextAlign;
    
    var descrW;
    var descrH;
    var descrMar;
    var descrTextAlign;




    var maxWidth;
    var across;


    //===============================================

    switch(gridCall)
    {
    case'grid_row_cell':


        maxWidth = 1200;


        var rowWInt;
        var rowW;
        //var rowMarlr;

        var lastRowW;
        var lastRowMarl;


        //var rowColors = ["red","blue","yellow","purple"];
        //var rowcolors = ['lightgreen','lavender','lightblue','lightgray'];
        //var randmin = 0;
        //var randmax = rowcolors.length;



    break;
    case'grid_cell':
    case 'grid_cell_descr':


        maxWidth = 900;

        //var gridDif = 50;

        //var rowColors = ["red","blue","yellow","purple"];

        //var thumbDif;



    break;
    default:
    break;
    }//==


    //===================================================


    var i;
    var j;



    switch(gridCall)
    {
    //########################################################
    //########################################################
    //########################################################
    case'grid_row_cell':



        //===========================================

        across = 3;
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

        //===========================================




        //===========================================

        //var total = _DATA.length;
        //var numofrows = Math.floor(total/across);



        //alert(JSON.stringify(_DATA,null,2));

        var groups = {};
        var count = 0;
        var gkey = 'group-'+0;
    
        for(i=0; i < _DATA.length; i++)
        {

            if((i+0) % across === 0) 
            {
                gkey = "group-" + i;

            }//==
                    
        
        
            var nob = _DATA[i];
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

                
        }//for i


        //alert("GROUPS: "+JSON.stringify(groups,null,2));
        
        //===========================================




        //===========================================

        cellWInt = 350;
        cellMarDif = 18;

        switch(across)
        {
        case 2:
        case 1:

            cellWInt = (width/2) - (cellMarDif*across);
        break;
        default:
        break;
        }//==

        if(across === 1) 
        {
            if(width < 450)
            {
                cellWInt = width - 40;
            }else{
                cellWInt = width - 100;
            }
        
        }//==

        gridWInt = (cellWInt+cellMarDif) * across;
        gridW = gridWInt + "px";
        gridMarl = (width - gridWInt)/2 + "px";

        //alert(JSON.stringify(groups[gkey],null,2))

        lastRowW = (cellWInt+cellMarDif) * parseInt(groups[gkey].length);
        lastRowMarl = (gridWInt - lastRowW)/2 + "px";

        //============================================



        //rowWInt = (gridWInt/across) - 10;
        rowWInt = gridWInt;
        rowW = (rowWInt) + "px";
        //rowMarlr = 0 + "px";

        cellBorderDif = 0;
        if(cellBorderInfo.boolean) cellBorderDif = (cellBorderInfo.thickness * 2)

        cellWInt = (rowWInt/across) - 14;
        cellW = (cellWInt - cellBorderDif) + "px";
        cellH = "300px";
        cellMarlr = 5 + "px";

        cellBorder = cellBorderInfo.thickness +"px solid "+cellBorderInfo.color;
        cellBorderRadius = "10px";


        //=========================================

        thumbWInt = 80;
        thumbHInt = 80;

        thumbW = thumbWInt + "px";
        thumbH = thumbHInt + "px";

        thumbFloat = false;
        thumbMar = "30px auto";

        nameW = "94%";
        nameH = "auto";
        nameMar = "10px 0 0 3%";
        nameTextAlign = "center";
        
        descrW = "94%";
        descrH = "auto";
        descrMar = "0 0 0 3%";
        descrTextAlign = "center";



        





    
        //#############################################
        //#############################################

        R['across'] = across;

        R['grid'] = {

            "bgColor"       :"transparent",
            "width"         :gridW,
            "height"        :"auto",
            "margin"        :"25px 0 0 "+gridMarl

        };




        //#############################################
        //#############################################

        //var rowcolors = ['lightgreen','lavender','lightblue','lightgray'];


        //var randmin = 0;
        //var randmax = rowcolors.length;



        for(gkey in groups)
        {

        
            //var randnum = Math.floor(Math.random() * (randmax - randmin + 1) + randmin);
            

            var cells = [];

            var object;
            var array = groups[gkey];
        
            if(groups[gkey].length < across) 
            {

                for(j=0; j < array.length; j++)
                {



                    object = array[j];
                    object["id"] = gkey+"_cel"+j;
                    object['style'] = {

                        "bgColor"       :"#f9f9f9",
                
                        "width"         :cellW,
                        "height"        :cellH,
                        "margin"        :cellMarlr,
                        "border"        :cellBorder,
                


                        "thumb" : {
        
                            "width"    :thumbW,
                            "height"   :thumbH,
                            "margin"   :thumbMar,
                            "float"    :thumbFloat
                
                        },
        

                        "name" : {
        
                            "width"     :nameW,
                            "height"    :nameH,
                            "margin"    :nameMar,
                            "textAlign" :nameTextAlign
                        },
        
        
                        "descr" : {
                
                            "width"     :descrW,
                            "height"    :descrH,
                            "margin"    :descrMar,
                            "textAlign" :descrTextAlign
            
                        }
        
        


                    }

                    cells.push(object);
                    
                }//for i
                //======


                if(array.length > 1 && _DATA.length > 2) lastRowMarl = "0";


                RevData.push({

                    "id"    : gkey,
                    "data"  : cells,
                    "style" : {

                        //"bgColor": rowcolors[randnum],
                        "width"  : lastRowW,
                        "margin" : "0 0 0 "+lastRowMarl
                
                    }
            
                });

            }
            else
            {



                for(j=0; j < array.length; j++)
                {

                    object = array[j];
                    object['id'] = gkey+"_cel"+j;
                    object['style'] = {

                        "bgColor"       :"#f9f9f9",
                
                        "width"         :cellW,
                        "height"        :cellH,
                        "margin"        :cellMarlr,
                        "border"        :cellBorder,
                
                
   
                        "thumb" : {
        
                            "width"    :thumbW,
                            "height"   :thumbH,
                            "margin"   :thumbMar,
                            "float"    :thumbFloat
                
                        },
        


                        "name" : {
        
                            "width"     :nameW,
                            "height"    :nameH,
                            "margin"    :nameMar,
                            "textAlign" :nameTextAlign
                        },
        
        
                        "descr" : {
                
                            "width"     :descrW,
                            "height"    :descrH,
                            "margin"    :descrMar,
                            "textAlign" :descrTextAlign
            
                        }
        
        



                    }

                    cells.push(object);
                    
                }//for i
                //======



                RevData.push({

                    "id"    : gkey,
                    "data"  : cells,
                    "style" : {

                        //"bgColor": rowcolors[randnum],

                        "width"  : rowW,
                        "margin" : "0 0 0 0"

                    },
            
                });




            }//===
            
            


        }//for in
        //=======


    break;
    //########################################################
    //########################################################
    //########################################################
    case 'grid_cell':
    case 'grid_cell_descr':





        //===========================================

        if(gridCall === 'grid_cell_descr')
        {
            across = 1;

        }else{


            across = 2;
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

        }


        //===========================================




        //===========================================

        //var total = _DATA.length;
        //var numofrows = Math.floor(total/across);

        //===========================================





        //===========================================

        cellWInt = 350;
        cellMarDif = 18;

        if(width > maxWidth)
        {


            switch(across)
            {
            case 2:
            case 1:

                cellWInt = (maxWidth/2) - (cellMarDif*across);
            break;
            default:
            break;
            }//==

            if(across === 1) 
            {
                if(width < 450)
                {
                    cellWInt = width - 40;
                }else{
                    cellWInt = width - 100;
                }
            
            }//==

            gridWInt = maxWidth;
            gridW = gridWInt + "px";
            gridMarl = (width - gridWInt)/2 + "px";



        }
        else
        {

            switch(across)
            {
            case 2:
            case 1:

                cellWInt = (width/2) - (cellMarDif*across);
            break;
            default:
            break;
            }//==

            if(across === 1) 
            {
                if(width < 450)
                {
                    cellWInt = width - 40;
                }else{
                    cellWInt = width - 100;
                }
            
            }//==

            gridWInt = (cellWInt+cellMarDif) * across;
            gridW = gridWInt + "px";
            gridMarl = (width - gridWInt)/2 + "px";



        }//==

        //============================================





        //============================================

        cellBorderDif = 0;
        if(cellBorderInfo.boolean) cellBorderDif = (cellBorderInfo.thickness * 2)

        cellWInt = (gridWInt/across) - 14;
        cellW = (cellWInt - cellBorderDif) + "px";
        cellH = "auto";
        cellMarlr = 5 + "px";

        cellBorder = cellBorderInfo.thickness +"px solid "+cellBorderInfo.color;
        cellBorderRadius = "7px";



    
        thumbWInt = 80;
        thumbHInt = 80;

        thumbW = thumbWInt + "px";
        thumbH = thumbHInt + "px";

        if(gridCall === 'grid_cell_descr')
        {

            thumbFloat = "left";
            thumbMar = "10px 0 10px 10px";

            nameW = (cellWInt - thumbWInt) - 40 + "px";
            nameH = "auto";
            nameMar = "10px 0 0 15px";
            nameTextAlign = "left";
            
            descrW = (cellWInt - thumbWInt) - 40 + "px";
            descrH = "auto";
            descrMar = "0 0 15px 15px";
            descrTextAlign = "left";



        }else{


            thumbFloat = false;
            thumbMar = "30px auto";


            nameW = "98%";
            nameH = "auto";
            nameMar = "10px 0 0 1%";
            nameTextAlign = "center";
            
            descrW = "98%";
            descrH = "auto";
            descrMar = "0 0 0 1%";
            descrTextAlign = "center";



        }





        //#############################################
        //#############################################

        R['across'] = across;

        R['grid'] = {

            "bgColor"       :"transparent",
            "width"         :gridW,
            "height"        :"auto",
            "margin"        :"25px 0 0 "+gridMarl

        };



        //#############################################
        //#############################################

        //var rowcolors = ['lightgreen','lavender','lightblue','lightgray'];


        //var randmin = 0;
        //var randmax = rowcolors.length;


        for(j=0; j < _DATA.length; j++)
        {

            object = _DATA[j];

            object["id"] = "cel"+j;
            object['style'] = {

        
                "bgColor"       :"#f9f9f9",
                
                "width"         :cellW,
                "height"        :cellH,
                "margin"        :cellMarlr,
                "border"        :cellBorder,
                "radius"        :cellBorderRadius,
        
        
                "thumb" : {
        
                    "width"    :thumbW,
                    "height"   :thumbH,
                    "margin"   :thumbMar,
                    "float"    :thumbFloat
        
                },


                "name" : {
        
                    "width"     :nameW,
                    "height"    :nameH,
                    "margin"    :nameMar,
                    "textAlign" :nameTextAlign
                },


                "descr" : {
        
                    "width"     :descrW,
                    "height"    :descrH,
                    "margin"    :descrMar,
                    "textAlign" :descrTextAlign
    
                }




            }

            RevData.push(object);
            
        }//for i
        //======




    break;
    //########################################################
    //########################################################
    //########################################################
    default:


    /*


        if(maxWidth)
        {

            gridWInt = maxWidth;
            gridW = gridWInt+"px";
            gridMarl = 0 + "px";

        }else{

            if(width < 1220)
            {
                gridWInt = (width - gridDif);
                gridW = gridWInt+"px";
                gridMarl = (gridDif/2) + "px";

            }else{

                //gridWInt = 1200;
                gridWInt = (width - gridDif);
                gridW = gridWInt+ "px";
                gridMarl = (width - gridWInt)/2 + "px";

            }//==

        }


        */



    break;
    }//===




    //######################################################

    R['data'] = RevData;
    return R;





}



