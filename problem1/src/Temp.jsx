import React from 'react'

const Temp = () => {
    const handleClick = () => {
        document.querySelector('button').innerText = 'Submitted';
    }
  return (
    
    <div>
      <input type="date" name="date1" id="date1" />
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Temp
