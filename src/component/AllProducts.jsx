import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AllProducts = () => {
    const [data, setData] = useState([])
  const prouduct = ('https://fakestoreapi.com/products')
  
  useEffect (() => {
      fetch(prouduct)
      .then((res => res.json()))
      .then((data) => (setData(data)))
      .catch((error) => console.error('Error:', error ))
  },[])
  
  return (
    <div>
    <h1> All Products </h1>
    <div style={{display:'flex', gap:'1rem', flexWrap:'wrap', alignItems:'center', padding:'6rem'}}>
    {data.map((itm) => (
        <Card key={itm.id} style={{ width: '18rem', padding: '1rem'}}>
      <Card.Img variant="top" src={itm.image} />
      <Card.Body>
        <Card.Title>{itm.title}</Card.Title>
        <Card.Text>
          {itm.category}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    ))}
    </div>
    
    </div>
  )
}

export default AllProducts