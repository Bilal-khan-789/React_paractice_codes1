import React from 'react'

function Array() {

    let fruits = ['Apple','Banana','Watermelon','Lichi']

  return (
    <div>
        <h2>Fruit List</h2>
        <ul>
           {fruits.map((fruit,index) => (
            <li>{index} - {fruit}</li>
           ))}
        </ul>
    </div>
  )
}

export default Array