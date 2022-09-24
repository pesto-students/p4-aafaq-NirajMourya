var findJudge = function(n, trust) {
    let TrustsCount = new Array(n);
    let TrustingCount =  new Array(n);
    TrustsCount.fill(0);
    TrustingCount.fill(0);
    for(let i = 0;i<trust.length;i++)
    {
        let bond = trust[i];
        TrustingCount[bond[0]-1]++;
        TrustsCount[bond[1]-1]++;
    }
    for(let i = 0;i<n;i++)
    {
        if(TrustingCount[i] === 0 && TrustsCount[i] === n-1)
            return  i+1;             
    }
    return -1;
};

//Time Complexity is O(edges+nodes) i.e. O(n)
//Space Complexity is O(n+n) i.e. O(n)