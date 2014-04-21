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