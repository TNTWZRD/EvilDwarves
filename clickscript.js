$(function(){
		$("#SaveAll").click(function(event) {
			event.preventDefault();
			SaveRes();
		});
	}
);

$(function(){
		$("#LoadAll").click(function(event) {
			event.preventDefault();
			LoadRes();
		});
	}
);

$(function(){
		$("#ClearSave").click(function(event) {
			event.preventDefault();
			if(confirm("Are You Sure You Want To Erase Your Save?")){
			localStorage.clear();
			window.location.reload();
			}
		});
	}
);

$(function(){
		$("#ConsoleIn").click(function(event) {
			event.preventDefault();
			CI.NewIn();
		});
	}
);

$(function(){
		$("#Pause").click(function(event) {
			if(Dwarves.Pause == true){
				Dwarves.Pause = false;
				Main.Title = "Unpaused | Evil Dwarves";
				document.title = Main.Title;
				document.getElementById("Pause").innerHTML = " Pause ";
				Update();
			}else{
				Dwarves.Pause = true;
				Main.Title = "Paused | Evil Dwarves";
				document.title = Main.Title;
				document.getElementById("Pause").innerHTML = " UnPause ";
				Update();
			}
		});
	}
);
