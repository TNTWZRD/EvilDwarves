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
	if(Main.RoundFloat(Res.Item.Dirt) >= 64){Main.Dirt = Main.RoundFloat(Res.Item.Dirt/64) + " X 64";}else{Main.Dirt = Main.RoundFloat(Res.Item.Dirt);}
	if(Main.RoundFloat(Res.Item.Iron) >= 64){Main.Iron = Main.RoundFloat(Res.Item.Iron/64) + " X 64";}else{Main.Iron = Main.RoundFloat(Res.Item.Iron);}
	if(Main.RoundFloat(Res.Item.Gold) >= 64){Main.Gold = Main.RoundFloat(Res.Item.Gold/64) + " X 64";}else{Main.Gold = Main.RoundFloat(Res.Item.Gold);}
	
	document.getElementById("StoneCount").innerHTML = Main.Stone;
	document.getElementById("DirtCount").innerHTML = Main.Dirt;
	document.getElementById("IronCount").innerHTML = Main.Iron;
	document.getElementById("GoldCount").innerHTML = Main.Gold;
}

Main.InitGame = function(){
	
}

Main.InitGame();