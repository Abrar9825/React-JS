import { useState } from 'react'
import './App.css'
import RecipeList from './pages/recipes'
import CommentsList from './pages/comments'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'

function App() {
  // hooks
  const navigate = useNavigate()
  return (
    <div>
      <h1>React Routing And Hooks</h1>
      <Link to={'recipse-list'}>AlterNative Way to Nevigate via text</Link>
      <Link to={'comments-list'}>AlterNative Way to Nevigate via text</Link>
      <button onClick={() => navigate('recipse-list')}>Navigate to Recipe List Page</button>
      <button onClick={() => navigate('comments-list')}>Navigate to Comments List Page</button>
      <Routes>
        <Route path='/recipse-list' element={<RecipeList />}></Route>
        <Route path='/comments-list' element={<CommentsList />}></Route>
      </Routes>

    </div>
  )

}

export default App
