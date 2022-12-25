const Task = require('../models/tasks');
const asyncWrapper = require('../middleware/async')
const { createCustomeError } = require('../error/custom-error')

const getTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find();
    res.status(200).json({tasks})
})

const createTasks = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})    
})

const getTaskById = asyncWrapper(async (req, res) => {
    const { id: taskId } = req.params
    const task = await Task.findOne({_id: taskId});
    if(!task) {
        return next(createCustomeError(`Task not found ${taskId}`, 404))
    }
    res.status(200).json({task})        
})

const updateTaskById = asyncWrapper(async(req, res) => {
        console.log(req.body);
        const { id: taskId } = req.params
        const task = await Task.findOneAndUpdate({_id: taskId}, req.body, {new: true, runValidators: true});
        if(!task) {
            return next(createCustomeError(`Task not found ${taskId}`, 404))
        }
        res.status(200).json({task})        
})

const deleteTaskById = asyncWrapper(async (req, res) => {
    const { id: taskId } = req.params
    const task = await Task.findOneAndDelete({_id: taskId});
    if(!task) {
        return next(createCustomeError(`Task not found ${taskId}`, 404))
    }
    res.status(200).json({task})        
})

module.exports = {getTasks, createTasks, getTaskById, updateTaskById, deleteTaskById}