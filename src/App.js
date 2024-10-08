import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ErrorPage from './Components/ErrorPage'
import Table from './Components/Table'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Table />}/>
        <Route exact path='*' element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

