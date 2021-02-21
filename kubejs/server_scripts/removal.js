//priority: 1200
events.listen('recipes', function (event) {

var itemRemovals = [
    '#forge:plates',
    '#forge:wires/steel',
    '#forge:wires/aluminum',
    '#forge:wires/copper',
    '#forge:wires/electrum',
    '#forge:rods/all_metal'
];

var idRemovals = [
    'immersiveengineering:alloysmelter/brass',
    'immersiveengineering:arcfurnace/alloy_brass'
];

    itemRemovals.forEach((removal) => {
        event.remove({ output: removal });
   });

    idRemovals.forEach((removal) => {
        event.remove({ id: removal });
    });
});