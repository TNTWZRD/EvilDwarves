SaveGame = {};
LoadGame = {};

SaveGame.SaveAll = function(){
	localStorage.setItem("Game.Data", btoa(JSON.stringify(Game.Data)));
	localStorage.setItem("Game.Item", btoa(JSON.stringify(Game.Item)));
	document.getElementById('stat-bar').innerHTML = ("<p>Your game has been saved!</p>");
};
LoadGame.LoadAll = function(){
	Game.Data = JSON.parse(atob(localStorage.getItem("Game.Data")));
	Game.Item = JSON.parse(atob(localStorage.getItem("Game.Item")));
	Game.Update();
	document.getElementById('stat-bar').innerHTML = ('<p>Your game has been loaded!</p>');
};
LoadGame.LoadAll();
