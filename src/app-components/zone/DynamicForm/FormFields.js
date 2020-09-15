import React, { 

    useState, 
    useEffect,
    //useRef

} from 'react';



import './Styl.css';




//import { arraylib } from '../../library/array';
//import { baselib } from '../../library/base';
//import { stringlib } from '../../library/string';





//######################################################################
//######################################################################
//######################################################################

export const FFheader = (props) => {

    return (

        <div
        key={props.indx+"_ffheader"} 
        className = "header"
        >

            {props.data.text}
            
        </div>

    )

}











//######################################################################
//######################################################################
//######################################################################

export const FFheadline = (props) => {

    return (

        <div 
        key={props.indx+"_ffheadline"} 
        className = "headline"
        >

            {props.data.text}
            
        </div>

    )

}










//######################################################################
//######################################################################
//######################################################################

export const FFbar = (props) => {

    return (

        <div 
        key={props.indx+"_ffbar"} 
        className = "bar"
        >

            {props.data.text}
            
        </div>

    )

}










//######################################################################
//######################################################################
//######################################################################

export const FFspacer = (props) => {

    return (

        <div 
        key={props.indx+"_ffspacer"} 
        className = "spacer"
        style={{

            //backgroundColor     :"yellow",
            width               :"100%",
            height              :props.data.height,
            margin              :"0 0 0 0"

        }}

        >

            {props.data.text}
            
        </div>

    )

}
















//######################################################################
//######################################################################
//######################################################################

export const FFbutton = (props) => {


    //var _FUNC = props.data.funct['name'] + "()";
    //var _FUNC = props.data.funct['name'] + "('"+props.data.funct['object']+"')";
    //var _RUN = new Function(_FUNC);

    const [buttonStyle, setButtonStyle] = useState({});

   //----------------------------------------------------------

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {


        setButtonStyle({

            bgColor     :"#07a2e3",
            txtColor    :"#FFF",
            brColor     :"#07a2e3"

        });
      

     },[])





    const handleSetStyle = (v) => {

        //console.log(v);
        setButtonStyle({

            bgColor     :v.bgColor,
            txtColor    :v.txtColor,
            brColor     :v.brColor

        });

    }



    return (

        <div 
        key={props.indx+"_ffbutton"} 
        className = "btn-submit"
        style={{

            backgroundColor     :buttonStyle.bgColor,
            width               :"80%",
            margin              :"0 0 0 8%",
            color               :buttonStyle.txtColor,
            border              :"1px solid "+buttonStyle.brColor

        }}
        onClick={() => props.onClick({

            call        :"button",
            data        :props.data,
            funcname    :props.data.funct.name

        })}

        onMouseEnter={() => handleSetStyle({

            call        :"over",
            bgColor     :"orangered",
            txtColor    :"#FFF",
            brColor     :"orangered"

        })}

        onMouseOut={() => handleSetStyle({

            call        :"out",
            bgColor     :"#07a2e3",
            txtColor    :"#FFF",
            brColor     :"#07a2e3"


        })}

        >

            {props.data.text}
            
        </div>

    )

}



















//######################################################################
//######################################################################
//######################################################################

