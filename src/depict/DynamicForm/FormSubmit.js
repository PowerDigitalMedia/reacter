
import React, { 

    useState, 
    useEffect,
    useRef

} from 'react';



import '../../css/alfabase.css';//alfa,base,tab,tab-x,flank
import '../../css/loader.css';//alfa,base,tab,tab-x,flank
import './FormSubmitStyl.css';


//import { arraylib } from '../../library/array';
//import { baselib } from '../../library/base';
//import { elemlib } from '../../library/elem';
import { formlib } from '../../library/form';
//import { stringlib } from '../../library/string';



import { Timeout } from './Timeout';




//######################################################################
//######################################################################
//######################################################################

const FormSubmit = ({

    width,//window
    height,//window
    formArr,
    handleRemoveFlyr,  
    handleFormError
 
}) => {




    //##########################################################
    //##########################################################

    /*

    //Z stuff works but adjustment don't render dynamically in the style

    console.log("HIGHEST Z: "+elemlib.HighestZ());
  
    let highestZ = elemlib.HighestZ();

    let alfa_z = highestZ + 50;
    let base_z = alfa_z + 1;


    console.log("alfa_z: "+alfa_z+ "\nbase_z: "+base_z);

    */



    //##########################################################
    //##########################################################

    //----------------------------------------------

    //const [baseScrollHeight, setBaseScrollHeight] = useState(0)
    //const [tabHeight, setTabHeight] = useState(0)
    const [flyrHeight, setFlyrHeight] = useState(0)

    //const baseRef = useRef(null)
    //const tabRef = useRef(null)
    const flyrRef = useRef(null)

    const [error, setError] = useState(null);
    const [errorArr, setErrorArr] = useState([]);

    const [buttonStyle, setButtonStyle] = useState({});

    const [okayArr, setOkayArr] = useState([]);
   
    const [isProcessing, setIsProcessing] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    //const [isDone, setIsDone] = useState(false);



 

    //----------------------------------------------
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()

    useEffect(() => {


        setFlyrHeight(flyrRef.current.offsetHeight);


        setIsProcessing(false);

        setButtonStyle({

            bgColor     :"#0291cd",
            txtColor    :"#FFF",
            brColor     :"#0291cd"

        });
      



        //====================================================
        
        //console.log("FORM SUBMIT PROPS: "+JSON.stringify(formArr,null,2));



        var okar = [];  
        var ear = [];
  
        var frm;

        for(var i=0; i < formArr.length; i++)
        {

            frm = formArr[i];

            switch(frm.section)
            {   
            case'checkboxes':
            case'radiobuttons':

                if(frm.data.required)
                {
                    if(frm.data.choice.length === 0)
                    {
                        ear.push({

                            "key"       :i,
                            "section"   :frm.section,
                            "message"   :frm.data.name+" (Please Choose)"
                    
                        });
                    }
                
                }//== if



                okar.push({

                    "section":frm.section,

                    "name":frm.data.name,
                    "value":frm.data.choice.join()

                })

            break;
            case'fields':


                var field;
                var array = frm.data;
                for(var j=0; j < array.length; j++)
                {

                    var err;
                    field = array[j];
                    if(field.required)
                    {
                        if(field.text === ''
                        || field.text === field.hint
                        || field.text === undefined
                        )
                        {

                            ear.push({

                                "key"       :i+"-"+j,
                                "section"   :frm.section,
                                "message"   :field.hint+" (Required)"
                        
                            });


                        }//== if
                        else
                        {

                            if(field.id.match(/email/gi)
                            )
                            {
                                err = formlib.Validate_Email(field.text,field.hint)
                                if(err)
                                {
                                    ear.push({

                                        "key"       :i+"-"+j,
                                        "section"   :frm.section,
                                        "message"   :field.hint+" (Invalid)"
                                
                                    });
                                    
                                }
                            
                            }
    
                        }

                    }//== if




                    okar.push({

                        "section":"field",

                        "fieldtype":field.fieldtype,
                        "hint":field.hint, 

                        "name":field.id,
                        "value":field.text
    
                    })



                }//== j


            break;
            case'header':
            case'headline':
            case'bar':


                okar.push({

                    "section":frm.section,

                    "name":frm.section,
                    "value":frm.data.text

                })


            break;
            default:
            break;
            }//==


        }//== i




        console.log("OK ARR: "+JSON.stringify(okar,null,2));
        setOkayArr(okar);


        if(ear.length > 0)
        {
            console.log("ERROR ARRAY: "+JSON.stringify(ear,null,2));

            setError("form");
            setErrorArr(ear);


        }
        else
        {
        
            setIsProcessing(true);


            var _VARS = JSON.stringify(okar,null,2);

   

            var splitter = "-|AJXPST|-"

            var amp = "&";

            var ajaxPost = ""
            + "ajaxArr[]=case" + splitter + "fetch" + amp
            + "ajaxArr[]=vars" + splitter + _VARS





            fetch("http://localhost:5000/form-submit" , {

                method:"POST",
                headers: new Headers({

                    'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type

                }),
                //body: "param1=value1&param2=value2" // <-- Post parameters

                body: ajaxPost  // <-- Post parameters ajaxArr[]

                //CORS
                //mode:"no-cors", //will result in an opaque response - fix is to set cors on express
                
            })

            
            .then(res => res.json())
            //.then((res) => {console.log(res.json())})
            .then(

                (result) => {

                
                    setIsProcessing(false);
                    setIsLoaded(true);
                    //setItems(result.items);

                    //console.log(result.items);



                },

                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {

                    setIsProcessing(false);
                    setIsLoaded(false);
                    setError("process");
                    setErrorArr([{

                        "key"       :"0-process",
                        "section"   :"process",
                        "message"   :"ERROR TYPE: "+error

                    }]);


                }


            )


        
        }//== has_errors




    
    }, [formArr])




    //###########################################################
    //###########################################################

    const handleOverOut = (v) => {

        //console.log(v);
        setButtonStyle({

            bgColor     :v.bgColor,
            txtColor    :v.txtColor,
            brColor     :v.brColor

        });

    }




    //###########################################################
    //###########################################################

    const handleTimeoutMsg = (v) => {

        console.log("handleTimeoutMsg");
        console.log(v);

        handleRemoveFlyr({

            action:'redirect'
        });

    }






    //###########################################################
    //###########################################################

    var maxWidth = 500;


    if(error || isLoaded)
    { 
        maxWidth = 400; 
    }
    else
    if(isProcessing)
    {
        maxWidth = 100;

    }//==



    
    


    if(width < maxWidth + 50)
    {
        maxWidth = width;

    }//==


    //var flyrPadBottomInt = 80;
    //var flyrPadBottom = flyrPadBottomInt + "px";

    var flyrWInt;
    var flyrW;

    //var flyrHInt;
    var flyrH;

    var flyrMarl;

    var flyrMartInt;
    var flyrMart;


    //------------------------------------------

    flyrWInt = maxWidth;
    flyrMarl = (width - flyrWInt)/2 + 20 + "px";

    if(width < flyrWInt+50)
    {
        flyrWInt = width;
        flyrMarl = 0 + "px";
    }//==

    flyrW = flyrWInt + "px";


    //flyrHInt = 0;
    flyrH = 'auto';
    

    //--------------------------------------------


    flyrMartInt = 0;
    if(flyrHeight !== 0 && flyrHeight < height)
    {  
        flyrMartInt = (height - flyrHeight)/2 - 50;
    }

    flyrMart = flyrMartInt + 'px';

    //----------------------------------------------






    if(error) 
    {
    //###########################################################
    //###########################################################


        var buttonWInt;
        var buttonW;
        var buttonMarlInt;
        var buttonMarl;

        buttonWInt = 100;
        buttonW = buttonWInt + "px";

        buttonMarlInt = (flyrWInt - buttonWInt)/2;
        buttonMarl = buttonMarlInt + "px";


        var msgWInt;
        var msgW;
        var msgMarl;
    

        msgWInt = flyrWInt - 90;
        msgW = msgWInt + "px";

        msgMarl = (flyrWInt - msgWInt)/2 - 20 + "px";

        //msgMarl = buttonMarlInt - ((msgWInt - buttonWInt)/2) + "px";




        return ( 

            <div>

                <div className="alfa"></div>

                <div 
                //ref={baseRef}
                className="base">


                    <div 
                    id="flyr"
                    ref={flyrRef}
                    className="formsubmit-flyr" 
                    style={{

                        //backgroundColor : '#1a1926', 
                        width           : flyrW,
                        height          : flyrH,
                        margin          : flyrMart+" 0 0 "+flyrMarl,
                        padding         : "25px 0 25px 0",
                        border          : "1px solid white",
                        borderRadius    : "10px"

                    }}
                    >

                        <div 
                        className="formsubmit-flyr-message" 
                        style={{

                            backgroundColor     : "lightyellow",
                            width               : msgW,
                            height              : "auto",
                            marginLeft          : msgMarl,
                            padding             : "5px 20px 20px 20px",
                            border              : "1px solid #454D5F",
                            borderRadius        : "10px"
                        
                        }}

                        >

                            <div 
                            style={{

                                backgroundColor     : "transparent",
                                width               : "98%",
                                height              : "auto",
                                margin              : "0 0 7px 0",
                                padding             : "7px 0 7px 0",
                            
                                fontSize            : "16px",
                                textAlign           : "left",
                                color               : "orangered"

                            }}
                            >

                                {
                                //----------------------------------
                                error.match(/process/gi) ? 

                                    <div>Process Error</div>

                                : <div>Please Fix Errors...</div>
                                //-----------------------------------
                                }


                            </div>



                            <div>
                            {errorArr.map((line,i) => (


                                <div 
                                key={"errorline"+i}
                                style={{

                                    backgroundColor     : "transparent",
                                    width               : "98%",
                                    height              : "auto",
                                    margin              : "0 0 0 0",
                                    padding             : "3px 0 3px 0",

                                    fontSize            : "14px",
                                    textAlign           : "left",
                                    color               : "#000"

                                }}
                                >
                                    {line.message}

                                </div>

                            ))}
                            </div>


                        


                        </div>





                        <div 
                        className="formsubmit-flyr-button" 
                        style={{

                            backgroundColor : buttonStyle.bgColor, 
                            width           : buttonW,
                            //height          : "40px",
                            margin          : "35px 0 0 "+buttonMarl,

                            color           : buttonStyle.txtColor,
                            border          : "1px solid "+buttonStyle.brColor
                     
                        }}

                        onClick={() => handleFormError(errorArr)}

           
                        onMouseEnter={() => handleOverOut({

                            call        :"over",
                            bgColor     :"orangered",
                            txtColor    :"#FFF",
                            brColor     :"orangered"
                
                        })}
                
                        onMouseOut={() => handleOverOut({
                
                            call        :"out",
                            bgColor     :"#0291cd",
                            txtColor    :"#FFF",
                            brColor     :"#0291cd"
                
                
                        })}

                        >
                            OK

                        </div>



                    </div>

                </div>

            </div>


        );




    } 
    else 
    if(!isLoaded) 
    {
    //###########################################################
    //###########################################################
   


        return ( 

            <div>

                <div className="alfa"></div>

                <div 
                //ref={baseRef}
                className="base">


                {
                //============================================
                //Loader Circle ==============================
                //============================================
                isProcessing ? 

                    <div 
                    id="flyr"
                    ref={flyrRef}
                    className="formsubmit-flyr" 
                    style={{

                        backgroundColor : '#1a1926', 
                        width           : flyrW,
                        height          : flyrH,
                        margin          : flyrMart+" 0 0 "+flyrMarl,
                        padding         : "25px 0 25px 0",
                        border          : "1px solid white",
                        borderRadius    : "10px"

                    }}
                    >
                        <div 
                        id="loader"
                        className="sm-loader-circle" 
                        style={{

                            borderTop          : "0.5em solid rgba(250,250,250,0.2)",
                            borderRight        : "0.5em solid rgba(250,250,250,0.2)",
                            borderBottom       : "0.5em solid rgba(250,250,250,0.2)",
                            borderLeft         : "0.5em solid #FFF"

                        }}
                        >
                        </div>


                    

                    </div>


                : null
                //============================================
                //============================================
                }






                {
                //============================================
                //Print Out ==================================
                //============================================
                !isProcessing ? 

                
                    <div 
                    id="flyr"
                    ref={flyrRef}
                    className="formsubmit-flyr-printout" 
                    style={{

                        width           : flyrW,
                        height          : flyrH,
                        margin          : flyrMart+" 0 100px "+flyrMarl,
                        padding         : "25px 0 100px 0",
                        border          : "1px solid white",
                        borderRadius    : "2px"

                    }}
                    >



                        <div>
                        {okayArr.map((frm, i) => (


                            <div 
                            key={"print_"+i}
                            style={{

                                //backgroundColor : "lightblue",
                                width           : "92%",
                                height          : "auto",

                                margin          : "0 0 0 4%",
                                padding         : "0 0 0 0",

                                position        : "relative",
                                float           : "left"

                            }}

                            >

                                {
                                //------------------------------------
                                //header 
                                //------------------------------------
                                frm.section === "header" ? 

                                    <div 
                                    style={{

                                        backgroundColor     : "transparent",
                                        width               : "98%",
                                        height              : "auto",
                                        margin              : "0 0 7px 0",
                                        padding             : "7px 0 7px 0",
                                    
                                        fontSize            : "22px",
                                        textAlign           : "left",
                                        color               : "#1A1926"

                                    }}
                                    >

                                        {frm.value}

                                    </div>

                                : null
                                //--------------------------------------
                                }



                                {
                                //------------------------------------
                                //headline 
                                //------------------------------------
                                frm.section === "headline" ? 

                                    <div 
                                    style={{

                                        backgroundColor     : "#EDEEF1",
                                        width               : "96%",
                                        height              : "auto",
                                        margin              : "18px 0 7px 0",
                                        padding             : "10px 10px 10px 10px",
                                    
                                        position            :"relative",
                                        float               :"left",
                                    
                                        fontSize            : "16px",
                                        textAlign           : "left",
                                        color               : "black",
                                    
                                        border              : "1px solid lightgray"

                                    }}
                                    >
                                        {frm.value}


                                    </div>

                                : null
                                //--------------------------------------
                                }
                            


                                {
                                //------------------------------------
                                //bar
                                //------------------------------------
                                frm.section === "bar" ? 

                                    <div 
                                    style={{

                                        backgroundColor     : "#454D5F",
                                        width               : "98%",
                                        height              : "auto",
                                        margin              : "30px 0 10px 0",
                                        padding             : "12px 0 12px 10px",
                                    
                                        position            :"relative",
                                        float               :"left",
                                    
                                        fontSize            : "16px",
                                        textAlign           : "left",
                                        color               : "white",
                                    
                                        border              : "1px solid #454D5F"


                                    }}
                                    >

                                        {frm.value}


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

                                        backgroundColor     : "transparent",
                                        width               : "98%",
                                        height              : "auto",
                                        margin              : "7px 0 7px 0",
                                        padding             : "7px 0 7px 0",
                                    
                                        fontSize            : "14px",
                                        textAlign           : "left",
                                        color               : "#1A1926"

                                    }}
                                    >

                                        {frm.value}

                                    </div>

                                : null
                                //--------------------------------------
                                }
                            

                            
                

                                {
                                //------------------------------------
                                //field
                                //------------------------------------
                                frm.section === "field" ? 

                                    <div 
                                    style={{

                                        backgroundColor     : "transparent",
                                        width               : "98%",
                                        height              : "auto",
                                        margin              : "0 0 0 0",
                                        padding             : "3px 0 3px 0",
                                    
                                        fontSize            : "14px",
                                        textAlign           : "left",
                                        color               : "#1A1926"

                                    }}
                                    >

                                        {frm.name+" : "+frm.value}

                                    </div>

                                : null
                                //--------------------------------------
                                }
                            

                        

                            </div>
        



                        ))}
                        </div>


                    </div>



                
                : null
                //============================================
                //============================================
                }


                </div>

            </div>


        );


    } 
    else 
    {
    //###########################################################
    //###########################################################
   

        var successArr;
        successArr = [

            {
               "call":"heading",
               "text":"Success" 
            },
            {
                "call":"span",
                "text":"Message Was Sent Successfully!!" 
             }

        ];


        
    

        return ( 

            <div>

                <div className="alfa"></div>

                <div 
                //ref={baseRef}
                className="base">


                    <div 
                    id="flyr"
                    ref={flyrRef}
                    className="formsubmit-flyr" 
                    style={{

                        //backgroundColor : '#1a1926', 
                        width           : flyrW,
                        height          : flyrH,
                        margin          : flyrMart+" 0 0 "+flyrMarl,
                        padding         : "10px 0 15px 0",
                        border          : "1px solid white",
                        borderRadius    : "10px"

                    }}
                    >


                        <div 
                        className="formsubmit-flyr-message" 
                        style={{

                            backgroundColor     : "white",
                            width               : msgW,
                            height              : "auto",
                            marginLeft          : "0 0 0 "+msgMarl,
                            padding             : "0 0 0 0",
                            //border              : "1px solid #454D5F",
                            //borderRadius        : "10px"
                        
                        }}

                        >

                   
                            <div>
                            {successArr.map((line,i) => (



                                <div
                                key={"successline"+i}
                                
                                >
                                {
                                //------------------------------------
                                //success message
                                //------------------------------------


                                    line.call === "heading" ? 
    
    
                                        <div 
                                        style={{

                                            backgroundColor     : "lightgreen",
                                            width               : "100%",
                                            height              : "auto",
                                            margin              : "0 0 10px 0",
                                            padding             : "7px 0 7px 0",

                                            fontSize            : "18px",
                                            textAlign           : "center",
                                            color               : "#000"

                                        }}
                                        >
                                            {line.text}

                                        </div>
        
    
                                    : line.call === "span" ? 
    
                    
                                        <div 
                                        style={{

                                            backgroundColor     : "transparent",
                                            width               : "100%",
                                            height              : "auto",
                                            margin              : "5px 0 5px 0",
                                            padding             : "3px 0 3px 0",

                                            fontSize            : "14px",
                                            textAlign           : "center",
                                            color               : "#000"

                                        }}
                                        >
                                            {line.text}

                                        </div>

                            
                                    : null

    
    
                                //--------------------------------------
                                }
                                </div>
                                
    

                            ))}
                            </div>

                        </div>


                        <div>

                        {
                        //------------------------------------
                        
                        <Timeout 

                            duration={3000} 
                            handleTimeoutMsg={(v) => handleTimeoutMsg(v)} 

                        />

                        //------------------------------------
                        }

                        </div>



                    </div>

                </div>

            </div>


        );




    }//== if

  


}

export default FormSubmit;






/*


    //------------------------------------

    const timer = setTimeout(() => {

        setTimedMsg('Timeout called!');

    }, 3000);

    return () => clearTimeout(timer);

    //-------------------------------------

    

 */
