/**
 * Temporary Constructor Similar to pattern4 'Share the Prototype' but solves
 * the same-prototype problem by breaking the direct link between parent’s and
 * child’s prototype while at the same time benefiting from the prototype chain.
 * In this pattern, any members that the parent constructor adds to 'this' are not inherited.
 * 
 */
var pattern5=
(function() {

	/** inheritance implemented here * */
	var extend = (function() {
		var F = function() {};
		return function(ChildType, ParentType) {
			F.prototype = ParentType.prototype;
			ChildType.prototype = new F();
			ChildType.uber = ParentType.prototype;
			ChildType.prototype.constructor = ChildType;
		}
	}());


	/** **** Define Parent **** */
	function Parent(name) {
		this.name = name || 'I am Parent';
	}

	/** * add function to the Parent prototype ** */
	Parent.prototype.getName = function() {
		return this.name;
	};

	/** * add function to the Parent prototype ** */
	Parent.prototype.getUrl = function() {
		return "https://github.com/valchkou";
	};
	
	/** **** Define Child **** */
	function Child(name) {};

	return {
		run: function() {
			console.log("--- start testing js/inheritance/pattern5.js ---")
	
			console.log(" extending Child from Parent")
			extend(Child, Parent);
			
			console.log(" creating new Child")
			var child = new Child();
			
			console.log(" get child name:"+child.getName());
			console.log(" > see: name is unavailable as its own property of Parent, not inherited from parent");
			
			console.log(" get child url:"+child.getUrl());
			console.log(" > see: url is available cz defined on Parent.prototype");
					
			console.log("--- end testing js/inheritance/pattern5.js ---")
		}	
	}
})();