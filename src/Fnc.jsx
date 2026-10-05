import React from 'react'

// functions in react

function Fnc() {

    function getName() {
        return "Bilal khan";
    }

    const setName = (yourname) => {
      return yourname;
    }

    let handleClick = () => {
      alert("Button was clicked")
    }

    

    let name1 = 'Khanboy'
    let name2 = 'mansuri boy'

  return (
    <div>
        <p>hello {getName()} how are you</p>
        <p>hello {setName(name1)}</p>
        <p>hello {setName(name2)}</p>
        <button onClick={handleClick}>Click Me!</button>
        <br></br>
        <button onClick={()=> alert('Button2 was clicked!')}></button>

    </div>
  )
}

export default Fnc