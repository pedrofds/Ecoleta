import express, { request, response } from 'express'
//import knex from './database/connection';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

// index, show, create, update, delete
const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);


export default routes;

/* routes.get('/items', async (request, response) => {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
        return {
            id: item.id,
            title : item.title,
            image_url : `http://localhost:3333/uploads/${item.image}`
        };
    });

    return response.json(serializedItems);
}); */

/* routes.post('/points', async (request, response) => {
    const {
       name,
       email,
       whatsapp,
       latitude,
       longitude,
       city,
       uf,
       items
    } = request.body;

    const trx = await knex.transaction();

    const insertIds = await trx('points').insert({
        image: 'image-fake',
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf 
    });

    const point_id = insertIds[0];
    const pointItems = items.map((item_id : number) => {
        return {
            item_id,
            point_id
        }
    })

    await trx("point_items").insert(pointItems);

    return response.json({ success : true })

}); */
