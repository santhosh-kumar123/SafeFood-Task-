import React, { useState } from 'react'

const UseForm = (details) => {
    const [values, setValues] = useState(details)
     let handleChange = e => {
       const { name, value } = e.target;
       setValues({
         ...values,
         [name]: value,
       });
     };
  return [
      values,
      setValues,
      handleChange
  ]
}

export default UseForm