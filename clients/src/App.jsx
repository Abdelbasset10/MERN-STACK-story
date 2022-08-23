import React , {useEffect , useState} from 'react';
import './App.css';
import {useDispatch } from 'react-redux'
import {fetchAll} from './redux/posts/actionCreators'
import Header from './components/header/Header'
import Posts from './components/posts/Posts'
import Form from './components/form/Form'


function App() {
  const dispatch = useDispatch()
  const [currentId,setCurrentId]=useState(null)
  useEffect(()=>{
      dispatch(fetchAll())
  },[currentId,dispatch])
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Posts currentId ={currentId} setCurrentId={setCurrentId} />
        <Form  currentId ={currentId} setCurrentId={setCurrentId} />

      </div>
    </div>
  );
}

export default App;
