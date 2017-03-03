(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
})({
    1: [function (require, module, exports) {
/*
 * fossajs 
 * Copyright Talon Bragg 2017
 * fossajs.com (Coming Soon)
 * Licensed under the MIT License
*/

(function(root, factory) {	
  /*========== Global Fossa ==========*/
  (typeof module === "object" && module.exports) ? module.exports = factory() : root.fossajs = factory();
}(this, function() {

'use strict';

let bodyTag = document.getElementsByTagName("body")[0];
let fossajs = module.exports;
if (!bodyTag) console.log(err);

//Object Oriented

/*
 * Object Constructor
 * @param {option.item}
 * Carried as a string
*/

function fossa(option) {
	//Main Variables
	
	/*
	 * Object Variables
	 * @param {option.item}
	 * Carried as a string
	 * Depends on the variable for the type 
	*/

	let title = option.title;
	let structure = option.struc;
	let divText = option.divText;
	let divBackground = option.divBackground;
	let headerText = option.headerText;
	let optForHeader = option.optForHeader;
	let padding = option.pad;
	let margin = option.mar;
	let custom = option.custEl;
	let cClass = option.cClass;
	let optContainer = option.optCont;

	//Functional section
	/*
	 * Creates functionality for object items
	 * @param {option.object}
	 * Uses string functionality
	*/
	// Make the title

	/*
	 * Gets The title tag and adds the title
	 * object item "title" which is taken as 
	 * a string
	 * @param {string} innerHTML = title
	*/
	(function() {
		document.getElementsByTagName('title')[0].innerHTML = title;
	})();
	
	//Append divs
	
	/*
	 * Creates The divide structure of a
	 * webpage
	 * @param {string} structure === "strict"
	 * Object constructor item struc has 3 options:
	 * "strict"
	 * "loose"
	 * "sagging"
	 * Anything other that these will be taken by the console
	 * as undefined
	*/

	(function() {
		// Append strict structure
		
		/*
		 * @param {string} "strict"
		*/

		if (structure === "strict") {
			let div1 = createElement("div id='div1'");
			let div2 = createElement("div id='div2'");
			let text = document.createTextNode(divText);
			div2.appendChild(text);
			div1.appendChild(div2);
			bodyTag.appendChild(div1);
		}
		// Append loose structure
		
		/*
		 * @param {string} "loose" 
		*/

		else if(structure === "loose") {
			let div3 = createElement("div id='div3'");
			let text2 = document.createTextNode(divText);
			div3.appendChild(text2);
			bodyTag.appendChild(div3);
		}
		// Append sagging structure
		/*
		 * @param {string} "sagging"
		*/
		else if(structure === "sagging") {
			let span1 = document.createElement("span1");
			let text3 = document.createTextNode(divText);
			span1.appendChild(text3);
			bodyTag.appendChild(span1);
		}
	})();
	//Custom elements

	/*
	* Creates your own element
	* Also allows you to add you own
	* custom class to the custom element
	* @param {object.item} returned as string
	* @param {string} custom
	* @param {string} cClass
	*/
	(function() {
		if (custom && structure === "custom") {
			let div1 = createElement(custom);
			div1.setAttribute('class', cClass);
			let text = document.createTextNode(divText);
			div1.appendChild(text);
			bodyTag.appendChild(div1);
		}
	})();
	//Container Structure
	/*
	 * Creates a container using javascript and css
	 * The object property would be returned as a string
	 * @param {string} object.item
	*/
	(function() {
		if(optContainer && structure === "container") {
			let con = createElement('div');
			con.setAttribute('class', 'container');
			let text = document.createTextNode(divText);
			con.appendChild(text);
			bodyTag.appendChild(con);
			let containerStyle = document.getElementsByClassName('container')[0];
			containerStyle.style.paddingRight = "100px";
			containerStyle.style.paddingLeft = "100px";
			containerStyle.marginRight = "auto";
			containerStyle.marginLeft = "auto";
		}
	})();
	//Background For body
	
	/*
	* Taken as a string
	* @param {string} divBackground
	*/
	(function() {
		bodyTag.style.background = divBackground;
	})();
	//Padding for body

	/*
	 * Sets the padding of the body
	 * returned as a string
	 * css interprets the string
	 * @param {string} padding;
	*/

	(function() {
		bodyTag.style.padding = padding; 
	})();
	//Margin of body

	/*
	 * returned as a string
	 * usable as a number
	 * @param {integer} margin
	*/
	(function() {
		bodyTag.style.margin = margin;
	})();
	//If statements for error handling

	/*
	 * Logs any errors or warnings into the console
	 * @param {string} object.item
	*/
	(function() {
		if(!title) {
			console.log('Warning: No *title* specified');
		}
		else if(!structure) {
			console.log('Warning: No *structure type* specified');
		}
		else if(!divText) {
			console.log('Warning: No *div text* specified')
		}
		//Main error handling for css

		/*
		 * These are taken as strings
		 * emits a warning if it was not used
		 * @param {string} css
		*/
		else if(!divBackground) {
			console.log('Warning: No *div background* specified')
		}
		if (!padding) {
			console.log('Warning: No Padding specified')
			console.log('You may want padding for the website to look nicer')
		}
		else if (!margin) {
			console.log('Warning: No margin specified')
			console.log('The body will be at its default margin: 10px')
		}
		if (!custom) {
			console.log('No custom element used, this is fine.');
		}
		else if(!cClass) {
			console.log('No custom class used, this is fine.');
		}
	})();
	//Header functions

	/*
	 * Object constructor item optForHead is taken as a string
	 * headerText is also taken as a string
	 * @param {string} optForHeader & headerText
	*/

	(function() {
		if (!optForHeader) {
			console.log('No Header specified, this is fine');
		}
		else if (optForHeader === "n") {
			console.log('No header wanted');
		}
		else if(optForHeader === "y") {
			let header = document.createElement("header");
			let hText = document.createTextNode(headerText);
			header.appendChild(hText);
			bodyTag.appendChild(header);
		}
		else if(!headerText) {
			console.log('Warning: No Header text \n there will be no text in the header \n it is recommended that you go and add text for the header.')
		}
	})();
	//Error Handling for unknown properties
	/*
	 * The property will not be recognized
	 * originally it would do nothing
	 * For the sake of knowing
	 * there is error handling for it
	 * This is not necessarily a syntax error
	 * in the HTML DOM
	 * @param {string} object.item	
	 */
	
	(function() {
		if(!title &&
		   !structure &&
		   !divText &&
		   !divBackground &&
		   !headerText &&
		   !optForHeader &&
		   !padding &&
		   !margin &&
		   !custom &&
		   !cClass &&
		   !optContainer) {
		   	console.log('A property not recognized');
		   }
	})();
	(function() {
		if (!document) {
			console.log('You have no HTML dom to edit.');
		}
	})();
}
	function style(option) {
		//Local Variables for the function
		/*
		 * The option el is an id
		 * The option elClass is a class
		 * style is eventually turned into a string
		 * style is not typed as a string
		 * @param {!string} option.style
		*/
		
		let el = option.el;
		let elClass = option.elClass;
		let styleEl = option.style;
		
		//Functional section
		
		/*
		 * Mainly changes the style with the 
		 * .style operator function
		 * @ param {string} object.item
		 */
		(function() {
			
			/*
			 * Tells the DOM to run it only
			 * if the other option 
			 * is not used at all
			 * If they are both not used 
			 * and something else is being used
			 * That is not recognized
			 * it will go as an error 
			 */
			if (!elClass) {
				let realEl = document.getElementById(el);
				let styleString = styleEl.toString();
				realEl.style = styleString;
			}
			else if(!el) {
				let realEl = document.getElementByClassName(elClass);
				let styleString = styleEl.toString();
				realEl.style = styleString;
			}
			
			//Error handling
			if(!el && 
			   !style &&
			   !elClass) {
				console.log('either there are no properties or you have an unrecognized property.');
			}
		})();
	}
	function redirect(option) {
			//Local variables for the function
			/*
			 * These are taken as strings
			 * url is where you want the user
			 * to redirect to
			 * and the btn is the id of the button
			 * or class of the button that you want 
			 * the user to click
			 * @param {string} object/item
			 */
			
			let url = option.url;
			let button = option.btn;
			let buttonC = option.btnC;
			let classNum = option.cNum;
			
			//Functional section
			
			/*
			 * This gets the id of the button
			 * and gives it an event listener
			 * so that the DOM knows exactly 
			 * when to redirect the user to 
			 * the new page 
			 */
			 
			 (function() {
				
				//If statements
				
				/*
				 * Tells the DOM that if
				 * buttonC and cNum are not
				 * used then it will do the other
				 * if statement according to its 
				 * rules
				 * This is also vice versa 
				 * @param {string} object.item
				 */
				if(!buttonC && !cNum) {
 					let btnId = document.getElementById(button);
 					btnId.addEventListener('click', function() {
							document.location.href = url;
					});
 				}
 				
 				/*
 				 * This tells the DOM that if
 				 * button is not used, then go 
 				 * ahead and do this function
 				 * This is also the other way,
 				 * vice versa
 				 */
 				else if (!button) {
					let btnClass = document.getElementByClassName()[classNum];
					btnClass.addEventListener('click', function() {
							document.location.href = url;
					});
				}
		     })();
		}
}));
}, {}]
}, {}, [1]);
