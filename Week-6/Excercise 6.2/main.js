/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

//Time Complexity is  O(mxn)
//Where m is no. of rows and n is no. of columns
//Space Complexity is also O(mxn)
 var spiralOrder = function(matrix) {
    let spiralMat = [];
    if(matrix.length == 0)
    {
       return spiralMat;
    }
    
    ColStart = 0;
    RowStart = 0; 
    ColEnd = matrix[0].length - 1;
    RowEnd = matrix.length - 1;
    
    while(ColStart <= ColEnd && RowStart <= RowEnd)
    {
          for(let i = ColStart;i<=ColEnd;i++)
          {
              spiralMat.push(matrix[RowStart][i]);
          }
          RowStart++;
        
          for(let i = RowStart;i<=RowEnd;i++)
          {
              spiralMat.push(matrix[i][ColEnd]);
          }
          ColEnd--;
         
          if(RowStart <= RowEnd)
         {
              for(let i = ColEnd;i >= ColStart;i--)
              {
                  spiralMat.push(matrix[RowEnd][i]);
              }
              RowEnd--;
          }  
          
        if(ColStart <= ColEnd)
          {
              for(let i = RowEnd;i>=RowStart;i--)
              {
                  spiralMat.push(matrix[i][ColStart]);
              }
              ColStart++;
         }
         
    }
    return spiralMat;
};