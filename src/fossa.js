/*
 * fossajs 
 * Copyright Talon Bragg 2017
 * fossajs.com (Coming Soon)
 * Licensed under the MIT License
*/

let body = document.getElementsByTagName("body")[0];
if (!body) console.log(err);

//Object Oriented

function fossa(option) {
	//Main Variables
	let title = option.title;
	let structure = option.struc;
	let divText = option.divText;
	let divBackground = option.divBackground;

	//Functional section

	// Make the title
	(function() {
		document.getElementsByTagName('title')[0].innerHTML = title;
	})();
	// Append divs
	(function() {
		// Append strict structure
		if (structure === "strict") {
			let div1 = createElement("div");
			let div2 = createElement("div");
			let text = document.createTextNode(divText);
			div2.appendChild(text);
			div1.appendChild(div2);
			body.appendChild(div1);
		}
		// Append loose structure
		else if(structure === "loose") {
			let div3 = createElement("div");
			let text2 = document.createTextNode(divText);
			div3.appendChild(text2);
			body.appendChild(div3);
		}
		// Append sagging structure
		else if(structure === "sagging") {
			let span1 = document.createElement("span");
			let text3 = document.createTextNode(divText);
			span1.appendChild(text3);
			body.appendChild(span1)
		
		//Background For body
		(function() {
			body.style.background = divBackground;
		})();
		// Main If statments for error handling
		if(!title) {
			console.log('Warning: No *title* specified');
		}
		else if(!structure) {
			console.log('Warning: No *structure type* specified');
		}
		else if(!divText) {
			console.log('Warning: No *div text* specified')
		}
		else if(!divBackground) {
			console.log('Warning: No *div background* specified')
		}
	})();
}