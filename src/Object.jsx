import React from 'react'

function Object() {

    let userInfo = {
        FirstName : "Bilal",
        LastName : "Khan",
        Course : 'BCA',
        Age : 20        
    }

    function combineName (userInfo) {
        return userInfo.FirstName + " " + userInfo.LastName
    }

    

  return (
    <div>
        <h2>Person Details</h2>
        {/* <p>FirstName : {userInfo.FirstName}</p>
        <p>LastName : {userInfo.LastName}</p> */}
        <p>Full Name : {combineName(userInfo)}</p>
        <p>Course : {userInfo.Course}</p>
        <p>Age : {userInfo.Age}</p>
    </div>
  )
}

export default Object