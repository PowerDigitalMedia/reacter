import React from 'react'
import WindowDimensionsProvider from './utils/WindowDimensionsProvider'

import {
    BrowserRouter as Router,
    //Switch,
    //Route
    //Link
} from "react-router-dom";


//https://muffinman.io/react-router-subfolder-on-server/
  

import Stage from "./app-components/stage";


const App = () => (

    <WindowDimensionsProvider>

        <Router
            
            basename='/x-reacter/'
        
        >

            <div><Stage /></div>

        </Router>

    </WindowDimensionsProvider>
)

export default App
