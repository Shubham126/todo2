// import React from 'react'

const CreateTodo = () => {
  return (
    // react query 
    // this will help us get rid from document.getElementById 
    <div>
      <input id = "title" style = {{
        padding: 10,
        margin: 10,
      }} type = "text" placeholder='title'></input> <br />

      <input id = "desc" style = {{
        padding: 10,
        margin: 10,
      }} type = "text" placeholder = "description"></input> <br />

      <button style = {{
        padding: 10,
        margin: 10,
      }} onClick = {() => {
        fetch("http://localhost:3000/todos", {
            method: "POST",
            body: {
                title: document.getElementById("title").innerHTML,
                description: document.getElementById("desc").innerHTML
            }
        }
        .then(async function(res){
            const json = await res.json();
            alert("Todo Added");
        }))
      }}> Add a todo </button>
    </div>
  )
}

export default CreateTodo
