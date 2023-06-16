import React,{useState} from 'react'
import Header from './Header'
import './App.css'

const App = () => {
  const [num, setNum]=useState(1)
  function Inc(n){
    setNum( num + n)

  }
  function Dec(n){
    setNum(num - n)
  }
  return (
    <>
    <div className='app'>
    <Header />

    <div className='main'>
    <h1>{num}</h1>
    <div className='buttons'>
<button className='btn' onClick={()=>Inc(1)}>Increament</button>
<button className='btn' onClick={()=>Dec(1)}>Decreament</button>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default App