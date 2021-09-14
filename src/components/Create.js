import React, { useState } from 'react'

function Create({ msg, setMsg }) {
  let [input, setInput] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    setMsg([...msg, input])
    setInput('')
  }
  const inputHandler = (e) => {
    setInput(e.target.value)
  }

  return (
    <div>
      <input type="text" onChange={inputHandler} value={input} />
      <button className="btn btn-primary" onClick={submitHandler}>
        search
      </button>
      {/* <p>{msg}</p> */}
      {/* <p>{input}</p> */}
    </div>
  )
}

export default Create
