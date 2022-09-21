const createTodo = async(req, res) => {
    res.send(`createTodo`)
}

const deleteTodo = async(req, res) => {
    res.send(`deleteJob`)
}

const getAllTodos = async(req, res) => {
    res.send(`getAllJobs`)
}

const updateTodo = async(req, res) => {
    res.send(`updateJobs`)
}

const showStats = async(req, res) => {
    res.send(`showStats`)
}

export {createTodo, deleteTodo, getAllTodos, updateTodo, showStats}