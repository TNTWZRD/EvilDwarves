Dwarves = {};
Dwarves.Data = {};
Dwarves.Data.Occupation = {};
Dwarves.New = {};
Dwarves.Miner = {};

Dwarves.Data.Occupation.None = 1;
Dwarves.Data.Occupation.Miner = 1;
Dwarves.Data.Occupation.Farmer = 1;

setInterval('Dwarves.Miner.Mine()', 1000);

Dwarves.New.Dwarf = function(){
	if(Res.Item.Stone >= 20 && Res.Item.Gold >= 2){
		Res.Item.Stone -= 20;
		Res.Item.Gold -= 2;
		Dwarves.Data.Occupation.None += 1;
		Res.Alive.Dwarves += 1;
		alert("Created Dwarf!");
	}
}

Dwarves.Miner.Mine = function(){
	Main.Update();
	if(Dwarves.Data.Occupation.Miner >= 1){
		if(Math.floor(Math.random() * 6) + 1 == 1){
			Res.Item.Iron += (Dwarves.Data.Occupation.Miner / 5);
			Main.Update()
		}else if(Math.floor(Math.random() * 20) + 1 == 1){
			Res.Item.Gold += (Dwarves.Data.Occupation.Miner / 5);
			Main.Update();
		}else{
			Res.Item.Stone += (Dwarves.Data.Occupation.Miner / 5);
			Main.Update();
		}
		Main.Update();
	}
}

Dwarves.New.Miner = function(){
	if(Dwarves.Occupation.None >= 1 && Res.Item.Pick >= 1 && Res.Item.Iron >= 5){
		Res.Item.Iron -= 5;
		Dwarves.Data.Occupation.None -= 1;
		Dwarves.Occupation.Miner += 1;
		Res.Item.Pick -= 1;
		console.log("New Dwarf Miner Created!");
		Main.Update();
		Dwarves.Miner.Mine();
	}
}