import React from 'react'
import './post.css'
import { TbAntennaBars1 } from 'react-icons/tb';
import moment from 'moment'
import {AiFillLike , AiFillDelete} from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import {deletePost , likePost} from '../../../redux/posts/actionCreators'

const Post = ({post,currentId,setCurrentId}) => {
    const dispatch = useDispatch()
     const getId = () =>{
        setCurrentId(post._id)
        console.log(currentId);
     }
  return (
    <div className='post'>
        <div className='post-up'>
            <div className='creator' >
                <h2>{post.title}</h2>
                <p>{moment(post.createdAt).fromNow()}</p>
            </div>
            <TbAntennaBars1 className='icon icon-pos'
            onClick={getId}/>
            <img src={post.selectedFile} alt="aid" />

        </div>
        <div className='post-down' >
            <p>{post.tags.map((tag)=>`#${tag} `)}</p>
            <h2>{post.message}</h2>
            <div className='social-div'>
                <div className='like-div' onClick={()=> dispatch(likePost(post._id))} >
                    <AiFillLike className='icon-blue'  />
                    <p> Like {post.likeCount} </p>

                </div>
                <div className='delete-div' onClick={()=>dispatch(deletePost(post._id))}  >
                    <AiFillDelete  className='icon-blue'  />
                    <p>Delete</p>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Post