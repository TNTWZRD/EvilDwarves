// Shop Button Intagration

$(function(){ //Buy 
		$("#BuyStone").click(function(event) {
			event.preventDefault();
			if(Res.Currency >= 500){
			Res.Item.Stone += 100;
			Res.Currency -= 500;
			Update();
			}
		});
	}
);

$(function(){ //Sell
		$("#SellStone").click(function(event) {
			event.preventDefault();
			if(Res.Item.Stone >= 100){
			Res.Item.Stone -= 100;
			Res.Currency += 500;
			Update();
			}
		});
	}
);

$(function(){ //Buy 
		$("#BuyCoal").click(function(event) {
			event.preventDefault();
			if(Res.Currency >= 750){
			Res.Item.Coal += 100;
			Res.Currency -= 750;
			Update();
			}
		});
	}
);

$(function(){ //Sell
		$("#SellCoal").click(function(event) {
			event.preventDefault();
			if(Res.Item.Coal >= 100){
			Res.Item.Coal -= 100;
			Res.Currency += 750;
			Update();
			}
		});
	}
);

$(function(){ //Buy 
		$("#BuyDirt").click(function(event) {
			event.preventDefault();
			if(Res.Currency >= 375){
			Res.Item.Dirt += 100;
			Res.Currency -= 375;
			Update();
			}
		});
	}
);

$(function(){ //Sell
		$("#SellDirt").click(function(event) {
			event.preventDefault();
			if(Res.Item.Dirt >= 100){
			Res.Item.Dirt -= 100;
			Res.Currency += 375;
			Update();
			}
		});
	}
);

$(function(){ //Buy 
		$("#BuyIron").click(function(event) {
			event.preventDefault();
			if(Res.Currency >= 5000){
			Res.Item.Iron += 100;
			Res.Currency -= 5000;
			Update();
			}
		});
	}
);

$(function(){ //Sell
		$("#SellIron").click(function(event) {
			event.preventDefault();
			if(Res.Item.Iron >= 100){
			Res.Item.Iron -= 100;
			Res.Currency += 5000;
			Update();
			}
		});
	}
);

$(function(){ //Buy 
		$("#BuyGold").click(function(event) {
			event.preventDefault();
			if(Res.Currency >= 7500){
			Res.Item.Gold += 100;
			Res.Currency -= 7500;
			Update();
			}
		});
	}
);

$(function(){ //Sell
		$("#SellGold").click(function(event) {
			event.preventDefault();
			if(Res.Item.Gold >= 100){
			Res.Item.Gold -= 100;
			Res.Currency += 7500;
			Update();
			}
		});
	}
);

$(function(){ //Buy 
		$("#BuyWood").click(function(event) {
			event.preventDefault();
			if(Res.Currency >= 450){
			Res.Item.Wood += 100;
			Res.Currency -= 450;
			Update();
			}
		});
	}
);

$(function(){ //Sell
		$("#SellWood").click(function(event) {
			event.preventDefault();
			if(Res.Item.Wood >= 100){
			Res.Item.Wood -= 100;
			Res.Currency += 450;
			Update();
			}
		});
	}
);

$(function(){ //Buy 
		$("#BuyBrick").click(function(event) {
			event.preventDefault();
			if(Res.Currency >= 350){
			Res.Item.Brick += 100;
			Res.Currency -= 350;
			Update();
			}
		});
	}
);

$(function(){ //Sell
		$("#SellBrick").click(function(event) {
			event.preventDefault();
			if(Res.Item.Brick >= 100){
			Res.Item.Brick -= 100;
			Res.Currency += 350;
			Update();
			}
		});
	}
);

$(function(){ //Buy 
		$("#BuyMeat").click(function(event) {
			event.preventDefault();
			if(Res.Currency >= 800){
			Res.Item.Meat += 100;
			Res.Currency -= 800;
			Update();
			}
		});
	}
);

$(function(){ //Sell
		$("#SellMeat").click(function(event) {
			event.preventDefault();
			if(Res.Item.Meat >= 100){
			Res.Item.Meat -= 100;
			Res.Currency += 800;
			Update();
			}
		});
	}
);

$(function(){ //Buy 
		$("#BuyFish").click(function(event) {
			event.preventDefault();
			if(Res.Currency >= 375){
			Res.Item.Fish += 100;
			Res.Currency -= 375;
			Update();
			}
		});
	}
);

$(function(){ //Sell
		$("#SellFish").click(function(event) {
			event.preventDefault();
			if(Res.Item.Fish >= 100){
			Res.Item.Fish -= 100;
			Res.Currency += 375;
			Update();
			}
		});
	}
);


$(function(){ //Buy 
		$("#BuyWheat").click(function(event) {
			event.preventDefault();
			if(Res.Currency >= 300){
			Res.Item.Wheat += 100;
			Res.Currency -= 200;
			Update();
			}
		});
	}
);

$(function(){ //Sell
		$("#SellWheat").click(function(event) {
			event.preventDefault();
			if(Res.Item.Wheat >= 100){
			Res.Item.Wheat -= 100;
			Res.Currency += 200;
			Update();
			}
		});
	}
);


$(function(){ //Buy 
		$("#BuyBread").click(function(event) {
			event.preventDefault();
			if(Res.Currency >= 200){
			Res.Item.Bread += 100;
			Res.Currency -= 200;
			Update();
			}
		});
	}
);

$(function(){ //Sell
		$("#SellBread").click(function(event) {
			event.preventDefault();
			if(Res.Item.Bread >= 100){
			Res.Item.Bread -= 100;
			Res.Currency += 200;
			Update();
			}
		});
	}
);


$(function(){ //Buy 
		$("#BuyWool").click(function(event) {
			event.preventDefault();
			if(Res.Currency >= 375){
			Res.Item.Wool += 100;
			Res.Currency -= 375;
			Update();
			}
		});
	}
);

$(function(){ //Sell
		$("#SellWool").click(function(event) {
			event.preventDefault();
			if(Res.Item.Wool >= 100){
			Res.Item.Wool -= 100;
			Res.Currency += 375;
			Update();
			}
		});
	}
);