Res = {};
Res.Alive = {};
Res.Item = {};
Res.Food = {};


Res.Alive.Dwarves = 10;

Res.Item.Pick = 2;
Res.Item.Axe = 2;
Res.Item.Hoe = 2;
Res.Item.Bow= 2;
Res.Item.FishingRod = 2;
Res.Item.Shear = 2;
Res.Item.Cane = 2;
Res.Item.Stove = 2;

Res.Item.Stone = 10;
Res.Item.Dirt = 10;
Res.Item.Iron = 10;
Res.Item.Gold = 10;
Res.Item.Wood = 10;
Res.Item.Brick = 10;
Res.Item.Meat = 10;
Res.Item.Fish = 10;
Res.Item.Wheat = 10;
Res.Item.Bread = 10;
Res.Item.Coal = 10;
Res.Item.Wool = 10;



SaveRes = function(){
	localStorage.setItem('ResObject', JSON.stringify(Res));
	localStorage.setItem('DwarvesObject', JSON.stringify(Dwarves.Data));
	console.log("Saved");
	Update();
}

LoadRes = function(){
	if(localStorage.getItem("ResObject") != null){
		Res = JSON.parse(localStorage.getItem('ResObject'));
		Dwarves.Data = JSON.parse(localStorage.getItem('DwarvesObject'));
		console.log(Dwarves);
		console.log("Loaded");
		Update();
	}
}

if(localStorage.getItem("ResObject") != null){LoadRes();}
Update();