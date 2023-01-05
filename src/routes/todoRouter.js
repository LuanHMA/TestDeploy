import { Router } from "express";
import {
  createData,
  getData,
  updateData,
  deleteData,
} from "../controller/todoController.js";

const router = Router();

router.get("/", getData);
router.post("/", createData);
router.put("/", updateData);
router.delete("/", deleteData);

export const todoRouter = router;
