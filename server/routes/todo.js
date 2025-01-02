const express = require('express') // calling express
const {
    getTodos,
    getTodo,
    createTodo,
    deleteTodo,
    updateTodo
} = require('../controller/todoController')
const router = express.Router() // create routes

//get
router.get('/', getTodos)

router.get('/:id', getTodo)
// post
router.post('/', createTodo)
// delete
router.delete('/:id', deleteTodo)
// update
router.patch('/:id', updateTodo)

module.exports = router