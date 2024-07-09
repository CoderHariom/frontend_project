import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

export default function Controls() {
    const dispatch = useDispatch();
    const inputValue = useRef();

    const increment = () => {
        dispatch({
            type: "INCREMENT"
        })
    }
    const decrement = () => {
        dispatch({
            type: "DECREMENT"
        })
    }

    const addInput = () => {

        dispatch({
            type: "ADD",
            payload: { name: inputValue.current.value }
        })
    }

    const subInput = () => {

        dispatch({
            type: "SUB",
            payload: { name: inputValue.current.value }
        })
    }

    const privacyHandle = () => {

        dispatch({
            type: "PRI",
           
        })
    }

    return (
        <div className="col-lg-6 mx-auto">

            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-primary" onClick={increment}>+1</button>

                <button type="button" className="btn btn-success" onClick={decrement}>-1</button>

                <button type="button" className="btn btn-warning" onClick={privacyHandle}>Privacy</button>

                <input type='text' placeholder='type number' ref={inputValue} />
                <button type="button" className="btn btn-info" onClick={addInput}>ADD</button>
                <button type="button" className="btn btn-danger" onClick={subInput}>SUB</button>

            </div>
        </div>
    )
}
