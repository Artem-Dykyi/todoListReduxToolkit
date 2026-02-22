import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const addTask = createAction("task/addTask", text =>{
    return {
        payload: {
            id: nanoid(),
            text,
            completed
        }
    }
})
export const deleteTask = createAction("task/deleteTask", id =>{
    return {
        payload: {
            id
        }
    }
})
export const toggleCopmplited = createAction("task/toggleCopmplited", id =>{
return {
        payload: {
            id
        }
    }
})
export const setStatusFilter = createAction("task/setStatusFilter", filter =>{
    return {
        payload: {
            filter
        }
    }
})
