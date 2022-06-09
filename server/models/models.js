const mongoose = require("mongoose");

const TodoListSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
  },
  company: {
    type: String,
  },
});

const AppTodo = mongoose.model("todo", TodoListSchema);

module.exports = AppTodo;
