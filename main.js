Main = {};
Main.Runnning = true;

Main.RoundFloat = function(n) {
    return (Math.round(n * 10) / 10).toFixed(2);
}


Main.Update = function(){
	
	// Update Item Table
	
	document.getElementById("DwarvesCount").innerHTML = Res.Alive.Dwarves;
	document.getElementById("PickaxesCount").innerHTML = Res.Item.Pick;
	document.getElementById("HoeCount").innerHTML = Res.Item.Hoe;
	
	// Update Dwarf Table
	
	document.getElementById("DwarfNoneCount").innerHTML = Dwarves.Data.Occupation.None;
	document.getElementById("DwarfMinerCount").innerHTML = Dwarves.Data.Occupation.Miner;
	document.getElementById("DwarfFarmerCount").innerHTML = Dwarves.Data.Occupation.Farmer;
	
	// Update Resources Table
	
	document.getElementById("StoneCount").innerHTML = Main.RoundFloat(Res.Item.Stone);
	document.getElementById("DirtCount").innerHTML = Main.RoundFloat(Res.Item.Dirt);
	document.getElementById("IronCount").innerHTML = Main.RoundFloat(Res.Item.Iron);
	document.getElementById("GoldCount").innerHTML = Main.RoundFloat(Res.Item.Gold);
}

Main.InitGame = function(){
	
}

Main.InitGame();