Dwarves = {};
Dwarves.Data = {};
Dwarves.Data.Occupation = {};
Dwarves.New = {};
Dwarves.Miner = {};
Dwarves.Farmer = {};
Dwarves.Logger = {};
Dwarves.Hunter = {};
Dwarves.Fisher = {};
Dwarves.Shepherd = {};
Dwarves.Rancher = {};
Dwarves.Cook = {};

Dwarves.Data.Occupation.None = 6;
Dwarves.Data.Occupation.Miner = 1;
Dwarves.Data.Occupation.Farmer = 0;
Dwarves.Data.Occupation.Logger = 0;
Dwarves.Data.Occupation.Hunter = 3;
Dwarves.Data.Occupation.Fisher = 0;
Dwarves.Data.Occupation.Shepherd = 0;
Dwarves.Data.Occupation.Rancher = 0;
Dwarves.Data.Occupation.Cook = 0;

Dwarves.Pause = true;
setInterval('Dwarves.RunAll()', 1000);
setInterval('SaveRes()', 1000);

Dwarves.RunAll = function(){
	Update();
	if(Dwarves.Pause != true){
	if(Res.Item.Meat >= ((0.1 * Res.Alive.Dwarves)-(Dwarves.Data.Occupation.Cook / 6)) || Res.Item.Fish >= ((0.1 * Res.Alive.Dwarves)-(Dwarves.Data.Occupation.Cook / 6))){
		Dwarves.Miner.Mine();
		Dwarves.Farmer.Farm();
		Dwarves.Logger.Logg();
		Dwarves.Hunter.Hunt();
		Dwarves.Fisher.Fish();
		Dwarves.Shepherd.Herd();
		Dwarves.Rancher.Ranch();
		Dwarves.Cook.Cook();
		if(Res.Item.Meat >= ((0.1 * Res.Alive.Dwarves)-(Dwarves.Data.Occupation.Cook / 6))){
			Res.Item.Meat -= ((0.1 * Res.Alive.Dwarves)-(Dwarves.Data.Occupation.Cook / 6));
		}else{
			Res.Item.Fish -= ((0.1 * Res.Alive.Dwarves)-(Dwarves.Data.Occupation.Cook / 6));
		}
	}else{
		alert("You Are Out Of Food.... You Failed Your Mission To Survive. Good Luck Next Time! ");
		localStorage.clear();
		window.location.reload();
	}
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
		Res.Item.Meat += (Dwarves.Data.Occupation.Hunter / 1.3);
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

//Shepherd Dwarf

Dwarves.Shepherd.Herd = function(){
	if(Dwarves.Data.Occupation.Shepherd >= 1){
		Res.Item.Wool += (Dwarves.Data.Occupation.Shepherd / 10);
		Update();
	}
}

Dwarves.New.Shepherd = function(num){
	if(Dwarves.Data.Occupation.None >= 1*num && Res.Item.Shear >= 1*num && Res.Item.Cane >= 1*num && Res.Item.Wool >= 2*num){
		Res.Item.Wool -= 2*num;
		Dwarves.Data.Occupation.None -= 1*num;
		Dwarves.Data.Occupation.Shepherd += 1*num;
		Res.Item.Cane -= 1*num;
		Res.Item.Shear -= 1*num;
		console.log("New Dwarf Shepherd Created!");
		Update();
	}else{
		alert("Error New Shepherd Dwarf Requires: 2 wool, 1 Cane, 1 Shear, and 1 New Dwarf");
	}
}

//Rancher Dwarf

Dwarves.Rancher.Ranch = function(){
	if(Dwarves.Data.Occupation.Rancher >= 1){
		Res.Item.Meat += (Dwarves.Data.Occupation.Rancher / 10);
		Res.Item.Leather += (Dwarves.Data.Occupation.Rancher / 10);
		Update();
	}
}

Dwarves.New.Rancher = function(num){
	if(Dwarves.Data.Occupation.None >= 1*num && Res.Item.Leather >= 1*num && Res.Item.Meat >= 2*num){
		Res.Item.Meat -= 2*num;
		Dwarves.Data.Occupation.None -= 1*num;
		Dwarves.Data.Occupation.Rancher += 1*num;
		Res.Item.Leather -= 1*num;
		console.log("New Dwarf Rancher Created!");
		Update();
	}else{
		alert("Error New Rancher Dwarf Requires: 2 Meat, 1 Leather, and 1 New Dwarf");
	}
}

//Cook Dwarf

Dwarves.Cook.Cook = function(){
	if(Dwarves.Data.Occupation.Cook >= 1 && Res.Item.Coal >= (1*Dwarves.Data.Occupation.Cook)){
		Res.Item.Meat += (Dwarves.Data.Occupation.Cook / 50);
		Res.Item.Coal -= (1*Dwarves.Data.Occupation.Cook);
		Update();
	}
}

Dwarves.New.Cook = function(num){
	if(Dwarves.Data.Occupation.None >= 1*num && Res.Item.Stove >= 1*num && Res.Item.Meat >= 2*num){
		Res.Item.Meat -= 2*num;
		Dwarves.Data.Occupation.None -= 1*num;
		Dwarves.Data.Occupation.Cook += 1*num;
		Res.Item.Stove -= 1*num;
		console.log("New Dwarf Cook Created!");
		Update();
	}else{
		alert("Error New Cook Dwarf Requires: 2 Meat, 1 Stove, and 1 New Dwarf");
	}
}