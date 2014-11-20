// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	if (obj === null) {
		return "null";
	} else if (typeof(obj) == "object") {
  	if (!Array.isArray(obj)) {
  		var objStr = '';
  		for (var i in obj) {
  			if (objStr.length > 0) {
  				objStr += ',';
  			}
  			if (stringifyJSON(obj[i]) !== undefined) {
  				objStr += stringifyJSON(i) + ':' + stringifyJSON(obj[i]);
  			}
  		}
  		return '{' + objStr + '}';
  	} else {
  		var arrStr = '';
  		for (var i = 0; i < obj.length; i++) {
  			if (arrStr.length > 0) {
  				arrStr += ',';
  			}
  			if (stringifyJSON(obj[i])  !== undefined) {
  				arrStr += stringifyJSON(obj[i]);
  			} else {
  				arrStr += "null";
  			}
  		}
  		return '[' + arrStr + ']';
  	}
  } else if (typeof(obj) == "number" || typeof(obj) == "boolean") {
  	return obj.toString();
  } else if (typeof(obj) == "string") {
  	return '"' + obj + '"';
  } else {
  	return;
  }
};
