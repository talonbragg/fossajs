let body = document.getElementsByTagName("body")[0];
if (!body) console.log(err);

function fossa(option) {
	let title = option.title;
	let structure = option.struc;
	let divText = option.divText;

	// Make the title
	(function() {
		document.getElementsByTagName('title')[0].innerHTML = title;
	})();
	// Append divs
	(function() {
		// Append strict structure
		if (structure === "strict") {
			let div1 = createElement("div");
			let div2 = createElement("div");
			let text = document.createTextNode(divText);
			div2.appendChild(text);
			div1.appendChild(div2);
			body.appendChild(div1);
		}
		else if(structure === "loose") {
			let div3 = createElement("div");
			let text2 = document.createTextNode(divText);
			div3.appendChild(text2);
			body.appendChild(div3);
		}
		else if(structure === "sagging") {
			let span1 = document.createElement("span");
			let text3 = document.createTextNode(divText);
			span1.appendChild(text3);
			body.appendChild(span1)
		}
	})();
}