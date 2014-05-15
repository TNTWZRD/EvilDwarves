Res = {};
Res.Alive = {};
Res.Item = {};
Res.Food = {};

RandomNumberRes = function(){
	return Math.floor(Math.random() * 10) + 10;
}

Res.Alive.Dwarves = 10;

Res.Item.Pick = 2;
Res.Item.Axe = 2;
Res.Item.Hoe = 2;
Res.Item.Bow= 2;
Res.Item.FishingRod = 2;
Res.Item.Shear = 2;
Res.Item.Cane = 2;
Res.Item.Stove = 2;

Res.Item.Stone = RandomNumberRes();
Res.Item.Dirt = RandomNumberRes();
Res.Item.Iron = RandomNumberRes();
Res.Item.Gold = RandomNumberRes();
Res.Item.Wood = RandomNumberRes();
Res.Item.Brick = RandomNumberRes();
Res.Item.Meat = RandomNumberRes();
Res.Item.Fish = RandomNumberRes();
Res.Item.Wheat = RandomNumberRes();
Res.Item.Bread = RandomNumberRes();
Res.Item.Coal = RandomNumberRes();
Res.Item.Wool = RandomNumberRes();

Res.Currency = RandomNumberRes()+50; //Averages About $65

Update();
document.getElementById("Pause").innerHTML = " UnPause ";