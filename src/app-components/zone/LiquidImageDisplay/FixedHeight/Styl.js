
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

    padding :0 0 0 0; 
    margin  :${props => props.margin ? props.margin : "0 0 0 0"};

    position:relative;   
    float:left;

  
`;



export const Column = styled.div`


    background-color:${props => props.bgColor ? props.bgColor : "transparent"};

    width   :${props => props.width ? props.width : props.defWidth};
    height  :auto;

    padding :0 0 50px 0; 
    margin  :${props => props.margin ? props.margin : "0 0 0 0"};

    position:relative;   
    float:left;

    display : block;

    overflow:hidden;


    
`;





export const Cell = styled.div`

    background-color:${props => props.bgColor ? props.bgColor : "white"};

    width   :${props => props.width ? props.width : props.defWidth};
    height  :${props => props.height ? props.height : props.defHeight};

    padding :0 0 0 0;
    margin  :${props => props.margin ? props.margin : "0 0 10px 0"};

    position:relative;   
    float:left;

    display : block;

    overflow:hidden;

    border  :${props => props.border ? props.border : 0};


`;




export const CellThumb = styled.div`

    background-color:${props => props.bgColor ? props.bgColor : "transparent"};

    width   :${props => props.width ? props.width : props.defWidth};
    height  :${props => props.height ? props.height : props.defHeight};

    padding :0 0 0 0;
    margin  :${props => props.margin ? props.margin : "10px 0 0 10px"};

    position:relative;   
    float:left;

    overflow:hidden;


`;



export const CellTitle = styled.h3`

    color: #454D5F;
    font-size:24px;
    text-align: center;

    margin:25px 0 0 0;

    @media (min-width: 1024px) {
        font-size: 1.5rem;
    }
`;

export const CellText = styled.p`

    padding:5px 15px 20px 15px;
    color: #000;
    font-size:16px;

    @media (min-width: 1024px) {
        font-size: 1rem;
    }

`;
