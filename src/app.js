import express from 'express';
import productRouter from './router/productsRouter.js';
import cartRouter from './router/carts.js';


const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);

app.get('/', (req, res) => {
    res.send('Hola bienvenido a la tienda, utiliza "api/products" para ver todos los productos o "/products/id" para ver un producto especifico')
});

app.listen(port, () => {
    console.log("servidor escuchando desde el puerto 8080 http://localhost:8080/products");
});