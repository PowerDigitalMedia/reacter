
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
    useRouteMatch,
    useLocation,
    useHistory,   
    //useParams,

} from "react-router-dom";






import './Styl.css';


import { useWindowDimensions } from '../../../utils/WindowDimensionsProvider';
import { useLiquidImageGrid } from '../../../utils/myHooks/LiquidFormula/ImageGrid';

import Flyr from './Flyr';



//######################################################################
//######################################################################
//######################################################################

const Tags = (props) => {


    let match = useRouteMatch();
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
    




    const { width, height } = useWindowDimensions()


    //console.log("PROPS: "+JSON.stringify(props,null,2));


    //console.log("TAGS-PROPS-DATA: "+props.data);

    const gridCall = "grid_column_cell";//grid_column_cell or grid_cell
    const modCall = 'fill_div';
    const thumbCall = 'flex_height';//flex_height or default
    const cellBorderInfo = {

        "boolean"       :true,
        "thickness"     :1,//px
        "color"         :"lightgray"  

    };
    const across = false;
    const maxWidth = false;



    const stuff = useLiquidImageGrid(

        props.data,
        gridCall,
        modCall,
        thumbCall,
        cellBorderInfo,
        across,
        maxWidth

    );




    
    //============================================================
    //============================================================

    const [hashData, setHash] = useState(false);
    const [flyrData, setFlyrData] = useState(false);


    //----------------------------------------------------------

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {

       if(hashData === "#flyr" && location.hash === "")
       {

            setHash(false);
            setFlyrData(false); 
            
       }

    },[hashData,location])


    //------------------------------------------------------------

    

    const handleAddFlyr = (box,match,location,history) => {

        setHash("#flyr");
        setFlyrData(box);

        //console.log("MATCH: "+JSON.stringify(match,null,2));
        //console.log("LOCATION: "+JSON.stringify(location,null,2));
        //console.log("HISTORY: "+JSON.stringify(history,null,2));

        if(location.hash !== "#flyr") history.push("#flyr");
    
    }

    
    const handleRemoveFlyr = (location,history) => {

    
        setHash(false); 
        setFlyrData(false);

        //console.log("LOCATION: "+JSON.stringify(location,null,2));
        //console.log("HANDLE HISTORY: "+JSON.stringify(history,null,2));

        if(location.hash === "#flyr")
        {
            history.goBack();  
        }

    }
    
    
    //============================================================
    //============================================================




    

    
    if(gridCall === 'grid_column_cell')
    {


        return (


            <div>


                {
                //------------------------------------
                //FLYR
                //------------------------------------

                //CONDITIONAL RENDERING
                //https://reactjs.org/docs/conditional-rendering.html

            
                /*
                ------------------------------------

                viewFlyr &&
                    <h2>
                    You have {unreadMessages.length} unread messages.
                    </h2>

                */


                /*
                -------------------------------------
                THIS ONE WORKS - FAILS ON HOOKS
                -------------------------------------

                flyrData ? Flyr(

                    width,
                    height,
                    useLiquidImageGrid,
                    flyrData,
                    handleRemoveFlyr,
              
                ) : ''




                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>




                */







                flyrData ? 
                <Flyr 
                    width={width} 
                    height={height} 
                    box={flyrData}
                    func={() => handleRemoveFlyr(location,history)} 
                    //func={() => history.replace("")}
                
                  
                /> 
                : null







                //-------------------------------------
                }
    



                <div 
                className="liquid-grid" 
                style={{

                    backgroundColor : stuff.grid.bgColor, 
                    width           : stuff.grid.width,
                    height          : stuff.grid.height, 
                    margin          : stuff.grid.margin

                }}

                >

                    {stuff.data.map((col, i) => (


                        <div 
                        key={i} 
                        className="liquid-column" 
                        style={{

                            //backgroundColor : 'purple', 
                            width           : stuff.column.width,
                            height          : 'auto',
                            margin          : stuff.column.margin

                        }}

                        >


                        {col.map((box, j) => (

                            <div 
                            key={box.id}  

                            onClick={() => handleAddFlyr(

                                box,
                                match,
                                location,
                                history
                            
                            )}

                            className="liquid-cell"  
                            style={{

                                //backgroundColor : box.bgColor, 
                                width           : stuff.cell.width,
                                height          : stuff.cell.height,
                                border          : stuff.cell.border
                    
                            }}
                    
                            >


                                <div 
                                key={box.id} 
                                className="liquid-cell-thumb"  
                                style={{

                                    width           : stuff.cell.thumb.width,
                                    height          : box.thumb.h,
                                    margin          : stuff.cell.thumb.margin
                        
                                }}
                        
                                >


                                    <img
                                        style={{

                                            marginTop: box.image.top, 
                                            marginLeft:box.image.left

                                        }}

                                        src={window.location.origin + box.image.src} 
                                        width={box.image.w}
                                        height={box.image.h} 
                                        alt='noimage'

                                    />

                            
                                </div>


                                <div className="liquid-cell-title">{box.title}</div>
                                <div className="liquid-cell-text">{box.text}</div>

                            </div>
                        ))}


                        </div>


                    ))}


                </div>



            </div>


        );



    }
    else
    {


        return (


            <div 
            className="liquid-grid" 
            style={{

                //backgroundColor : stuff.grid.bgColor, 
                width           : stuff.grid.width,
                height          : stuff.grid.height, 
                margin          : stuff.grid.margin

            }}

            >

                {stuff.data.map((box, i) => (

                    <div 
                    key={box.id} 
                    className="liquid-cell"  
                    style={{

                        //backgroundColor : box.bgColor, 
                        width           : stuff.cell.width,
                        height          : stuff.cell.height,
                        margin          : stuff.cell.margin,
                        border          : stuff.cell.border
                
            
                    }}
            
                    >


                        <div 
                        key={box.id} 
                        className="liquid-cell-thumb"  
                        style={{

                            width           : stuff.cell.thumb.width,
                            height          : box.thumb.h,
                            margin          : stuff.cell.thumb.margin
                
                        }}
                
                        >


                            <img
                                style={{

                                    marginTop: box.image.top, 
                                    marginLeft:box.image.left

                                }}

                                src={window.location.origin + box.image.src} 
                                width={box.image.w}
                                height={box.image.h} 
                                alt='noimage'

                            />

                    
                        </div>


                        <div className="liquid-cell-title">{box.title}</div>
                        <div className="liquid-cell-text">{box.text}</div>

                    </div>
                ))}


            </div>
    

        );



    }//==




}

