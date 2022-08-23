import axios from 'axios'
const url = 'http://localhost:5000/posts'

export const fetchAllPosts = () => axios.get(url)
export const createPost = (newPost)=> axios.post(url,newPost)
export const deletePost = (idPost)=> axios.delete(`${url}/${idPost}`)
export const updatePost = (id,updated)=> axios.patch(`${url}/${id}`,updated)
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)