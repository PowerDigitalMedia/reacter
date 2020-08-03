

//-------------------------------------
//library
//-------------------------------------

//import { arraylib } from '../..//library/array';
import { baselib } from '../../../library/base';
import { cookielib } from '../../../library/cookie';
//import { elemlib } from '../../../library/elem';
//import { formlib } from '../../../library/form';
//import { stringlib } from '../../../library/string';





//#######################################################################
//#######################################################################
//#######################################################################

export function useBrowserStore(

    call,
    pack


) {



    var k;
    var bs;
    var store;
    var storage_id = 'browserStore';
    var storage_value;


    switch(call)
    {
    //###################################################
    //###################################################
    //###################################################
    //###################################################
    case'set':



        var unpack = baselib.ParseIt(pack);


        //====================================================
        var newStore = {}
        
        //-------------------
        //load current data
        //-------------------


        if(typeof(Storage)!=="undefined")
        {
                    
            if(localStorage[storage_id])
            {
                store = localStorage[storage_id];
        
            }//#
            
        }
        else
        {
            store = Get_CookieStorage(storage_id);
                
        }//#
    

        if(store 
        && store !== '' 
        && store !== undefined)
        {
            //alert("BROWSER STORAGE: "+store);
            store = baselib.ParseIt(store);

            for(k in store)
            {
                newStore[k] = store[k];
            }

        }//==


        //-----------------
        //load new data
        //-----------------

        for(k in unpack)
        {
            newStore[k] = unpack[k];
        }
        
        //==================================================

        storage_value = JSON.stringify(newStore);
        
        //===================================================
 
        if(typeof(Storage)!=="undefined")
        {

            localStorage[storage_id] = storage_value;
    
        }
        else
        {
            Set_CookieStorage({

                "storage_id"    :storage_id,
                "storage_value" :storage_value

            });
    
        }//#



        //-------------------------------------------
    
    
        if(typeof(Storage)!=="undefined")
        {
                    
            if(localStorage[storage_id])
            {
                store = localStorage[storage_id];
        
            }//# 
        }
        else
        {
            store = Get_CookieStorage(storage_id);
                
        }//#
    

        //=================================================
        if(store 
        && store !== '' 
        && store !== undefined)
        {
            //alert("Get_BrowserStore - store: "+store);
            store = baselib.ParseIt(store);

            bs = {};
            for(k in store)
            {
                bs[k] = store[k];
            }

        }else{
            bs = false;
        }//==
        //=================================================
        

    break;
    //###################################################
    //###################################################
    //###################################################
    //###################################################
    case'get':

    

        if(typeof(Storage)!=="undefined")
        {
                    
            if(localStorage[storage_id])
            {
                store = localStorage[storage_id];
        
            }//# 
        }
        else
        {
            store = Get_CookieStorage(storage_id);
                
        }//#
    
        //=================================================
        if(store 
        && store !== '' 
        && store !== undefined)
        {
            //alert("Get_BrowserStore - store: "+store);
            store = baselib.ParseIt(store);

            bs = {};
            for(k in store)
            {
                bs[k] = store[k];
            }

        }else{
            bs = false;
        }//==
        //=================================================
        



    break;
    //###################################################
    //###################################################
    //###################################################
    //###################################################
    case'del':

    
        if(typeof(Storage)!=="undefined")
        {
            localStorage.removeItem(storage_id);
        }else{
            Delete_CookieStorage(storage_id);
        }//#



        //-----------------------------------------------

        if(typeof(Storage)!=="undefined")
        {       
            if(localStorage[storage_id])
            {
                bs = localStorage[storage_id];
        
            }//# 
      
        }
        else
        {
            bs = Get_CookieStorage(storage_id);   
        }//#
    

    
    break;
    default:

        bs = false;
    break;
    }//==




    return bs;


}//== export func
















//######################################################################
//######################################################################
//######################################################################
// set
	

function Set_CookieStorage(packet){


	var storage_id = packet['storage_id'];
	var storage_value = packet['storage_value'];



	var R = false;

		/*
		var alrt = '';
			alrt += "\nSet Storage...";
			alrt += "\nSTORAGE ID: "+storage_id;
		alert(alrt);
		*/


		var name = storage_id;
		var value = storage_value;
		var expiresType = '';//days, hours, minutes or blank
		var expiresNum = '';//add number or leave blank ( # of days, # of hours # of minutes)
		var path = "/";//example /foldername/
		var domain = window.location.hostname;//"www.site.com"; // SEE process/lib/essentials
		var secure = 0; // 1 = secure 0 + unsecure 



		if(packet['expiresType'] 
		&& packet['expiresType'] !== undefined 
		&& packet['expiresType'] !== ''
		&& packet['expiresNum'] 
		&& packet['expiresNum'] !== undefined 
		&& packet['expiresNum'] !== ''
		)
		{
			expiresType = packet['expiresType'];	//days, hours, minutes or blank
			expiresNum = packet['expiresNum'];		//add number or leave blank ( # of days, # of hours # of minutes)
		}//==


		if(packet['path'] 
		&& packet['path'] !== undefined 
		&& packet['path'] !== ''
		)
		{
			path = packet['path'];	//example /foldername/
		}//==



		if(packet['secure'] 
		&& packet['secure'] !== undefined 
		&& packet['secure'] !== ''
		)
		{
			secure = packet['secure']; 	// 1 = secure 0 + unsecure 
		}//==




		cookielib.SetCookie(name, value, expiresType, expiresNum, path, domain, secure);


		var result = Get_CookieStorage(storage_id);
		if(result === storage_value) R = true;


	return R;



}//func
//=====




	

//######################################################################
//######################################################################
//######################################################################
// get
	

function Get_CookieStorage(storage_id){


	var R = false;
		
	/*	
	var alrt = '';
		alrt += "\nGet Storage...";
		alrt += "\nSTORAGE ID: "+storage_id;
	alert(alrt);
	*/


	if(cookielib.GetCookie(storage_id))
	{
		R = cookielib.GetCookie(storage_id);
				
	}//#
	
	return R;



}//func
//=====






	
//######################################################################
//######################################################################
//######################################################################
// delete
	
function Delete_CookieStorage(storage_id) {
	

    cookielib.DeleteCookie(storage_id);


    //--------------------------------------

    var R = Get_CookieStorage(storage_id);
	return R;



}//func
//=====
	
	
	
	



