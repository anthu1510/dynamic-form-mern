import { Router } from "express";
import * as fromController from "../controllers/form.controller";

const router = Router();

router.post("/", fromController.createForm);
router.get("/", fromController.getAllForm);
router.get("/:id", fromController.getFormById);
router.put("/:id", fromController.updateForm);
router.delete("/:id", fromController.deleteForm);

export default router;
