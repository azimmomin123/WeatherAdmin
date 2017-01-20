var weather = require("weather-js");

//creating UserSearch contructor
var UserSearch = function(name, place) {
	this.name = name;
	this.place = place;
	this.date = Date.now();

	this.getWeather = function(){

		weather.find({search: this.place, degreeType: 'F'}, function(err, result) {
	  	if(err){
			console.log(err);
	 	} 
		console.log(JSON.stringify(result, null, 2));
	});

	}


}

module.exports = UserSearch;