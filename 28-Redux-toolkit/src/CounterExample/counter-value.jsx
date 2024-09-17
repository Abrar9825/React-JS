import React from 'react'
import { useSelector } from 'react-redux'

function CounterValue() {
  const state = useSelector((state) => state)
  const { countValue } = state
  console.log(countValue);


  return (
    <p>Counter Value is {countValue} </p>
  )
}

export default CounterValue