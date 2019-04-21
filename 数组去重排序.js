<script>
        // 2个数组去重排序
        Array.prototype.distinct = function (a,b,sequence) {
			console.log(new Date().getTime())
           if (a.length === b.length) {
               a.push.apply(a,b)
           } else{
               a.length > b.length ? a.push.apply(a,b) : b.push.apply(b,a)
           }
           var arr = a.length > b.length ? a : b
		   console.log(new Date().getTime())
           var result = []
           arr.forEach(function (v,i,arr) {
               var bool = arr.indexOf(v,i+1)
               if (bool === -1) {
                   result.push(v)
               }
           }) 
           return result.sort(function (a,b) {
               return a-b 
           }).reverse()
        }
        console.log([].distinct([1,2,3,4,5],[4,5,2,1,7,8,9],null))

        // 多个数组合并去重排序
        var mergeRemove = function(params) {
            var arr = [].slice.call(arguments); //维数组(二维)==>数组
            var result = []
            var newArr = []
            for(var i=0;i<arr.length;i++){
                for(var k=0;k<arr[i].length;k++){
                    newArr.push((arr[i])[k])
                }
            }
            newArr.forEach(function (v, i, arr) {
                var bool = arr.indexOf(v, i + 1)
                if (bool === -1) {
                    result.push(v)
                }
            })
            return result.sort(function (a, b) {
                return a - b
            }).reverse()    

            //与结果无关，但有知识点
            arr.forEach(function (v,i,arr) {
                console.log("数组"+'='+v)
                console.log("下标" + '=' + i)
                console.log("arguments" + '=' + arr)
                console.log(arr)
            })
        }
        console.log(mergeRemove([1,2,3],[4,5,6],[1,5,3],[1,5,8,6,2,3]))
</script>