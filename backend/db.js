const mongoose = require("mongoose");

// Todo{
//     title: string,
//     description: string,
//     completed: boolean,
// }

// mongo url handle
mongoose.connect("mongodb+srv://chromaticshubham26:shubham26@cluster0.ufzfhxj.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}