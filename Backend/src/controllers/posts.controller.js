import { getPostsModel, createPostModel, likePostModel, deletePostModel } from "../models/postsmodel.js";

export const getAllPosts = async (req, res) => {
  try {
    const posts = await getPostsModel();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los posts" });
  }
};

export const createPost = async (req, res) => {
  try {
    const { titulo, url, descripcion } = req.body;
    if (!titulo || !url || !descripcion) {
      return res.status(400).json({ error: "Faltan datos" });
    }
    const img = url;
    const newPost = await createPostModel(titulo, img, descripcion);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el post" });
  }
};

export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPost = await likePostModel(id);
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: "Error al dar like" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await deletePostModel(id);
    res.status(200).json(deletedPost);
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el post" });
  }
};
