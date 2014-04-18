Main = {};
//Instantiate main game function

	$(function(){
		//Pickaxe waits for click here. Calls event.
		$("#ObjectId").click(function(event) {
			event.preventDefault();
			//What You Want TO Run Here
			alert("Will Be Run On Click");
			//Nothing Past Here
		});
	}
);
