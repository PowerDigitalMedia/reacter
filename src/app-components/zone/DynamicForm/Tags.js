

import React, { 

    useState, 
    useEffect,
    //useRef

} from 'react';


import {

    //BrowserRouter as Router,
    //Switch,
    //Route,
    //Link,
    //useRouteMatch,
    useLocation,
    useHistory,   
    //useParams,

} from "react-router-dom";




import './Styl.css';



import { useWindowDimensions } from '../../../utils/WindowDimensionsProvider';

//import Flyr from './Flyr';

import { FormData } from './FormData';


import { 

    FFheader, 
    FFheadline,
    FFbar,
    FFspacer,
    FFbutton,
    FFclicker,
    FFfield

} from './FormFields';


import FormSubmit from './FormSubmit';




//######################################################################
//######################################################################
//######################################################################

const Tags = (props) => {

    const { width, height } = useWindowDimensions()

    //let match = useRouteMatch();
    let location = useLocation();
    let history = useHistory();


    /*
    MATCH: {
        "path": "/liquid",
        "url": "/liquid",
        "isExact": true,
        "params": {}
    }

    LOCATION: {
        "pathname": "/liquid",
        "search": "",
        "hash": "",
        "key": "vu9ctd"
    }
    */
    

    
    //###########################################################
    //###########################################################


    const [hashData, setHash] = useState(false);
    const [processForm, setProcessForm] = useState(false);

    const [formArr, setFormArr] = useState([]);

    const [problemArr, setProblemArr] = useState([]);


    //----------------------------------------------------------

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {


        var newArr = [];
        for(var i=0; i < FormData.length; i++)
        {
            //console.log(object['section'] + "\n" + JSON.stringify(object['data'],null,2));
            var frm = FormData[i];
            newArr.push(frm);
   
        }//== i

        setFormArr(newArr);



       if(hashData === "#!" && location.hash === "")
       {

            setHash(false);
            setProcessForm(false); 
            
       }



    },[hashData,location])


    //------------------------------------------------------------

    








    //###########################################################
    //###########################################################

    const handleAddFlyr = (location,history) => {

        setHash("#!");
        setProcessForm(true);

        //console.log("LOCATION: "+JSON.stringify(location,null,2));
        //console.log("HISTORY: "+JSON.stringify(history,null,2));

        if(location.hash !== "#!") history.push("#!");
    
    }


    //###########################################################
    //###########################################################

    const handleRemoveFlyr = (v) => {

    
        setHash(false); 
        setProcessForm(false);

        setFormArr([]);
        setProblemArr([]);


        //console.log("LOCATION: "+JSON.stringify(location,null,2));
        //console.log("HISTORY: "+JSON.stringify(history,null,2));

        /*
        if(location.hash === "#!")
        {
            history.goBack();  
        }
        */


        //alert(v.action);
        switch(v.action)
        {
        case'reload':

            window.location.reload();//regular dom 
        break;
        case'redirect':

            history.replace("/");
        break;
        default:

            if(location.hash === "#!")
            {
                history.goBack();  
            }

        break;
        }//==


    }













    //###########################################################
    //###########################################################

    const handleButtonClick = (v) => {

        console.log(v);

        console.log("handleButtonClick");
        //console.log("FORM ARR::: "+JSON.stringify(formArr,null,2));


        switch(v.funcname)
        {
        case'somefuncname':
        break;
        default:

            //FormSubmit(formArr);

            handleAddFlyr(location,history);
        break;
        }

   

    }
    








    //###########################################################
    //###########################################################

    const handleFormCapture = (v) => {

        //console.log(v['key']);
        //console.log(v['id']);


        var frm;


        switch(v['call'])
        {
        case'clicker':


            console.log("Clicker");


            /*
            //FormData Ref

            "section"   :"checkboxes",
            "data"      :{
                
                "call"      :'chk',
                "required"	:is_required,
                "name"      :'thename',
                "array"     :[someval,anotherval,etc],
                "choice"    :[]
    
            }
            */  
           
            /*
            FormField Ref

            newArr.push({


                "clickerVal"    :object['clickerVal'],
                "innerColor"    :'orangered',
                "myText"        :object['myText']

            });
            */



            frm = formArr[v.key];

            var newArr = v.newValue;

            var newChoice = [];
            for(var i=0; i < newArr.length; i++)
            {
                var object = newArr[i];
                if(object['innerColor'] === 'orangered') 
                {
                    newChoice.push(object['clickerVal']);

                }//==

            }//== i

            frm['data']['choice'] = newChoice;


            formArr[v.key] = frm;
            setFormArr(formArr);


            console.log(JSON.stringify(formArr[v.key],null,2));
            //alert("check formArr");

        
        break;
        case'field':

            console.log("Field");
            console.log(v['key']);
            console.log(v['id']);

           /*

            FormData Ref

            {

                "fieldtype"               	:"text",
                "required"					:required_company,

                "class"                   	:'',
                "id"                      	:'company',
                "hint"                    	:"Company ( Optional )",

                "text"                     	:def_company,

                "keyboardType"            	:"",
                "autocorrect"             	:"false",
                "autocapitalizationType"  	:"none",

                //"secure"                  :true,
                //"returnKeyType"           :"done"

            }



            //FormField

                key         :props.ij,
                call        :"field",
                id          :props.data.id,
                data        :props.data,
                newValue    :e.target.value



            */



            var ij = v.key.split("-");
        
            frm = formArr[ij[0]];
            if(frm.section === 'fields')
            {

                frm.data[ij[1]]['text'] = v.newValue;

                //var fields = frm.data;
                //var field = fields[ij[1]];
                //field['text'] = v.newValue;
                
                formArr[ij[0]] = frm;
                setFormArr(formArr);

            }




            console.log(JSON.stringify(formArr[ij[0]].data[ij[1]], null, 2));
            //alert("check field update");



        break;
        default:
        break;
        }

    
        console.log(v);

 

    }








    //###########################################################
    //###########################################################

    const handleFormError = (ear) => {


      
        //----------------------------------
        setHash(false); 
        setProcessForm(false);

        console.log("LOCATION: "+JSON.stringify(location,null,2));
        console.log("HISTORY: "+JSON.stringify(history,null,2));

        if(location.hash === "#!")
        {
            history.goBack();  
        }
        //----------------------------------

        console.log(JSON.stringify(ear,null,2));
        setProblemArr(ear);

        //----------------------------------


        
        //----------------------------------

        var indx;
        var scrollbox = document.getElementById('scrollbox');

        if(ear 
        && ear !== null
        && ear !== undefined
        )
        {

            if(ear.length > 0)
            {

                var keystr = ear[0]['key'].toString();
                var firstkey = keystr;
                if(firstkey.match(/-/gi))
                {
                    indx = firstkey.split("-")[0];
                }else{
                    indx = firstkey;
                }//==

                var formSection = document.getElementById("formSection_"+indx);

                //alert(formSection+" "+indx);

                if(formSection !== null)
                {
                    //alert(formSection.offsetTop);
                    scrollbox.scrollTop = formSection.offsetTop;
                }else{
                    scrollbox.scrollTop = 0;
                }//==

            
            }else{

                scrollbox.scrollTop = 0;

            }
            
        }

        //-----------------------------------





    }





 


    //###########################################################
    //###########################################################

    var dfWidthInt;
    var dfWidth;

    //var dfHeightInt;
    //var dfHeight;

    var dfMarl;

    var dfBorder;


    dfWidthInt = 450;
    dfWidth = dfWidthInt + "px";

    dfBorder = "1px solid #1a1926";

    dfMarl = (width - dfWidthInt)/2 + "px";
  

    if(width < 500)
    {
        dfWidthInt = width - 50;
        dfWidth = dfWidthInt + "px";

        dfBorder = "0px solid white";

        dfMarl = 0 + "px";
    

    }
    else
    if(width < 650)
    {
        dfWidthInt = 450;
        dfWidth = dfWidthInt + "px";

        dfBorder = "0px solid white";

        dfMarl = (width - dfWidthInt)/2 - 20 + "px";
    
    }



    //dfHeightInt = 450;
    //dfHeight = dfHeightInt + "px";


  


 


    //###########################################################
    //###########################################################

    return (


        <div>

            {
            //------------------------------------
            //FLYR
            //------------------------------------

            processForm ? 
            <FormSubmit 
                width={width} 
                height={height} 
                formArr={formArr}

                handleRemoveFlyr={(v) => handleRemoveFlyr(v)}   
                handleFormError={(v) => handleFormError(v)} 

                //func={() => history.replace("")}
            
              
            /> 
            : null


            //-------------------------------------
            }




            <div 
            key={"dynamic_form"}
            className="dynamic-form"
            style={{

                backgroundColor : "white", 
                width           : dfWidth,
                //height          : dfHeight, 
                margin          : "10px 0 50px "+dfMarl,
                padding         : "0 20px 50px 20px",
                border          : dfBorder,
                borderRadius    : "10px"

            }}

            >


                {/**************
                <div>
                    <code>

                        {FormData.map((data, i) => (

                                <div 
                                key={i}
                                >
                                    {data.section}

                                </div>

                        ))}
                    
                    </code>

                </div>
                **************/}






                <div>
                  
                    {formArr.map((frm, i) => (


                        <div
                        key={i}
                        id={"formSection_"+i}
                        style={{

                            //backgroundColor : "lightblue",
                            width           : "100%",
                            height          : "auto",
                            position        : "relative",
                            float           : "left"

                        }}

                        >


                            {
                            //------------------------------------
                            //header ( data = {} )
                            //------------------------------------
                            frm.section === "header" ? 

                                <FFheader 

                                indx={i}
                                data={frm.data} 

                                />

                            : null

                            }



                            {
                            //------------------------------------
                            //headline ( data = {} )
                            //------------------------------------
                            frm.section === "headline" ? 

                                <FFheadline 

                                indx={i}
                                data={frm.data} 

                                />

                            : null

                            }



                            {
                            //------------------------------------
                            //bar ( data = {} )
                            //------------------------------------
                            frm.section === "bar" ? 

                                <FFbar

                                indx={i}
                                data={frm.data} 

                                />

                            : null

                            }





                            {
                            //------------------------------------
                            //spacer ( data = {} )
                            //------------------------------------
                            frm.section === "spacer" ? 

                                <FFspacer

                                indx={i}
                                data={frm.data} 

                                />

                            : null

                            }




                            {
                            //------------------------------------
                            //button ( data = {} )
                            //------------------------------------
                            frm.section === "button" ? 

                                <FFbutton

                                indx={i}
                                data={frm.data} 
                                onClick={(v)=>handleButtonClick(v)}   

                                />

                            : null

                            }





                            {
                            //------------------------------------
                            //clicker ( data = {} )
                            //------------------------------------
                            frm.section === "checkboxes" || frm.section === "radiobuttons" ? 

                                <FFclicker

                                indx={i}
                                data={frm.data} 
                                onClick={(v)=>handleFormCapture(v)}
                                problemArr={problemArr}

                                />

                            : null

                            }



                                
                            {
                            //------------------------------------
                            //fields ( data = [] )
                            //------------------------------------
                            frm.section === "fields" ? 

                                <div 
                                key={i+"_fields"}
                                id={i+"_fields"}
                                style={{
                    
                                    backgroundColor : "transparent", 
                                    width           : "100%",
                                    height          : "auto", 
                                    margin          : "0 0 0 0",
                                    position        : "relative",
                                    float           : "left"
                            
                                }}
                    
                                >

                                    {

                                    frm.data.map((data, j) => (


                                        <div
                                        key={i+"-"+j}
                                        >
                                            <FFfield 

                                            ij={i+"-"+j}
                                            data={data}
                                            onClick={(v)=>handleFormCapture(v)}
                                            problemArr={problemArr}
                                            />

                                        </div>

                                    ))
                                    
                                    }

                                </div>

                            : null
                        
                            //-------------------------------------
                            }



                        </div>


                    ))}
  
    
                </div>



            </div>

        </div>


    )



}

