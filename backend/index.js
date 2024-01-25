// write a express boiler plate code
// with express.json() middleware

const express = require('express');
const { createTodo } = require('./types');
const { todo } = require('./db');
const app = express()
const port = 3000

//body{
    // title: string;
    // description: string;
//}

app.use(express.json());

app.post('/todos', async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if(!parsedPayload){
    res.status(411).json({
      msg: "You have sent the wrong input"
    })
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  })

  res.json({
    msg: "Todo created"
  })
  
  
})
app.get('/todos', async (req, res) => {
  const todos = await todo.find({}); // if we try to log this, this will get logged as a promise 

  res.json({
    todos
  })
})
app.put('/completed', async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.sadeParse(updatePayload)
  if(!parsedPayload.success){
    res.status(411).json({
      msg: "You have sent the wrong inputs"
    })

    return;
  }

  await todo.update({
    _id: req.body.id
  },{
    completed: true,
  })
  res.json({
    msg: "Todo marked as completed"
})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})