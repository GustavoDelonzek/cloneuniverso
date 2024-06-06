import express from 'express';
import cors from 'cors';
import config from './config.js';
import artigoRoute from './routes/artigoRoute.js';

const app = express();

app.use(cors());

app.use(express.json());

// Inicializar as rotas
app.use('/api', artigoRoute);

app.listen(8000, () =>
    console.log(`Server is live 8000`),
);
