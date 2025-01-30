const Todo = require('../models/todoList')
const mongoose = require('mongoose')

// get all todo
const getTodos = async (req, res) => {
    const todos = await Todo.find({}).sort({createdAt: -1})
    res.status(200).json(todos)
}

// get a single todo
const getTodo = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No task"})
    }

    const todo = await Todo.findById(id)

    if (!todo) {
        return res.status(404).json({error: "No task"})
    }

    res.status(200).json(todo)
}

// crete a new todo

const createTodo = async (req, res) => {
    const {title, task} = req.body
  
    try {
        const tasks = await Todo.create({title, task})
        res.status(200).json(tasks)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}
// delete a todo
const deleteTodo = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No task"})
    }
    const todo = await Todo.findOneAndDelete({_id: id})
    if(!todo) {
        return res.status(404).json({error: "No task"})
    }

    res.status(200).json(todo)
}
// update a todo
const updateTodo = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No task"})
    }
    const todo = await Todo.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if(!todo) {
        return res.status(404).json({error: "No task"})
    }
    res.status(200).json(todo)
}


module.exports = {
    getTodos, 
    getTodo, 
    createTodo,
    deleteTodo,
    updateTodo
}