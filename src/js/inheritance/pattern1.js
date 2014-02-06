/**
 * Very basic way to implement inheritance in JS.
 * Assign parent instance to the Child.prototype
 * Features:
 * 		Child will inherit both prototype and own properties from the Parent instance.
 * 		But the Child constructor will not inherit the Parent constructor.
 * 
 */
var pattern1 =
(function() {
	
	/** inheritance implemented here **/
	function extend(ChildClass, ParentClass) {
		ChildClass.prototype = new ParentClass();
	}
	
	/****** Define Parent *****/
	function Parent(name) {
		this.name = name || 'I am Parent';
	}
	
	/*** add function to the Parent prototype ***/
	Parent.prototype.getName = function () {
		return this.name;
	};
	
	/****** Define Child *****/
	function Child(name) {};
	
	return {
		run: function() {
			console.log("--- start testing js/inheritance/pattern1.js ---")
	
			console.log(" extending Child from Parent")
			extend(Child, Parent);
			
			console.log(" creating new Child")
			var child = new Child();
			
			console.log(" get child name:"+child.getName());
			console.log(" > see: name was inherited from parent");
			
			console.log(" create new Child and pass new name 'I am Child' to constructort");
			var child = new Child("I am Child");
			
			console.log(" get child name:"+child.getName());
			console.log(" > see: name still inherited from parent. Constructor was not borrowed");
			
			console.log("--- end testing js/inheritance/pattern1.js ---")
					
		}
	}
})();