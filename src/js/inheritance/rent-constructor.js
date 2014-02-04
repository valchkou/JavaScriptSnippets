/**
 * Very basic way to implement inheritance in JS.
 * Assign parent instance to the Child.prototype
 * Features:
 * 		Child will inherit both prototype and own properties from the Parent instance.
 * 		If Parent allows parameters in constructor the Child will not pass them in.
 * 
 */
(function() {
	
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
	
	function extend(ChildClass, ParentClass) {
		ChildClass.prototype = new ParentClass();
	}
	
	// result
	var child = new Child();
	child.getName(); // 'I am Parent' . getName was inherited
	
	var child = new Child("I am Child");
	child.getName(); // 'I am Parent'. Child name get lost
	
})();