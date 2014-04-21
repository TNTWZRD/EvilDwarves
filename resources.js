Res = {};
Res.Alive = {};
Res.Item = {};
Res.Food = {};


Res.Alive.Dwarves = 3;

Res.Item.Pick = 2;
Res.Item.Hoe = 0;

Res.Item.Stone = 0;
Res.Item.Dirt = 0;
Res.Item.Iron = 0;
Res.Item.Gold = 0;


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