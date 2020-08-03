

export const formlib =  {


    

    
	//#######################################################################
	//#######################################################################
	//#######################################################################
	//#######################################################################

    SetSelectDropDown : function(theId,theValue){

        //LOOP THROUGH AND SET BG IMAGE REPEAT
        var theSelect = document.getElementById(theId);
        for (var i=0; i<theSelect.options.length; i++){
                
            if(theSelect.options[i].value === theValue)
            {
            /*
                alert("SELECTED OPTIONS...\n"+
                "INDEX : "+i+"\n"+
                "VALUE : "+theSelect.options[i].value+"\n"+
                "TEXT : "+theSelect.options[i].text);
            */		
                theSelect.options[i].selected = true;
                //return false; //will stop script at this point
            }
        }//END for loop

    },
    //======





	//#######################################################################
	//#######################################################################
	//#######################################################################
	//#######################################################################

    GetRadioValue : function(radioname){ 

        var radios = document.getElementsByName(radioname);

        var found = '';
        for (var zi=0;  zi < radios.length; zi++) 
        {
            if(radios[zi].checked) 
            {
                found = radios[zi].value;
                break;
            }

        }//for

        return found;

    },
    //======


	//#######################################################################
	//#######################################################################
	//#######################################################################
	//#######################################################################

    SetRadioValue : function(radioname,radioval){ 

        var radios = document.getElementsByName(radioname);
        for (var zi=0;  zi < radios.length; zi++) 
        {
            if(radios[zi].value === radioval) 
            {
                radios[zi].checked = true;
            }else{
                radios[zi].checked = false;
            }//
        }//for


    },
    //======





	//#######################################################################
	//#######################################################################
	//#######################################################################
	//#######################################################################

    //EMPTY
    //all chars allowed

    Validate_Empty : function(value,error_name) {

        var error = false;

        if(value.length === 0 || value === error_name) 
        {
            error = error_name;	
        } 

        return error; 


    },
    //======






	//#######################################################################
	//#######################################################################
	//#######################################################################
	//#######################################################################

    Validate_Email : function(value,error_name) {


        function Trim_Whitespace(s)
        {
            return s.replace(/^\s+|\s+$/, '');
        }


        var msg = "";
        var error=false;
        var tfld = Trim_Whitespace(value);// value of field with whitespace trimmed off
        var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/ ;
        //var illegalChars= /[\(\)\<\>\,\;\:\\\"\[\]]/ ;
        var illegalChars= /[()<>,;:\\"[\]]/ ;


  
        if(value === "" || value === error_name) 
        {
            msg = "Field has not been filled in";
            error = error_name+"|"+msg;
        } 
        else if(!emailFilter.test(tfld)) 
        {//test email for illegal characters
        
            msg = "Please enter a valid address.";
            error = error_name+"|"+msg;

        } 
        else if(value.match(illegalChars))
        {
            msg = "Contains illegal characters.";
            error = error_name+"|"+msg;
        } 

        return error;
        
    },
    //======






	//#######################################################################
	//#######################################################################
	//#######################################################################
	//#######################################################################

    Validate_Select : function(value,error_name) {
        
        var msg = "";
        var error = false;
        
        if(value === "" || value === "SELECT")
        {
        
            msg = "No Selection";
            error = error_name+"|"+msg;
        }

        return error;
        
        
    }
    //======




    

}//module
//=======



