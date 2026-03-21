// import {createSlice} from "@reduxjs/toolkit"
// import { addTask } from "./action"

// const taskInitialState =[]

// export const taskSlice = createSlice({
//     name: "tasks",
//     initialState: taskInitialState,
//     reducers:{
//         addTask:{
//             reducer(state, action){
//                 state.push(action.payload)
//             },
//             prepare(text){
//                 return {
//                     payload: {
//                         id: nanoid(),
//                         text,
//                         completed
//                     }
//                 }
//             }
//         }
//     }
// })

// export const tasksReducer = createProducer(taskInitialState, {
//     [addTask]:(state, action) =>{
//         state.push(action.payload)
//     },
//     [deleteTask]:(state, action) =>{
//         const index = state.filterIndex(task => task.id === action.payload)
//         //return [state.filter (task => task.id === action.payload)]
//     },
//     [toggleCopmplited]:(state, action) =>{
//         for(const task of state){
//             if(task.id === action.payload){
//                 task.completed = !task.completed
//             }
//         }
//     },
// })

import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./operations";
const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchTasks.pending](state) {
      state.isLoading = true;
    },
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTasks.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const tasksReducer = tasksSlice.reducer;
