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

Tools.New.Cane = function(num){
	if(Res.Item.Wood >= 15 * num && Res.Item.Iron >= 1*num){
		Res.Item.Iron -= 1;
		Res.Item.Cane += 1 * num;
		Res.Item.Wood -= 15 * num;
	}else{
		alert("New Cane Requires: 15 Wood and 1 Iron.");
	}
}

Tools.New.Shears = function(num){
	if(Res.Item.Wood >= 2 * num && Res.Item.Iron >= 3*num){
		Res.Item.Iron -= 3;
		Res.Item.Shears += 1 * num;
		Res.Item.Wood -= 2 * num;
	}else{
		alert("New Shears Requires: 2 Wood and 3 Iron.");
	}
}

Tools.New.Stove = function(num){
	if(Res.Item.Wood >= 20 * num && Res.Item.Stone >= 15*num){
		Res.Item.Stone -= 15;
		Res.Item.Stove += 1 * num;
		Res.Item.Wood -= 20 * num;
	}else{
		alert("New Stove Requires: 20 Wood and 15 Stone.");
	}
}