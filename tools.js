Tools = {};
Tools.New = {};

Tools.New.Pick = function(){
	if(Res.Item.Stone >= 20){
		Res.Item.Pick += 1;
		Res.Item.Stone -= 20;
	}
}

Tools.New.Hoe = function(){
	if(Res.Item.Stone >= 20){
		Res.Item.Hoe += 1;
		Res.Item.Stone -= 20;
	}
}