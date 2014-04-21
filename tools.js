Tools = {};
Tools.New = {};

Tools.New.Pick = function(num){
	if(Res.Item.Stone >= 20 * num){
		Res.Item.Pick += 1 * num;
		Res.Item.Stone -= 20 * num;
	}else{
		alert("New Pick Requires: 20 Stone.");
	}
}

Tools.New.Hoe = function(num){
	if(Res.Item.Stone >= 20 * num){
		Res.Item.Hoe += 1 * num;
		Res.Item.Stone -= 20 * num;
	}else{
		alert("New Hoe Requires: 20 Stone.");
	}
}