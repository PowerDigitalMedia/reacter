
import styled from "styled-components";
//import px2vw from "../../utils/px2vw";





/*

Over 200 classes were generated for component styled.div with the id of "sc-AxirZ".
Consider using the attrs method, together with a style object for frequently changed styles.
Example:

const Component = styled.div.attrs({
    style: ({ background }) => {
        background,
    },
})`width: 100%;`

<Component />


*/

  



export const Grid = styled.div`

    background-color:${props => props.bgColor ? props.bgColor : "transparent"};

    width   :${props => props.width ? props.width : props.defWidth};
    height  :${props => props.height ? props.height : props.defHeight};

    padding :0 0 100px 0; 
    margin  :${props => props.margin ? props.margin : "30px auto"};

	position:relative;
	/*float:left;*/
	overflow:hidden;

  
`;



export const Row = styled.div`


    background-color:${props => props.bgColor ? props.bgColor : "transparent"};

    width   :${props => props.width ? props.width : props.defWidth};
    height  :auto;

    padding :0 0 0 0; 
    margin  :${props => props.margin ? props.margin : "0 0 0 0"};

    position:relative;   
    float:left;

    display : block;

    overflow:hidden;



`;





export const Cell = styled.div`

    background-color:${props => props.bgColor ? props.bgColor : "#f9f9f9"};

    width   :${props => props.width ? props.width : props.defWidth};
    height  :${props => props.height ? props.height : props.defHeight};

    padding :${props => props.margin ? props.margin : "0 0 0 0"};
    margin  :${props => props.margin ? props.margin : "7px 7px 7px 7px"};

    position:relative;   
    float:left;
    overflow:hidden;

    border  :${props => props.border ? props.border : "1px solid lightgray"};
    border-radius:${props => props.borderRadius ? props.borderRadius : "20px"};



`;




export const CellGraphic = styled.div`

    background-color:${props => props.bgColor ? props.bgColor : "transparent"};

    width   :${props => props.width ? props.width : props.defWidth};
    height  :${props => props.height ? props.height : props.defHeight};

    padding :0 0 0 0;
    margin  :${props => props.margin ? props.margin : "30px auto"};

    position:relative;
    /*float:left;*/
    ${props => props.float ? "float:" + props.float : ""};

    overflow:visible;

    border:1px solid #1A1926;

`;







export const CellTitle = styled.div`

    background-color:transparent;
    width:96%;
    height:auto;
    padding:20px 0 18px 0;
    margin:0 0 0 15px;

    position:relative;
    float:left;
    overflow:hidden;

    font-family:Arial, Helvetica, sans-serif;
    font-size:22px;
    font-weight:normal;
    color:#000;
    text-align:left;

`;



export const CellName = styled.div`


    background-color:${props => props.bgColor ? props.bgColor : "transparent"};

    width   :${props => props.width ? props.width : props.defWidth};
    height  :${props => props.height ? props.height : props.defHeight};

    padding:4px 0 4px 0;
    margin  :${props => props.margin ? props.margin : "0 0 0 0"};

    position:relative;
    float:left;
    overflow:hidden;

    font-family:Arial, Helvetica, sans-serif;
    font-size:22px;
    font-weight:bold;
    color:#000;
    text-align:${props => props.textAlign ? props.textAlign : "center"};


`;



export const CellDescr = styled.div`


    background-color:${props => props.bgColor ? props.bgColor : "transparent"};

    width   :${props => props.width ? props.width : props.defWidth};
    height  :${props => props.height ? props.height : props.defHeight};

    padding:4px 0 4px 0;
    margin  :${props => props.margin ? props.margin : "0 0 0 0"};

    position:relative;
    float:left;
    overflow:hidden;

    font-family:Arial, Helvetica, sans-serif;
    font-size:18px;
    font-weight:normal;
    color:#000;
    text-align:${props => props.textAlign ? props.textAlign : "center"};


`;

