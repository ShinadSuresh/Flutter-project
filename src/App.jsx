import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(prouduct)
  const prouduct = ('https://fakestoreapi.com/products')
  
  useEffect (() => {
      fetch(prouduct)
      .then((res => res.json))
      .then((data) => (
          setData(data)
      ))
  })
     
  return (
    <div className='first'>
    <h1 > products </h1>
        {data.map((itm) => (
          <div className='second'>
          <img src='https://www.digitaltrends.com/wp-content/uploads/2022/08/iPhone-SE-2022-Starlight-Back-in-Hand.jpg?p=1'/>
          <h3>Title : laptops</h3>
          <h5>Price : $125</h5>
        </div>
        ))}

      
    </div>
  )
}

export default App
