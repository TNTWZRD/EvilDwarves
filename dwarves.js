Dwarves = {};
Dwarves.Data = {};
Dwarves.Data.Occupation = {};
Dwarves.New = {};
Dwarves.Miner = {};

Dwarves.Data.Occupation.None = 1;
Dwarves.Data.Occupation.Miner = 1;
Dwarves.Data.Occupation.Farmer = 1;

setInterval('Dwarves.Miner.Mine()', 1000);
setInterval('SaveRes()', 60000*5);

Dwarves.New.Dwarf = function(num){
	if(Res.Item.Stone >= 20 *num && Res.Item.Gold >= .5 *num){
		Res.Item.Stone -= 20* num;
		Res.Item.Gold -= .5 *num;
		Dwarves.Data.Occupation.None += 1*num;
		Res.Alive.Dwarves += 1*num;
		alert("Created Dwarf!");
	}
}

Dwarves.Miner.Mine = function(){
	Update();
	if(Dwarves.Data.Occupation.Miner >= 1){
		if(Math.floor(Math.random() * 14) + 1 == 1){
			Res.Item.Iron += (Dwarves.Data.Occupation.Miner / 6);
			Update()
		}else if(Math.floor(Math.random() * 20) + 1 == 1){
			Res.Item.Gold += (Dwarves.Data.Occupation.Miner / 6);
			Update();
		}else{
			Res.Item.Stone += (Dwarves.Data.Occupation.Miner / 6);
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
	}
}