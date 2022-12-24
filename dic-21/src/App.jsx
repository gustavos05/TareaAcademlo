import { useState,useEffect } from 'react'
import './App.css'
import Card from './Component/Card'
import users from "./Component/users.json"
function App() {
  const colors = ["#FDB137", "#785964", "#6D6875", "#B5838D", "#E5989B", "#7E9680", "#C73866", "#FFB4A2", "#79616F", "#EAB595" ]
const [userIndex,setUserIndex] = useState(0)
 function mathRamdon(max){
  return ( Math.floor(Math.random()*max))
 }
 
useEffect(()=>{
  let randomColor=colors[mathRamdon(colors.length)]
  document.body.style =`background-color:${randomColor};color:${randomColor}`
},[userIndex])
  return (
    <div className="App">
     <Card usersData={users[userIndex]}></Card>
     <div className='buttonContainer'>
      <button onClick={()=>setUserIndex(mathRamdon(users.length))}><i class="fa-solid fa-shuffle"></i></button>
      </div>
    </div>
  )
}

export default App
