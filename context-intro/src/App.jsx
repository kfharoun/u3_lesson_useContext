import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import './App.css'
// anything giving us data is an API 
import { useState, useContext } from 'react'
import DataContext from './components/DataContext'

function App() {
  const [userInfo, setUserInfo] = useState({
    name: "Kass", 
    favColor: 'lavender', 
    favFood: "Teryiaki Chicken", 
    favMovie: "The Love Witch"
  }) 
  return (
  
      <div className="app">
        <div className="header">
          <h1>Intro to Context</h1>
        </div>

        <div className="main">
          <DataContext.Provider value = {{userInfo, setUserInfo}}>
            <ComponentA/>
            <ComponentB/>
          </DataContext.Provider>
        </div>
 </div>
  )
}

export default App
