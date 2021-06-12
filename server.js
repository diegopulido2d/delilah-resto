// 1 IMPORTAR LIBRERIAS
const express = require('express');

// 2 INSTANCIAR LIBRERIAS
const server = express();

// 3 MIDDLEWARES GLOBALES 
server.use(express.json());


// 4 DECLARAR CONSTANTES
const decks = [
    {
        id: 1,
        name: 'Anje Falkenrath',
        color: 'Rakdos',
        mech: 'Madness',
        power: 8.5
    },
    {
        id: 2,
        name: 'Rielle the Everwise',
        color: 'Izzet',
        mech: 'Wheels',
        power: 7.2
    },
    {
        id: 3,
        name: 'Yuriko, the Tigers Shadow',
        color: 'Dimir',
        mech: 'Ninjutsu',
        power: 7.5
    },
    {
        id: 4,
        name: 'Teysa Karlov',
        color: 'Orzhov',
        mech: 'Aristocrats',
        power: 7.0
    }
];



// 5 DEFINIR ENDPOINTS
/// GET
server.get("/decks", (request, response) => {
    response.status(200);
    response.json(decks);
});

/// GET -> FILTER
server.get("/decks/powerlevel/:powerLevel", (request, response) => {
    const powerLevel = request.params.powerLevel;
    const decksFiltrados = decks.filter(dck => {
        return dck.power >= powerLevel
    });
    response.status(200);
    response.json(decksFiltrados);
});

/// POST
server.post('/decks', (request, response) =>{
    const bodyParam = request.body;
    const nuevoDeck = {
        id: decks.length + 1,
        name: bodyParam.name,
        color: bodyParam.color,
        mech: bodyParam.mech,
        power: bodyParam.power
    };
    decks.push(nuevoDeck);//Transacción a la base de datos
    response.status(201);
    response.json(decks);
})

/// PUT
server.put('/decks/update/:id', (request,response) => {
    const idParam = request.params.id;
    const body = request.body;

    decks.forEach(dck =>{
        if (dck.id == idParam){
            dck.name = body.name;
            dck.color = body.color;
            dck.mech = body.mech;
            dck.power = body.power;
        }
    });
    response.status(201);
    response.json(decks);
});


/// DELETE
server.delete('/decks/:id', (require, response) => {
    const idParam = require.params.id;
    let indiceEliminar;
    decks.forEach((dck,index) => {
        if (dck.id == idParam){
            indiceEliminar = index;
        }
    });
    const deckEliminado = decks.splice(indiceEliminar,1);
    response.status(200);
    response.json(deckEliminado);
})


// 5 LEVANTAR SERVIDOR
server.listen(3000, () => {
     console.log('Server escuchando en 3000');
});