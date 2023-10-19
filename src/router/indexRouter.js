import { Router } from 'express';

import productRouter from './productsRouter.js';
import cartRouter from './carts.js';
import { emitFromApi } from '../socket.js';
import ProductManager from '../ProductManager.js';

const router = Router();
const productManager = new ProductManager();
const products = JSON.parse(await productManager.getProducts())

router.get('/', async (req, res) => {
    res.render('index', {products});
});

router.get('/realtimeproducts', (req, res) => {
    res.render('realTimeProducts');
});

router.post('/realtimeproducts', async (req, res) => {
    await productManager.addProduct(req.body)
    products = JSON.parse(await productManager.getProducts())
    emitFromApi('New-Product-from-api', req.body);
    res.status(200).json(req.body);
});

router.use('/api/products', productRouter)
router.use('/api/carts', cartRouter)

export default router;