export default Tags;








/*
 
https://reactjs.org/docs/conditional-rendering.html






                    {col.map((box, j) => (

                        <div 
                        key={box.id} 
                        className="liquid-cell"  
                        style={{

                            backgroundColor : box.bgColor, 
                            width           : stuff.cell.width,
                            height          : stuff.cell.height
                
                        }}
                
                        >


                            <div 
                            key={box.id} 
                            className="liquid-cell-thumb"  
                            style={{

                                width           : stuff.cell.thumb.width,
                                height          : box.thumb.h,
                                margin          : stuff.cell.thumb.margin
                    
                            }}
                    
                            >


                                <img
                                    style={{

                                        marginTop: box.image.top, 
                                        marginLeft:box.image.left

                                    }}

                                    src={window.location.origin + box.image.src} 
                                    width={box.image.w}
                                    height={box.image.h} 
                                    alt='noimage'

                                />

                        
                            </div>


                            <div className="liquid-cell-title">{box.title}</div>
                            <div className="liquid-cell-text">{box.text}</div>

                        </div>
                    ))}








class SimpleExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {count : 0}
        this.handleAddingDivs = this.handleAddingDivs.bind(this)
    }


    handleAddingDivs() {
        this.setState({count: this.state.count + 1})     
    }
    
    renderDivs(){
        let count = this.state.count, uiItems = [];
        while(count--)
           uiItems.push(
               <div>
                   This is added div! uniqueID: {count}
               </div> 
            )
        return uiItems;
    }

    render() {
        return (
            <div>
                <h1>These are added divs </h1>
                <button className="btn-anchor-style add-row-link" type="button" onClick={this.handleAddingDivs}>{'Add Row'}</button>
                {this.renderDivs()}
            </div>
        )
    }
}

ReactDOM.render(<SimpleExample/>, document.getElementById('app'))








var App = React.createClass({


    getInitialState : function() {
        return (
            {
                fruits : {
                    'fruit-1' : 'orange',
                    'fruit-2' : 'apple'
                }
            }
        )
    },
    addFruit : function(fruit) {

        //create a unike key for each new fruit item
        var timestamp = (new Date()).getTime();
        // update the state object
        this.state.fruits['fruit-' + timestamp ] = fruit;
        // set the state
        this.setState({ fruits : this.state.fruits });

    },
    removeFruit : function(fruitKey) {

        // update the state object
        delete this.state.fruits[fruitKey];
        // set the state
        this.setState({ fruits : this.state.fruits });
        //alert(fruitKey);
    },
    render: function() {

        return (
            <div className="component-wrapper">
                <FruitList fruits={this.state.fruits} />
                <AddFruitForm addFruit={this.addFruit} />
                <RemoveFruitForm removeFruit={this.removeFruit} fruits={this.state.fruits} />
            </div>
        );

    }


});





var FruitList = React.createClass({

    render : function() {

        return (
            <div className="container">
                <ul className="list-group text-center">
                    {
                    Object.keys(this.props.fruits).map(function(key) {
                        return <li className="list-group-item list-group-item-info">{this.props.fruits[key]}</li>
                    }.bind(this))
                    }
                </ul>
            </div>
        );
    }

});



var AddFruitForm = React.createClass({

    createFruit : function(e) {

        e.preventDefault();
        //get the fruit object name from the form
        var fruit = this.refs.fruitName.value;
        //call the addFruit method of the App component
        //to change the state of the fruit list by adding an new item
        if(fruit.length > 0) {
            this.props.addFruit(fruit);
        }
        //reset the form
        this.refs.fruitForm.reset();
    },


    render : function() {
        return(
        <form className="form-inline" ref="fruitForm" onSubmit={this.createFruit}>
            <div className="form-group">
            <label for="fruitItem">
                Fruit Name
                <input type="text" id="fruitItem" className="form-control" placeholder="e.x.lemmon" ref="fruitName" />
            </label>
            </div>
            <button type="submit" className="btn btn-primary">Add Fruit</button>
        </form>
        )

    }
    
});

var RemoveFruitForm = React.createClass({

    selectFruittoRemove : function(e) {
        var fruit = e.target.value;
        //get the fruit object name from the form
        //var fruit = this.refs.removeFruitSelect.value;
        //call the addFruit method of the App component
        //to change the state of the fruit list by adding an new item
        this.props.removeFruit(fruit);
        //reset the form
        this.refs.removeFruitForm.reset();
    },

    render : function() {
        return(
            <form className="form-inline" ref="removeFruitForm" onChange={this.selectFruittoRemove}>
            <div className="form-group">
                <label for="selectFruit">
                List of Fruits
                <select id="selectFruit" className="form-control">
                    <option value="">Remove a fruit</option>
                    {
                    Object.keys(this.props.fruits).map(function(key) {
                        return <option value={key}>{this.props.fruits[key]}</option>
                    }.bind(this))
                    }
                </select>
                </label>
                </div>
            </form>
        )

    }

});



React.render(
    <App />,
    document.getElementById('app')
);











https://dev.to/email2vimalraj/dynamic-form-fields-using-react-35ci












function App() {


    const [fields, setFields] = useState([{ value: null }]);

    function handleChange(i, event) {
        const values = [...fields];
        values[i].value = event.target.value;
        setFields(values);
    }

    function handleAdd() {
        const values = [...fields];
        values.push({ value: null });
        setFields(values);
    }

    function handleRemove(i) {
        const values = [...fields];
        values.splice(i, 1);
        setFields(values);
    }

    return (
        
        <div className="App">
            <h1>Hello CodeSandbox</h1>

            <button type="button" onClick={() => handleAdd()}>
            +
            </button>

            {fields.map((field, idx) => {


                return (

                    <div key={`${field}-${idx}`}>
                    <input
                        type="text"
                        placeholder="Enter text"
                        onChange={e => handleChange(idx, e)}
                    />
                    <button type="button" onClick={() => handleRemove(idx)}>
                        X
                    </button>
                    </div>
                );

            })}

        </div>
    );
}











        history.listen((newLocation, action) => {

            if(action === "PUSH") 
            {

                console.log("NEW LOCATION: "+newLocation);
                
                
                if(newLocation.pathname !== this.currentPathname 
                || newLocation.search !== this.currentSearch) 
                {
                    // Save new location
                    this.currentPathname = newLocation.pathname;
                    this.currentSearch = newLocation.search;

                    // Clone location object and push it to history
                    history.push({
                        pathname: newLocation.pathname,
                        search: newLocation.search
                    });
                }
                
                

            } 
            else 
            {


                //alert(JSON.stringify(newLocation,null,2));
            
                if(flyrData && newLocation.hash === "")
                {
                    console.log(JSON.stringify(newLocation,null,2));
                    setFlyrData(false);  
                   
                    // Send user back if they try to navigate back
                    //history.go(1);
            
                }//==

            }

        });










*/