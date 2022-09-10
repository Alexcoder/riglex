import {GET_1338, CREATE_1338 } from "../../constants/ActionTypes";


export const getData = (id) => async(dispatch)=> {
    try{
        dispatch({type: GET_1338 , payload: id })
    }catch(error){
      console.log(error);
    }
}
//---------------------------------------------------------------------------------

export const createData = (wellDataFromDispatch) => async(dispatch)=>{
  try{
    dispatch({type: CREATE_1338, payload: wellDataFromDispatch })
} catch(error){
     console.log(error)
    }
  } 
//---------------------------------------------------------------------------------


