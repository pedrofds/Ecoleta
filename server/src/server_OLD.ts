import express, { request } from 'express';

const app = express();

app.use(express.json());

// GET: Buscar uma ou mais informações no Back-end
// POST: Criar uma nova informação no Back-end
// PUT : Atualizar uma informação existente no Back-end
// DELETE : Remover uma informação no back-end

// Request Param : Parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtro, paginação
// Request Body : Parâmetros para criação/atualização de informação

// select * From users where name = 'Diego' 
// knex('users').where('name', 'Diego').select ('*')

const users = [
    'PEDRO',
    'VINICIO',
    'test',
    'BLA'
]

app.get('/users', (request, response) => {
    const search = String(request.query.search);
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
    //response.send("Hello World");
    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) =>{
    const id = Number(request.params.id);
    const user = users[id];
    return response.json(user);
})

app.post('/users', (request, response) =>{
    
    const data = request.body;
    console.log(data);

   const user = {
       name : data.name,
       email: data.email
   } 
   return response.json(user);
} )

app.listen(3333);