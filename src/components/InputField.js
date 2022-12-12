import React, { useRef, useState, useEffect } from 'react';
import '../styles/App.css';

//complete the following using forward refs concept 

const InputField = React.forwardRef((prop, ref) => {
  const handleChange = (event) => {
    prop.setValue(event.target.value)
  }
  return (
    <div>
      <input id="input" type="text" ref={ref} value={undefined} onChange={handleChange} />
    </div>
  )
})
export default InputField;