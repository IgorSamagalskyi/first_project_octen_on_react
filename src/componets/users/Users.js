import {getUsers} from '../../services/API'
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import User from './User'

export default function Users(){
    const posts = useSelector(({posts}) => posts);
    const dispatch = useDispatch();
    useEffect(()=>{
        getUsers()
            .then(({data})=> {
                dispatch({
                    type: 'SET_POST',
                    payload: data
                })
            })
    },[])



return(
    <div>
        {
            posts.map(value => <User key={value.id} item={value}/>)
        }
    </div>
);
}