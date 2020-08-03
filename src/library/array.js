

export const arraylib = {




	//#######################################################################
	//#######################################################################
	//#######################################################################
	//#######################################################################

	InArray : function(needle, haystack) {



		var type;
		if(Object.prototype.toString.call(needle) == "[object String]") type = 'string';
		if(Object.prototype.toString.call(needle) == "[object Array]") type = 'array';
		if(Object.prototype.toString.call(needle) == "[object Object]") type = 'object';



		//alert("InArray Type: "+type);




		switch(type)
		{
		case'string':

				var i;
				for(i=0; i < haystack.length; i++)
				{
					if(haystack[i] == needle)
					{
						return true;
					}
				}
				return false;
	
		break;
		case'array':


			if(needle.length != haystack.length) return false;

			var loop = haystack.length;
			for(var i=0; i < loop; i++) 
			{
				if(needle[i] != haystack[i]) return false;
			}
			return true;


		break;
		case'object':


			var loop = haystack.length;
			for(var i=0; i < loop; i++) 
			{
				var hayobj = haystack[i];
				if(Object.prototype.toString.call(hayobj) != "[object Object]") return false;
	


				var jneedle = JSON.stringify(needle);
				var jhay = JSON.stringify(hayobj);
			
				if(jneedle == jhay) return true;

				return false;

			}


		break;
		}//switch



	},



	//#######################################################################
	//#######################################################################
	//#######################################################################
	//#######################################################################

	ShuffleArray: function(array) {



		if(Object.prototype.toString.call(array) == "[object Array]"
		)
		{
			var counter = array.length;

			// While there are elements in the array
			while (counter > 0) {
				// Pick a random index
				var index = Math.floor(Math.random() * counter);

				// Decrease counter by 1
				counter--;

				// And swap the last element with it
				var temp = array[counter];
				array[counter] = array[index];
				array[index] = temp;
			}

		}//if
		//===

		return array;


	},






	//#######################################################################
	//#######################################################################
	//#######################################################################
	//#######################################################################

	Shuffle_Array : function(o){


		for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;


		
		/*
		How to use it:
		
		var myArray = ['1','2','3','4','5','6','7','8','9'];
		Shuffle_Array(myArray);
		*/
		

	},





	//#######################################################################
	//#######################################################################
	//#######################################################################
	//#######################################################################
	
	CaseInsensitiveSort : function(a, b) { 

		var ret = 0;
		a = a.toLowerCase();b = b.toLowerCase();
		if(a > b) 
			ret = 1;
		if(a < b) 
			ret = -1; 
		return ret;

	},






	

	//#######################################################################
	//#######################################################################
	//#######################################################################
	//#######################################################################

	MoveTo : function(pos1, pos2) {


		// local variables
		var i, tmp;

		//cast input parameters to integers
		pos1 = parseInt(pos1, 10);
		pos2 = parseInt(pos2, 10);

		// if positions are different and inside array
		if (pos1 !== pos2 
		&& 0 <= pos1 
		&& pos1 <= this.length 
		&& 0 <= pos2 
		&& pos2 <= this.length) 
		{

			// save element from position 1
			tmp = this[pos1];


			
			// move element down and shift other elements up
			if (pos1 < pos2) 
			{
				for (i = pos1; i < pos2; i++) 
				{
					this[i] = this[i + 1];
				}
			}

			// move element up and shift other elements down
			else 
			{
				for (i = pos1; i > pos2; i--) 
				{
					this[i] = this[i - 1];
				}
			}

			// put element from position 1 to destination
			this[pos2] = tmp;

		}

	},

	






	//#######################################################################
	//#######################################################################
	//#######################################################################
	//#######################################################################

	// ARRAY REMOVE - By John Resig (MIT Licensed)


	RemoveFromArray : function(from, to) {

		var rest = this.slice((to || from) + 1 || this.length);
		this.length = from < 0 ? this.length + from : from;
		return this.push.apply(this, rest);



		/*
		and here's some examples of how it could be used:
		
		// Remove the second item from the array
		array.remove(1);
		// Remove the second-to-last item from the array
		array.remove(-2);
		// Remove the second and third items from the array
		array.remove(1,2);
		// Remove the last and second-to-last items from the array
		array.remove(-2,-1);
		*/
		
	

	}



	

	
  

}//module
//=======



