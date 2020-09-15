




	//####################################################################
	//####################################################################
	//####################################################################

  	var tifs = {1: 'Joe', 2: 'Jane'};	
    
    var tifOptions = Object.keys(tifs).map(function(key) {
        return <option key={key} value={key}>{tifs[key]}</option>
    });
    
    const tifOptionsES6 = Object.keys(tifs).map(key => 

        <option key={key} value={key}>{tifs[key]}</option>

    )
    
    var tifOptionsForEach = []
    Object.keys(tifs).forEach(function(key) {

        tifOptionsForEach.push(<option key={key} value={key}>{tifs[key]}</option>);
        
    });
    
	















	//##############################################################################
	//##############################################################################
	//##############################################################################

	var across = 3;
	if(stage.offsetWidth < 1225)
	{
		if(stage.offsetWidth < 650)
		{
			var across = 1;
		
		}
		else
		if(stage.offsetWidth < 1050)
		{
			var across = 2;
		
		}
		else
		if(stage.offsetWidth < 1200)
		{
			var across = 3;
			
		}//==


	}//==


	var total = ZoneNav.length;
	var numofrows = Math.floor(total/across);


	var groups = {};
	var count = 0;
	var gkey = 'group-'+0;
	for(var i=0; i < ZoneNav.length; i++)
	{

		if((i+0) % across == 0) 
		{
			gkey = gkey + "-" + i;

		}//==
				
	
	
		var nob = ZoneNav[i];
		if(groups[gkey] && count < across
		)
		{
			count = count + 1;
			groups[gkey].push(nob);
		
		}else{

			count = 1;
			groups[gkey] = [];
			groups[gkey].push(nob);

		}//==

		 
	}



	//console.log(JSON.stringify(groups,null,2));
	//alert('check console');
	



	var lastrowkey = false;
	for(var keyname in groups)
	{

		var group = groups[keyname];


		var row_id = grid_id + '_row'+keyname;
		var row_cls = 'row';
	
			var elRow = document.createElement("div");
			elRow.setAttribute("class",row_cls);
			elRow.setAttribute("id",row_id);
				
		grid.appendChild(elRow);
		var row = document.getElementById(row_id);
	
	





		for(var i=0; i < group.length; i++)
		{

			var nob = group[i];

			//################################################
			//################################################
			//cel
		
			var cel_id = row_id + "_cel"+i;
			var cel_cls = "iconbox";
	
				//var bgcolor_over = nob['style']['bgcolor_over'];
				//var bgcolor_out = nob['style']['bgcolor_out'];
	
				//var brcolor_over = nob['style']['brcolor_over'];
				//var brcolor_out = nob['style']['brcolor_out'];
	
				//var txtcolor_over = nob['style']['txtcolor_over'];
				//var txtcolor_out = nob['style']['txtcolor_out'];
	
	
				//var onover = "javascript:overout.SimpleBtn('over','"+cel_id+"','"+bgcolor_over+"','"+txtcolor_over+"','"+brcolor_over+"');";
				//var onout = "javascript:overout.SimpleBtn('out','"+cel_id+"','"+bgcolor_out+"','"+txtcolor_out+"','"+brcolor_out+"');";
	
	
				var brcolor_over = "#003366";
				var brcolor_out = "lightgray";
	
				var onover = "javascript:overout.SimpleBtn('over','"+cel_id+"',false,false,'"+brcolor_over+"');";
				var onout = "javascript:overout.SimpleBtn('out','"+cel_id+"',false,false,'"+brcolor_out+"');";
	
	
	
				var cel = document.createElement("div");
				cel.setAttribute("class", cel_cls);
				cel.setAttribute("id", cel_id);
				cel.setAttribute("onmouseover",onover);
				cel.setAttribute("onmouseout",onout);
				
				//==============================================
	
				if(nob['type'] == 'url') 
					cel.setAttribute("onclick",nob['onclick']);
	
				//==============================================
			
			row.appendChild(cel);
			var cel = document.getElementById(cel_id);
	
			if(nob['type'] == 'func'
			)
			{
				cel.onclick = nob['onclick'];
			}//===
			
	
	
	
			var across = 3;
			var cel_w_int = 350;
	
			if(stage.offsetWidth < 1225)
			{
	
				if(stage.offsetWidth < 650)
				{
					var across = 1;
					var cel_w_int =  (stage.offsetWidth / across) - 60;
	
				}
				else
				if(stage.offsetWidth < 1050)
				{
					var across = 2;
					var cel_w_int =  (stage.offsetWidth / across) - 45;
	
				}
				else
				if(stage.offsetWidth < 1200)
				{
					var across = 3;
					var cel_w_int =  (stage.offsetWidth / across) - 30;
	
				}//==
	
	
			}//==
	
			cel.style.width = cel_w_int + "px";

		
	
	
			//################################################
			//################################################
			//icon
	
			var icon_cls = 'icon';
			var icon_id = cel_id+'_icon';
		
				var icon = document.createElement("div");
				icon.setAttribute("class", icon_cls);
				icon.setAttribute("id", icon_id);
		
			cel.appendChild(icon);
	
	
			var icon = document.getElementById(icon_id);
			icon.style.marginTop = '30px';	
			icon.style.marginLeft = (cel.offsetWidth - icon.offsetWidth)/2 + "px";
	
	
	
			//=======================================
	
			var call = "pagebuilder";
			if(nob['call'] && nob['call'] != undefined) var call = nob['call'];
	
			
			var width = icon.offsetWidth;
			var height = icon.offsetHeight;   
	
	
	
			var icon_bgcolor = "transparent";
			var icon_color = "#1A1926";
	
			//var icon_color_b = "#0291cd";
			var icon_color_b = "#1A1926";
	
	
			SVGIcons({
	
				"parent_id":icon_id,
	
				"call":call,
				
				"style":{
	
					"width":width,
					"height":height,
	
					"background-color":icon_bgcolor,
					"icon-color":icon_color,
					"icon-color-b":icon_color_b
				}
	
			});
	
			//========================================
	
	
	
	
	
	
	
	
	
			//################################################
			//################################################
			//descr
	
			var ttl_cls = 'title';
			var ttl_id = cel_id+'_title';
		
				var ttl = document.createElement("div");
				ttl.setAttribute("class", ttl_cls);
				ttl.setAttribute("id", ttl_id);
	
			cel.appendChild(ttl);
	
			var ttl = document.getElementById(ttl_id);
			ttl.innerHTML = nob['name'];
	
	
	
	
	
	
			//################################################
			//################################################
			//descr
	
			var dscr_cls = 'descr';
			var dscr_id = cel_id+'_descr';
		
				var dscr = document.createElement("div");
				dscr.setAttribute("class", dscr_cls);
				dscr.setAttribute("id", dscr_id);
	
			cel.appendChild(dscr);
	
			var dscr = document.getElementById(dscr_id);
			dscr.innerHTML = nob['description'];
	

		}//== i



		if(group.length < across) var lastrowkey = keyname;
	
	}//== key















	



	//####################################################################
	//####################################################################
	//####################################################################


	<div 
	className="grid"
	style={{

		//backgroundColor : 'lightyellow',
		width           : '100%'

	}}
	>

	{
	//====================================================
	//rows
	//====================================================

	Object.keys(groups).map(key => 


		groups[key].length < across
		? 

			<div
			key={key}
			className="row"
			style={{

				//backgroundColor : 'lightgreen',
				marginLeft      : lastRowMarl

			}}
			>


				{groups[key].map((obj, i) => (


					//----------------------------------
					//
					//----------------------------------

					groups[key].length < across
					? 


						<div
						key={i}
						className="iconbox"
						style={{

							width : boxWidth
							
						}}

						>

							<div className="icon">


							</div>

							<div className="title">

								{obj.name}

							</div>

							<div className="descr">

								{obj.descr}

							</div>


						</div>





					//----------------------------------
					//
					//----------------------------------
					:

						<div
						key={i}
						className="iconbox"
						style={{

							width : boxWidth
							
						}}

						>

							<div className="icon">


							</div>

							<div className="title">

								{obj.name}

							</div>

							<div className="descr">

								{obj.descr}

							</div>


						</div>




				))}

			</div>




		//===========================================
		//===========================================
		//===========================================
		:

			<div
			key={key}
			className="row"

			style={{

				//backgroundColor : 'lightblue'

			}}

			>

				{groups[key].map((obj, i) => (


					<div
					key={i}
					className="iconbox"
					style={{

						width : boxWidth

					}}
					>

						<div className="icon">


						</div>

						<div className="title">

							{obj.name}

						</div>

						<div className="descr">

							{obj.descr}

						</div>


					</div>

				))}


			</div>



	)
	//====================================================
	//rows
	//====================================================
	}

	</div>