export const FFclicker = (props) => {




    const [fieldArr, setFieldArr] = useState([]);
    const [fieldStyl, setFieldStyl] = useState({});
    
    //----------------------------------------------------------

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {



        var call = props['data']['call'];
        //var clickername = props['data']['name'];
        var _array = props['data']['array'];
        var choice = props['data']['choice'];
    
        //var grid_id = clickername+"_grid";



    
        var clkArr = [];
        var found;
        var inner_color;
        // myText;
    
        for(var j=0; j < _array.length; j++)
        {
    
            var clickerval = _array[j];
    
            found = false;
    
            switch(call)
            {
            case'rad':

                //console.log(baselib.ObjectType(choice)+" === "+clickerval.toLowerCase());

                if(choice.length > 0)
                {
                    if(choice[0].toLowerCase() === clickerval.toLowerCase()
                    ) 
                    {
                        //console.log("::::::::::"+choice[0]+" "+clickerval);
                        found = true;
        
                    }//==

                }


            break;
            case'chk':
    
                for(var k=0; k < choice.length; k++)
                {

                    if(choice[k].toLowerCase() === clickerval.toLowerCase()
                    )
                    {
                        //console.log("::::::::::"+choice[k]+" "+clickerval);
                        found = true;
                       
                    }//==
    
                }//==
    
            break;
            default:
            break;
            }//===
    
            //===============================================
    
            
            inner_color = 'white'
            if(found) inner_color = "orangered";
    
    
            //myText = stringlib.CapitalizeWords(clickerval);
    
            clkArr.push({
    
                "clickerVal"    :clickerval,
                "innerColor"    :inner_color,
                "myText"        :clickerval
    
            });
    
    
        }//for j
        //======
    

        setFieldArr(clkArr);





        //----------------------------------------

        setFieldStyl({"bgColor":"transparent"});

        var problemArr = props.problemArr;
        for(var i=0; i < problemArr.length; i++)
        {
            if(props.indx === problemArr[i]['key'])
            {
                setFieldStyl({"bgColor":"lightyellow"});
                break;
            }
    
        }//== i
 
        //------------------------------------------
    

      

     },[props])









    //=========================================
    //HANDLE CLICK
    //=========================================

    function handleClick(indx) {



        /*

        console.log(JSON.stringify(props,null,2))


        {
        "indx": 8,
        "data": {

                "call": "rad",
                "required": true,
                "name": "typeofwork",
                "array": [
                    "Consulting",
                    "Full Stack",
                    "Frontend ",
                    "Backend",
                    "Not Sure"
                ],
                "choice": [
                    "Full Stack"
                ]
            }
        }

    
        alert("handleClick");

        */
   

        var newArr = [];
    
        for(var i=0; i < fieldArr.length; i++)
        {

            var object = fieldArr[i];


            switch(props.data.call)
            {
            case'chk':


      
                if(indx === i)
                {

                    var newColor = 'orangered';
                    if(object['innerColor'] === 'orangered') newColor = 'white';
                
                    newArr.push({


                        "clickerVal"    :object['clickerVal'],
                        "innerColor"    :newColor,
                        "myText"        :object['myText']
                    });

                }else{

                    newArr.push({

                        "clickerVal"    :object['clickerVal'],
                        "innerColor"    :object['innerColor'],
                        "myText"        :object['myText']

                    });

                }//==



            break;
            case'rad':


                if(indx === i)
                {
                
                    newArr.push({


                        "clickerVal"    :object['clickerVal'],
                        "innerColor"    :'orangered',
                        "myText"        :object['myText']


                    });

                }else{

                    newArr.push({

                        "clickerVal"    :object['clickerVal'],
                        "innerColor"    :"white",
                        "myText"        :object['myText']

                    });

                }//==



            break;
            default:
            break;
            }//==

    
        }//==
        
        setFieldArr(newArr);


        props.onClick({


            key         :props.indx,
            call        :"clicker",
            data        :props.data,
            newValue    :newArr

        })




    }


    //=======================================================
    //=======================================================









    //=======================================================
    //=======================================================

    return (

        <div
        key={props.indx+"_ffclicker"} 
        id={props.data.name+"_grid"}      
        className="grid"
        style={{

            backgroundColor: fieldStyl.bgColor

        }}

        >

            {

            fieldArr.map((clkData, j) => (


                <div 
                key={j}
                className="clicker"
                id={props.data.name+"_grid_clicker"+j}
                >

                    <div 
                    className={props.data.call}
                    onClick={() => handleClick(j)}
                    >

                        <div 
                        className={props.data.call+"-inner"}
                        id={props.data.name+"_"+j}
                        style={{

                            backgroundColor : clkData.innerColor 
  
                        }}
                        >
                        </div>

                    </div>



                    <input
                        type="hidden" 
                        id={props.data.name+"_"+j+"_color"} 
                        name={props.data.name+"_"+j+"_color"}        
                        value={clkData.innerColor}
                        //onChange={e => handleChange(idx, e)}
                    />


                    <div 
                    className="click-txt"
                    onClick={() => handleClick(j)}
                    >
                        {clkData.myText}

                    </div>


                    <input
                        type="hidden"
                        id={props.data.name+"_"+j+"_txt"} 
                        name={props.data.name+"_"+j+"_txt"}        
                        value={clkData.myText}
                    />


                </div>


            ))

            }

    
        </div>

    )

}























//######################################################################
//######################################################################
//######################################################################

