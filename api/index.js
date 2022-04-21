//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {Country}=require("./src/db.js")
const axios=require("axios")

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  let exist=await Country.findAll()
  if(exist.length<1) {
    const dataApi=await axios.get("https://restcountries.com/v3/all")
    const api=dataApi.data.map(cy=>{
      return{
        id:cy.cca3,
         name:cy.name.common,
         flags:cy.flags[1],
         capital:cy.capital===undefined || cy.capital.length<1 ? "undefined": cy.capital[0],
          continents:cy.region,
          subregion:cy.subregion,
          area:cy.area,
          population:cy.population
             
                 }
             })
   const carga= await Country.bulkCreate(api)

  }
  
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
