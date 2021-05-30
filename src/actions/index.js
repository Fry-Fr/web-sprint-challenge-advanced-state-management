import axios from 'axios';

export const FETCH_SMURF =  "FETCH_SMURF";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_ERROR = "GET_ERROR";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERROR = "SET_ERROR";

export const fetchSmurf = ()=>(dispatch)=>{
    dispatch({type: FETCH_SMURF})
    axios.get('http://localhost:3333/smurfs')
    .then(res=>{
        setTimeout(()=>{
            dispatch({type: GET_SUCCESS, payload: res.data})
        },1000)
    })
    .catch(err=>{
        console.error(err)
        dispatch({type: GET_ERROR, payload: "Network Error!"})
    })
}
export const addSmurf = (formData)=>{
    return { type: ADD_SMURF, payload: formData }
}
export const setError = (error)=>{
    return { type: SET_ERROR, payload: error}
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.