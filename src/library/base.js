//###############################################################



export const baselib = {




	//#######################################################################
	//#######################################################################
	//#######################################################################
	//#######################################################################
	// object type

	ObjectType: function(it) {


		var R = false;

		if(Object.prototype.toString.call(it) ==="[object String]") R = 'string';
		if(Object.prototype.toString.call(it) === "[object Array]") R = 'array';
		if(Object.prototype.toString.call(it) === "[object Object]") R = 'object';

		return R;


	},






	//#######################################################################
	//#######################################################################
	//#######################################################################
	//#######################################################################
	// parse it

	ParseIt: function(it) {


		var R;
		// is_string;
		//var is_array;
		//var is_object;
		var parseit;

		//if(Object.prototype.toString.call(it) === "[object String]") is_string = true;
		//if(Object.prototype.toString.call(it) === "[object Array]") is_array = false;
		//if(Object.prototype.toString.call(it) === "[object Object]") is_object = false;

		if(Object.prototype.toString.call(it) === "[object String]") parseit = true;
		if(Object.prototype.toString.call(it) === "[object Array]") parseit = false;
		if(Object.prototype.toString.call(it) === "[object Object]") parseit = false;


		if(parseit)
		{
			if(it !== undefined || it !== 'undefined')
			{
				R = JSON.parse(it);
			}else{
				R = it;
			}

		}else{
			R = it;
		}//##

		return R;

	},




	//#######################################################################
	//#######################################################################
	//#######################################################################
	//#######################################################################
	// is json

	IsJSON: function(it) {


		var R = true;

		try {

		   JSON.parse(it);
		}
		catch(e) 
		{
		   R = false;
		}

		return R;


	}








}//module
//=======









