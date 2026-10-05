
// Work with functions in react.

function Test(){

    const quote = " You can Consistent your jurney"

    const Decorate = {
        color:"blue",
        backgroundColor:"yellow",
        marginLeft:40
    }

    function getName(){
        return "Are you a web developer";
    }

     function Motivate(){
        return "and I hope have a good jurney";
    }

    // Using events in functions in react

    function handleClick(){ // using event in functions
        alert("Button was clicked please click OK")
    }

    return (
        <>
          <h1 style={Decorate}>{getName()} Bilal</h1>
          <h2 style={Decorate}>{quote} {Motivate()} Bilal</h2>
          <button onClick={handleClick} style={{marginLeft:"70px"}}>Click me!</button>
        </>
    )
}

export default Test

