const { Router } = require("express");
const router = Router();
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const buscar = await Country.findByPk(id.toUpperCase(), {
      include: Activity,
    });
    

   
    if (buscar) {
       res.status(200).send(buscar);
    } else {
       res.status(404).send("El id ingresado es inválido, ingrese nuevamente");
    }

  } catch (e) {
    next(e);
  }
});

router.get("/", async (req, res, next) => {
  const { name } = req.query;

  if (name) {
    try {
      const busca = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        include: Activity,
      });
      
      if (!busca.length) {
        res.status(404).send("No se encontró concidencia, ingrese nuevamente");
      } else {
       return res.status(200).send(busca);
      }

    } catch (e) {
      next(e);
    }
  } else {
    const carga = await Country.findAll({
      include: Activity,
    });
    res.status(200).send(carga);
  }
});
module.exports = router;
