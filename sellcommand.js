Main.Sell = function(Item,Ammount){
	if(Item == "Stone"){
	Res.Item.Stone -= Ammount;
	Res.Currency += (Ammount/100)*500;
	Update();
	}
	if(Item == "Coal"){
	Res.Item.Coal -= Ammount;
	Res.Currency += (Ammount/100)*750;
	Update();
	}
	if(Item == "Dirt"){
	Res.Item.Dirt -= Ammount;
	Res.Currency += (Ammount/100)*375;
	Update();
	}
	if(Item == "Iron"){
	Res.Item.Iron -= Ammount;
	Res.Currency += (Ammount/100)*5000;
	Update();
	}
	if(Item == "Gold"){
	Res.Item.Gold -= Ammount;
	Res.Currency += (Ammount/100)*7500;
	Update();
	}
	if(Item == "Wood"){
	Res.Item.Wood -= Ammount;
	Res.Currency += (Ammount/100)*450;
	Update();
	}
	if(Item == "Brick"){
	Res.Item.Brick -= Ammount;
	Res.Currency += (Ammount/100)*350;
	Update();
	}
	if(Item == "Meat"){
	Res.Item.Meat -= Ammount;
	Res.Currency += (Ammount/100)*800;
	Update();
	}
	if(Item == "Fish"){
	Res.Item.Fish -= Ammount;
	Res.Currency += (Ammount/100)*375;
	Update();
	}
	if(Item == "Wheat"){
	Res.Item.Wheat -= Ammount;
	Res.Currency += (Ammount/100)*200;
	Update();
	}
	if(Item == "Bread"){
	Res.Item.Bread -= Ammount;
	Res.Currency += (Ammount/100)*200;
	Update();
	}
	if(Item == "Wool"){
	Res.Item.Wool -= Ammount;
	Res.Currency += (Ammount/100)*375;
	Update();
	}
}