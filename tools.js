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

Tools.New.Bow = function(num){
	if(Res.Item.Wood >= 20 * num && Res.Item.Iron >= 3*num){
		Res.Item.Iron -= 3;
		Res.Item.Bow += 1 * num;
		Res.Item.Wood -= 20 * num;
	}else{
		alert("New Bow Requires: 20 Wood and 3 Iron.");
	}
}

Tools.New.FishingRod = function(num){
	if(Res.Item.Wood >= 20 * num && Res.Item.Iron >= 3*num){
		Res.Item.Iron -= 3;
		Res.Item.FishingRod += 1 * num;
		Res.Item.Wood -= 20 * num;
	}else{
		alert("New Fishing Rod Requires: 20 Wood and 3 Iron.");
	}
}