export default Tags;




/*


row = this.props.cells.map(function(cell, i) {
    return (cell.URL != null && cell.URL.length > 0) ? 
        (<td className={cell.Meta.HTMLClass} key={i}>{cell.Text}</td>) :
        (<td className={cell.Meta.HTMLClass} key={i}>{cell.Text}</td>)
}.bind(this));


//-------------
//or es6
//-------------

row = this.props.cells.map((cell, i) => (cell.URL != null && cell.URL.length > 0) ? 
        (<td className={cell.Meta.HTMLClass} key={i}>{cell.Text}</td>) :
        (<td className={cell.Meta.HTMLClass} key={i}>{cell.Text}</td>)
);



row = this.props.cells.map(function(cell, i) {

    if(cell.URL != null && cell.URL.length > 0)
        return <td className={cell.Meta.HTMLClass} key={i}>{cell.Text}</td>;    

    return <td className={cell.Meta.HTMLClass} key={i}>{cell.Text}</td>;

}.bind(this));





condition1 ? "This is the IF" : condition2 ? "This is the ELSE IF" : "This is the ELSE"




                                {
                                //------------------------------------
                                //checkboxes or radiobuttons
                                //------------------------------------
                                frm.section === "checkboxes" || frm.section === "radiobuttons" ? 


                                    <div 
                                    style={{

                                    }}
                                    >

                                    </div>


                                : frm.section === "radiobuttons" ? 

                                    <div 
                                    style={{

                                    }}
                                    >

                                    </div>

                    
                                : null


                                //--------------------------------------
                                }
                            


                                {
                                //------------------------------------
                                //checkboxes or radiobuttons
                                //------------------------------------
                                frm.section === "checkboxes" || frm.section === "radiobuttons" ? 

                                    <div 
                                    style={{

                                    }}
                                    >

                                    </div>

                                : null
                                //--------------------------------------
                                }
                            
                            






row = this.props.cells.map(function(cell, i) {

    if(cell.URL != null && cell.URL.length > 0){
        return <td className={cell.Meta.HTMLClass} key={i}>{cell.Text}</td>;        
    }
    else {
        return <td className={cell.Meta.HTMLClass} key={i}>{cell.Text}</td>;
    }

}.bind(this));





*/

