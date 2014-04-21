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