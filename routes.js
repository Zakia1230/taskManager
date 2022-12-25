const express = require('express')
const router = express.Router()
const { getTasks, createTasks, getTaskById, updateTaskById, deleteTaskById } = require('./controller/tasks')

router.get('/tasks', getTasks)
router.post('/tasks', createTasks)
router.get('/tasks/:id', getTaskById)
router.patch('/tasks/:id', updateTaskById)
router.delete('/tasks/:id', deleteTaskById)


module.exports = router;