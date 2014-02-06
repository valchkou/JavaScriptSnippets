/**
 * Share the Prototype
 * 
 * The best practice is when reusable members go to the prototype and not 'this'. 
 * Therefore for inheritance purposes, anything worth inheriting should be in the prototype. 
 * So we can just set the child’s prototype to be the same as the parent’s prototype.
 * 
 * a drawback if one child or grandchild somewhere down the inheritance chain modifies the prototype, 
 * it affects all parents and grandparents.
 */
var pattern4 =
(function() {
	
	/** inheritance implemented here **/
	function extend(ChildClass, ParentClass) {
		ChildClass.prototype = ParentClass.prototype;
	}
	
	/****** Define Parent *****/
	function Parent(name) {
		this.name = name || 'I am Parent';
	}
	
	/*** add function to the Parent prototype ***/
	Parent.prototype.getName = function () {
		return this.name;
	};
	
	/** * add function to the Parent prototype ** */
	Parent.prototype.getUrl = function() {
		return "https://github.com/valchkou";
	};
		
	/****** Define Child *****/
	function Child(name) {};
	
	return{
		run:function() {
		
			console.log("--- start testing js/inheritance/pattern2.js ---")
	
			console.log(" extending Child from Parent & AnotherParent")
			extend(Child, Parent);
			
			console.log(" creating new Child")
			var child = new Child();
			
			console.log(" get child name:"+child.getName());
			console.log(" > see: name was not inherited from Parent");
			
			console.log(" get child url:"+child.getUrl());
			console.log(" > see: getUrl was borrowed from Parent.prototype.");			

			console.log(" changing child prototype:");
			Child.prototype.getUrl = function() {
				return "https://valchkou.com";
			};
			
			var parent = new Parent();
			console.log(" get parent url:"+ parent.getUrl());
			
			console.log(" > see: parent getUrl was magically replaced by child.");	
			
			console.log("--- end testing js/inheritance/pattern2.js ---")
		}
	}	
})();