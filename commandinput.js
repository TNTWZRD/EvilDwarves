//Called From "Enter Command" Button

CI = {};
CI.Commands = {};

CI.NewIn = function(){
	CommandIn = prompt("Enter Command: ");
	if(CommandIn == "newDwarf()"){
		CI.Commands.NewDwarf();
	}
}

// Begin Command Functions

CI.Commands.NewDwarf = function(){
	Dwarves.New.Dwarf(1);
}