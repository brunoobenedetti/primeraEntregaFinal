import { Router } from "express";
// import CartManager from '../src/cartManager.js';

// const cartManager= new CartManager();

const router = Router();

const db = {}; 

router.post('/', (req, res) => {
    const cartId = cartId.length+1; 
    db[cartId] = { id: cartId, products: [] };
    res.status(201).json(db[cartId]);
});

router.get('/:cid', (req, res) => {
    const cart = db[req.params.cid]; 
    if (!cart) {
        res.status(404).json({ message: 'Carrito no encontrado' }); 
    } else {
        res.json(cart.products);
    }
});

router.post('/:cid/product/:pid', (req, res) => {
    const cart = db[req.params.pid]; 
    if (!cart) {
        res.status(404).json({ message: 'Carrito no encontrado' }); 
    } else {
        const productId = req.params.pid;
        const product = { id: productId, quantity: 1 }; 
        const existingProduct = cart.products.find(p => p.id === productId); 
    if (existingProduct) {
        existingProduct.quantity++; 
        cart.products.push(product); 
    }
        res.json(cart.products); 
}
});

export default router;