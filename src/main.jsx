import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import './index.css'
import { 
BrowserRouter as Router,
Routes,
Route, } from 'react-router-dom'
import ResultPage from './pages/ResultPage.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/result' element={<ResultPage/>}> </Route>
      </Routes>
    </Router>
)
