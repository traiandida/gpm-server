import { Router } from "express";
import { getPath } from "../controllers/tree.controller";

const router = Router()

router.get('*', getPath)

export default router