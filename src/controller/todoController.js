import { TodoModel } from "../database/models/todoModel.js";

export const createData = async (req, res) => {
  const { description, done } = req.body;

  return new TodoModel({
    description: description,
    done: done,
  })
    .save()
    .then(() => console.log("Todo created with success!"))
    .catch((error) => console.log("Error to creating todo: " + error));
};
export const getData = async (req, res) => {
  TodoModel.find()
    .then((data) => res.json(data))
    .catch((error) => console.log(error));
};

export const updateData = async (req, res) => {
  const { _id, description, done } = req.body;

  TodoModel.findByIdAndUpdate(_id, { description: description, done: done })
    .then(() => console.log("Edited with success"))
    .catch((error) => console.log("Error to edit: " + error));
};
export const deleteData = async (req, res) => {
  const { _id } = req.body;

  TodoModel.findByIdAndDelete({ _id: id })
    .then(() => console.log("Deleted with success"))
    .catch((error) => console.log("Error to delete: " + error));
};
