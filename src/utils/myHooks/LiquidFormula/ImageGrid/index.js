
import { useWindowDimensions } from '../../../WindowDimensionsProvider'



export function useLiquidImageGrid(

    _DATA, 
    gridCall, 
    modCall, 
    thumbCall, 
    cellBorderInfo, 
    across,
    maxWidth

) {


    //console.log("_DATA: "+_DATA);

    const { width } = useWindowDimensions()

    /*
    console.log(""

        +"\nWINDOW WIDTH: "+width
        +"\nWINDOW HEIGHT: "+height
    );
    */



    //#############################################
    //#############################################
    //#############################################

    var gridDif = 50;

    var gridWInt;
    var gridW;
    var gridMarl;


    var columnWInt;
    var columnW;
    var columnMarlr;

    //var columnColors = ["red","blue","yellow","purple"];

    var cellWInt;
    var cellW;
    var cellMarlr;

    var cellBorderDif; 
    var cellBorder;


    var thumbDif;
    var thumbWInt;
    var thumbW;
    var thumbHInt;
    var thumbH;
    var thumbMar;


    //var actualImgW;
    //var actualImgH;

    var imgW;
    var imgH;

    //var imgdims;



    //=============================================


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

 




    //==============================================

    if(!across)
    {

        across = 4;

        if(width < 625)
        {
            across = 1;
        }
        else 
        if(width < 900)
        {
            across = 2;
        }
        else 
        if(width < 1220)
        {
            across = 3;
        }


    }//==

    //==============================================


    columnWInt = (gridWInt/across) - 10;
    columnW = (columnWInt) + "px";
    columnMarlr = 5 + "px";



    cellBorderDif = 0;
    if(cellBorderInfo.boolean) cellBorderDif = (cellBorderInfo.thickness * 2)

    cellWInt = (gridWInt/across) - 10;
    cellW = (cellWInt - cellBorderDif) + "px";
    cellMarlr = 5 + "px";

    cellBorder = cellBorderInfo.thickness +"px solid "+cellBorderInfo.color;


    thumbDif = 20;
    thumbWInt = cellWInt - thumbDif;
    thumbW = thumbWInt + "px";

    thumbHInt = (64/100) * thumbWInt;
    thumbH = thumbHInt + "px";

    thumbMar = (thumbDif/2) + "px";



    imgW = thumbWInt;
    imgH = thumbHInt;




    /*

    position    :box.position,
    
    id          :box.id,
    title       :box.title,
    text        :box.text,
    bgColor     :box.bgColor,
    image:{

        src:box.image.src,
        w:imgW,
        h:imgH
    }

    */

    






    //#############################################
    //#############################################
    //#############################################

    const R = {};

    R['grid'] = {

        "bgColor"       :"transparent",
        "width"         :gridW,
        "height"        :"auto",
        "margin"        :"10px 0 100px "+gridMarl

    };

    R['column'] = {

        "width"         :columnW,
        "height"        :"auto",
        "margin"        :"0 "+columnMarlr+" 0 "+columnMarlr,

    };

    R['cell'] = {

        "bgColor"       :"lightcoral",

        "width"         :cellW,
        "height"        :"auto",
        "margin"        :cellMarlr,
        "border"        :cellBorder,


        "thumb" : {

            "width"    :thumbW,
            "height"   :thumbH,
            "margin"   :thumbMar+" 0 0 "+thumbMar,

        }


    };

 





    //#############################################
    //#############################################
    //#############################################

    const RevData = [];

    for(var i=0; i < _DATA.length; i++)
    {

        var box = _DATA[i];

        imgW = box.image.w;
        imgH = box.image.h;







        //#####################################################

        //var mod_call = 'fill_div';

        var divWidth = thumbWInt;
        var divHeight = thumbHInt;

        var thumbWidth;
        var thumbHeight;
    
        //var decimal;
        //var h;
    

        var thumb_height;

        var img_width;
        var img_height;
    
        //var mod;
    
        var top_margin;
        var left_margin;
    
    
        var modHeight;
        var diff;                                           
        var modWidth; 
                        
        var remodWidth;
        var remodHeight;
    
        var h_diff;








        //########################################################

        switch(modCall)
        {
        case'fill_div':



            //-----------------------------------------

            modHeight = divHeight;
            diff = imgH / modHeight;                                           
            modWidth = imgW / diff; 
        


            remodWidth = divWidth;
            remodHeight = divHeight;


            //################
            //GREATER THAN		
            //################

            if(modWidth > divWidth)
            {
                //alert('modWidth > divWidth');

                remodWidth = modWidth;
                diff = modWidth / remodWidth;                                           
                remodHeight = modHeight / diff; 


                //LESS THAN HEIGHT
                if(remodHeight < divHeight)
                {
                    //alert('remodHeight < divHeight');

                    h_diff = (divHeight - remodHeight);
                    remodHeight = remodHeight + h_diff;
                    remodWidth = remodWidth + h_diff;

                }//###

            }//############


            //###############
            //LESS THAN
            //###############

            if(modWidth < divWidth)
            {
                //alert('modWidth < divWidth');

                top_margin = 0;
                left_margin = 0;


                remodWidth = divWidth;
                diff = modWidth / remodWidth;                                           
                remodHeight = modHeight / diff;

            
                //LESS THAN HEIGHT
                if(remodHeight < divHeight)
                {
                    //alert('remodHeight < divHeight');

                    h_diff = (divHeight - remodHeight);
                    remodHeight = remodHeight + h_diff;
                }//###


            }//###########



            thumbWidth = remodWidth;
            thumbHeight = remodHeight;




            //##################
            //ADJUST VARS
            //##################

            //TOP MARGIN
            if(remodHeight > divHeight)
            {
                top_margin = (remodHeight - divHeight)/2;
                top_margin = -top_margin;

            }else{

                //var top_margin = 0;
                top_margin = (divHeight - thumbHeight)/2;

            }//###
                                
            //LEFT MARGIN
            if(remodWidth > divWidth)
            {
                left_margin = (remodWidth - divWidth)/2;
                left_margin = -left_margin;
            }else{
                left_margin = 0;
            }//###




            img_width = Math.round(thumbWidth);
            img_height = Math.round(thumbHeight);


            top_margin = Math.round(top_margin);
            left_margin = Math.round(left_margin)

            //adjust_vars = mod_call+'|'+top_margin+'|'+left_margin;


            //mod = mod_call;


            //--------------------------------------------


        break;
        default:
        break;
        }//==

        //########################################################


    






        //########################################################

        if(thumbCall === "flex_height")
        {
            thumb_height = img_height + "px";

            top_margin = 0;
            left_margin = 0;

        }else{

            thumb_height = thumbH;
        }

        //########################################################









        //########################################################

        RevData.push({

            position    :box.position,
    
            id          :box.id,
            title       :box.title,
            text        :box.text,
            bgColor     :box.bgColor,


            thumb:{

                w       :img_width+"px",
                h       :thumb_height

            },

            image:{
        
                src     :box.image.src,
                w       :img_width,
                h       :img_height,
                top     :top_margin,
                left    :left_margin
            }


        });


    }//== i





    //########################################################




    //########################################################

    if(gridCall === 'grid_column_cell')
    {
        if(RevData.length > 0)
        {
            var ColData = DistributeToColumns(RevData,across);
            R['data'] = ColData;
        }else{
            R['data'] = RevData;
        }
 
    }else{

        R['data'] = RevData;
    }
    

    return R;


}




