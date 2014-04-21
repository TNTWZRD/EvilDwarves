Dwarves = {};
Dwarves.Data = {};
Dwarves.Data.Occupation = {};
Dwarves.New = {};
Dwarves.Miner = {};
Dwarves.Farmer = {};
Dwarves.Logger = {};
Dwarves.Hunter = {};
Dwarves.Fisher = {};

Dwarves.Data.Occupation.None = 10;
Dwarves.Data.Occupation.Miner = 0;
Dwarves.Data.Occupation.Farmer = 0;
Dwarves.Data.Occupation.Logger = 0;
Dwarves.Data.Occupation.Hunter = 0;
Dwarves.Data.Occupation.Fisher = 0;
Dwarves.Data.Occupation.Shepherd = 0;
Dwarves.Data.Occupation.Rancher = 0;
Dwarves.Data.Occupation.Cook = 0;

setInterval('Dwarves.RunAll()', 2000);
setInterval('SaveRes()', 60000);

Dwarves.RunAll = function(){
	if(Res.Item.Meat >> 0){
		Dwarves.Miner.Mine();
		Dwarves.Farmer.Farm();
		Dwarves.Logger.Logg();
		Dwarves.Hunter.Hunt();
		Dwarves.Fisher.Fish();
		Res.Item.Meat -= 0.02 * Res.Alive.Dwarves;
	}else if(Res.Item.Fish >> 0){
		Dwarves.Miner.Mine();
		Dwarves.Farmer.Farm();
		Dwarves.Logger.Logg();
		Dwarves.Hunter.Hunt();
		Dwarves.Fisher.Fish();
		Res.Item.Fish -= 0.02 * Res.Alive.Dwarves;
	}else{
		alert("You Are Out Of Food.... You Failed Your Mission To Survive. Good Luck Next Time! ");
		localStorage.clear();
		window.location.reload();
	}
}

Dwarves.New.Dwarf = function(num){
	if(Res.Item.Stone >= 20 *num && Res.Item.Gold >= .5 *num){
		Res.Item.Stone -= 20* num;
		Res.Item.Gold -= .5 *num;
		Dwarves.Data.Occupation.None += 1*num;
		Res.Alive.Dwarves += 1*num;
	}else{
		alert("Error New Dwarf Requires: 20 Stone & 0.5 Gold");
	}
}

//Mining Dwarf 

Dwarves.Miner.Mine = function(){
	Update();
	if(Dwarves.Data.Occupation.Miner >= 1){
		if(Math.floor(Math.random() * 14) + 1 == 1){
			Res.Item.Iron += (Dwarves.Data.Occupation.Miner / 6);
			Res.Item.Dirt += (Dwarves.Data.Occupation.Miner / 3)
			Update()
		}else if(Math.floor(Math.random() * 20) + 1 == 1){
			Res.Item.Gold += (Dwarves.Data.Occupation.Miner / 6);
			Res.Item.Dirt += (Dwarves.Data.Occupation.Miner / 3)
			Update();
		}else{
			Res.Item.Stone += (Dwarves.Data.Occupation.Miner / 6);
			Res.Item.Dirt += (Dwarves.Data.Occupation.Miner / 12)
			Res.Item.Coal += (Dwarves.Data.Occupation.Miner / 12)
			
			Update();
		}
		Update();
	}
}

Dwarves.New.Miner = function(num){
	if(Dwarves.Data.Occupation.None >= 1*num && Res.Item.Pick >= 1*num && Res.Item.Iron >= 2*num){
		Res.Item.Iron -= 2*num;
		Dwarves.Data.Occupation.None -= 1*num;
		Dwarves.Data.Occupation.Miner += 1*num;
		Res.Item.Pick -= 1*num;
		console.log("New Dwarf Miner Created!");
		Update();
		Dwarves.Miner.Mine();
	}else{
		alert("Error New Mining Dwarf Requires: 2 Iron, 1 Pick, and 1 New Dwarf");
	}
}

//Farming Dwarf

Dwarves.Farmer.Farm = function(){
	if(Dwarves.Data.Occupation.Farmer >= 1){
		Res.Item.Wheat += (Dwarves.Data.Occupation.Farmer / 20);
		Update();
	}
}

Dwarves.New.Farmer = function(num){
	if(Dwarves.Data.Occupation.None >= 1*num && Res.Item.Hoe >= 1*num && Res.Item.Dirt >= 2*num){
		Res.Item.Dirt -= 2*num;
		Dwarves.Data.Occupation.None -= 1*num;
		Dwarves.Data.Occupation.Farmer += 1*num;
		Res.Item.Hoe -= 1*num;
		console.log("New Dwarf Farmer Created!");
		Update();
	}else{
		alert("Error New Farming Dwarf Requires: 2 Dirt, 1 Hoe, and 1 New Dwarf");
	}
}

//Logging Dwarf

Dwarves.Logger.Logg = function(){
	if(Dwarves.Data.Occupation.Logger >= 1){
		Res.Item.Wood += (Dwarves.Data.Occupation.Logger / 5);
		Update();
	}
}

Dwarves.New.Logger = function(num){
	if(Dwarves.Data.Occupation.None >= 1*num && Res.Item.Axe >= 1*num && Res.Item.Wood >= 2*num){
		Res.Item.Wood -= 2*num;
		Dwarves.Data.Occupation.None -= 1*num;
		Dwarves.Data.Occupation.Logger += 1*num;
		Res.Item.Axe -= 1*num;
		console.log("New Dwarf Logger Created!");
		Update();
	}else{
		alert("Error New Logger Dwarf Requires: 2 Wood, 1 Axe, and 1 New Dwarf");
	}
}

//Hunting Dwarf

Dwarves.Hunter.Hunt = function(){
	if(Dwarves.Data.Occupation.Hunter >= 1){
		Res.Item.Meat += (Dwarves.Data.Occupation.Hunter / 5);
		Update();
	}
}

Dwarves.New.Hunter = function(num){
	if(Dwarves.Data.Occupation.None >= 1*num && Res.Item.Bow >= 1*num && Res.Item.Meat >= 2*num){
		Res.Item.Meat -= 2*num;
		Dwarves.Data.Occupation.None -= 1*num;
		Dwarves.Data.Occupation.Hunter += 1*num;
		Res.Item.Bow -= 1*num;
		console.log("New Dwarf Hunter Created!");
		Update();
	}else{
		alert("Error New Logger Dwarf Requires: 2 Meat, 1 Bow, and 1 New Dwarf");
	}
}

//Fishing Dwarf

Dwarves.Fisher.Fish = function(){
	if(Dwarves.Data.Occupation.Fisher >= 1){
		Res.Item.Fish += (Dwarves.Data.Occupation.Fisher / 30);
		Update();
	}
}

Dwarves.New.Fisher = function(num){
	if(Dwarves.Data.Occupation.None >= 1*num && Res.Item.FishingRod >= 1*num && Res.Item.Fish >= 2*num){
		Res.Item.Fish -= 2*num;
		Dwarves.Data.Occupation.None -= 1*num;
		Dwarves.Data.Occupation.Fisher += 1*num;
		Res.Item.FishingRod -= 1*num;
		console.log("New Dwarf Fisher Created!");
		Update();
	}else{
		alert("Error New Fisher Dwarf Requires: 2 Fish, 1 Fishing Rod, and 1 New Dwarf");
	}
}
