SaveRes = function(){
	localStorage.setItem('ResObject', btoa(JSON.stringify(Res)));
	localStorage.setItem('DwarvesObject', btoa(JSON.stringify(Dwarves.Data)));
	console.log("Saved");
	Update();
}

LoadRes = function(){
	if(localStorage.getItem("ResObject") != null){
		Res = atob(JSON.parse(localStorage.getItem('ResObject')));
		Dwarves.Data = atob(JSON.parse(localStorage.getItem('DwarvesObject')));
		console.log(Dwarves);
		console.log("Loaded");
		Update();
	}
}

if(localStorage.getItem("ResObject") != null){LoadRes();}
Update();