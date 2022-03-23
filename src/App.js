import React from 'react'
import "./App.css"
import Company from './Screens/Companies/Company'
import LittleDetails from './Screens/companyDetails/LittleDetails'
import Header from './Screens/Header/Header'
import NavBar from './Screens/NavBar/NavBar'

const App = () => {
  return (
  
  <>
  <Header/>
  <LittleDetails/>

  <Company/>
  </>
  )
}

export default App