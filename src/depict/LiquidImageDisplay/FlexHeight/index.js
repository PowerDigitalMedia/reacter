//-------------------------------------
//react
//-------------------------------------

import React, { 

    useState, 
    useEffect, 
    //useRef 

} from 'react';




//const APP_PATH = "../../../";



//-----------------------------------
// css
//-----------------------------------

import '../../../App.css';
import "../../../css/area.css";





//-------------------------------------
//tags
//-------------------------------------

import Tags from './Tags';








//#####################################################################
//#####################################################################
//#####################################################################


const Index = (props) => {





    //==================================================

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    //==================================================





    //######################################################
    //######################################################

    useEffect(() => {


        const posArr = [];
        const tempArr = [];

        const Complete = (array) => {

            //alert('images finished loading');
            console.log("Images Finished Loading (Fluid)")

            if(array.length > 0)
            {
                setIsLoaded(true);
                setItems(array);

            }else{
                setIsLoaded(true);
                setError({message:"Process Image (FAILED)"});
            }
        
        }



        props.data.map(box => (

            updateData(box)

        ))

        function updateData(box) {
        
            var sourceurl = box.image.src;
        
            var img = new Image();
            img.error = function(){
                //console.log("IMAGE ERROR");
            };
            img.onload = function(){
        
                //console.log("IMAGE IS LOADED");
        
                //console.log('My width is: ', img.naturalWidth);
                //console.log('My height is: ', img.naturalHeight);
        
                var imgW = img.naturalWidth;
                var imgH = img.naturalHeight;
        
            
                posArr.push(box.position);
                tempArr.push({

                    position    :box.position,
        
                    id          :box.id,
                    title       :box.title,
                    text        :box.text,
                    bgColor     :box.bgColor,
                    image:{
        
                        src:box.image.src,
                        w:imgW,
                        h:imgH
                    }
        
                })


                if(tempArr.length === props.data.length)
                {
                    posArr.sort();

                    //console.log("POS: "+posArr.length)
                    //console.log("TEMP: "+tempArr.length)
                    //console.log("TEST LEN: "+testData.length)
                

                    var array = [];
                    for(var i=0; i < posArr.length; i++)
                    {
                        for(var j=0; j < tempArr.length; j++)
                        {
                            //console.log(posArr[i]+" === "+tempArr[j]['position']);

                            if(posArr[i] === tempArr[j]['position'])
                            {
                            
                                array.push(tempArr[j]);

                                //console.log("break");
                                break;

                            }//==
        
                        }//==

                    }//==

                    Complete(array);

                }//==

        
        
            };
            img.setAttribute("crossOrigin","anonymous");
            img.setAttribute("src",sourceurl);
        
        }



    },
    [
        props.data
    ])









    //######################################################
    //######################################################


    if(error) 
    {
        return <div>Error: {error.message}</div>;
    } 
    else 
    if(!isLoaded) 
    {

      
        return (

           
            <div>


                <div className="area">

                    {

                    <div className="area-title">Loading...</div>

                    }

                </div>


            </div>


        )




    } 
    else 
    {

        

        return (


            <div>

                <div className="area">

                                
                    {/*

                    <div className="area-title">{props.title}</div>

                    */}


                    <Tags data={items} />

                </div>


            </div>


        )

        

    }


}

export default Index



