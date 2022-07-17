var moment = require('moment')
const fs = require("fs")
const symbology = require('symbology')



console.log(1);

const obg = {
  "cost": "0",
  "price": "1800,00",
  "unit": "шт",
  "name": "Наволочка  65 х 45 коричневый фон размытый узор",
  "artiqle": "001-300/295"
};

(async () => {
  const { data } = await symbology.createFile({
    symbology: symbology.SymbologyType.CODE128,
    fileName: `${obg.artiqle.replace(/[^+\d]/g, '') + moment().format('DDMMYYYHHmmssSSS')}.svg`,
    borderWidth: 50,
    whitespaceWidth: 10
  }, obg.artiqle, symbology.OutputType.SVG)
})()
