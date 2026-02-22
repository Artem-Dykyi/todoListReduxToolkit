import { addTask, deleteTask, toggleCopmplited, setStatusFilter } from "./action"
import {createProducer} from "@reduxjs/toolkit"
import { statusFilter } from "./constants"

const taskInitialState =[]
const filterInitialState ={
   status:statusFilter.all
}

export const tasksReducer = createProducer(taskInitialState, {
    [addTask]:(state, action) =>{
        state.push(action.payload)
    },
    [deleteTask]:(state, action) =>{
        const index = state.filterIndex(task => task.id === action.payload)
        //return [state.filter (task => task.id === action.payload)]
    },
    [toggleCopmplited]:(state, action) =>{
        for(const task of state){
            if(task.id === action.payload){
                task.completed = !task.completed
            }
        }
    },
})

export const filterReducer = cre