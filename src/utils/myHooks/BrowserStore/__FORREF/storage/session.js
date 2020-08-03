

//===================================================================================

// set
	
//===================================================================================
	

function Set_SessStorage(packet){


	var storage_id = packet['storage_id'];
	var storage_value = packet['storage_value'];


	var R = false;

		
		sessionStorage[storage_id] = storage_value;

		var result = Get_SessStorage(storage_id);
		if(result == storage_value) var R = true;

	return R;


}//func
//=====




	



//===================================================================================

// get
	
//===================================================================================
	

function Get_SessStorage(storage_id){


	var R = false;
	
		
	if(sessionStorage[storage_id])
	{
		var R = sessionStorage[storage_id];
	
	}//#
		
	return R;



}//func
//=====






	

	
//===================================================================================
	
// delete
	
//===================================================================================
	
function Delete_SessStorage(storage_id) {
	


	var R = false;
			
		sessionStorage.removeItem(storage_id);

		var result = Get_SessStorage(storage_id);
		if(!result) var R = true;


	return R;



}//func
//=====
	
	
	
	
