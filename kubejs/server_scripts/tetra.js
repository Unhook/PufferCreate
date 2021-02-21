events.listen('recipes', function (event) {
    let wood = ['oak','spruce','jungle']
    wood.forEach(wood => {
    event.shaped(Item.of('tetra:modular_sword', {honing_progress:175,"sword/basic_hilt_material":"basic_hilt/stick",HideFlags:1,"sword/hilt":"sword/basic_hilt","sword/blade":"sword/basic_blade","sword/basic_blade_material":`basic_blade/${wood}`,Damage:0}), [
  ' P ',
  ' P ',
  ' S '
], {
  P: `minecraft:${wood}_planks`,
  S: `minecraft:stick`
})
});
});