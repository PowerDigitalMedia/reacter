import React, { 

    //useState, 
    useEffect,
    //useRef

} from 'react';


export const Timeout = (props) => {

    useEffect(() => {

        const timer = setTimeout(() => {

            console.log(JSON.stringify(props,null,2));
            props.handleTimeoutMsg("Hello from timeout");

        }, props.duration);

        return () => clearTimeout(timer);

    }, [props]);

    return <div></div>

}


/* 

https://upmostly.com/tutorials/settimeout-in-react-components-using-hooks


*/