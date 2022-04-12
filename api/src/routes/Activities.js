const { Router } = require("express");
const router = Router();
const { Activity, Country } = require("../db");


router.get("/", async(req,res)=>{
  try{
    const dataBusca=await Activity.findAll({
     })
    if(!dataBusca.length){
      res.status(404).send("No hay actividades")
    }else{
      res.status(200).send(dataBusca)
    }
  }catch(e){
    console.log(e)
  }
  
})

router.post("/", async (req, res) => {
  const { name, dificult, duration, season, countryId } = req.body;
 
  try {
    if(name && dificult && duration && season ){
          const act = await Activity.create({
            name,
            dificult,
            duration,
            season
          });
                try{
                  const buscaBd = await Country.findAll({
                    where: {
                      id: countryId
                    },
                  });
                    if(buscaBd.length){
                      const carga =await act.addCountries(countryId)
                      res.status(200).send("Actividad Creada")
                    }else{
                      res.status(404).send("No existe el id de país")
                    }

                }catch(e){
                  console.log(e)
                }
          
    }else{
          res.status(400).send("No ingreso campo/s de forma correcta ")
    }

  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
