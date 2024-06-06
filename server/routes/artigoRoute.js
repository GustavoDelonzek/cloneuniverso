import express from 'express';
import {
    handleAdd,
    getArtigos,
    updateArtigo,
    deleteArtigo,
    getNoticias,
    getAstros
} from "../productController.js";
const router = express.Router();
// Rotas para os produtos
router.post('/add', handleAdd);
router.get('/', getArtigos);
router.put('/:id', updateArtigo);
router.delete('/:id', deleteArtigo);
router.get("/noticias", getNoticias)
router.get("/astros", getAstros);
export default router;