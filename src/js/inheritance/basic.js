/**
 * Very basic way to implement inheritance in JS.
 * Assign parent instance to the Child.prototype
 * Features:
 * 		Child will inherit both prototype and own properties from the Parent instance.
 * 		But the Child constructor will not inherit the Parent constructor.
 * 
 */
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
	
	// extend Child
	extend(Child, Parent);
	
	// result
	var child = new Child();
	child.getName(); // 'I am Parent' . getName was inherited
	
	var child = new Child("I am Child");
	child.getName(); // 'I am Parent'. Child name get lost
	
})();