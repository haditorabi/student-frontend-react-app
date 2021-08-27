import React from 'react'
import './InputForm.css';
const InputForm = ({ filterFunc, type }) => {
  return (
    <input id={`${type}-input`} placeholder={`Search by ${type}`} onChange={event => filterFunc(event.target.value.toLowerCase().trim().toString())} />
  )
}

export default InputForm
