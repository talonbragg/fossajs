/*
 * fossajs 
 * Copyright Talon Bragg 2017
 * fossajs.com (Coming Soon)
 * Licensed under the MIT License
*/

'use strict';

var body = document.getElementsByTagName("body")[0];
if (!body) console.log(err);

//Object Oriented

function fossa(option) {
	//Main Variables
	var title = option.title;
	var structure = option.struc;
	var divText = option.divText;
	var divBackground = option.divBackground;
	var headerText = option.headerText;
	var optForHeader = option.optForHeader;

	//Functional section

	// Make the title
	(function () {
		document.getElementsByTagName('title')[0].innerHTML = title;
	})();
	//Append divs
	(function () {
		// Append strict structure
		if (structure === "strict") {
			var div1 = createElement("div");
			var div2 = createElement("div");
			var text = document.createTextNode(divText);
			div2.appendChild(text);
			div1.appendChild(div2);
			body.appendChild(div1);
		}
		// Append loose structure
		else if (structure === "loose") {
				var div3 = createElement("div");
				var text2 = document.createTextNode(divText);
				div3.appendChild(text2);
				body.appendChild(div3);
			}
			// Append sagging structure
			else if (structure === "sagging") {
					var span1 = document.createElement("span");
					var text3 = document.createTextNode(divText);
					span1.appendChild(text3);
					body.appendChild(span1);
				}
	})();
	//Background For body
	(function () {
		body.style.background = divBackground;
	})();
	//If statements for error handling
	(function () {
		if (!title) {
			console.log('Warning: No *title* specified');
		} else if (!structure) {
			console.log('Warning: No *structure type* specified');
		} else if (!divText) {
			console.log('Warning: No *div text* specified');
		} else if (!divBackground) {
			console.log('Warning: No *div background* specified');
		}
	})();
	(function () {
		if (!optForHeader) {
			console.log('No Header specified, this is fine');
		} else if (optForHeader === "n") {
			console.log('No header wanted');
		} else if (optForHeader === "y") {
			var header = document.createElement("header");
			var hText = document.createTextNode(headerText);
			header.appendChild(hText);
			body.appendChild(header);
		} else if (!headerText) {
			console.log('Warning: No Header text \n there will be no text in the header \n it is recommended that you go and add text for the header.');
		}
	})();
}
