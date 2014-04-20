Res = {};
Res.Alive = {};
Res.Item = {};
Res.Food = {};

Res.Alive.Dwarves = 1;

Res.Item.Pick = 2;
Res.Item.Hoe = 0;

Res.Item.Stone = 0;
Res.Item.Dirt = 0;
Res.Item.Iron = 0;
Res.Item.Gold = 0;

saveAll = function(){
CodeAlive = btoa(Res.Alive);
CodeItem = btoa(Res.Item);
CodeFood = btoa(Res.Food);
CodeTogether = CodeAlive + CodeItem + code
}

loadAll = function(){
Res = atob(prompt("Enter Code Please"));
}