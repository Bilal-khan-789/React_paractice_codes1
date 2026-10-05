import React from 'react'

// props(properties in react)

// Type 1 of props

function Props(props) { // props is like a object
  return (
    <div>
        <h2>Hello{props.name}</h2>
        <h2>Age : {props.age}</h2>
        
    </div>
  )
}

// export default Props

// Type 2 of Props

// function Props({name,age}) { // props is like a object
//   return (
//     <div>
//         <h2>Hello {name}</h2>
//         <h2>Age : {age}</h2>
        
//     </div>
//   )
// }

// export default Props

// Type 3 of Props

// function Props(props) {  // function Props({name,age,city})
//                         // function Props({name='guest',age=18,city='Unknown'}) set a default value

 
//     const {name,age,city,hobbies} = props
//   return (
//     <div>
//         <h2>Hello {name}</h2>
//         <h2>Age : {age}</h2>
//         <h2>City : {city} </h2>

//         <ul>
//             {hobbies.map((hobby,index) => (
//                 <li key={index}>{hobby}</li>
//             ))}
//         </ul>
        
//     </div>
//   )
// }

// export default Props

// Type 4 of props

// function Props({name,age,city,hobbis}) {
//   return (
//     <div>
//         <h2>Name: {name}</h2>
//         <h2>Age: {age}</h2>
//         <ul>
//             <h2>Hobbyies:</h2>
//             {hobbis.map((hobby,index) => (
//                 <li key={index}>{hobby}</li>
//             ))}
//         </ul>
//     </div>
//   )
// }

// export default Props

// Type 4 of Prop using function

// export default  function ButtonProp ({lable,handleClick}) {
//     return <button onClick={handleClick}>{lable}</button>


// }



