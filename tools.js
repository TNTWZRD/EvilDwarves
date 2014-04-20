Tools = {};
Tools.New = {};

Tools.New.Pick = function(){
	if(Res.Item.Stone >= 20){
		Res.Item.Pick += 1;
		Res.Item.Stone -= 20;
	}
}