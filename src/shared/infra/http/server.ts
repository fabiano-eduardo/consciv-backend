import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({
        status: "success"
    });
});

app.listen(process.env.PORT || 3333, () => {
    console.log('Deu tudo certo com a porta 3333');
});