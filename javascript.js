//VARS
var loopInterval = 500;
var resultBox;


//FUNCTIONS

function setup() {//first initialization setup
    loop(); 
} window.onload = setup();

function loop() {
	setInterval(function(){//game loop


    	
        console.log("loop");
    }, loopInterval); //loop speed
}

function getKeystrokes(e) {
	if(e.keyCode == 13){
		document.getElementById('enterButton').click();
	}
}document.onkeydown = getKeystrokes;

function commandLog(cLog) {
	cmdLog.push(cLog);
	console.log(cLog);
}

function getCommand() {
	var resultField = document.getElementById("resultField");
	var inputField = document.getElementById("commandField");

//Command Calls
	/*if(inputField.value == ""){
			inputField.value = "";
			resultField.innerHTML = "";
			commandLog("command: ");
		} 
	*/
	//HELP
	if(inputField.value == "help"){
		inputField.value = "";
		resultField.innerHTML = "Here are some commands: <br> + help <br> + createitem <br> + itemlist <br> + commandLog <br> + ";
		commandLog("command: help");
	} 
	//CREATE ITEM
	if(inputField.value.search("createitem") != -1) {
		var item = inputField.value.substr(11);
		inputField.value = "";
		resultField.innerHTML = "Created Item: " + item;
		items.push(item);
		commandLog("command: createItem [" + item + "]");
	}
	//ITEM LIST
	if(inputField.value == "itemlist"){
		var unReadableItems = items.toString();
		var readableItems = unReadableItems.replace(/,/g, ", <br> ");
		inputField.value = "";
		resultField.innerHTML = "Here are the current items: <br>" + readableItems;
		commandLog("command: itemList");
	} 
	//COMMAND LOG
	if(inputField.value == "commandlog"){
		var unReadableLog = cmdLog.toString();
		var readableLog = unReadableLog.replace(/,/g, ", <br> ");
		inputField.value = "";
		resultField.innerHTML = "Here is the current command log: <br>" + readableLog;
		commandLog("command: commandLog");
	} 
}