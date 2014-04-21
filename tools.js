Tools = {};
Tools.New = {};

Tools.New.Pick = function(num){
	if(Res.Item.Stone >= 20 * num && Res.Item.Wood >= 3*num){
		Res.Item.Wood -= 3;
		Res.Item.Pick += 1 * num;
		Res.Item.Stone -= 20 * num;
	}else{
		alert("New Pick Requires: 20 Stone and 3 Wood.");
	}
}

Tools.New.Hoe = function(num){
	if(Res.Item.Stone >= 20 * num && Res.Item.Wood >= 3*num){
		Res.Item.Wood -= 3;
		Res.Item.Hoe += 1 * num;
		Res.Item.Stone -= 20 * num;
	}else{
		alert("New Hoe Requires: 20 Stone and 3 Wood.");
	}
}

Tools.New.Axe = function(num){
	if(Res.Item.Stone >= 20 * num && Res.Item.Wood >= 3*num){
		Res.Item.Wood -= 3;
		Res.Item.Axe += 1 * num;
		Res.Item.Stone -= 20 * num;
	}else{
		alert("New Axe Requires: 20 Stone and 3 Wood.");
	}
}