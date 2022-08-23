import React , {useState, useEffect}  from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {createPost , updatePost} from '../../redux/posts/actionCreators'
import './form.css'
import FileBase from 'react-file-base64'

const Form= ({currentId,setCurrentId}) => {
  
  const [postData,setPostData] = useState({
    title:"", message:"", creator:"", tags:"", selectedFile:""
  })
  const [err,setErr] = useState('')
  const post = useSelector((state)=>currentId ? state.posts.find((p)=>p._id===currentId):null)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(post) setPostData(post)
  },[post])

  const handleSubmit =(e) =>{
    e.preventDefault()
    if(!postData.title || !postData.message || !postData.creator || !postData.tags || !postData.selectedFile){
      setErr('You have to fill all your informations')  
      setPostData({
        title:"", message:"", creator:"", tags:"", selectedFile:""
      })
      return
    }
    if(currentId){
      dispatch(updatePost(currentId,postData))
      console.log(postData);
    }else{
      dispatch(createPost(postData))
    }
    
    handleClear()
    
  }

  const handleClear=()=>{
    setErr('')
    setCurrentId(null)
    setPostData({
      title:"", message:"", creator:"", tags:"", selectedFile:""
    })

  }
  return (
    <div  className='form' >
       <h1>Creating Memory</h1>
       <p>{err}</p>
       <form onSubmit={handleSubmit} >
        <input type="text" placeholder='title'
         value={postData.title}
         onChange={(e)=>setPostData({...postData,title:e.target.value})} />
        <input type="text" placeholder='message'
         value={postData.message}
         onChange={(e)=>setPostData({...postData,message:e.target.value})}  />
        <input type="text" placeholder='creator'
         value={postData.creator}
         onChange={(e)=>setPostData({...postData,creator:e.target.value})}/>
        <input type="text" placeholder='tags'
         value={postData.tags}
         onChange={(e)=>setPostData({...postData,tags:e.target.value.split(',')})}   />
        <FileBase type='file'
        multiple={false}
        onDone ={({base64})=>{setPostData({...postData,selectedFile:base64})}} />
        <button className='btn btn-blue' >Submit</button>
       </form>
       <button className='btn btn-red' onClick={handleClear} >Clear</button>
    </div>
  )
}

export default Form