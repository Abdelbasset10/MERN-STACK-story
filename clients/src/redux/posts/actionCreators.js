import * as api from '../../api'
import { FETCH_ALL, CREATE_POST , UPDATE_POST,DELETE_POST,LIKE_POST } from "./actionTypes";

export const fetchAll = () => async (dispatch)=>{
    try {
        const {data} =  await api.fetchAllPosts()
        dispatch({
            type:FETCH_ALL,
            payload:data
        })
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (newPost) => async (dispatch)=>{
    try {
        const {data} = await api.createPost(newPost)
        dispatch({
            type:CREATE_POST,
            payload:data
        })
    } catch (error) {
        
    }
}

export const updatePost = (id,updated)=> async(dispatch)=>{
    try {
        const {data} = await api.updatePost(id,updated)
        dispatch({
            type:UPDATE_POST,
            payload:data
        })
    } catch (error) {
        console.log(error);
    }
}


export const deletePost =(idPost) => async (dispatch)=>{
    try {
        await api.deletePost(idPost)
        dispatch ({
            type:DELETE_POST,
            payload:idPost
        })
    } catch (error) {
        
    }
}

export const likePost = (id) => async (dispatch)=>{
    try {
        const {data} = await api.likePost(id)
        dispatch({
            type:LIKE_POST,
            payload:data
        })
    } catch (error) {
        console.log(error);
    }

}


