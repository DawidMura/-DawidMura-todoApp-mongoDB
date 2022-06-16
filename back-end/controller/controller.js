import TodoAppSchema from "../model/todoApp.js";

const getAllTodo = async (req, res) => {
    const todos = await TodoAppSchema.find({});
    res.status(200).send(todos);
}


const getOneTodo = async (req, res) => {
    const _id = req.params.id;
    const findTodo = await TodoAppSchema.findById(_id);
    res.json(findTodo);
}

const addTodo = async (req, res) => {
    // try {
    const newTodo = new TodoAppSchema(req.body)
    console.log(newTodo);
    // if (newTodo.name === req.body.name) {
    //     res.redirect("http://localhost:3000");
    // }
    // else {
    await newTodo.save();
    res.redirect("http://localhost:3000");
    // }
}
//     catch (error) {
//     res.json(error);
// }}

const deleteTodo = async (req, res) => {
    const _id = req.params.id;
    await TodoAppSchema.findByIdAndRemove(_id);
    // res.redirect("http://localhost:3000");
    res.send("todo is deleted!")
}

const updateTodo = async (req, res) => {
    const _id = req.params.id;
    await TodoAppSchema.updateOne({ _id }, req.body);
    res.send("todo is updated");
}


export { getAllTodo, addTodo, deleteTodo, getOneTodo, updateTodo };

