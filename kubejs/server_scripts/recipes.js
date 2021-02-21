//priority: 1501
events.listen('recipes', function (event) {

        //Mekanism Steel Casing
        event.remove({output: 'mekanism:steel_casing'})
        event.shaped('mekanism:steel_casing', ['LXL', 'SOS', 'LCL'], {
            L: '#immersiveengineering:scaffoldings/steel',
            X: '#forge:plates/brass',
            S: 'immersiveengineering:component_steel',
            O: '#forge:ingots/osmium',
            C: 'create:integrated_circuit'
        }),

        //Create Andesite Casing
        event.remove({output: 'create:andesite_casing'})
        event.shaped(Item.of('create:andesite_casing', 2), ['ATA', 'T T', 'ATA'], {
            A: 'create:andesite_alloy',
            T: '#forge:treated_wood'
        }),
        
        //Create Copper Casing
        event.remove({output: 'create:copper_casing'})
        event.shaped(Item.of('create:copper_casing', 2), ['CTC', 'T T', 'CTC'], {
            C: '#forge:plates/copper',
            T: '#forge:treated_wood'
        }),

        //Create Brass Casing
        event.remove({output: 'create:brass_casing'})
        event.shaped(Item.of('create:brass_casing', 2), ['BTB', 'T T', 'BTB'], {
            B: '#forge:plates/brass',
            T: '#forge:treated_wood'
        }),


        event.remove({output: 'create:integrated_circuit'})
        event.recipes.create.mechanical_crafting('create:integrated_circuit', [
            '  L  ',
            'ZCECZ',
            ' BBB '
        ], {
            L: '#forge:plates/lapis_lazuli',
            B: '#forge:plates/brass',
            C: 'immersiveengineering:circuit_board',
            Z: '#forge:ingots/zinc',
            E: 'create:electron_tube'
        }),

        event.remove({output: 'immersiveengineering:cloche'})
        event.recipes.create.mechanical_crafting('immersiveengineering:cloche', [
            ' C ',
            'CSC',
            'C C',
            'ZMZ',
            'ZYZ'
        ], {
            S: 'immersiveengineering:electron_tube',
            C: '#forge:glass/colorless',
            Y: 'immersiveengineering:component_steel',
            Z: '#forge:treated_wood',
            M: 'create:integrated_circuit'
        }),

        //IE Redstone Engineering Block
        event.remove({output: 'immersiveengineering:rs_engineering'})
        event.shaped(Item.of('immersiveengineering:rs_engineering', 4), ['ICI', 'RWR', 'ICI'], {
            I: '#forge:sheetmetals/iron',
            C: '#forge:ingots/constantan',
            W: 'immersiveengineering:wirecoil_redstone',
            R: '#forge:dusts/redstone'
        }),

        //IE Heavy Engineering Block
        event.remove({output: 'immersiveengineering:heavy_engineering'})
        event.shaped(Item.of('immersiveengineering:heavy_engineering', 4), ['ICI', 'RWR', 'ICI'], {
            I: '#forge:sheetmetals/steel',
            C: '#forge:ingots/electrum',
            W: 'immersiveengineering:wirecoil_steel',
            R: 'immersiveengineering:component_steel'
        }),

        //IE Light Engineering Block
        event.remove({output: 'immersiveengineering:light_engineering'})
        event.shaped(Item.of('immersiveengineering:light_engineering', 4), ['ICI', 'RWR', 'ICI'], {
            I: '#forge:sheetmetals/aluminum',
            C: '#forge:ingots/copper',
            W: 'immersiveengineering:wirecoil_copper',
            R: 'immersiveengineering:component_iron'
        }),

        //Mekanism Wind Generator
        event.remove({output: 'mekanismgenerators:wind_generator'})
        event.shaped('mekanismgenerators:wind_generator', [' P ', 'OIO', 'ECE'], {
            P: 'create:propeller',
            O: '#forge:ingots/osmium',
            I: '#mekanism:alloys/infused',
            C: '#forge:circuits/basic',
            E: 'mekanism:energy_tablet'
        }),

        //Psi Spell Programmer
        event.remove({output: 'psi:programmer'})
        event.shaped('psi:programmer', ['HPH', 'HHH', 'R R'], {
            R: '#forge:rods/iron',
            H: '#forge:ingots/hop_graphite',
            P: '#psi:psidust'
        }),

        //Psi CAD Assembler
        event.remove({output: 'psi:cad_assembler'})
        event.shaped('psi:cad_assembler', ['HPH', 'RIR', ' H '], {
            R: '#forge:rods/iron',
            I: '#forge:ingots/iron',
            H: '#forge:ingots/hop_graphite',
            P: '#psi:psidust'
        })
});