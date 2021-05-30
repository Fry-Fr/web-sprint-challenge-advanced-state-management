import axios from 'axios';

export const FETCH_SMURF =  "FETCH_SMURF";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_ERROR = "GET_ERROR";
export const ADD_SMURF = "ADD_SMURF";

export const fetchSmurf = ()=>(dispatch)=>{
    dispatch({type: FETCH_SMURF})
    axios.get('http://localhost:3333/smurfs')
    .then(res=>{
        console.log(res)
        dispatch({type: GET_SUCCESS, payload: res.data})
    })
    .catch(err=>{
        console.log(err)
    })
}
export const addSmurf = (data)=>{
    return { type: ADD_SMURF, payload: data }
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.