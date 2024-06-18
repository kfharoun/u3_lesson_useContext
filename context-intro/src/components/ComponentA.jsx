import React, { useContext } from 'react'
import DataContext from './DataContext'
import ComponentC from './ComponentC'

export default function ComponentA () {
    
    const { userInfo, setUserInfo } = useContext(DataContext)
    console.log('Component A', userInfo)
    return (
        <div className="card">
            <h2>This is component A</h2>
            <p>{userInfo.name}'s favorite color is</p>
            <p style = {{color: userInfo.favColor, fontWeight: "900" }}>{userInfo.favColor}</p>

            <button onClick={()=> setUserInfo({...userInfo, favColor: "pink"})}>Change to Pink</button>
            <button onClick={()=> setUserInfo({...userInfo, favColor: "lavender"})}>Change to Lavender</button>
            <ComponentC/>
        </div>

    )
}