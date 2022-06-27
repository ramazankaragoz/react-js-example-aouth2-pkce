import React from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'

import Home from './Home'

const RouteApp = props => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
            </Routes>
        </Router>
    )
}

export default RouteApp;