Dwarves = {};
Dwarves.Occupation = {};
Dwarves.New = {};

Dwarves.Occupation.None = 1;
Dwarves.Occupation.Miner = 0;
Dwarves.Occupation.Farmer = 0;


Dwarves.New.Miner = function(){
	if(Dwarves.Occupation.None >= 1 && Res.Item.Pick >= 1){
		Dwarves.Occupation.None -= 1;
		Dwarves.Occupation.Miner += 1;
		Res.Item.Pick -= 1;
		console.log("New Dwarf Miner Created!");
	}
}