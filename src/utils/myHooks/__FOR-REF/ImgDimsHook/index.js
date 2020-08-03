
//#######################################################################
//#######################################################################
//#######################################################################
//#######################################################################

        
export const useImgDims = ({ 

    mod_call,
    divWidth,
    divHeight,
    width,
    height 

}) => {




    var thumbWidth;
    var thumbHeight;

    var decimal;
    var h;

    var img_width;
    var img_height;

    var mod;

    var top_margin;
    var left_margin;


    var modHeight;
    var diff;                                           
    var modWidth; 
                    
    var remodWidth;
    var remodHeight;

    var h_diff;

    //----------------------------------------------
    //----------------------------------------------
    function AspectRatio(w,h) {


        function GCD(x, y) {

            var z;
 
            while(y !== 0) 
            {
                z = x % y;
                x = y;
                y = z;
            }
            return x;

        }//


        var divisor = GCD(w,h);
        var aspect_w = w / divisor;
        var aspect_h = h / divisor;
        var aspect_ratio = Math.round(aspect_w)+":"+Math.round(aspect_h);

        return aspect_ratio;

    }


    //----------------------------------------------
    //----------------------------------------------

    function ScaleSize(maxW,maxH,currW,currH){


        var ratio = currH / currW;

        if(currW >= maxW && ratio <= 1)
        {
            currW = maxW;
            currH = currW * ratio;
        } 
        else if(currH >= maxH)
        {
            currH = maxH;
            currW = currH / ratio;
        }
        return [currW,currH];



        /*
        USAGE
        var sizeArr = getlib.ScaleSize(136,82,601,60);

        var w = sizeArr[0];
        var h = sizeArr[1];

        alert(w+","+h);

        */



    }
    //----------------------------------------------
    //----------------------------------------------








    //alert(mod_call);
    

    //########################
    //ASPECT RATIO
    //########################
                        
    var aspect_ratio = AspectRatio(width,height);
    var arArr = aspect_ratio.split(':');
                
        var first_num = arArr[0];
        var second_num = arArr[1];


    var aspect_num;
                
    aspect_num = first_num / second_num;
    aspect_num = Math.floor(aspect_num);
                
            


/*


    var alrt = '';
        alrt += "MOD CALL: "+mod_call+"\n";
        alrt += "DIV WIDTH: "+divWidth+"\n";
        alrt += "DIV HEIGHT: "+divHeight+"\n";
        alrt += "WIDTH: "+width+"\n";
        alrt += "HEIGHT: "+height+"\n";
        alrt += "ASPECT NUM: "+aspect_num+"\n";
    alert(alrt);

*/

    
    if(aspect_num > 1)
    {//CUSTOM

        //alert("above aspect 1");

    
        if(mod_call === 'single') 
        {
        
            divHeight = height;


            thumbWidth = width;
            thumbHeight = height;

       
            if(width > height)
            {//WIDE

                decimal = height / width;
                h = decimal * divWidth;

                thumbWidth = divWidth;
                thumbHeight = h;
            
            }//####



            if(width > divWidth)
            {//TOO WIDE
    
                decimal = height / width;
                //var h = (decimal/100) * divWidth;
                h = decimal * divWidth;
    
                thumbWidth = divWidth;
                thumbHeight = h;


            }//##
    

            //alert("WIDTH: "+width+"\nHEIGHT: "+height+"\nTHUMBWIDTH: "+thumbWidth+"\nTHUMBHEIGHT: "+thumbHeight);


            img_width = Math.round(thumbWidth);
            img_height = Math.round(thumbHeight);

            //################
            //ADJUST VARS
            //################
                        
            top_margin = 0;
            left_margin = 0;
            //var adjust_vars = 'single|'+top_margin+'|'+left_margin;

            mod = "single";
        
        }
        //#################


        //CENTERED


        //#################
        else
        if(mod_call === 'center')
        {

            
            left_margin = 0;
            if(width > divWidth)
            {

                left_margin = (width - divWidth)/2;
                //alert("> "+left_margin);

            }
            else
            if(width < divWidth)
            {

                left_margin = (divWidth - width)/2;
                //alert("< "+left_margin);
            }//===

            thumbWidth = width;
            thumbHeight = height;


            top_margin = 0;
            //var adjust_vars = 'center|'+top_margin+'|'+left_margin;


            mod = "center";


        }
        //#################


        //CUSTOM_ASPECT


        //#################
        else
        {

            var sizeArr = ScaleSize(divWidth,divHeight,width,height);
                            
            thumbWidth = sizeArr[0];
            thumbHeight = sizeArr[1];
                            
            img_width = Math.round(thumbWidth);
            img_height = Math.round(thumbHeight);
                        
            //################
            //ADJUST VARS
            //################
                        
            top_margin = (divHeight - img_height)/2;
            left_margin = 0;
            //var adjust_vars = 'custom_aspect|'+top_margin+'|'+left_margin;

            mod = "custom_aspect";

        }//#####
    
    }
    else
    {//MOD SIZING



        //alert("below aspect");


        modHeight = divHeight;
        diff = height / modHeight;                                           
        modWidth = width / diff; 
    
        
        //alert(modWidth+"----"+divWidth);
    
    
        //var mod_call = 'readjust';

        //var mod_call = 'default';
    
        //if(modWidth > divWidth) var mod_call = 'too_wide';
        //if(modWidth < divWidth) var mod_call = 'too_narrow';
                    
             
        
            
        switch(mod_call)
        {
        case'too_wide':
        
            //##########################
            //REPOSITION TOO WIDE IMAGE
            //Adjust Below
            //##########################

            thumbWidth = modWidth;
            thumbHeight = modHeight;

            //ADJUST VARS
            top_margin = 0;
            left_margin = (modWidth - divWidth)/2;
        
            //adjust_vars = mod_call+'|'+top_margin+'|'+left_margin;

        break;
        case'too_narrow':
        
            //##########################
            //REPOSITION TOO NARROW
            //Adjust Below
            //##########################
                
            thumbWidth = modWidth;
            thumbHeight = modHeight;
    

            //ADJUST VARS
            top_margin = 0;
            left_margin = (divWidth - modWidth)/2;;
        

        break;
        case'readjust':

        
            if(modWidth > divWidth)
            {
                //READJUST MOD SIZE
                remodWidth = divWidth;
                diff = modWidth / remodWidth;                                           
                remodHeight = modHeight / diff; 
    
                //TO SCALE
                thumbWidth = remodWidth;
                thumbHeight = remodHeight;


            }else{
    
                thumbWidth = modWidth;
                thumbHeight = modHeight;
            }//###



    
            top_margin = (divHeight - thumbHeight)/2;
            left_margin = 0;
            

        break;
        case'center':


            top_margin = 0;
            left_margin = 0;




            if(modWidth > divWidth)
            {
                //READJUST MOD SIZE
                remodWidth = divWidth;
                diff = modWidth / remodWidth;                                           
                remodHeight = modHeight / diff; 

                //TO SCALE
                thumbWidth = remodWidth;
                thumbHeight = remodHeight;


            }else{

                thumbWidth = modWidth;
                thumbHeight = modHeight;
            }//###


            if(modWidth > divWidth)
            {

                left_margin = (modWidth - divWidth)/2;
                //alert("> "+left_margin);

            }
            else
            {

                left_margin = (divWidth - thumbWidth)/2;
                //alert("< "+left_margin);
            }//===



        break;
        case'fill_div':


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






/*
            var alrt = '';
                alrt += "DIV WIDTH: "+divWidth+"\n";
                alrt += "DIV HEIGHT: "+divHeight+"\n";

                alrt += "MOD WIDTH: "+modWidth+"\n";
                alrt += "MOD HEIGHT: "+modHeight+"\n";

                alrt += "REMOD WIDTH: "+remodWidth+"\n";
                alrt += "REMOD HEIGHT: "+remodHeight+"\n";

                alrt += "THUMB WIDTH: "+thumbWidth+"\n";
                alrt += "THUMB HEIGHT: "+thumbHeight+"\n";

                alrt += "H DIFF: "+h_diff+"\n";
                alrt += "TOP MARGIN: "+top_margin+"\n";
                alrt += "LEFT MARGIN: "+left_margin+"\n";

            alert(alrt);
*/

    
        
        break;
        case'stretch':
    
            //#################
            //STRETCH TO FIT
            //#################
        
            thumbWidth = divWidth;
            thumbHeight = modHeight;
    
        break;
        case'single':
    
            top_margin = 0;
            left_margin = 0;


            //alert("W:"+width+" H:"+height);
        
            if(parseInt(width) === parseInt(height))
            {//EQUAL

                //alert('equal');

                thumbWidth = divWidth;
                thumbHeight = divWidth;


            }
            else
            {//NOT EQUAL
        
                decimal = height / width;
                h = decimal * divWidth;
    
                thumbWidth = divWidth;
                thumbHeight = h;
                
            }//######

    
        break;
        default:
    
            thumbWidth = modWidth;
            thumbHeight = modHeight;
        break;
        }//####

    
        img_width = Math.round(thumbWidth);
        img_height = Math.round(thumbHeight);


        top_margin = Math.round(top_margin);
        left_margin = Math.round(left_margin)

        //adjust_vars = mod_call+'|'+top_margin+'|'+left_margin;


        mod = mod_call;
                
    }//END if aspect
    //##############


    //alert(img_width+"==="+img_height+"---"+adjust_vars);

    return {

        "mod"           : mod,
        "img_width"     : img_width,
        "img_height"    : img_height,
        "top"           : top_margin,
        "left"          : left_margin

    };
 
}
