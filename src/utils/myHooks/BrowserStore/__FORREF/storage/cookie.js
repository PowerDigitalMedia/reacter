

//===================================================================================

// set
	
//===================================================================================
	

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
		var domain = zoneObj['cookie_domain'];//"www.site.com"; // SEE process/lib/essentials
		var secure = 0; // 1 = secure 0 + unsecure 



		if(packet['expiresType'] 
		&& packet['expiresType'] != undefined 
		&& packet['expiresType'] != ''
		&& packet['expiresNum'] 
		&& packet['expiresNum'] != undefined 
		&& packet['expiresNum'] != ''
		)
		{
			var expiresType = packet['expiresType'];	//days, hours, minutes or blank
			var expiresNum = packet['expiresNum'];		//add number or leave blank ( # of days, # of hours # of minutes)
		}//==


		if(packet['path'] 
		&& packet['path'] != undefined 
		&& packet['path'] != ''
		)
		{
			var path = packet['path'];	//example /foldername/
		}//==



		if(packet['secure'] 
		&& packet['secure'] != undefined 
		&& packet['secure'] != ''
		)
		{
			var secure = packet['secure']; 	// 1 = secure 0 + unsecure 
		}//==




		cookielib.SetCookie(name, value, expiresType, expiresNum, path, domain, secure);


		var result = Get_CookieStorage(storage_id);
		if(result == storage_value) var R = true;


	return R;



}//func
//=====




	



//===================================================================================

// get
	
//===================================================================================
	

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
		var R = cookielib.GetCookie(storage_id);
				
	}//#
	

	return R;



}//func
//=====






	

	
//===================================================================================
	
// delete
	
//===================================================================================
	
function Delete_CookieStorage(storage_id) {
	

	var R = false;

		var storage_id = packet['storage_id'];
			
		var alrt = '';
			alrt += "\nDelete Cookie Storage...";
			alrt += "\nSTORAGE ID: "+storage_id;
		alert(alrt);



		cookielib.DeleteCookie(storage_id);
	

		var result = Get_CookieStorage(storage_id);
		if(!result) var R = true;


	return R;



}//func
//=====
	
	
	
	
