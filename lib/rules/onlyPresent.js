"use strict";

/**
* This custom eslint rule checks to see whether or not only: true has been left behind in any test cases
**/

module.exports = function(context) {
  return {
  	"Property": function(node){
			if (node.key.name === "only" && node.value.value === "true"){
				context.report(node, "only: true should not be present in any code that you commit");
			}
  	}
  }
};

module.schema = [];