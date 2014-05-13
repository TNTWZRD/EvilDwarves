//Called From "Enter Command" Button

CI = {};
CI.Commands = {};

CI.NewIn = function(){
	CommandIn = prompt("Enter Command: ");
	
	//Dwarf Commands
	if(CommandIn == "newDwarf()"){
		CI.Commands.NewDwarf();
	}
	if(CommandIn == "newMiner()"){
		CI.Commands.NewMiner();
	}
	if(CommandIn == "newFarmer()"){
		CI.Commands.NewFarmer();
	}
	if(CommandIn == "newLogger()"){
		CI.Commands.NewLogger();
	}
	if(CommandIn == "newHunter()"){
		CI.Commands.NewHunter();
	}
	if(CommandIn == "newFisher()"){
		CI.Commands.NewFisher();
	}
	if(CommandIn == "newShepherd()"){
		CI.Commands.NewShepherd();
	}
	if(CommandIn == "newRancher()"){
		CI.Commands.NewRancher();
	}
	if(CommandIn == "newCook()"){
		CI.Commands.NewCook();
	}
	
	//Tool Commands
	if(CommandIn == "buildPick()"){
		CI.Commands.BuildPick();
	}
	if(CommandIn == "buildHoe()"){
		CI.Commands.BuildHoe();
	}
	if(CommandIn == "buildAxe()"){
		CI.Commands.BuildAxe();
	}
	if(CommandIn == "buildBow()"){
		CI.Commands.BuildBow();
	}
	if(CommandIn == "buildFishingRod()"){
		CI.Commands.BuildFishingRod();
	}
	if(CommandIn == "buildShears()"){
		CI.Commands.BuildShears();
	}
	if(CommandIn == "buildCane()"){
		CI.Commands.BuildCane();
	}
	if(CommandIn == "buildStove()"){
		CI.Commands.BuildStove();
	}
	// Other Easyer Commands
	
	//Dwarf Commands
	if(CommandIn == "Dwarf"){
		CI.Commands.NewDwarf();
	}
	if(CommandIn == "Miner"){
		CI.Commands.NewMiner();
	}
	if(CommandIn == "Farmer"){
		CI.Commands.NewFarmer();
	}
	if(CommandIn == "Logger"){
		CI.Commands.NewLogger();
	}
	if(CommandIn == "Hunter"){
		CI.Commands.NewHunter();
	}
	if(CommandIn == "Fisher"){
		CI.Commands.NewFisher();
	}
	if(CommandIn == "Shepherd"){
		CI.Commands.NewShepherd();
	}
	if(CommandIn == "Rancher"){
		CI.Commands.NewRancher();
	}
	if(CommandIn == "Cook"){
		CI.Commands.NewCook();
	}
	
	//Tool Commands
	if(CommandIn == "Pick"){
		CI.Commands.BuildPick();
	}
	if(CommandIn == "Hoe"){
		CI.Commands.BuildHoe();
	}
	if(CommandIn == "Axe"){
		CI.Commands.BuildAxe();
	}
	if(CommandIn == "Bow"){
		CI.Commands.BuildBow();
	}
	if(CommandIn == "FishingRod"){
		CI.Commands.BuildFishingRod();
	}
	if(CommandIn == "Shears"){
		CI.Commands.BuildShears();
	}
	if(CommandIn == "Cane"){
		CI.Commands.BuildCane();
	}
	if(CommandIn == "Stove"){
		CI.Commands.BuildStove();
	}
}

// Begin Command Functions


//Dwarf Commands
CI.Commands.NewDwarf = function(){
	Dwarves.New.Dwarf(1);
}

CI.Commands.NewMiner = function(){
	Dwarves.New.Miner(1);
}

CI.Commands.NewFarmer = function(){
	Dwarves.New.Farmer(1);
}

CI.Commands.NewLogger = function(){
	Dwarves.New.Logger(1);
}

CI.Commands.NewHunter = function(){
	Dwarves.New.Hunter(1);
}

CI.Commands.NewFisher = function(){
	Dwarves.New.Fisher(1);
}

CI.Commands.NewShepherd = function(){
	Dwarves.New.Shepherd(1);
}

CI.Commands.NewRancher = function(){
	Dwarves.New.Rancher(1);
}

CI.Commands.NewCook = function(){
	Dwarves.New.Cook(1);
}

//Tool Commands
CI.Commands.BuildPick = function(){
	Tools.New.Pick(1);
}
CI.Commands.BuildHoe = function(){
	Tools.New.Hoe(1);
}
CI.Commands.BuildAxe = function(){
	Tools.New.Axe(1);
}
CI.Commands.BuildBow = function(){
	Tools.New.Bow(1);
}
CI.Commands.BuildFishingRod = function(){
	Tools.New.FishingRod(1);
}
CI.Commands.BuildShears = function(){
	Tools.New.Shears(1);
}
CI.Commands.BuildCane = function(){
	Tools.New.Cane(1);
}
CI.Commands.BuildStove = function(){
	Tools.New.Stove(1);
}