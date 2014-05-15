SaveGameAPT = [];

CalculateAPT =  function(){
	SaveGameAPT[0] = (Dwarves.Data.Occupation.Miner / 6); //Stone
	SaveGameAPT[1] = (Dwarves.Data.Occupation.Miner / 12) - (1*Dwarves.Data.Occupation.Cook); //Coal
	SaveGameAPT[2] = (Dwarves.Data.Occupation.Miner / 12); //Dirt
	SaveGameAPT[3] = (Dwarves.Data.Occupation.Farmer / 20);
	SaveGameAPT[4] = (Dwarves.Data.Occupation.Logger / 5);
	SaveGameAPT[5] = ((Dwarves.Data.Occupation.Hunter / 1.3) + (Dwarves.Data.Occupation.Rancher / 10) + (Dwarves.Data.Occupation.Cook / 50)) - ((0.3 * Res.Alive.Dwarves)-(Dwarves.Data.Occupation.Cook / 6));
	SaveGameAPT[6] = (Dwarves.Data.Occupation.Fisher / 30);
	SaveGameAPT[7] = (Dwarves.Data.Occupation.Shepherd / 10);
	SaveGameAPT[8] = (Dwarves.Data.Occupation.Rancher / 10);
}

SaveRes = function(){
	localStorage.setItem('ResObject', btoa(JSON.stringify(Res)));
	localStorage.setItem('DwarvesObject', btoa(JSON.stringify(Dwarves.Data)));
	CalculateAPT();
	localStorage.setItem('APT', btoa(JSON.stringify(SaveGameAPT)));
	Update();
}

LoadRes = function(){
	if(localStorage.getItem("ResObject") != null){
		Res = JSON.parse(atob(localStorage.getItem('ResObject')));
		Dwarves.Data = JSON.parse(atob(localStorage.getItem('DwarvesObject')));
		console.log(Dwarves);
		console.log("Loaded");
		Update();
	}
}

if(localStorage.getItem("ResObject") != null){LoadRes();}
Update();