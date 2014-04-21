Tools = {};
Tools.New = {};

Tools.New.Pick = function(num){
	if(Res.Item.Stone >= 20 * num){
		Res.Item.Pick += 1 * num;
		Res.Item.Stone -= 20 * num;
	}
}

Tools.New.Hoe = function(num){
	if(Res.Item.Stone >= 20 * num){
		Res.Item.Hoe += 1 * num;
		Res.Item.Stone -= 20 * num;
	}
}