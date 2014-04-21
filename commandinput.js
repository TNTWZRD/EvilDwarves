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