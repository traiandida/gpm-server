import { Router } from "express";
import { getPath, getTree } from "../controllers/tree.controller";

const router = Router()

router.get('/', getTree)
router.get('/:path', getPath)


export default router