var basicMetalBlocks = [
	//'tier1_casing',
	'tier1_machine_block',
	'tier2_machine_block',
	'tier3_machine_block',
	'machine_casing_fusion_coil',
	'machine_casing_fusion_glass',
	'machine_casing_fusion_glass_yellow',
	'super_casing',
	'data_casing',
	'protype_casing',
	'high_pressure_casing',
	'factory_fan',
	'heated_vinteum_block',
	'overgrown_light_engineering_block',
]
var basicWoodBlocks = [
	'charred_planks'
]
onEvent('block.registry', event => {
	
	console.log('new blocks')

	//Metal
	basicMetalBlocks.forEach((item) => {
		event.create(item).hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').material('metal')
	})
	//Wood
	basicWoodBlocks.forEach((item) => {
		event.create(item).hardness(2).resistance(2).tagBlock('minecraft:mineable/axe').material('wood')
	})
	
	
	event.create('sheetmetal_cast').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').model("kubejs:block/sheetmetal_cast").renderType('cutout').defaultCutout().material('metal')
	event.create('bronze_frame').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').model("kubejs:block/thermal_frame").renderType('cutout').defaultCutout().material('metal')
	event.create('alchemistry_frame').displayName('炼金框架').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').model("kubejs:block/alchemistry_frame").renderType('cutout').defaultCutout().material('metal')
	event.create('pneumaticcraft_casing').displayName('气动外壳').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').model("kubejs:block/pneumaticcraft_casing").renderType('cutout').defaultCutout().material('metal')
	event.create('hostile_casing').displayName('敌对外壳').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').model("kubejs:block/hostile_casing").renderType('cutout').defaultCutout().material('metal')
	event.create('haunted_casing').displayName('幽魂外壳').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').model("kubejs:block/haunted_casing").renderType('cutout').defaultCutout().material('metal')
	
	event.create('tier1_casing').displayName('基础多方块外壳').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').material('metal')
	event.create('tier2_casing').displayName('坚固多方块外壳').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').material('metal')
	event.create('tier3_casing').displayName('强化多方块外壳').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').material('metal')
	event.create('transmuted_casing').displayName('嬗变外壳').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').material('metal')

	//Compressed blocks
	let compressedBlocks = [
		'cobblestone',
		'cobbled_deepslate',
		'netherrack'
	]
	compressedBlocks.forEach(block => {
		event.create(`1x_compressed_${block}`).hardness(1).resistance(1).tagBlock(`minecraft:mineable/pickaxe`).tagBlock(`minecraft:needs_stone_tool`).material(`stone`)
		event.create(`2x_compressed_${block}`).hardness(2).resistance(2).tagBlock(`minecraft:mineable/pickaxe`).tagBlock(`minecraft:needs_iron_tool`).material(`stone`)
		event.create(`3x_compressed_${block}`).hardness(3).resistance(3).tagBlock(`minecraft:mineable/pickaxe`).tagBlock(`minecraft:needs_iron_tool`).material(`stone`)
	});
	
	event.create('drygmy_shard_block').displayName('德鲁伊碎片方块').hardness(3).resistance(2).tagBlock('minecraft:mineable/pickaxe').material('glass')
	event.create('starbuncle_shard_block').displayName('星鬃兽碎片方块').hardness(3).resistance(2).tagBlock('minecraft:mineable/pickaxe').material('glass')
	event.create('whirlisprig_shard_block').displayName('旋风精灵碎片方块').hardness(3).resistance(2).tagBlock('minecraft:mineable/pickaxe').material('glass')
	event.create('wixie_shard_block').displayName('威克西碎片方块').hardness(3).resistance(2).tagBlock('minecraft:mineable/pickaxe').material('glass')
	
	event.create('solar_panel').displayName('戴森面板').fullBlock(false).notSolid().box(0,0,0,16,6,16, true).hardness(2).resistance(2).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').model("kubejs:block/solar_panel").renderType('cutout').defaultCutout().material('metal')
	event.create('solar_bar').displayName('戴森面板支架').fullBlock(false).notSolid().box(0,0,0,16,6,16, true).hardness(2).resistance(2).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').model("kubejs:block/solar_bar").renderType('cutout').defaultCutout().material('metal')

	event.create('arcane_sand', 'falling').displayName('奥术沙').hardness(1).resistance(1).tagBlock('minecraft:mineable/shovel').material('sand')

	event.create(`reflector`).material('metal').hardness(1).resistance(1).tagBlock('minecraft:mineable/pickaxe').renderType('cutout').defaultCutout().model(`kubejs:block/reflector`).fullBlock(false).notSolid().box(0,0,0,16,8,16, true)

	event.create(`dynamo_frame`).material('metal').hardness(1).resistance(1).tagBlock('minecraft:mineable/pickaxe').renderType('cutout').defaultCutout().model(`kubejs:block/incomplete_dynamo`).color(0, 0x76b090).item(itemForm => {itemForm.color(0, 0x76b090)}).fullBlock(false).notSolid().box(0,0,0,16,15,16, true)
	
	event.create('ev_casing').displayName('太阳能外壳').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').material('metal')
	
	event.create('space_age_casing').displayName('§3太空时代外壳').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').material('metal')
	

});

onEvent('tags.items', event => {
	event.add(`forge:sheetmetal_cast`, `kubejs:sheetmetal_cast`)
});	
