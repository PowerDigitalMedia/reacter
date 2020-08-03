

//========================================================
//========================================================




//Has




//========================================================
//========================================================

function Has_LocalStorage(){


	if(localStorage 
	) 
	{
		return true;
	}else{
		return false;
	}//if
	//===


}//function
//=========






//========================================================
//========================================================




//Has




//========================================================
//========================================================

function Resp_LocalStorage(pack){


	var pack = baselib.ParseIt(pack);
	var result = Get_LocalStorage(pack);

	var result = baselib.ParseIt(result);

	
	var message = JSON.stringify({

		"storage_id"	:pack['storage_id'],
		"result" 		:result

	},null,2);



	console.log("RESP LOCAL STORAGE: "+message);
	

	Show_Messenger({

		'message'       :message,
		'duration'      :'output',
		'alfa_bgcolor'  :'#1A1926',
		'title'         :"Local Storage",
		'storage_id'    :false
	});




}//function
//=========















//========================================================
//========================================================




//Set




//========================================================
//========================================================

function Set_LocalStorage(pack){


	var pack = baselib.ParseIt(pack);

	var storage_id = pack['storage_id'];
	var storage_value = pack['storage_value'];
	var cookie_fallback = pack['cookie_fallback'];
	var action = pack['action'];
	var funct = pack['funct'];




	if(baselib.ObjectType(storage_value) == 'object')
	{

		var storage_value = JSON.stringify(storage_value);

	}//==


	
	if(typeof(Storage)!=="undefined")
	{

		localStorage[storage_id] = storage_value;

	
	}
	else
	if(cookie_fallback)
	{

		Set_CookieStorage(storage_value);

	}//#




	if(action == 'funct')
	{


		if(funct['object'] 
		&& funct['object'] != undefined
		&& baselib.ObjectType(funct['object']) == 'object'
		)
		{
			var job = JSON.stringify(funct['object']);      
			var _FUNC = funct['name'] + "('"+job+"')";
		}else{  
			var _FUNC = funct['name'] + "()";
		}//==


		var _RUN = new Function(_FUNC);
		_RUN();	


	}
	else
	if(action == 'console')
	{

		var R = false;
		var result = Get_LocalStorage(pack);
		if(!result) var R = true;
		console.log("LS:"+R);

	}
	else
	if(action == 'return')
	{

		var R = false;
		var result = Get_LocalStorage(pack);
		if(!result) var R = true;
		return R;

	}//==




}//func
//=====




	



//========================================================
//========================================================




//Get




//========================================================
//========================================================


function Get_LocalStorage(pack){


	var pack = baselib.ParseIt(pack);
	var storage_id = pack['storage_id'];


	var R = false;
		
		
	if(typeof(Storage)!=="undefined")
	{
				
		if(localStorage[storage_id])
		{
			var R = localStorage[storage_id];
	
		}//#
		
	}
	else
	{
		var R = Get_CookieStorage(storage_id);
			
	}//#

	return R;



}//func
//=====






	


//========================================================
//========================================================




//Delete




//========================================================
//========================================================

function Delete_LocalStorage(pack) {


	var pack = baselib.ParseIt(pack);

	var storage_id = pack['storage_id'];
	var storage_value = pack['storage_value'];
	var cookie_fallback = pack['cookie_fallback'];
	var action = pack['action'];
	var funct = pack['funct'];





	if(typeof(Storage)!=="undefined")
	{
		localStorage.removeItem(storage_id);
	}else{
		Delete_CookieStorage(storage_id);
	}//#



	if(action == 'funct')
	{

		if(funct['object'] 
		&& funct['object'] != undefined
		&& baselib.ObjectType(funct['object']) == 'object'
		)
		{
			var job = JSON.stringify(funct['object']);      
			var _FUNC = funct['name'] + "('"+job+"')";
		}else{  
			var _FUNC = funct['name'] + "()";
		}//==


		var _RUN = new Function(_FUNC);
		_RUN();	


	}
	else
	if(action == 'console')
	{

		var R = false;
		var result = Get_LocalStorage(pack);
		if(!result) var R = true;
		console.log("LS:"+R);

	}
	else
	if(action == 'return')
	{

		var R = false;
		var result = Get_LocalStorage(pack);
		if(!result) var R = true;
		return R;

	}//==





}//func
//=====
	
	
	





//========================================================
//========================================================




//Test




//========================================================
//========================================================


function Test_LocalStorage(){



	console.log("Testing Local Storage");



	//===============================================================================
	//===============================================================================
	//===============================================================================

    var zindex = 548;
    var msg = false;
    var stilo = 'default';
    
    var abm = {
            'zindex':zindex,
            'msg':msg,
            'stilo':stilo,
            'alfacolor':'#1A1926'
            };
    
    ShowComp_AlfaBase(abm);




    //=====================================================
    //lines animation
    //=====================================================

    var base = document.getElementById('base');

        var anima_cls = 'anm-lines';
        var anima_id = 'animalines';

        if(document.getElementById(anima_id))
        {
            var anima = document.getElementById(anima_id);
            base.removeChild(anima);
        }
    
        var anima = document.createElement('div');
        anima.setAttribute("class",anima_cls);
        anima.setAttribute("id",anima_id);
        
    base.appendChild(anima);
    var anima = document.getElementById(anima_id);
    //anima.style.backgroundColor = 'gray';

    anima.style.marginLeft = (base.offsetWidth - anima.offsetWidth)/2 + "px";
    anima.style.marginTop = (base.offsetHeight - anima.offsetHeight)/2 + "px";
    




    for(var i=0; i < 5; i++)
    {
        var number = (i+1)
        var line_cls = 'rect'+number;
        var line_id = anima_id + "line"+number;

            var line = document.createElement('div');
            line.setAttribute("class",line_cls);
            line.setAttribute("id",line_id);
            
        anima.appendChild(line);
        var line = document.getElementById(line_id);
        line.style.backgroundColor = '#60DDD1';


    }//for i
    //======

    //=====================================================



	//===============================================================================
	//===============================================================================
	//===============================================================================





	if(localStorage 
	//&& !localStorage.getItem('size')
	) 
	{
		var i = 0;
		try {
			// Test up to 10 MB
			for (i = 250; i <= 10000; i += 250) 
			{
				localStorage.setItem('test', new Array((i * 1024) + 1).join('a'));
			}
		} catch (e) {


			localStorage.removeItem('test');
			localStorage.setItem('test-size', i - 250); 
			
			console.log(localStorage.getItem('test-size'));



			HideComp_AlfaBase();


			var kb = localStorage.getItem('test-size');
			var mb = parseInt(kb)/1000;
		
			var message = "SIZE: "+mb+"Mb";
			Show_Messenger({

				'message'       :message,
				'duration'      :800,
				'alfa_bgcolor'  :'#1A1926',
				'title'         :"Storage Size",
				'storage_id'    :false

			});

			Delete_LocalStorage({"storage_id":"test-size"});


		}


	}
	else
	{


		HideComp_AlfaBase();
		

		var message = "No Support for Local Storage";
		Show_Messenger({

			'message'       :message,
			'duration'      :1500,
			'alfa_bgcolor'  :'#1A1926',
			'title'         :"Storage Size",
			'storage_id'    :false

		});



	}//if
	//===




}//function
//=========







	
