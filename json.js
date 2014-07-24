var json = {
	"friends": {
		"001435235":{
			"name": "Chris",
			"age": 30
		},
		"001435238":{
			"name": "Scott",
			"age": 42
		},
		"001435230":{
			"name": "Jason",
			"age": 32
	}
};
for (var key in json.friends) {
	var friend = json.friends[key];
	//friend.age
};

var json2 = {
	"friends": [
		{
			"uuid": "001435235",
			"name": "Chris"
			"age" : 30
		},
		{
			"uuid": "001435235",
			"name": "Scott"
			"age" : 42
		},
		{
			"uuid": "001435235",
			"name": "Jason"
			"age" : 32
		}
	]
}