import React, { 

    useState, 
    useEffect, 
    //useRef 

} from 'react';



// -- hooks --
import { useWindowDimensions } from '../../../utils/WindowDimensionsProvider'


// -- utils --
import NavGrid from '../../../utils/myBuilds/NavGrid/Tags';


// -- css --
import '../../../App.css';
import "../../../app-style/area.css";



import { zoneObj } from './zoneObj';



const Index = (props) => {


    const { height } = useWindowDimensions()
    const [scrollboxHeight, setScrollboxHeight] = useState(50)

    useEffect(() => {


        var topHeight = props.stageTopHeight;
        var scrollbox_h = (height - topHeight) + "px";
        setScrollboxHeight(scrollbox_h);



    },[
        props,
        height
    ])
    


    return (

        <div className="App-stage">

            <div 
            id="scrollbox"
            className="App-scrollbox"
            style={{

                height : scrollboxHeight
            }}
            
            >

                <div 
                className="area"
                style={{

                    //backgroundColor     : 'red',
                    width               : "100%",
                    marginLeft          : "0px"

                }}
                >

                    <NavGrid gridInfo={{

                        data : zoneObj.navigation,

                        gridCall : 'grid_row_cell',
                        cellBorderInfo : {

                            "boolean"       :true,
                            "thickness"     :1,//px
                            "color"         :"lightgray" 

                        }

                    }} />


                </div>

        
            </div>

        </div>


    )


}

export default Index


