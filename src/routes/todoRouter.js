import { Router } from "express";
import {
  createData,
  getData,
  updateData,
  deleteData,
} from "../controller/todoController.js";

const router = Router();

router.get("/", getData);
router.post("/save", createData);
router.put("/edit", updateData);
router.delete("/delete", deleteData);

export const todoRouter = router;
