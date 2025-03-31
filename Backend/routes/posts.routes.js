import { Router } from "express";
import { getAllPosts, createPost, likePost, deletePost } from "../src/controllers/posts.controller.js";

const router = Router();

router.get("/posts", getAllPosts);
router.post("/posts", createPost);
router.put("/posts/like/:id", likePost);
router.delete("/posts/:id", deletePost);

export default router;
