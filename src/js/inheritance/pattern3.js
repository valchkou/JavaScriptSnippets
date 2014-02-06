/**
 * Rent and Set Prototype
 * This pattern combines patterns 1 & 2
 * 
 * The benefit is that the result objects get copies of the parent’s own members and references
 * to the parent’s reusable functionality (implemented as members of the prototype).
 * 
 * The child can also pass any arguments to the parent constructor. This behavior
 * is probably the closest to what you’d expect in Java; you inherit everything there is in
 * the parent, and at the same time it’s safe to modify own properties without the risk of
 * modifying the parent.
 * 
 * A drawback is that the parent constructor is called twice, so it could be inefficient. At
 * the end, the own properties (such as name in our case) get inherited twice.
 */
var pattern3 = 
(function() {
	
	/****** Define Parent *****/
	function Parent(name) {
		this.name = name || 'I am Parent';
	}	

	/*** add function to the Parent prototype ***/
	Parent.prototype.getName = function () {
		return this.name;
	}
	
	/****** Define Child *****/
	function Child(name) {
		// copy Parents own properties into Child instance
		Parent.apply(this, arguments); 
	};
	// set reference to the parent prototype
	Child.prototype = new Parent();
		

	return{
		run:function() {
		
			console.log("--- start testing js/inheritance/pattern2.js ---")
	
			console.log(" extending Child from Parent & AnotherParent")
			
			console.log(" creating new Child")
			var child = new Child();
			
			console.log(" get child name:"+child.getName());
			console.log(" > see: name was inherited from Parent");
			
			console.log(" create new Child and pass new name 'I am Child' to constructort");
			var child = new Child("I am Child");
			
			console.log(" get child name:"+child.getName());
			console.log(" > see: name was set. Constructor was borrowed");
			
//			console.log(" deleting child own property 'name');
//			delete child.name;
//			
//			console.log(" get child name:"+child.getName());
//			console.log(" > see: though 'name' was deleted on child it still exists on parent");			
			
			console.log("--- end testing js/inheritance/pattern2.js ---")
		}
	}	
	
})();