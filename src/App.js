import React from 'react'
import WindowDimensionsProvider from './utils/WindowDimensionsProvider'

import {
    BrowserRouter as Router,
    //Switch,
    //Route
    //Link
  } from "react-router-dom";
  

import Depict from "./depict/index.js";


const App = () => (

    <WindowDimensionsProvider>

        <Router>

            <div><Depict /></div>

        </Router>

    </WindowDimensionsProvider>
)

export default App
