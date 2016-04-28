// Summary:
//   Option Extender, the best way to manage default ans extended properties in javascript.
// Arguments:
//   - current(required): current properties, normaly they should be your pre configured properties.
//   - extended(required): the extension, keys from this object will be replaced in your pre configured properties.
var optionExtender = function (current, extended) {
    
    var deepClone = Object.create(null);
    
    Object.keys(extended).forEach(function(name, index, value){
        
        //console.log(currentObj[name]);
        //console.log(extendedObj[name]);
        
        if(typeof(current[name]) == typeof(extended[name]))
            deepClone[name] = extended[name];
        else
            deepClone[name] = current[name];
    });
    
    return deepClone;
};

// Export as a CommonJS module
module.exports = optionExtender;