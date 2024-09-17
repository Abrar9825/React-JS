import React from 'react'
import { useDispatch } from 'react-redux'
import { handleIncressCountAction } from '../store/slices/counter'

const CounterButton = () => {
    const dispatch = useDispatch()

    function handleClick() {
        dispatch(handleIncressCountAction({
            id: 101,
            name: 'Abrar Shaikh'
        }))
    }
    return (
        <button
            onClick={handleClick}
        >Incress Counte</button>
    )
}

export default CounterButton