Array.prototype.distinct = function (a, b, sequence) {
	console.log(new Date().getTime())
	if(a.length == b.length){
		a.push.apply(a,b)
}else{
		a.length > b.length ? a.push.apply(a,b) : b.push.apply(b,a)	
}	
   var arr = (a.length > b.length ? a : b)
	console.log(new Date().getTime())
   var result = []
    arr.forEach(function(v,i,arr){
        var bool = arr.indexOf(v,i+1)
        if (bool === -1) {
            result.push(v)
        }
    })
    return result.sort(function (a,b) {
        return a-b
    }).reverse()
}