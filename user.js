var weather = require("weather-js");

//creating UserSearch contructor
var UserSearch = function(name, place) {
	this.name = name;
	this.place = place;

	weather.find({search: this.place, degreeType: 'F'}, function(err, result) {
	  	if(err){
			console.log(err);
	 	} 
		console.log(JSON.stringify(result, null, 2));
	});
}

export.userResults = UserSearch;