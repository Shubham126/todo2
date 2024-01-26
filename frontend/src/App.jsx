import { useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

function App() {



  return (
    <>
     <CreateTodo />
     <Todos todos = {[
      {
        title: "sfdg",
        description: "akjshfdrg",
        completed: false,
      },
      {
        title: "Go to Gym",
        description: "You should be going to the gym",
        completed: false,
      }
     ]}/>
    </>
  )
}

export default App
