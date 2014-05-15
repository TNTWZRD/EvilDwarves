Main = {};

Main.RoundFloat = function(n) {
    return (Math.round(n * 10) / 10).toFixed(2);
}

Main.Title = "Paused | Evil Dwarves";


Update = function(){
	
	// Update Item Table
	
	if(Main.RoundFloat(Res.Alive.Dwarves) >= 100){Main.DwarfCount = Main.RoundFloat(Res.Alive.Dwarves/100) + " X 100";}else{Main.DwarfCount = Main.RoundFloat(Res.Alive.Dwarves);}
	if(Main.RoundFloat(Res.Item.Pick) >= 100){Main.Pick = Main.RoundFloat(Res.Item.Pick/100) + " X 100";}else{Main.Pick = Main.RoundFloat(Res.Item.Pick);}
	if(Main.RoundFloat(Res.Item.Axe) >= 100){Main.Axe = Main.RoundFloat(Res.Item.Axe/100) + " X 100";}else{Main.Axe = Main.RoundFloat(Res.Item.Axe);}
	if(Main.RoundFloat(Res.Item.Hoe) >= 100){Main.Hoe = Main.RoundFloat(Res.Item.Hoe/100) + " X 100";}else{Main.Hoe = Main.RoundFloat(Res.Item.Hoe);}
	if(Main.RoundFloat(Res.Item.Bow) >= 100){Main.Bow = Main.RoundFloat(Res.Item.Bow/100) + " X 100";}else{Main.Bow = Main.RoundFloat(Res.Item.Bow);}
	if(Main.RoundFloat(Res.Item.FishingRod) >= 100){Main.FishingRod = Main.RoundFloat(Res.Item.FishingRod/100) + " X 100";}else{Main.FishingRod = Main.RoundFloat(Res.Item.FishingRod);}
	if(Main.RoundFloat(Res.Item.Shear) >= 100){Main.Shear = Main.RoundFloat(Res.Item.Shear/100) + " X 100";}else{Main.Shear = Main.RoundFloat(Res.Item.Shear);}
	if(Main.RoundFloat(Res.Item.Cane) >= 100){Main.Cane = Main.RoundFloat(Res.Item.Cane/100) + " X 100";}else{Main.Cane = Main.RoundFloat(Res.Item.Cane);}
	if(Main.RoundFloat(Res.Item.Stove) >= 100){Main.Stove = Main.RoundFloat(Res.Item.Stove/100) + " X 100";}else{Main.Stove = Main.RoundFloat(Res.Item.Stove);}
		
	document.getElementById("DwarfCount").innerHTML = Main.DwarfCount;
	document.getElementById("PickaxesCount").innerHTML = Main.Pick;
	document.getElementById("AxeCount").innerHTML = Main.Axe;
	document.getElementById("HoeCount").innerHTML = Main.Hoe;
	document.getElementById("BowCount").innerHTML = Main.Bow;
	document.getElementById("FishingRodCount").innerHTML = Main.FishingRod;
	document.getElementById("ShearCount").innerHTML = Main.Shear;
	document.getElementById("CaneCount").innerHTML = Main.Cane;
	document.getElementById("StoveCount").innerHTML = Main.Stove;
	
	// Update Dwarf Table
	
	if(Main.RoundFloat(Dwarves.Data.Occupation.None) >= 100){Main.None = Main.RoundFloat(Dwarves.Data.Occupation.None/100) + " X 100";}else{Main.None = Main.RoundFloat(Dwarves.Data.Occupation.None);}
	if(Main.RoundFloat(Dwarves.Data.Occupation.Miner) >= 100){Main.Miner = Main.RoundFloat(Dwarves.Data.Occupation.Miner/100) + " X 100";}else{Main.Miner = Main.RoundFloat(Dwarves.Data.Occupation.Miner);}
	if(Main.RoundFloat(Dwarves.Data.Occupation.Farmer) >= 100){Main.Farmer = Main.RoundFloat(Dwarves.Data.Occupation.Farmer/100) + " X 100";}else{Main.Farmer = Main.RoundFloat(Dwarves.Data.Occupation.Farmer);}
	if(Main.RoundFloat(Dwarves.Data.Occupation.Logger) >= 100){Main.Logger = Main.RoundFloat(Dwarves.Data.Occupation.Logger/100) + " X 100";}else{Main.Logger = Main.RoundFloat(Dwarves.Data.Occupation.Logger);}
	if(Main.RoundFloat(Dwarves.Data.Occupation.Hunter) >= 100){Main.Hunter = Main.RoundFloat(Dwarves.Data.Occupation.Hunter/100) + " X 100";}else{Main.Hunter = Main.RoundFloat(Dwarves.Data.Occupation.Hunter);}
	if(Main.RoundFloat(Dwarves.Data.Occupation.Fisher) >= 100){Main.Fisher = Main.RoundFloat(Dwarves.Data.Occupation.Fisher/100) + " X 100";}else{Main.Fisher = Main.RoundFloat(Dwarves.Data.Occupation.Fisher);}
	if(Main.RoundFloat(Dwarves.Data.Occupation.Shepherd) >= 100){Main.Shepherd = Main.RoundFloat(Dwarves.Data.Occupation.Shepherd/100) + " X 100";}else{Main.Shepherd = Main.RoundFloat(Dwarves.Data.Occupation.Shepherd);}
	if(Main.RoundFloat(Dwarves.Data.Occupation.Rancher) >= 100){Main.Rancher = Main.RoundFloat(Dwarves.Data.Occupation.Rancher/100) + " X 100";}else{Main.Rancher = Main.RoundFloat(Dwarves.Data.Occupation.Rancher);}
	if(Main.RoundFloat(Dwarves.Data.Occupation.Cook) >= 100){Main.Cook = Main.RoundFloat(Dwarves.Data.Occupation.Cook/100) + " X 100";}else{Main.Cook = Main.RoundFloat(Dwarves.Data.Occupation.Cook);}
	
	document.getElementById("DwarfNoneCount").innerHTML = Main.None;
	document.getElementById("DwarfMinerCount").innerHTML = Main.Miner;
	document.getElementById("DwarfFarmerCount").innerHTML = Main.Farmer;
	document.getElementById("DwarfLoggerCount").innerHTML = Main.Logger;
	document.getElementById("DwarfHunterCount").innerHTML = Main.Hunter;
	document.getElementById("DwarfFisherCount").innerHTML = Main.Fisher;
	document.getElementById("DwarfShepherdCount").innerHTML = Main.Shepherd;
	document.getElementById("DwarfRancherCount").innerHTML = Main.Rancher;
	document.getElementById("DwarfCookCount").innerHTML = Main.Cook;
	
	// Update Resources Table
	
	if(Main.RoundFloat(Res.Item.Stone) >= 100){Main.Stone = Main.RoundFloat(Res.Item.Stone/100) + " X 100";}else{Main.Stone = Main.RoundFloat(Res.Item.Stone);}
	if(Main.RoundFloat(Res.Item.Coal) >= 100){Main.Coal = Main.RoundFloat(Res.Item.Coal/100) + " X 100";}else{Main.Coal = Main.RoundFloat(Res.Item.Coal);}
	if(Main.RoundFloat(Res.Item.Dirt) >= 100){Main.Dirt = Main.RoundFloat(Res.Item.Dirt/100) + " X 100";}else{Main.Dirt = Main.RoundFloat(Res.Item.Dirt);}
	if(Main.RoundFloat(Res.Item.Iron) >= 100){Main.Iron = Main.RoundFloat(Res.Item.Iron/100) + " X 100";}else{Main.Iron = Main.RoundFloat(Res.Item.Iron);}
	if(Main.RoundFloat(Res.Item.Gold) >= 100){Main.Gold = Main.RoundFloat(Res.Item.Gold/100) + " X 100";}else{Main.Gold = Main.RoundFloat(Res.Item.Gold);}
	if(Main.RoundFloat(Res.Item.Wood) >= 100){Main.Wood = Main.RoundFloat(Res.Item.Wood/100) + " X 100";}else{Main.Wood = Main.RoundFloat(Res.Item.Wood);}
	if(Main.RoundFloat(Res.Item.Brick) >= 100){Main.Brick = Main.RoundFloat(Res.Item.Brick/100) + " X 100";}else{Main.Brick = Main.RoundFloat(Res.Item.Brick);}
	if(Main.RoundFloat(Res.Item.Meat) >= 100){Main.Meat = Main.RoundFloat(Res.Item.Meat/100) + " X 100";}else{Main.Meat = Main.RoundFloat(Res.Item.Meat);}
	if(Main.RoundFloat(Res.Item.Fish) >= 100){Main.Fish = Main.RoundFloat(Res.Item.Fish/100) + " X 100";}else{Main.Fish = Main.RoundFloat(Res.Item.Fish);}
	if(Main.RoundFloat(Res.Item.Wheat) >= 100){Main.Wheat = Main.RoundFloat(Res.Item.Wheat/100) + " X 100";}else{Main.Wheat = Main.RoundFloat(Res.Item.Wheat);}
	if(Main.RoundFloat(Res.Item.Bread) >= 100){Main.Bread = Main.RoundFloat(Res.Item.Bread/100) + " X 100";}else{Main.Bread = Main.RoundFloat(Res.Item.Bread);}
	if(Main.RoundFloat(Res.Item.Wool) >= 100){Main.Wool = Main.RoundFloat(Res.Item.Wool/100) + " X 100";}else{Main.Wool = Main.RoundFloat(Res.Item.Wool);}
	
	document.getElementById("StoneCount").innerHTML = Main.Stone;
	document.getElementById("CoalCount").innerHTML = Main.Coal;
	document.getElementById("DirtCount").innerHTML = Main.Dirt;
	document.getElementById("IronCount").innerHTML = Main.Iron;
	document.getElementById("GoldCount").innerHTML = Main.Gold;
	document.getElementById("WoodCount").innerHTML = Main.Wood;
	document.getElementById("BrickCount").innerHTML = Main.Brick;
	document.getElementById("MeatCount").innerHTML = Main.Meat;
	document.getElementById("FishCount").innerHTML = Main.Fish;
	document.getElementById("WheatCount").innerHTML = Main.Wheat;
	document.getElementById("BreadCount").innerHTML = Main.Bread;
	document.getElementById("WoolCount").innerHTML = Main.Wool;
	
	document.getElementById("stat-bar").innerHTML = Main.Title + " | FoodConsumedPerTick : " + Main.RoundFloat((0.3 * Res.Alive.Dwarves)-(Dwarves.Data.Occupation.Cook / 6)) + " | FoodProducedPerTick : " + Main.RoundFloat((Dwarves.Data.Occupation.Hunter / 1.3 )+(Dwarves.Data.Occupation.Fisher / 30));
	
	if(Main.RoundFloat((0.1 * Res.Alive.Dwarves)-(Dwarves.Data.Occupation.Cook / 6)) >= Main.RoundFloat((Dwarves.Data.Occupation.Hunter / 1.3 )+(Dwarves.Data.Occupation.Fisher / 30))){
		document.title = "FOOD PRODUCTION LOW | Evil Dwarves"; 
	}else{
		document.title = Main.Title + " | FCPT : " + ((0.1 * Res.Alive.Dwarves)-(Dwarves.Data.Occupation.Cook / 6)); 
	}
	
}

CheatForFun = function(num){
	Res.Item.Stone = num;
	Res.Item.Coal = num;
	Res.Item.Dirt = num;
	Res.Item.Iron = num;
	Res.Item.Gold = num;
	Res.Item.Wood = num;
	Res.Item.Brick = num;
	Res.Item.Meat = num;
	Res.Item.Fish = num;
	Res.Item.Wheat = num;
	Res.Item.Bread = num;
	Res.Item.Wool = num;
}