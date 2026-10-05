import React from 'react'
import Doing from './Doing'

// conditional rendering in react

function Conditionalrendering() {

    // method 1

    // const islogdin = true;

    // return (
    //     <div>
    //         {islogdin ? <h3>"islogedin is a true"</h3> : <h3>"islogedin is a false"</h3>}
    //     </div>
    // )

    // method 2
    let islogdin = true
    
    
    let message;

    if(islogdin) {
        message = <h2>Welcome User!</h2>
    } else{
        message = <h2>Please login </h2>
    }
    return <div>{message}</div>

    // method 3

    // const isVisible = true

    // const visibility = isVisible ? 'visible' : 'unvisible'

    // return (
    //     <div>
    //         <h1 className={visibility}>Conditionla Rendering</h1>
    //         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, odit.</p>
    //     </div>
    // )

    // method 4 :- componenet loading by condition

    // const islogdin = true

    // if(islogdin) {
    //     return <Can />
    // } else {
    //     return <Doing />
    // }
  
}

export default Conditionalrendering