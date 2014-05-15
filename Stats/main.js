Main = {};
Main.Stats = {};

Main.RoundFloat = function(n) {
    return (Math.round(n * 10) / 10).toFixed(2);
}

Main.Stats.Res = [];
Main.Stats.Dwarves = [];
Main.Stats.APT = [];

Main.LoadStats = function(){
	if(localStorage.getItem("ResObject") != null){
		Main.Stats.Res = JSON.parse(atob(localStorage.getItem('ResObject')));
		Main.Stats.Dwarves = JSON.parse(atob(localStorage.getItem('DwarvesObject')));
		Main.Stats.APT = JSON.parse(atob(localStorage.getItem('APT')));
		console.log("Loaded");
		Main.SetData();
	}
}

Main.SetData = function(){
	document.getElementById("Stat.Dwarves").innerHTML = Main.Stats.Res.Alive.Dwarves;
	document.getElementById("Stat.Picks").innerHTML = Main.Stats.Res.Item.Pick;
	document.getElementById("Stat.Axes").innerHTML = Main.Stats.Res.Item.Axe;
	document.getElementById("Stat.Hoes").innerHTML = Main.Stats.Res.Item.Hoe;
	document.getElementById("Stat.Bows").innerHTML = Main.Stats.Res.Item.Bow;
	document.getElementById("Stat.Dwarves").innerHTML = Main.Stats.Res.Alive.Dwarves;
	document.getElementById("Stat.FishingRods").innerHTML = Main.Stats.Res.Item.FishingRod;
	document.getElementById("Stat.Shears").innerHTML = Main.Stats.Res.Item.Shear;
	document.getElementById("Stat.Cane").innerHTML = Main.Stats.Res.Item.Cane;
	document.getElementById("Stat.Stove").innerHTML = Main.Stats.Res.Item.Stove;
	
	document.getElementById("Stat.Stone").innerHTML = Main.RoundFloat(Main.Stats.Res.Item.Stone);
	document.getElementById("Stat.Coal").innerHTML = Main.RoundFloat(Main.Stats.Res.Item.Coal);
	document.getElementById("Stat.Dirt").innerHTML = Main.RoundFloat(Main.Stats.Res.Item.Dirt);
	document.getElementById("Stat.Iron").innerHTML = Main.RoundFloat(Main.Stats.Res.Item.Iron);
	document.getElementById("Stat.Gold").innerHTML = Main.RoundFloat(Main.Stats.Res.Item.Gold);
	document.getElementById("Stat.Wood").innerHTML = Main.RoundFloat(Main.Stats.Res.Item.Wood);
	document.getElementById("Stat.Brick").innerHTML = Main.RoundFloat(Main.Stats.Res.Item.Brick);
	document.getElementById("Stat.Meat").innerHTML = Main.RoundFloat(Main.Stats.Res.Item.Meat);
	document.getElementById("Stat.Fish").innerHTML = Main.RoundFloat(Main.Stats.Res.Item.Fish);
	document.getElementById("Stat.Wheat").innerHTML = Main.RoundFloat(Main.Stats.Res.Item.Wheat);
	document.getElementById("Stat.Bread").innerHTML = Main.RoundFloat(Main.Stats.Res.Item.Bread);
	document.getElementById("Stat.Wool").innerHTML = Main.RoundFloat(Main.Stats.Res.Item.Wool);
	
	document.getElementById("Stat.Stone.PerTick").innerHTML = Main.RoundFloat(Main.Stats.APT[0]);
	document.getElementById("Stat.Coal.PerTick").innerHTML = Main.RoundFloat(Main.Stats.APT[1]);
	document.getElementById("Stat.Dirt.PerTick").innerHTML = Main.RoundFloat(Main.Stats.APT[2]);
	document.getElementById("Stat.Iron.PerTick").innerHTML = "N/A";
	document.getElementById("Stat.Gold.PerTick").innerHTML = "N/A";
	document.getElementById("Stat.Wood.PerTick").innerHTML = Main.RoundFloat(Main.Stats.APT[3]);
	document.getElementById("Stat.Brick.PerTick").innerHTML = Main.RoundFloat(Main.Stats.APT[4]);
	document.getElementById("Stat.Meat.PerTick").innerHTML = Main.RoundFloat(Main.Stats.APT[5]);
	document.getElementById("Stat.Fish.PerTick").innerHTML = Main.RoundFloat(Main.Stats.APT[6]);
	document.getElementById("Stat.Wheat.PerTick").innerHTML = Main.RoundFloat(Main.Stats.APT[7]);
	document.getElementById("Stat.Bread.PerTick").innerHTML = "N/A";
	document.getElementById("Stat.Wool.PerTick").innerHTML = Main.RoundFloat(Main.Stats.APT[8]);
}

setInterval(Main.LoadStats(), 60000);