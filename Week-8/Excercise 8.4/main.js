var validPath = function(n, edges, source, destination) {
 
    let pathExists = false;
    if(source === destination)
        return true;
    if(edges.length == 0)
      return pathExists;
    let Visited = new Array(n);
    Visited.fill(false);
    let queue = [];
    queue.push(source);
    while(queue.length != 0 && !pathExists)
    {
        let CurrentNode = queue.shift();
        console.log(CurrentNode);
        if(Visited[CurrentNode])
        {
            continue;
        }
        Visited[CurrentNode] = true;
        for(let i=0;i<edges.length;i++)
        {
            let edge = edges[i];
           console.log(edge);
            if(edge[0] == CurrentNode )
            {
                if(edge[1] === destination)
                {
                       pathExists = true
                       break;
                }
                if(!Visited[edge[1]])
                     queue.push(edge[1])
            }
            else if(edge[1] == CurrentNode )
            {
                if(edge[0] === destination)
                {
                       pathExists = true
                       break;
                }
                if(!Visited[edge[0]])
                     queue.push(edge[0])
            }
            
        }
    }
    
    return pathExists;
};

//Time Complexity is O(n^2)
//Space Complexity is O(n)