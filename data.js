var data = [

	{
		
	},
	{
		
	},
	
];

//Player Bank
var gold = 0;

//Created / Pre-Created Items
var items = [



];

//Command Log
var cmdLog = [];

//Player Inventory
var inventory = {
healthPotion: 1,
};

//Player Stats
var pStats = {
//Basics
health: 100,
defense: 0,

//Attack / Damage
maxDmg: 5,
minDmg: 1,
attack: 0,
};


//Monster Stats
var mStats = {
//Basics
level: 1,
health: 25,
defense: 0,

//Attack / Damage
maxDmg: 10,
minDmg: 1,
attack: 0,

//Prize Gold
minGold: function() { return 2 * this.level - 1 + 4 },
maxGold: function() { return (this.level ^ 2 + this.level) / 2 + 9 },
prizeGold: 0,
};


