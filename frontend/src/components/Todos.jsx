// import React from 'react'

const Todos = ({todos}) => { // either we neeeed to pass the props or the todos itself using object destructuring 
  return (  

    // *below is the clasic and static way to create and render a todo, but we needed some Dynamic ways
    // <div>
    // <h1> Go to Gym</h1>
    // <h2> You need to go to the gym </h2>
    // <button> Mark as completed </button>
    // </div> 

    // given that we have an array, and we need to render them one by one 

    <div>
    {todos.map(function(todo){
        return <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.completed == true} ? "completed" : "mark as complete"</button>
        </div>
    })}
    </div>

  )
}

export default Todos
