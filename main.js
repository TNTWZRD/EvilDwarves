Main = {};

Main.RoundFloat = function(n) {
    return (Math.round(n * 10) / 10).toFixed(2);
}


Update = function(){
	
	// Update Item Table
	
	if(Main.RoundFloat(Res.Alive.Dwarves) >= 64){Main.DwarfCount = Main.RoundFloat(Res.Alive.Dwarves/64) + " X 64";}else{Main.DwarfCount = Main.RoundFloat(Res.Alive.Dwarves);}
	if(Main.RoundFloat(Res.Item.Pick) >= 64){Main.Pick = Main.RoundFloat(Res.Item.Pick/64) + " X 64";}else{Main.Pick = Main.RoundFloat(Res.Item.Pick);}
	if(Main.RoundFloat(Res.Item.Axe) >= 64){Main.Axe = Main.RoundFloat(Res.Item.Axe/64) + " X 64";}else{Main.Axe = Main.RoundFloat(Res.Item.Axe);}
	if(Main.RoundFloat(Res.Item.Hoe) >= 64){Main.Hoe = Main.RoundFloat(Res.Item.Hoe/64) + " X 64";}else{Main.Hoe = Main.RoundFloat(Res.Item.Hoe);}
	if(Main.RoundFloat(Res.Item.Bow) >= 64){Main.Bow = Main.RoundFloat(Res.Item.Bow/64) + " X 64";}else{Main.Bow = Main.RoundFloat(Res.Item.Bow);}
	if(Main.RoundFloat(Res.Item.FishingRod) >= 64){Main.FishingRod = Main.RoundFloat(Res.Item.FishingRod/64) + " X 64";}else{Main.FishingRod = Main.RoundFloat(Res.Item.FishingRod);}
	if(Main.RoundFloat(Res.Item.Shear) >= 64){Main.Shear = Main.RoundFloat(Res.Item.Shear/64) + " X 64";}else{Main.Shear = Main.RoundFloat(Res.Item.Shear);}
	if(Main.RoundFloat(Res.Item.Cane) >= 64){Main.Cane = Main.RoundFloat(Res.Item.Cane/64) + " X 64";}else{Main.Cane = Main.RoundFloat(Res.Item.Cane);}
	if(Main.RoundFloat(Res.Item.Stove) >= 64){Main.Stove = Main.RoundFloat(Res.Item.Stove/64) + " X 64";}else{Main.Stove = Main.RoundFloat(Res.Item.Stove);}
		
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
	
	if(Main.RoundFloat(Dwarves.Data.Occupation.None) >= 64){Main.None = Main.RoundFloat(Dwarves.Data.Occupation.None/64) + " X 64";}else{Main.None = Main.RoundFloat(Dwarves.Data.Occupation.None);}
	if(Main.RoundFloat(Dwarves.Data.Occupation.Miner) >= 64){Main.Miner = Main.RoundFloat(Dwarves.Data.Occupation.Miner/64) + " X 64";}else{Main.Miner = Main.RoundFloat(Dwarves.Data.Occupation.Miner);}
	if(Main.RoundFloat(Dwarves.Data.Occupation.Farmer) >= 64){Main.Farmer = Main.RoundFloat(Dwarves.Data.Occupation.Farmer/64) + " X 64";}else{Main.Farmer = Main.RoundFloat(Dwarves.Data.Occupation.Farmer);}
	if(Main.RoundFloat(Dwarves.Data.Occupation.Logger) >= 64){Main.Logger = Main.RoundFloat(Dwarves.Data.Occupation.Logger/64) + " X 64";}else{Main.Logger = Main.RoundFloat(Dwarves.Data.Occupation.Logger);}
	if(Main.RoundFloat(Dwarves.Data.Occupation.Hunter) >= 64){Main.Hunter = Main.RoundFloat(Dwarves.Data.Occupation.Hunter/64) + " X 64";}else{Main.Hunter = Main.RoundFloat(Dwarves.Data.Occupation.Hunter);}
	if(Main.RoundFloat(Dwarves.Data.Occupation.Fisher) >= 64){Main.Fisher = Main.RoundFloat(Dwarves.Data.Occupation.Fisher/64) + " X 64";}else{Main.Fisher = Main.RoundFloat(Dwarves.Data.Occupation.Fisher);}
	if(Main.RoundFloat(Dwarves.Data.Occupation.Shepherd) >= 64){Main.Shepherd = Main.RoundFloat(Dwarves.Data.Occupation.Shepherd/64) + " X 64";}else{Main.Shepherd = Main.RoundFloat(Dwarves.Data.Occupation.Shepherd);}
	if(Main.RoundFloat(Dwarves.Data.Occupation.Rancher) >= 64){Main.Rancher = Main.RoundFloat(Dwarves.Data.Occupation.Rancher/64) + " X 64";}else{Main.Rancher = Main.RoundFloat(Dwarves.Data.Occupation.Rancher);}
	if(Main.RoundFloat(Dwarves.Data.Occupation.Cook) >= 64){Main.Cook = Main.RoundFloat(Dwarves.Data.Occupation.Cook/64) + " X 64";}else{Main.Cook = Main.RoundFloat(Dwarves.Data.Occupation.Cook);}
	
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
	
	if(Main.RoundFloat(Res.Item.Stone) >= 64){Main.Stone = Main.RoundFloat(Res.Item.Stone/64) + " X 64";}else{Main.Stone = Main.RoundFloat(Res.Item.Stone);}
	if(Main.RoundFloat(Res.Item.Coal) >= 64){Main.Coal = Main.RoundFloat(Res.Item.Coal/64) + " X 64";}else{Main.Coal = Main.RoundFloat(Res.Item.Coal);}
	if(Main.RoundFloat(Res.Item.Dirt) >= 64){Main.Dirt = Main.RoundFloat(Res.Item.Dirt/64) + " X 64";}else{Main.Dirt = Main.RoundFloat(Res.Item.Dirt);}
	if(Main.RoundFloat(Res.Item.Iron) >= 64){Main.Iron = Main.RoundFloat(Res.Item.Iron/64) + " X 64";}else{Main.Iron = Main.RoundFloat(Res.Item.Iron);}
	if(Main.RoundFloat(Res.Item.Gold) >= 64){Main.Gold = Main.RoundFloat(Res.Item.Gold/64) + " X 64";}else{Main.Gold = Main.RoundFloat(Res.Item.Gold);}
	if(Main.RoundFloat(Res.Item.Wood) >= 64){Main.Wood = Main.RoundFloat(Res.Item.Wood/64) + " X 64";}else{Main.Wood = Main.RoundFloat(Res.Item.Wood);}
	if(Main.RoundFloat(Res.Item.Brick) >= 64){Main.Brick = Main.RoundFloat(Res.Item.Brick/64) + " X 64";}else{Main.Brick = Main.RoundFloat(Res.Item.Brick);}
	if(Main.RoundFloat(Res.Item.Meat) >= 64){Main.Meat = Main.RoundFloat(Res.Item.Meat/64) + " X 64";}else{Main.Meat = Main.RoundFloat(Res.Item.Meat);}
	if(Main.RoundFloat(Res.Item.Fish) >= 64){Main.Fish = Main.RoundFloat(Res.Item.Fish/64) + " X 64";}else{Main.Fish = Main.RoundFloat(Res.Item.Fish);}
	if(Main.RoundFloat(Res.Item.Wheat) >= 64){Main.Wheat = Main.RoundFloat(Res.Item.Wheat/64) + " X 64";}else{Main.Wheat = Main.RoundFloat(Res.Item.Wheat);}
	if(Main.RoundFloat(Res.Item.Bread) >= 64){Main.Bread = Main.RoundFloat(Res.Item.Bread/64) + " X 64";}else{Main.Bread = Main.RoundFloat(Res.Item.Bread);}
	if(Main.RoundFloat(Res.Item.Wool) >= 64){Main.Wool = Main.RoundFloat(Res.Item.Wool/64) + " X 64";}else{Main.Wool = Main.RoundFloat(Res.Item.Wool);}
	
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
}

Main.InitGame = function(){
}

Main.InitGame();