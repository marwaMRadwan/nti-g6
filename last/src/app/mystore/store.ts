// state reducer action
import {Action} from '@ngrx/store'

interface CustomAction{
    type:string
    payload:number
}
let myState ={
    c : 0
}

export function myReducer(state = myState, action:CustomAction){
    if(action.type=="add"){
        return {c : state.c+ action.payload}
    }
    else return state
}