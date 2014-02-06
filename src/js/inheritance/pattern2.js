/**
 * Rent-a-Constructor
 * Pseudo inheritance by Assigning parent instance to the Child.prototype
 * Features:
 * 		Child will inherit only own properties of the Parent instance.
 * 		It’s possible to implement multiple inheritance by borrowing from more than one constructor
 * The drawback of this pattern is that nothing from the prototype gets inherited
 * A benefit is that you get true copies of the parent’s own members, and there’s no risk
 * that a child can accidentally overwrite a parent’s property.
 */
var pattern2=
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
	
	/** * add function to the Parent prototype ** */
	AnotherParent.prototype.getUrl = function() {
		return "https://github.com/valchkou";
	};

	/****** Define Child *****/
	function Child(name) {
		// copy Parents own properties into Child instance
		Parent.apply(this, arguments); 
		AnotherParent.apply(this);
	};

	return{
		run:function() {
		
			console.log("--- start testing js/inheritance/pattern2.js ---")
	
			console.log(" extending Child from Parent & AnotherParent")
			
			console.log(" creating new Child")
			var child = new Child();
			
			console.log(" get child name:"+child.getName());
			console.log(" > see: name was inherited from Parent");
	
			console.log(" get child another:"+child.another);
			console.log(" > see: 'another' was inherited from AnotherParent");
			
			console.log(" create new Child and pass new name 'I am Child' to constructort");
			var child = new Child("I am Child");
			
			console.log(" get child name:"+child.getName());
			console.log(" > see: name was set. Constructor was borrowed");
			
			console.log(" get child url:"+child.getUrl);
			console.log(" > see: getUrl was not borrowed from AnotherParent.prototype.");			
			
			console.log("--- end testing js/inheritance/pattern2.js ---")
		}
	}
})();