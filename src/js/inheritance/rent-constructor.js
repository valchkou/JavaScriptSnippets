/**
 * Pseudo inheritance by Assigning parent instance to the Child.prototype
 * Features:
 * 		Child will inherit only own properties of the Parent instance.
 * 		It’s possible to implement multiple inheritance by borrowing from more than one constructor
 * The drawback of this pattern is that nothing from the prototype gets inherited
 * A benefit is that you get true copies of the parent’s own members, and there’s no risk
 * that a child can accidentally overwrite a parent’s property.
 */
(function() {
	
	/****** Define Parent *****/
	function Parent(name) {
		this.name = name || 'I am Parent';
		this.getName = function() {return this.name};
	}

	/****** Define Parent *****/
	function AnotherParent() {
		this.another = true;
	}	

	/****** Define Child *****/
	function Child(name) {
		// copy Parents own properties into Child instance
		Parent.apply(this, arguments); 
		AnotherParent.apply(this);
	};

		
	// result
	var child = new Child();
	child.getName(); // 'I am Parent' . name was inherited
	
	child = new Child("I am Child");
	child.getName(); // 'I am Child'. 
	child.another;   // 'true'
	
})();