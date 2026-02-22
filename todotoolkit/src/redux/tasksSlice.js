import {createSlice} from "@reduxjs/toolkit"
import { addTask } from "./action"

const taskInitialState =[]

export const taskSlice = createSlice({
    name: "tasks",
    initialState: taskInitialState,
    reducers:{
        addTask:{
            reducer(state, action){
                state.push(action.payload)
            },
            prepare(text){
                return {
                    payload: {
                        id: nanoid(),
                        text,
                        completed
                    }
                }
            }
        }
    }
})

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