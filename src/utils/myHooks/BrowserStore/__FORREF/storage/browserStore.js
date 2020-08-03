


//###########################################################
//###########################################################
//###########################################################

function Get_BrowserStore(){


    var store = Get_LocalStorage({"storage_id":"browserStore"});
  
	var bs = {}

	//=======================================================
	if(store 
	&& store != '' 
	&& store != undefined)
	{
		//alert("Get_BrowserStore - store: "+store);
		var store = baselib.ParseIt(store);

		for(var k in store)
		{
			bs[k] = store[k];
		}

	}//==
    //=======================================================
    

    return bs;


}//==





//###########################################################
//###########################################################
//###########################################################

function Set_BrowserStore(pack){


    var unpack = baselib.ParseIt(pack);


    //====================================================
    var newStore = {}
    
    //-------------------
    //load current data
    //-------------------

	var browserStore = Get_BrowserStore();
	if(browserStore 
	&& browserStore != '' 
	&& browserStore != undefined)
	{
		//alert("BROWSER STORAGE: "+browserStore);
		var browserStore = baselib.ParseIt(browserStore);

		for(var k in browserStore)
		{
			newStore[k] = browserStore[k];
		}

    }//==


    //-----------------
    //load new data
    //-----------------

    for(var k in unpack)
    {
        newStore[k] = unpack[k];
    }
    
	//===================================================



    var storage_id = 'browserStore';
    var storage_value = JSON.stringify(newStore);
    


    //====================================
    
    Set_LocalStorage({

        "storage_id"    : storage_id, 				// name
        "storage_value" : storage_value,			// value

    });

    

    /*
    //====================================

	var domain = window.location.host;
	//alert(window.location.host);

    Set_CookieStorage({

        "storage_id"    : storage_id, 				// name
        "storage_value" : storage_value,			// value
        "expiresType" 	: 'days',                	// days, hours, minutes or blank
        "expiresNum"	: '30',                     // add number or leave blank ( # of days, # of hours # of minutes)
        "path"        	: "/",                      // example /foldername/
        "domain"      	: domain, 					// "www.site.com";
        "secure"      	: 0                         // 1 : secure 0 + unsecure 
    
    });

    */




}//==






//###########################################################
//###########################################################
//###########################################################


function Delete_BrowserStore(){


    var del = Delete_LocalStorage({"storage_id":"browserStore"});
    if(del) console.log('browserStore deleted')



}//==


