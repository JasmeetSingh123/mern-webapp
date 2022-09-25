
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [foodName,setFoodName]=useState("")
  const [days,setDays]=useState(0)
  const [foodList,setFoodList]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:3001/read").then((response)=>{
      setFoodList(response.data)
    })
  },[])

  const addToList=()=>{
    axios.post("http://localhost:3001/insert",{
      foodName:foodName,
      days:days,
    })
  }

  return (
    <div className="App">
     <h1> CRUD app with MERN</h1> 
      <label>food name:</label>
      <input type="text"
      onChange={(event)=>{setFoodName(event.target.value)}} />
      <label>days:</label>
      <input type="number"
      onChange={(event)=>{setDays(event.target.value)}} />
      <button onClick={addToList}> add to list </button>

      <h1>Food List</h1>
      {foodList.map((val,key)=>{
        return <div key={key}><h1>{val.foodName}  {val.daysSinceIAte}</h1></div>
      })}
    </div>

  );
}

export default App;
