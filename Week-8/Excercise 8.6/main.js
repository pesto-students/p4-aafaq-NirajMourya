var allPathsSourceTarget = function(graph) {
    const ans = []
     
     const dfs = (id, result) => {
         if (id === graph.length - 1) {
             ans.push(result)
         }
         
         for (const num of graph[id]) {
             dfs(num, [...result, num])
         }
     }
     
     dfs(0, [0])
     
     return ans   
 };
//Time Complexity is O(n^2)
//Space Complexity is O(n)