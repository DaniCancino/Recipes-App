const { Router, express } = require('express');
const {Recipe, Diet} = require('../db.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/recipes', async  (req, res) =>{
    const{name} = req.query;
   try{
        const recipes = await Recipe.findAll({
            where: {
                name: name
            }
        });
        return recipes ? res.json(recipes) : res.status(404).send('Recipe not found')
   }catch(e){
        res.status(500).send('There was a problem in the server', e);
   }
})

//  Los campos mostrados en la ruta principal para cada receta (imagen, nombre, tipo de plato y tipo de dieta)
//  Resumen del plato
//  Puntuación
//  Nivel de "comida saludable"
//  Paso a paso

router.get('/recipes/idReceta', async (req, res) =>{
    const idReceta = req.body;
    try{
        const recipe = await Recipe.findByID({
            where: {
                idReceta: id
            }
        })
    }catch{

    }

})

module.exports = router;
