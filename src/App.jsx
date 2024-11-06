import React, { useState } from 'react'

const App = () => {
  const [length, setLength] = useState(9);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = ()=>{
    
  }



  return (
    <div className='w-full bg-zinc-700'>
      <div className='max-w-screen-lg bg-zinc-900 m-auto h-screen'>
      <h1 className='text-4xl underline-offset-4 font-semibold text-center text-white py-20 uppercase opacity-80'>Password Generator</h1>
    </div>
    </div>
    
  )
}

export default App