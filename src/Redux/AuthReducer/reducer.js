import * as types from "./actionTypes";
import { loadData,saveData } from "../../utils/accessStorage";
const token = loadData("token")
const initialState = {
    token:token || "",
    isAuth:token ? true : false,
    isLoading:false,
    isError:false
}

export const reducer = (state=initialState, action)=>{
    const {type,payload}=action
    switch(type){
        case types.USER_LOGIN_REQUEST:
            return{...state,isLoading:true,isError:false}
        case types.USER_LOGIN_SUCCESS:
            let newData = saveData("token",payload)
            return{
                ...state,
                isAuth:true,
                token:newData,
                isLoading:false,
                isError:false
            }
        case types.USER_LOGIN_FAILURE:
            return{...state,isLoading:false,isError:true}         
        default:
            return state;
    }
}