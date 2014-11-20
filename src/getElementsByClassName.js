// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var elementArray = [];
  function checkNode(node) {
  	if (_.contains(node.classList, className)) {
  		elementArray.push(node);
  	}
  	_.each(node.childNodes, checkNode);
  };
  checkNode(document.body);
  return elementArray;
};