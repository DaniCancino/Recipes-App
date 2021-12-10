const { Router, express } = require('express');
const {Recipe, Diet} = require('../db.js')
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

        for(let element of diet){

            const [diets, created] = await Diet.findOrCreate({
                where: {diet: element},
    
            })

            await recipe.addDiet(diets)
        }

        res.status(200).send({message: 'The recipe has been added correctly'})
    }catch(err){
        console.error(err.message)
    }

})

router.get('/:idReceta', async function(req, res) {
  
      const {idReceta} = req.params;
      const receta = await Recipe.findByPk(idReceta, {
        include: Diet
      });
  
      return receta ? res.json(receta) : res.status(404).send('Not Found Recipe')
  });

  router.get('/types', async function(req, res) {
    
    const allDiets = await Diet.findAll()

     return allDiets ? res.json(allDiets): res.status(404).send('Not Found Diets')
  });

module.exports = router;