function DistributeToColumns(data,across){

    //alert(data+"\n"+across);
    //return data;

    function GetShortestColumn(ColData){

        var lowest;
        var colnum;
        var totals = [];
        var total;

        for(var z=0; z < ColData.length; z++)
        {
            total = 0;
            var col = ColData[z];
            for(var j=0; j < col.length; j++)
            {
                var box = col[j];
                total = total + parseInt(box.image.h);
     
            }//== j

           totals.push(total);

        }//== z

       
        for(var i=0; i < totals.length; i++)
        {
            if(i===0) 
            {
                lowest = totals[i];
                colnum = i;
            }else{

                if(lowest > totals[i])
                {
                    lowest = parseInt(totals[i]);
                    colnum = i;
                }
            }
      
        }//== z


        //console.log("COLNUM: "+colnum+"\nLOWEST: "+lowest);

        return colnum;

    }//func




    const ColData = [];

    switch(across)
    {
    case 1:
        ColData.push([]);
    break;
    case 2:
        ColData.push([]);
        ColData.push([]);
    break;
    case 3:
        ColData.push([]);
        ColData.push([]);
        ColData.push([]);
    break;
    case 4:
        ColData.push([]);
        ColData.push([]);
        ColData.push([]);
        ColData.push([]);
    break;
    default:
    break;
    }//===



    for(var i=0; i  < data.length; i++)
    {
        var box = data[i];
     
        if(i < across)
        {
            ColData[i].push(box);
        }else{

            var colnum = GetShortestColumn(ColData);
            ColData[colnum].push(box);
        }//==


    }//== i


    //console.log(JSON.stringify("FIRST COL: "+ColData[0],null,2));
    //console.log(JSON.stringify("LAST COL: "+ColData[across-1],null,2));

    return ColData;


}//==



