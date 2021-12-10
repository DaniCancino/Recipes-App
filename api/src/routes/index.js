const { Router, express } = require('express');
const {Recipe} = require('../models/Recipe')
const {Diet} = require('../models/Diet')
const { conn } = require('../db.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



router.post('/recipes', async (req, res) =>{
    const {name, score, level, resumen, step, diet} = req.body;

    if(!name || !score || !level || !resumen || !step || !diet){
        res.status(403).send({error: 'An input is empty or you have inserted a wrong data'})
    }

    try{
        const recipe = await Recipe.create({
                name,
                score,
                level,
                resumen,
                step   
        })

        const diets = await Diet.findOrCreate({
            where: {diet: diet},
            defaults: {diet}
        })

        await recipe.setDiet(diets)
        await diets.setRecipe(recipe)
        res.status(200).send({message: 'The recipe has been added correctly'})
    }catch{
        res.status(500).send('error al cargar datos')
    }

})

module.exports = router;
