var maxProfit = function(prices) {
    let Profit = 0;
    let Purchase_Price = prices[0];
    for(let i = 0;i<prices.length;i++)
    {
        if(Purchase_Price > prices[i])
           Purchase_Price = prices[i];
        let tempProfit = prices[i] - Purchase_Price;
        if(tempProfit > Profit)
           Profit = tempProfit;
    }    
    return Profit;
};

//Time complexity is O(n)
//Space complexity is O(1)