import { act, useReducer } from "react"
const intialState = {
    showTextFlag: false,
    ChangeStyletTextFlag: false
}
const SHOW_TEXT = 'SHOW_TEXT';
const HIDE_TEXT = 'HIDE_TEXT';
const CHANGE_TEXT_STYLE = 'CHANGE_TEXT_STYLE';

function reducer(state, action) {
    switch (action.type) {
        case HIDE_TEXT:
            return {
                ...state,
                showTextFlag: false
            }

        case SHOW_TEXT:
            return {
                ...state,
                showTextFlag: true
            }

        case CHANGE_TEXT_STYLE:
            return {
                ...state,
                ChangeStyletTextFlag: !state.ChangeStyletTextFlag
            }

        default:
            return state;
    }
}
export default function UsedReducerExample(params) {
    const [state, dispatch] = useReducer(reducer, intialState)
    console.log(state);

    return (
        <div>
            {
                state.showTextFlag ?
                    <h3 style={{ backgroundColor: state.ChangeStyletTextFlag ? "red" : "green" }}>User Reducer Hook Example</h3>
                    : null
            }
            <button onClick={() => dispatch({ type: HIDE_TEXT })}>Hide Text</button>
            <button onClick={() => dispatch({ type: SHOW_TEXT })}>Show Text</button>
            <button onClick={() => dispatch({ type: CHANGE_TEXT_STYLE })}>Chnaged Text Style Text</button>
        </div >
    )
}