export const FFfield = (props) => {



    const [fieldArr, setFieldArr] = useState([]);
    const [fieldVal, setFieldVal] = useState('');
    const [fieldStyl, setFieldStyl] = useState({});


    //----------------------------------------------------------

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {


     
        switch(props.data.fieldtype)
        {
        case'dropdown':
    
        break;
        case'phone':
    
    
            var phone_id = props.data.id;
    
            var phone_array = ["###","###","####"];
    
            if(props.data['text'] !== ''  
            && props.data['text'] !== props.data.hint 
            && props.data['text'] !== undefined
            )
            {
                phone_array = props.data['text'].split("-");
            }//#
    
    
            var phArr = [];
            for(var phx=0; phx < 3; phx++)
            {
    
                var ID;
    
                var init_val;
                var safe_init_val;
                var curr_val;
    
                var wrap_class;
                var wrap_id;
                var wrap_width;	
                              
                var input_class;
                var input_value;
                var input_maxlength;
       
    
                switch(phx)
                {
                case 0:
    
    
    
                    //################################################
                    //area CODE
            
                    ID = phone_id+"_1";
                    init_val = '###';
                    safe_init_val = init_val.replace( / /gi,'--');
    
                    if(phone_array[phx] !== ''  
                    && phone_array[phx] !== init_val 
                    && phone_array[phx] !== undefined
                    )
                    {
                        curr_val = phone_array[phx];
    
                    }//=====
    
              
                    wrap_class = "input-wrap-3digit";
                    wrap_id = ID+"_wrap";
    
                    wrap_width = "20%";
                    //if(!threshold_6) wrap_width = "20%";
                
    
    
    
                                                    
                    input_class = 'input-tag-empty';
                    input_value = init_val;	
        
    
                    if(curr_val !== ''  
                    && curr_val !== init_val 
                    && curr_val !== undefined
                    )
                    {
                        input_class = 'input-tag';
                        input_value = curr_val;	
    
                    }//#
        
                    input_maxlength = "3";
    
           
                break;
                case 1:
    
    
    
                    //###############################################
                    //LOCAL CODE
    
                    ID = phone_id+"_2";
                    init_val = '###';//fetext;
                    safe_init_val = init_val.replace( / /gi,'--');
    
                   
                    if(phone_array[phx] !== ''  
                    && phone_array[phx] !== init_val 
                    && phone_array[phx] !== undefined
                    )
                    {
                        curr_val = phone_array[phx];
    
                    }//===
    
            
     
                    wrap_class = "input-wrap-3digit";
                    wrap_id = ID+"_wrap";
    
                    wrap_width = "20%";
                    //if(!threshold_6) wrap_width = "20%";
                
    
    
                           
                    input_class = 'input-tag-empty';
                    input_value = init_val;	
    
    
                    if(curr_val !== ''  
                    && curr_val !== init_val 
                    && curr_val !== undefined
                    )
                    {
                        input_class = 'input-tag';
                        input_value = curr_val;	
    
                    }//#
                                           
                    input_maxlength = "3";
    
                                                           
        
                break;
                case 2:
    
    
    
                    //##############################################
                    //4 DIGITS
    
                    ID = phone_id+"_3";
                    init_val = '####';//fetext;
                    safe_init_val = init_val.replace( / /gi,'--');
    
                   
                    if(phone_array[phx] !== ''  
                    && phone_array[phx] !== init_val 
                    && phone_array[phx] !== undefined
                    )
                    {
                        curr_val = phone_array[phx];
    
                    }//=====
    
                 
        
                    wrap_class = "input-wrap-4digit";
                    wrap_id = ID+"_wrap";
    
                    wrap_width = "25%";
                    //if(!threshold_6) wrap_width = "25%";
                
                              
                    input_class = 'input-tag-empty';
                    input_value = init_val;	
    
                
                    if(curr_val !== ''  
                    && curr_val !== init_val 
                    && curr_val !== undefined
                    )
                    {
                        input_class = 'input-tag';
                        input_value = curr_val;	
    
                    }//#
                                
                    input_maxlength = "4";
    
                    
                break;
                default:
                break;
                }//####
    
    
    
                phArr.push({
    
                    initVal         :init_val,
                    safeInitVal     :safe_init_val,
                    currVal         :curr_val,
    
                    wrapClass       :wrap_class,
                    wrap_id         :wrap_id,
                    wrapWidth       :wrap_width,
    
                    inputClass      :input_class,
                    inputId         :ID,
                    inputValue      :input_value,
                    inputMaxLength  :input_maxlength
                   
                });
    
    
            }//==


            setFieldArr(phArr);
        break;
        case'date':
    
        break;
        case'expdata':
    
        break;
        default:
    

            setFieldVal(props.data.text);
        break;
        }//===
    
    


        //----------------------------------------

        setFieldStyl({"bgColor":"transparent"});

        var problemArr = props.problemArr;
        for(var i=0; i < problemArr.length; i++)
        {
            if(props.ij === problemArr[i]['key'])
            {
                setFieldStyl({"bgColor":"lightyellow"});
                break;
            }
    
        }//== i
 
        //------------------------------------------
    

 
     },[props])
 
 
     //------------------------------------------------------------
 









        
     
    //<input name="firstName" onChange={e => setFirstName(e.target.value)} />
     

      



    //================================
    // HANDLE CHANGE
    //================================

    function handleFocus(target) {

        target.select();
    }


    /*
    //================================
    // HANDLE CHANGE
    //================================

    function handleBlur(e) {

        //console.log(e.target.value);
        //e.target.select();

    }
    */


    //================================
    // HANDLE CHANGE
    //================================

    function handleChange(e) {


        console.log(e.target.id);

        if(e.target.id.match(/phone_/gi,null,2)
        )
        {

            /*
            phArr.push({
    
                initVal         :init_val,
                safeInitVal     :safe_init_val,
                currVal         :curr_val,

                wrapClass       :wrap_class,
                wrap_id         :wrap_id,
                wrapWidth       :wrap_width,

                inputClass      :input_class,
                inputId         :ID,
                inputValue      :input_value,
                inputMaxLength  :input_maxlength
               
            });
            */


            var phx = e.target.id.split("_")[1];

            var phoneNumber;
            var newArr = [];
            for(var i=0; i < fieldArr.length; i++)
            {
                var object = fieldArr[i];

            
                if(parseInt(phx) === parseInt(i+1))
                {
                    //console.log(phx+"==="+i); 
                    object['inputValue'] = e.target.value;
                }
                newArr.push(object);



                if(i===0)
                {
                    phoneNumber = object['inputValue'];
      
                }
                else
                if(i===fieldArr.length-1)
                {

                   phoneNumber = phoneNumber + object['inputValue'];
      
                }
                else
                {

                    phoneNumber = phoneNumber + "-" + object['inputValue'] + "-";

                }
           

            }//==

            setFieldArr(newArr);






            console.log(phoneNumber);


            props.onClick({

                key         :props.ij,
                call        :"field",
                id          :props.data.id,
                data        :props.data,
                newValue    :phoneNumber
     
            })

    
        

        }
        else
        {

            setFieldVal(e.target.value);


            props.onClick({

                key         :props.ij,
                call        :"field",
                id          :props.data.id,
                data        :props.data,
                newValue    :e.target.value
           
            })

        }//==


    }











    //=======================================================
    //=======================================================

    return (


        <div className="frm">


            {
            //------------------------------------
            //HIDDEN
            //------------------------------------

            props.data.fieldtype === "hidden" ? 


                <div 
                key={props.ij}
                className="input-wrap"
                >

                    <input
                        type="hidden"
                        className="input-tag"
                        id={props.data.id}
                        value={fieldVal}          
                        placeholder={props.data.hint}

                        onChange={handleChange}
        
                    />

                </div>



            : null


            //-------------------------------------
            }




            {
            //------------------------------------
            //TEXT FIELD
            //------------------------------------

            props.data.fieldtype === "text" ? 


                <div 
                key={props.ij}
                className="input-wrap"
                style={{
                    backgroundColor:fieldStyl.bgColor
                }}

                >

                    <input
                        type="text"
                        className="input-tag"
                        style={{
                            backgroundColor:fieldStyl.bgColor
                        }}
        
                        id={props.data.id}
                        value={fieldVal}
                        placeholder={props.data.hint}

     
                        //onFocus={handleFocus}

                        /*
                        onFocus = {event => {
                            // event properties must be copied to use async
                            const target = event.target;
                            setTimeout(() => target.select(), 0);
                        }}
                        */

                        onFocus = {event => {
                            // event properties must be copied to use async
                            const target = event.target;
                            setTimeout(() => handleFocus(target), 0);
                        }}
                        //onBlur={handleBlur}  
                        onChange={handleChange}


                    />

                </div>



            : null


            //-------------------------------------
            }



            {
            //------------------------------------
            //PASSWORD FIELD
            //------------------------------------

            props.data.fieldtype === "password" ? 

          
                <div 
                key={props.ij}
                className="input-wrap"
                style={{
                    backgroundColor:fieldStyl.bgColor
                }}

                >

                    <input

                        type="password"
                        className="input-tag"
                        style={{
                            backgroundColor:fieldStyl.bgColor
                        }}

                        id={props.data.id}
                        value={fieldVal}
                        placeholder={props.data.hint}

                        onFocus = {event => {
                            // event properties must be copied to use async
                            const target = event.target;
                            setTimeout(() => handleFocus(target), 0);
                        }}
                        //onBlur={handleBlur}  
                        onChange={handleChange}

                    />

                </div>



            : null


            //-------------------------------------
            }




            {
            //------------------------------------
            //TEXTAREA
            //------------------------------------

            props.data.fieldtype === "textarea" ? 
 
                <div 
                key={props.ij}
                className="ta-wrap"
                style={{
                    backgroundColor:fieldStyl.bgColor
                }}

                >

                    <textarea
                    className="ta-tag"
                    style={{
                        backgroundColor:fieldStyl.bgColor
                    }}

                    id={props.data.id}
                    placeholder={props.data.hint}
                    value={fieldVal}


                        onFocus = {event => {
                            // event properties must be copied to use async
                            const target = event.target;
                            setTimeout(() => handleFocus(target), 0);
                        }}
                        //onBlur={handleBlur}  
                        onChange={handleChange}

                    >
                    </textarea>
                
                </div>
            
            : null


            //-------------------------------------
            }



            {
            //------------------------------------
            //DROPDOWN
            //------------------------------------

            props.data.fieldtype === "dropdown" ? 
 
                <div 
                key={props.ij}
                className="sel-wrap"
                style={{
                    backgroundColor:fieldStyl.bgColor
                }}

                >

                    <select
                    className="sel-tag"
                    style={{
                        backgroundColor:fieldStyl.bgColor
                    }}

                    id={props.data.id}
                    placeholder={props.data.hint}


                    onFocus = {event => {
                        // event properties must be copied to use async
                        const target = event.target;
                        setTimeout(() => handleFocus(target), 0);
                    }}
                    //onBlur={handleBlur}  
                    onChange={handleChange}

                    >

                        {fieldVal}
                
                    </select>
                
                </div>
            
            : null


            //-------------------------------------
            }




            {
            //------------------------------------
            //PHONE FIELD
            //------------------------------------

            props.data.fieldtype === "phone" ? 

            

                <div
                key={props.ij}
                className="phone"
                id={props.data.id}
                >
                {fieldArr.map((phData, j) => (
    
                    <div
                    key={props.ij+"-"+j}
                    className={phData.wrapClass}
                    style={{

                        backgroundColor     :fieldStyl.bgColor,
                        width               :phData.wrapWidth

                    }}

                    >

                        <input
                            className={phData.inputClass}
                            style={{

                                backgroundColor :fieldStyl.bgColor
                            }}


                            id={phData.inputId}
                            type="text"
                            value={phData.inputValue}
                            placeholder={phData.safeInitVal}
                            maxLength={phData.inputMaxLength}

                            onFocus = {event => {
                                // event properties must be copied to use async
                                const target = event.target;
                                setTimeout(() => handleFocus(target), 0);
                            }}
                            //onBlur={handleBlur}  
                            onChange={handleChange}

                        />

                    </div>

                ))}
                </div>


            : null

            //-------------------------------------
            }



            {
            //------------------------------------
            //DATE
            //------------------------------------

            props.data.fieldtype === "date" ? 
 
                <input
                    type="text"
                    value=""
                    placeholder="Date"
                    //onChange={e => handleChange(idx, e)}
                />

            : null


            //-------------------------------------
            } 


            {
            //------------------------------------
            //EXPDATE
            //------------------------------------

            props.data.fieldtype === "expdate" ? 
 
                <input
                    type="text"
                    value=""
                    placeholder="Date"
                    //onChange={e => handleChange(idx, e)}
                />

            : null


            //-------------------------------------
            }           





        </div>

    )


}















