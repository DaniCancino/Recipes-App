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
                name,
                resumen,
                score,
                level,
                step
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

router.post('/recipe', async (req, res) =>{
    const {name, score, level, resumen, step, diet} = req.body;
    if(!name || !score || !level || !resumen || !step || !diet){
        res.status(403).send({error: 'A input is empty or you have inserted a wrong data'})
    }
    try{
        const [recipe, created] = await Recipe.findOrCreate({
            where:{
                name,
                score,
                level,
                score,
                resumen,
                step
            }
        })

        const diets = await Diet.findOrCreate({
            where: {
                diet
            }
        })

        await recipe.AddDiet(diets)
        await diets.AddRecipe(recipe)
        res.json()
    }catch(e){
        res.status(500).send('there was an error', e)
    }

})

module.exports = router;
