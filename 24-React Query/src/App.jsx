import { useState } from 'react'
import './App.css'
import RecipeList from './pages/recipes'
import CommentsList from './pages/comments'
import { Link, Route, Routes, useNavigate, useRoutes } from 'react-router-dom'
import RecipeDetailsPage from './pages/recipe-details'
import NotFoundPage from './pages/not-found'
import Layout from './components/layout'
import ReactHooksForm from './pages/react-hook-form'
import Hooksref from './components/hooks/ref'
import CallbackHooks from './components/hooks/callback'
import MemoHooks from './components/hooks/memo'
import Reactquery from './pages/react-Query'


function CustomRoutes() {
  const element = useRoutes([
    {
      path: '/', element: <Layout />,
      children: [

        { path: 'recipse-list', element: <RecipeList /> },
        { path: 'recipse-list/:id', element: <RecipeDetailsPage /> },
        { path: 'comments-list', element: <CommentsList /> },

      ]

    }, {
      path: '*', element: <NotFoundPage />
    },
    {
      path: '/react-hook-form', element: <ReactHooksForm />
    },
    {
      path: '/ref', element: <Hooksref />
    },
    {
      path: '/memo', element: <MemoHooks />
    },
    {
      path: '/callback', element: <CallbackHooks />
    },
    {
      path: '/reactquery', element: <Reactquery />
    }

  ])
  return element
}
function App() {
  // hooks
  const navigate = useNavigate()
  return (
    <div>
      {/* <h1>React Routing And Hooks</h1>

      <Link to={'recipse-list'}>AlterNative Way to Nevigate via text recipse-list </Link>
      <br />
      <Link to={'comments-list'}>AlterNative Way to Nevigate via text comments-list</Link>
      <br />
      <button onClick={() => navigate('/recipse-list')}>Navigate to Recipe List Page</button>
      <button onClick={() => navigate('/comments-list')}>Navigate to Comments List Page</button> */}
      {/* <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='recipse-list' element={<RecipeList />}></Route>
          <Route path='comments-list' element={<CommentsList />}></Route>
          <Route path='recipse-list/:id' element={<RecipeDetailsPage />}></Route>
        </Route>

        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes> */}


      <CustomRoutes />

    </div>
  )

}

export default App