/*



//TM - onFocus problem with safari

//https://stackoverflow.com/questions/54229359/why-does-select-not-work-on-safari-with-reactjs

onFocus = {event => {
    // event properties must be copied to use async
    const target = event.target;
    setTimeout(() => target.select(), 0);
}}



    //onFocus={handleFocus}

    
    onFocus = {event => {
        // event properties must be copied to use async
        const target = event.target;
        setTimeout(() => target.select(), 0);
    }}

    onFocus = {event => {
        // event properties must be copied to use async
        const target = event.target;
        setTimeout(() => handleFocus(target), 0);
    }}







function handleChange(e) {

    console.log(e.target.value);

}
  




import React from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  
  return (
    <input name="firstName" onChange={e => setFirstName(e.target.value)} />
  );
}

export default App;




==============================================================


const inputEl = useRef(null);

function handleFocus() {
  inputEl.current.select();
}

<input
  type="number"
  value={quantity}
  ref={inputEl}
  onChange={e => setQuantityHandler(e.target.value)}
  onFocus={handleFocus}
/>











                        //=============
                        //PHONE
                        //=============
                                        
                        var phone_class = "phone";
                        var phone_id = input_nameid;
                                                
                        var elPhone = document.createElement("div");
                        elPhone.setAttribute("class",phone_class);
                        elPhone.setAttribute("id",phone_id);
                                            
                                                    
                    df.appendChild(elPhone);




                    var phone_array = ["###","###","####"];


                    if(fo['text'] !== ''  
                    && fo['text'] !== init_val 
                    && fo['text'] !== undefined
                    )
                    {
                        var phone_array = fo['text'].split("-");
                    }//#


                    var curr_val = '';

                    for(var phx=0; phx < 3; phx++)
                    {

                     

                        switch(phx)
                        {
                        case 0:



                            //################################################
                            //area CODE
                    
                            var ID = phone_id+"_1";
                            var init_val = '###';

                            var regex = / /gi;
                            var repl = '--';

                            var safe_init_val = init_val.replace(regex,repl);

                            if(phone_array[phx] !== ''  
                            && phone_array[phx] !== init_val 
                            && phone_array[phx] !== undefined
                            )
                            {
                                var curr_val = phone_array[phx];

                            }//=====




                            //=============
                            //WRAP
                            //=============
                                        
                            var input_class = "input-wrap-3digit";
                            var input_id = ID+"_wrap";
                                                    
                            var elInput_Wrap = document.createElement("div");
                            elInput_Wrap.setAttribute("class",input_class);
                            elInput_Wrap.setAttribute("id",input_id);
                                                                    
                        elPhone.appendChild(elInput_Wrap);


                            var inp_wrap = document.getElementById(input_id);						
                            if(!threshold_6)
                            {
                                inp_wrap.style.width = "20%";
                            }

                    
                            //=============
                            //INPUT
                            //=============
                                            
                                var onfocus = "if(this.value == '"+init_val+"')";
                                onfocus += "{";

                                    onfocus += "this.type='text';";
                                    onfocus += "this.value = '';";
                                    onfocus += "this.style.fontStyle = 'normal';";

                                    onfocus += "this.style.color = '#000';";
                                    onfocus += "javascript:Style_Form();";
                
                                onfocus += "}else{";

                                    onfocus += "this.select();";
                                    onfocus += "this.type='"+input_type+"';";
                                    onfocus += "this.style.fontStyle = 'normal';";

                                    onfocus += "this.style.color = '#000';";
                                    onfocus += "javascript:Style_Form();";
                                
                                onfocus += "}";
                                                            
                                                        
                                
                                var onblur = "if(this.value == '' || this.value == '"+init_val+"')";
                                onblur += "{";

                                    onblur += "this.type='text';";
                                    onblur += "this.value = '"+init_val+"';"; 
                                    onblur += "this.style.fontStyle = 'italic';";

                                    onblur += "this.style.color = '#777';";
                                  
                                onblur += "}else{";

                                    onblur += "this.type='"+input_type+"';";
                                    onblur += "this.style.fontStyle = 'normal';";

                                    onblur += "this.style.color = '#000';";
                                 

                                onblur += "}";
                                
                                        
                                                

                                var input_class = 'input-tag-empty';
                                var input_value = init_val;	
                

                                //var onfocus = "javascript:ONFOCUS_DYNAFORM('"+input_nameid+"','"+safe_init_val+"','input-tag');";
                                //var onblur = "javascript:ONBLUR_DYNAFORM('"+input_nameid+"','"+safe_init_val+"','input-tag','input-tag-empty');";


                            
                                if(curr_val !== ''  
                                && curr_val !== init_val 
                                && curr_val !== undefined
                                )
                                {
                                    var input_class = 'input-tag';
                                    var input_value = curr_val;	

                                }//#
                                            

                                                            
                                var elInput = document.createElement("input");
                                elInput.setAttribute("type",'text');
                                elInput.setAttribute("maxlength","3");
                                elInput.setAttribute("class",input_class);
                                elInput.setAttribute("name",ID);
                                elInput.setAttribute("id",ID);
                                elInput.setAttribute("value",input_value);
                                                            
                                //elLinkName_Input.setAttribute("onclick","this.value=''");
                                elInput.setAttribute("onfocus",onfocus);
                                elInput.setAttribute("onblur",onblur);
                                                    
                                                                        
                            elInput_Wrap.appendChild(elInput);
                                                        
                                

                        break;
                        case 1:





                            //###############################################
                            //LOCAL CODE


                            var ID = phone_id+"_2";
                            var init_val = '###';//fetext;

                            var regex = / /gi;
                            var repl = '--';

                            var safe_init_val = init_val.replace(regex,repl);

                           
                            if(phone_array[phx] !== ''  
                            && phone_array[phx] !== init_val 
                            && phone_array[phx] !== undefined
                            )
                            {
                                var curr_val = phone_array[phx];

                            }//=====

                          


                            //=============
                            //WRAP
                            //=============
                                        
                            var input_class = "input-wrap-3digit";
                            var input_id = ID+"_wrap";
                                                    
                            var elInput_Wrap = document.createElement("div");
                            elInput_Wrap.setAttribute("class",input_class);
                            elInput_Wrap.setAttribute("id",input_id);
                                                                    
                        elPhone.appendChild(elInput_Wrap);



                            var inp_wrap = document.getElementById(input_id);						
                            if(!threshold_6)
                            {
                                inp_wrap.style.width = "20%";
                            }
                    


                            //=============
                            //INPUT
                            //=============
                                            
                                var onfocus = "if(this.value == '"+init_val+"')";
                                onfocus += "{";

                                    onfocus += "this.type='text';";
                                    onfocus += "this.value = '';";
                                    onfocus += "this.style.fontStyle = 'normal';";

                                    onfocus += "this.style.color = '#000';";
                                    onfocus += "javascript:Style_Form();";
                
                                onfocus += "}else{";

                                    onfocus += "this.select();";
                                    onfocus += "this.type='"+input_type+"';";
                                    onfocus += "this.style.fontStyle = 'normal';";

                                    onfocus += "this.style.color = '#000';";
                                    onfocus += "javascript:Style_Form();";
                                
                                onfocus += "}";
                                                            
                                                        
                                
                                var onblur = "if(this.value == '' || this.value == '"+init_val+"')";
                                onblur += "{";

                                    onblur += "this.type='text';";
                                    onblur += "this.value = '"+init_val+"';"; 
                                    onblur += "this.style.fontStyle = 'italic';";

                                    onblur += "this.style.color = '#777';";
                                    //onblur += "javascript:Input_Notification('off');";
                
                                onblur += "}else{";

                                    onblur += "this.type='"+input_type+"';";
                                    onblur += "this.style.fontStyle = 'normal';";

                                    onblur += "this.style.color = '#000';";
                                    //onblur += "javascript:Input_Notification('off');";

                                onblur += "}";
                                
                                        
                                                

                                var input_class = 'input-tag-empty';
                                var input_value = init_val;	
                

                                //var onfocus = "javascript:ONFOCUS_DYNAFORM('"+input_nameid+"','"+safe_init_val+"','input-tag');";
                                //var onblur = "javascript:ONBLUR_DYNAFORM('"+input_nameid+"','"+safe_init_val+"','input-tag','input-tag-empty');";


                            
                                if(curr_val !== ''  
                                && curr_val !== init_val 
                                && curr_val !== undefined
                                )
                                {
                                    var input_class = 'input-tag';
                                    var input_value = curr_val;	

                                }//#
                                            

                                                            
                                var elInput = document.createElement("input");
                                elInput.setAttribute("type",'text');
                                elInput.setAttribute("maxlength","3");
                                elInput.setAttribute("class",input_class);
                                elInput.setAttribute("name",ID);
                                elInput.setAttribute("id",ID);
                                elInput.setAttribute("value",input_value);
                                                            
                                //elLinkName_Input.setAttribute("onclick","this.value=''");
                                elInput.setAttribute("onfocus",onfocus);
                                elInput.setAttribute("onblur",onblur);
                                                    
                                                                        
                            elInput_Wrap.appendChild(elInput);
                                                        

                
                        break;
                        case 2:



                            //##############################################
                            //4 DIGITS


                            var ID = phone_id+"_3";
                            var init_val = '####';//fetext;

                            var regex = / /gi;
                            var repl = '--';

                            var safe_init_val = init_val.replace(regex,repl);

                            if(phone_array[phx] !== ''  
                            && phone_array[phx] !== init_val 
                            && phone_array[phx] !== undefined
                            )
                            {
                                var curr_val = phone_array[phx];

                            }//=====

                         

                    
                            //=============
                            //WRAP
                            //=============
                                        
                            var input_class = "input-wrap-4digit";
                            var input_id = ID+"_wrap";
                                                    
                            var elInput_Wrap = document.createElement("div");
                            elInput_Wrap.setAttribute("class",input_class);
                            elInput_Wrap.setAttribute("id",input_id);
                                                                    
                        elPhone.appendChild(elInput_Wrap);


                                                        
                            var inp_wrap = document.getElementById(input_id);						
                            if(!threshold_6)
                            {
                                inp_wrap.style.width = "25%";
                            }

                    
                            //=============
                            //INPUT
                            //=============
                                            
                                var onfocus = "if(this.value == '"+init_val+"')";
                                onfocus += "{";

                                    onfocus += "this.type='text';";
                                    onfocus += "this.value = '';";
                                    onfocus += "this.style.fontStyle = 'normal';";

                                    onfocus += "this.style.color = '#000';";
                                    onfocus += "javascript:Style_Form();";

                                onfocus += "}else{";

                                    onfocus += "this.select();";
                                    onfocus += "this.type='"+input_type+"';";
                                    onfocus += "this.style.fontStyle = 'normal';";

                                    onfocus += "this.style.color = '#000';";
                                    onfocus += "javascript:Style_Form();";
                                
                                onfocus += "}";
                                                            
                                                        
                                
                                var onblur = "if(this.value == '' || this.value == '"+init_val+"')";
                                onblur += "{";

                                    onblur += "this.type='text';";
                                    onblur += "this.value = '"+init_val+"';"; 
                                    onblur += "this.style.fontStyle = 'italic';";

                                    onblur += "this.style.color = '#777';";
                                    //onblur += "javascript:Input_Notification('off');";
                
                                onblur += "}else{";

                                    onblur += "this.type='"+input_type+"';";
                                    onblur += "this.style.fontStyle = 'normal';";

                                    onblur += "this.style.color = '#000';";
                                    //onblur += "javascript:Input_Notification('off');";

                                onblur += "}";
                                
                                        
                                                

                                var input_class = 'input-tag-empty';
                                var input_value = init_val;	
                

                                //var onfocus = "javascript:ONFOCUS_DYNAFORM('"+input_nameid+"','"+safe_init_val+"','input-tag');";
                                //var onblur = "javascript:ONBLUR_DYNAFORM('"+input_nameid+"','"+safe_init_val+"','input-tag','input-tag-empty');";


                            
                                if(curr_val !== ''  
                                && curr_val !== init_val 
                                && curr_val !== undefined
                                )
                                {
                                    var input_class = 'input-tag';
                                    var input_value = curr_val;	

                                }//#
                                            

                                                            
                                var elInput = document.createElement("input");
                                elInput.setAttribute("type",'text');
                                elInput.setAttribute("maxlength","4");
                                elInput.setAttribute("class",input_class);
                                elInput.setAttribute("name",ID);
                                elInput.setAttribute("id",ID);
                                elInput.setAttribute("value",input_value);
                                                            
                                //elLinkName_Input.setAttribute("onclick","this.value=''");
                                elInput.setAttribute("onfocus",onfocus);
                                elInput.setAttribute("onblur",onblur);
                                                    
                                                                        
                            elInput_Wrap.appendChild(elInput);



                        break;
                        }//####

                    }//for loop
                    //#########





                    //=====================================
                    //message
                    //=====================================
                    if(!fo['required'])
                    {
          
                            var msg_class = "inpmsg";
                            var msg_id = phone_id+"_msg";
                                                    
                            var msg = document.createElement("div");
                            msg.setAttribute("class",msg_class);
                            msg.setAttribute("id",msg_id);
                                                                     
                        elPhone.appendChild(msg);

                                var node = document.createTextNode("( Optional )");

                            msg.appendChild(node);




                    }//== if















*/

