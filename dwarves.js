Dwarves = {};
Dwarves.Data = {};
Dwarves.Data.Occupation = {};
Dwarves.New = {};
Dwarves.Miner = {};
Dwarves.Farmer = {};
Dwarves.Logger = {};
Dwarves.Hunter = {};

Dwarves.Data.Occupation.None = 1;
Dwarves.Data.Occupation.Miner = 1;
Dwarves.Data.Occupation.Farmer = 1;
Dwarves.Data.Occupation.Logger = 1;
Dwarves.Data.Occupation.Hunter = 1;
Dwarves.Data.Occupation.Fisher = 1;
Dwarves.Data.Occupation.Shepherd = 1;
Dwarves.Data.Occupation.Rancher = 1;
Dwarves.Data.Occupation.Cook = 1;

setInterval('Dwarves.RunAll()', 1000);
setInterval('SaveRes()', 60000);

Dwarves.RunAll = function(){
	Dwarves.Miner.Mine();
	Dwarves.Farmer.Farm();
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
