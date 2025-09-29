'use strict'

const assert = require('assert').strict;

var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
    years: 10
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
    years: 20
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
    years: 30
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
    years: 35
  }
];

function iterateSimple() {
  console.log('Muestro las peliculas con un for: ');
  for (let i = 0; i < pilots.length; i++) {
    console.log(pilots[i])
  }
}

function iterateForEach() {
  console.log('Muestro las peliculas con un for each: ');
  pilots.forEach(pilot => {
    console.log(JSON.stringify(pilot))  
  });
}
function mapIds() {
  console.log('Muestro las peliculas con un map');
  let idPilots = pilots.map (pilot=> pilot.id);
  console.log(idPilots);
  const sumaIds = idPilots.reduce((acumulador, sumaTotal) => {
    return acumulador + sumaTotal
  }, 0)
  console.log(sumaIds)
  return idPilots;
  
  // let nombrePilots = pilots.map(nombre=> nombre.name)
  // console.log(nombrePilots)

  // let factionPilots = pilots.map(faction=> faction.faction)
  // console.log(factionPilots)
}
function rebels() {
  console.log('Muestrame los pilotos que sean rebeldes');
  const pilotosRebeldes = pilots.filter(rebelde => rebelde.faction === 'Rebels')
  console.log(JSON.stringify(pilotosRebeldes))
  return pilotosRebeldes
}
function totalFaction(faction) {
console.log('Muestrame los pilotos totales de ' + faction);
const filtroFaccion = pilots.filter(faccion => faccion.faction === faction);
const integrantesTotal = filtroFaccion.reduce((acumulador, integrante) =>{
  return acumulador +1
}, 0)
console.log(integrantesTotal);
return integrantesTotal;
}
function avgYears(faction) {
}

// use console.log
iterateSimple()
iterateForEach()
try {
  assert.deepStrictEqual(mapIds(), [2,8,40,66])
  assert.deepStrictEqual(rebels(), [pilots[0], pilots[3]])

  assert.deepStrictEqual(totalFaction('Rebels'), 2)

  // assert.deepStrictEqual(avgYears('Rebels'), 22.5)
  // assert.deepStrictEqual(avgYears('Empire'), 25)
} catch (error) {
  console.error(error)
}
console.log('Pruebas pasadas con éxito');
