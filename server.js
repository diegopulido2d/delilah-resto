// 1 IMPORTAR
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const expressJwt = require('express-jwt');
const md5 = require('md5');

const sequelize = require('./connection.js');
const jwt = require('jsonwebtoken');
const server = express();
const jwtClave = process.env.JWT_KEY;
var token;


// 3 MIDDLEWARES GLOBALES 
server.use(express.json());
server.use(bodyParser.json());
server.use(expressJwt({ secret: jwtClave, algorithms:['HS256']}).unless({
    path: ['/login','/register','/user']
}));



/// READ
//////// DISPLAY STOCK 
server.get('/stock', (request, response) => {
    sequelize.query("SELECT * from stock")
    .then( rows => {
        response.status(200);
        response.json(rows[0]);
    })
});
//////// DISPLAY ALL USERS (ADMIN)
server.get('/users', (request, response) => {

    const obj = jwt.verify(token, jwtClave);
    const user_role = obj.role;

    if(user_role == 'admin'){
        sequelize.query("SELECT * from users")
        .then( rows => {
            response.status(200);
            response.json(rows[0]);
        })
    } else {
        response.status(400);
        response.json('No permitido.');
    }
});







/// CREATE
//////// DISPLAY SPECIFIC USER DATA
server.post('/user', (request, response) => {

    const bodyParam = request.body;

    const obj = jwt.verify(token, jwtClave);
    const user_role = obj.role;

    if(user_role){
        sequelize.query("SELECT * from users WHERE (username = :_user OR email = :_user)", {
            replacements : {
                _user: bodyParam.user
            }
        })
        .then( row => {
            if(row[0] != ''){
                response.status(200);
                response.json(row[0]);
            } else {
                response.json('Datos Incorrectos.')
            }
        }).catch( error => {
            response.status(400);
            response.json("Error.");
        }); 
    } else {
        response.status(400);
        response.json('No permitido.');
    }
    
});
//////// NEW STOCK ITEM 
server.post('/stock', (request, response) => {
    const bodyParam = request.body;

    const obj = jwt.verify(token, jwtClave);
    const user_role = obj.role;

    if(user_role == 'admin'){

    sequelize.query("INSERT INTO stock (name, descr, price, quantity, pic, active) VALUES (:_name, :_descr, :_price, :_quantity, :_pic, :_active)", { 
        replacements : {
            _name: bodyParam.name,
            _descr: bodyParam.descr,
            _price: bodyParam.price,
            _quantity: bodyParam.quantity,
            _pic: bodyParam.pic,
            _active: bodyParam.active
        }
    })
    .then( rows => {
        response.status(201);
        response.json("Dato ingresado.");
    }).catch( error => {
        response.status(400);
        response.json("Error.");
    }); 
    } else {
        response.status(400);
        response.json('No permitido.');
    }
});
//////// NEW USER REGISTER
server.post('/register', (request, response) => {
    const bodyParam = request.body;
    sequelize.query("INSERT INTO users (username, email, password, number, address, role) VALUES (:_username, :_email, :_password, :_number, :_address, :_role)", { 
        replacements : {
            _username: bodyParam.username,
            _email: bodyParam.email,
            _password: md5(bodyParam.password),
            _number: bodyParam.number,
            _address: bodyParam.address,
            _role: bodyParam.role
        }
    })
    .then( rows => {
        response.status(201);
        response.json("Usuario ingresado.");
    }).catch( error => {
        response.status(400);
        response.json("Error.");
    }) 
});
//////// USER LOGIN
server.post('/login', (request, response) => {
    const bodyParam = request.body;
    sequelize.query(`SELECT * from users WHERE (username = :_user AND password = :_password) OR (email = :_user AND password = :_password)`, { 
        replacements : {
            _user: bodyParam.user,
            _password: md5(bodyParam.password)
        }
    })
    .then( row => {
        
        if(row[0] != ''){
            token = jwt.sign({
                username: row[0][0].username,
                role: row[0][0].role
            },jwtClave);
            response.send(token);
        } else {
            response.json('Datos Incorrectos.')
        }
        

    }).catch( error => {
        response.status(400);
        response.json("Error.");
    }) 
});









/// PUT
server.put('/stock', (request, response) => {
    const bodyParam = request.body;

    const obj = jwt.verify(token, jwtClave);
    const user_role = obj.role;

    if(user_role == 'admin'){

    sequelize.query("UPDATE stock SET name = :_name, descr = :_descr, price = :_price, quantity = :_quantity, pic = :_pic, active = :_active WHERE id = :_id", { 
        replacements : {
            _id: bodyParam.id,
            _name: bodyParam.name,
            _descr: bodyParam.descr,
            _price: bodyParam.price,
            _quantity: bodyParam.quantity,
            _pic: bodyParam.pic,
            _active: bodyParam.active
        }
    })
    .then( rows => {
        response.status(201);
        response.json("Dato actualizado.");
    }).catch( error => {
        response.status(400);
        response.json("Error.");
    }); 
    } else {
        response.status(400);
        response.json('No permitido.');
    } 
});




/// DELETE
server.delete('/stock', (request, response) => {

    const obj = jwt.verify(token, jwtClave);
    const user_role = obj.role;

    if(user_role == 'admin'){

    sequelize.query("DELETE from stock where id = :_id", { 
        replacements : {
            _id: request.body.id
        }
    })
    .then( rows => {
        response.status(200);
        response.json("Dato eliminado.");
    }).catch( error => {
        response.status(400);
        response.json("Error.");
    }); 
    } else {
        response.status(400);
        response.json('No permitido.');
    } 
});









// 5 LEVANTAR SERVIDOR
// NPM RUN SERVER
server.listen(3000, () => {
     console.log('Server escuchando en 3000');
});

