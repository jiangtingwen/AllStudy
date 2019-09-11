Function.prototype.bind = function(obj,arg) {
    var arg = Array.prototype.slice.call(arguments,1)
    var that = this
    var bound = function(newArg){
       arg = arg.concat(Array.prototype.slice.call(newArg));
       return that.apply(obj,arg)
    }
    var F = function() {}
    F.prototype = that.prototype
    bound.prototype = new F()
    return bound;
}

