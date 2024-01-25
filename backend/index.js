// write a express boiler plate code
// with express.json() middleware

const express = require('express');
const { createTodo } = require('./types');
const app = express()
const port = 3000

//body{
    // title: string;
    // description: string;
//}

app.use(express.json());

app.post('/todos', (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if(!parsedPayload){
    res.status(411).json({
      msg: "You have sent the wrong input"
    })
    return;
  }
  //put it in mongodb database
  
  
})
app.get('/todos', (req, res) => {
  
})
app.put('/completed', (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.sadeParse(updatePayload)
  if(!parsedPayload.success){
    res.status(411).json({
      msg: "You have sent the wrong inputs"
    })

    return;
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})