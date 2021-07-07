import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react'

export default function CountComponent(){
    const counter = useSelector(({counterValue}) => counterValue);
    const dispatch = useDispatch();

return(
    <div className={'position'}>
        <h1>{counter}</h1>
        <button onClick={()=>{
            dispatch({type: 'INC'})
        }
        }>
            +1
        </button>
        <button onClick={()=>{
            dispatch({type: 'DEC'})
        }
        }>
            -1
        </button>
        <button onClick={()=>{
            dispatch({type: 'RESET'})
        }
        }>
            Reset
        </button>

    </div>
);
}