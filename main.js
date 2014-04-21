Main = {};
Main.Runnning = true;

Main.RoundFloat = function(n) {
    return (Math.round(n * 10) / 10).toFixed(2);
}


Update = function(){
	
	// Update Item Table
	
	if(Main.RoundFloat(Res.Alive.Dwarves) >= 64){Main.DwarfCount = Main.RoundFloat(Res.Alive.Dwarves/64) + " X 64";}else{Main.DwarfCount = Main.RoundFloat(Res.Alive.Dwarves);}
	if(Main.RoundFloat(Res.Item.Pick) >= 64){Main.Pick = Main.RoundFloat(Res.Item.Pick/64) + " X 64";}else{Main.Pick = Main.RoundFloat(Res.Item.Pick);}
	if(Main.RoundFloat(Res.Item.Hoe) >= 64){Main.Hoe = Main.RoundFloat(Res.Item.Hoe/64) + " X 64";}else{Main.Hoe = Main.RoundFloat(Res.Item.Hoe);}
	
	document.getElementById("DwarfCount").innerHTML = Main.DwarfCount;
	document.getElementById("PickaxesCount").innerHTML = Main.Pick;
	document.getElementById("HoeCount").innerHTML = Main.Hoe;
	
	// Update Dwarf Table
	
	if(Main.RoundFloat(Dwarves.Data.Occupation.None) >= 64){Main.None = Main.RoundFloat(Dwarves.Data.Occupation.None/64) + " X 64";}else{Main.None = Main.RoundFloat(Dwarves.Data.Occupation.None);}
	if(Main.RoundFloat(Dwarves.Data.Occupation.Miner) >= 64){Main.Miner = Main.RoundFloat(Dwarves.Data.Occupation.Miner/64) + " X 64";}else{Main.Miner = Main.RoundFloat(Dwarves.Data.Occupation.Miner);}
	if(Main.RoundFloat(Dwarves.Data.Occupation.Farmer) >= 64){Main.Farmer = Main.RoundFloat(Dwarves.Data.Occupation.Farmer/64) + " X 64";}else{Main.Farmer = Main.RoundFloat(Dwarves.Data.Occupation.Farmer);}
	
	document.getElementById("DwarfNoneCount").innerHTML = Main.None;
	document.getElementById("DwarfMinerCount").innerHTML = Main.Miner;
	document.getElementById("DwarfFarmerCount").innerHTML = Main.Farmer;
	
	// Update Resources Table
	
	if(Main.RoundFloat(Res.Item.Stone) >= 64){Main.Stone = Main.RoundFloat(Res.Item.Stone/64) + " X 64";}else{Main.Stone = Main.RoundFloat(Res.Item.Stone);}
	if(Main.RoundFloat(Res.Item.Coal) >= 64){Main.Coal = Main.RoundFloat(Res.Item.Coal/64) + " X 64";}else{Main.Coal = Main.RoundFloat(Res.Item.Coal);}
	if(Main.RoundFloat(Res.Item.Dirt) >= 64){Main.Dirt = Main.RoundFloat(Res.Item.Dirt/64) + " X 64";}else{Main.Dirt = Main.RoundFloat(Res.Item.Dirt);}
	if(Main.RoundFloat(Res.Item.Iron) >= 64){Main.Iron = Main.RoundFloat(Res.Item.Iron/64) + " X 64";}else{Main.Iron = Main.RoundFloat(Res.Item.Iron);}
	if(Main.RoundFloat(Res.Item.Gold) >= 64){Main.Gold = Main.RoundFloat(Res.Item.Gold/64) + " X 64";}else{Main.Gold = Main.RoundFloat(Res.Item.Gold);}
	if(Main.RoundFloat(Res.Item.Wood) >= 64){Main.Wood = Main.RoundFloat(Res.Item.Wood/64) + " X 64";}else{Main.Wood = Main.RoundFloat(Res.Item.Wood);}
	if(Main.RoundFloat(Res.Item.Brick) >= 64){Main.Brick = Main.RoundFloat(Res.Item.Brick/64) + " X 64";}else{Main.Brick = Main.RoundFloat(Res.Item.Brick);}
	if(Main.RoundFloat(Res.Item.Meat) >= 64){Main.Meat = Main.RoundFloat(Res.Item.Meat/64) + " X 64";}else{Main.Meat = Main.RoundFloat(Res.Item.Meat);}
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
	document.getElementById("WheatCount").innerHTML = Main.Wheat;
	document.getElementById("BreadCount").innerHTML = Main.Bread;
	document.getElementById("WoolCount").innerHTML = Main.Wool;
}

Main.InitGame = function(){
	
}

Main.InitGame();