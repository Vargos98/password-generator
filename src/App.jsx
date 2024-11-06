import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  
  
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  
  
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])




  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  
  
  
  
  
  return (

    <div className='w-full bg-zinc-700'>
      <div className="max-w-screen-lg h-screen mx-auto shadow-md rounded-lg px-4 py-3 bg-zinc-900 text-orange-500">
        <h1 className='text-white text-center my-3 text-4xl opacity-80 font-bold uppercase mb-20'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 items-center justify-center flex-wrap">
          <input
            type="text"
            value={password}
            className="outline-none w-1/2 px-4 py-2 rounded-md *:"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-4 py-2 shrink-0 rounded-md'
          >copy</button>

        </div>
        <div className='flex  gap-12 mt-10 items-center justify-center  flex-wrap text-2xl'>
          <div className='flex items-center gap-x-2'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer text-1xl'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>


          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>



          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App