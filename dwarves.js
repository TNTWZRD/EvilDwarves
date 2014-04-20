Dwarves = {};
Dwarves.Occupation = {};
Dwarves.New = {};
Dwarves.Miner = {};

Dwarves.Occupation.None = 1;
Dwarves.Occupation.Miner = 0;
Dwarves.Occupation.Farmer = 0;

setInterval('Dwarves.Miner.Mine()', 500);

Dwarves.New.Dwarf = function(){
	if(Res.Item.Stone >= 20 && Res.Item.Gold >= 2){
		Res.Item.Stone -= 20;
		Res.Item.Gold -= 2;
		Dwarves.Occupation.None += 1;
		Res.Alive.Dwarves += 1;
		alert("Created Dwarf!");
	}
}

Dwarves.Miner.Mine = function(){
	if(Dwarves.Occupation.Miner >= 1){
		if(Math.floor(Math.random() * 6) + 1 == 1){
			Res.Item.Iron += (Dwarves.Occupation.Miner / 5);
			Main.Update()
		}else if(Math.floor(Math.random() * 20) + 1 == 1){
			Res.Item.Gold += (Dwarves.Occupation.Miner / 5);
			Main.Update();
		}else{
			Res.Item.Stone += (Dwarves.Occupation.Miner / 5);
			Main.Update();
		}
		Main.Update();
	}
}

Dwarves.New.Miner = function(){
	if(Dwarves.Occupation.None >= 1 && Res.Item.Pick >= 1){
		Dwarves.Occupation.None -= 1;
		Dwarves.Occupation.Miner += 1;
		Res.Item.Pick -= 1;
		console.log("New Dwarf Miner Created!");
		Main.Update();
		Dwarves.Miner.Mine();
	}
}