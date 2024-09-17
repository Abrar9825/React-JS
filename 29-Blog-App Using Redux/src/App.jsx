import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import CounterButton from './CounterExample/counter-button'
// import CounterValue from './CounterExample/counter-value'
import AddNewBlog from './blog-app/new-blog'
import BlogList from './blog-app/blog-list'

function App() {

  return (
    <div>
      <h1>Blog List</h1>
      {/* <CounterButton/>
      <CounterValue/> */}

      <BlogList />
      <AddNewBlog />
    </div>
  )
}

export default App
