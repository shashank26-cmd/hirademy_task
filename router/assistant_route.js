import { Router } from "express";
import { createAssistant, deleteAssistantById, getAssistantById, updateAssistantById } from "../controller/assistant_controller.js";
const router=Router();
router.post('/createAssistant',createAssistant)
router.get("/profile/:id",getAssistantById)
router.delete("/delete/:id",deleteAssistantById)
router.put("/update/:id", updateAssistantById);

export default router;