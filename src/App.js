import {useReducer} from "react";

function reduce(state, action) {
    switch (action.type){
        case 'inc A':
            return{...state, a: state.a + action.payload};
        case 'inc B':
            return{...state, b: state.b + action.payload};
        default:
            return {...state};
    }
}

export default function App() {

    let [state, dispatch] = useReducer(reduce, {a: 0, b: 0})
    console.log(state)


    return (
        <div>
            <button onClick={() => dispatch({type: 'inc A', payload: 1})}>click me A</button>
            <button onClick={() => dispatch({type: 'inc B', payload: 2})}>click me B</button>

        </div>
    );
}