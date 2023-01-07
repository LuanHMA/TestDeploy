import { TodoModel } from "../database/models/todoModel.js";

export const createData = async (req, res) => {
  const { description } = req.body;

  return new TodoModel({
    description: description,
  })
    .save()
    .then((data) => {
      console.log("Todo created with success!");
      res.send(data);
    })
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
    .then(() => {
      console.log("Todo edited with success!");

      TodoModel.find({ _id: _id })
        .then((data) => res.send(data))
        .cacth((error) => console.log("Error retrieving data: " + error));
    })
    .catch((error) => console.log("Error to edit: " + error));
};
export const deleteData = async (req, res) => {
  const { _id } = req.body;

  TodoModel.findByIdAndDelete(_id)
    .then((data) => {
      console.log("Todo deleted with success");
      res.send(data);
    })
    .catch((error) => console.log("Error to delete: " + error));
};
