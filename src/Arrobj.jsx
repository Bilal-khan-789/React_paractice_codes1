import React from 'react'

function Arrobj() {
    const users = [
        {firstName:"Bilal", lastName:"Khan",age:20},
        {firstName:"Salman", lastName:"Ali",age:25},
        {firstName:"Akshay", lastName:"Kumar",age:27}
    ]

    function combineName (user) {
        return user.firstName + " " + user.lastName;
    }

  return (
    <div>
        <h2>Persone detail</h2>
        <ul>
        {users.map( (user,index) => (
            <li>{combineName(user)} is {user.age} years old</li>

        ))}
        </ul>
    </div>
  )
}

export default Arrobj