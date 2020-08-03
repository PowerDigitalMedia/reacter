

export const elemlib =  {



    //#######################################################################
    //#######################################################################
    //#######################################################################
    //#######################################################################
    // highest z
    
    //https://stackoverflow.com/questions/1118198/how-can-you-figure-out-the-highest-z-index-in-your-document

    //https://medium.com/javascript-everyday/javascript-array-from-53287c195487

    //https://dev.to/sagar/three-dots---in-javascript-26ci


    HighestZ: function(elem){




        /*

        //------------------
        //works - vanilla js version
        //------------------

        var maxZ = Math.max.apply(null, 
        $.map($('body *'), function(e,n) {
            if ($(e).css('position') != 'static')
            return parseInt($(e).css('z-index')) || 1;
        }));

        return maxZ;

        */
        





                
        //------------------
        // works - in react - vanillajs - causes problems with safari browser on ipad - 
        //------------------

        var highest = 0;
        // later, potentially repeatedly
        highest = Math.max(
        highest,
        ...Array.from(document.querySelectorAll("body *:not([data-highest]):not(.yetHigher)"), (elem) => parseFloat(getComputedStyle(elem).zIndex))
            .filter((zIndex) => !isNaN(zIndex))
        );
        return highest;


        

        
        
        

        /*

        //------------------
        //works
        //------------------

        var maxZ = Math.max.apply(null, 
        $.map($('body *'), function(e,n) {
            if ($(e).css('position') != 'static')
            return parseInt($(e).css('z-index')) || 1;
        }));

        return maxZ;

        */

        

        /*

        //------------------
        // NOT WORKING CORRECTLY
        //------------------

        if(!elem || elem == undefined) var elem = "*"

        var elems = document.getElementsByTagName("*");//div or *

        var highest = 0;
        for (var i = 0; i < elems.length; i++)
        {
            var zindex=document.defaultView.getComputedStyle(elems[i],null).getPropertyValue("z-index");

            console.log(zindex);


            if((zindex > highest) && (zindex != 'auto'))
            {
                highest = zindex;
            }
        }

        return highest;

        */

    


    },




    //#######################################################################
    //#######################################################################
    //#######################################################################
    //#######################################################################
    // is scrollable Elem


    Scrollable: function(e){

        if( e.scrollTopMax !== undefined )
            return e.scrollTopMax > 0; //All Hail Firefox and it's superior technology!
    
        if( e === document.scrollingElement ) //If what you're checking is BODY (or HTML depending on your css styles)
            return e.scrollHeight > e.clientHeight; //This is a special case.
    
        return e.scrollHeight > e.clientHeight && ["scroll", "auto"].indexOf(getComputedStyle(e).overflowY) >= 0
    
    },




    


    //#######################################################################
    //#######################################################################
    //#######################################################################
    //#######################################################################
    // is scrollable
    
	IsScrollable: function(el) { 
          
		//The scrollTop() method sets or returns the  
		//vertical scrollbar position for the selected elements
		var y1 = el.scrollTop;  
		el.scrollTop += 1; 
		var y2 = el.scrollTop; 
		el.scrollTop -= 1; 
		var y3 = el.scrollTop; 
		el.scrollTop = y1; 
	  
		//The scrollLeft() method returns the horizontal  
		//scrollbar position for the selected elements.
		var x1 = el.scrollLeft;  
		el.scrollLeft += 1; 
		var x2 = el.scrollLeft; 
		el.scrollLeft -= 1; 
		var x3 = el.scrollLeft; 
		el.scrollLeft = x1; 

		//returns true or false accordingly 
		return { 

			horizontal  : x1 !== x2 || x2 !== x3,  
			vertical    : y1 !== y2 || y2 !== y3 
		} 
    },

    



    
    


    //#######################################################################
    //#######################################################################
    //#######################################################################
    //#######################################################################
    // is scrollable
    


	ScrollToTop: function(id,call,position) { 

        if(!position || position === undefined || position == null) position = 0;


        switch(id)
        {
        case'body':

            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        break;
        default:

            var el;
        
            switch(call)
            {
            case'supported':

                el = document.getElementById(id);
                el.style.scrollBehavior = 'smooth'; //CSS ; scroll-behavior: smooth;
                el.scrollTop = parseInt(position); 
            break;
            default:

                el = document.getElementById(id);
                el.scrollTop = parseInt(position); 
            break;
            }//==


  
        break;
        }//==

        

    }
    






}//module
//=======
    
