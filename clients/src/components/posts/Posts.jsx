import React from 'react'
import { useSelector } from 'react-redux'
import './posts.css'
import Post from './Post/Post'


const Posts = ({currentId ,setCurrentId}) => {
  const posts = useSelector((state)=>state.posts)
  return (
    <div className='posts' >
        {posts.map((post)=>{
          return(
            <div  className='flex-posts' key={Math.random()}>
              <Post post={post} currentId ={currentId} setCurrentId={setCurrentId} />
            </div>
          )
        })}
    </div>
  )
}

export default Posts