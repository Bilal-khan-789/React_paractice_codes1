// import { useState } from 'react'
 import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Hello from "./Hello"
import Bye from "./Bye"
import How from "./How"
import Doing from "./Doing"
import Csspractice from "./Csspractice"
import Can from "./Can"
import Study from "./Study"
import Func from "./Func"
import Going from "./going"
import Test from"./Test"
import Learning from './Learning'
import photo from './assets/expense image.png'
import Next from './Next'
import Fnc from './Fnc'
import Array from './Array'
import Object from './Object'
import Arrobj from './Arrobj'
import Conditionalrendering from './Conditionalrendering'
import Props from './Props'
import ButtonProp from './Props'


function App() {

  const hobbies = ["Reading","Coading","Traveling","Football"]

  function Message () {
    alert('Hello guys you are click me')
  }

  
  
  return (
    <>
      <h1>I am learning react js That day 2026 this year work</h1>
      
      <h1>Hello Everyone</h1>
      <h1>Learning a web Development</h1>
      {/* <Hello />
      <Bye />
      <How />
      <Doing />
      <Csspractice />
      <Can />
      <Study />
      <Func />  
      <Going />
      <Test />
      <Learning />
      <br></br>
      <img src={reactLogo} />
      <img className='creat' src={photo} />
      <Next /> */}
      <Fnc />
      <Array />
      <Object />
      <Arrobj />
      <Conditionalrendering />
      <Props name='Bilal khan' age={20} city='Bhopal' hobbis={hobbies}/>
      {/* <Props name='Iron Man' age={30} city='Delhi' hobbis={hobbies}/> */}
      <ButtonProp lable="Just click Me!" handleClick={Message} />
      
    </>
  )
}

export default App
