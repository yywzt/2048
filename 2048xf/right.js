// JavaScript Document

function moveRight(){
    if( !canMoveRight(board))
        return false;
    
    for(var i = 0;i<4;i++)
        for(var j = 2;j>=0;j--){
            if(board[i][j] !=0){
               
                for(var k = 3;k>j;k--){
                   
                    if(board[i][k] == 0 && noBlockHorizontalR(i , k, j, board)){
                       
                        showMoveAnimation(i, j,i,k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }
                    
                    else if(board[i][k] == board[i][j] && noBlockHorizontalR(i , k, j, board)){
                       
                        showMoveAnimation(i, j,i,k);
                        
                        board[i][k] += board[i][j];
						scores(board[i][k]);
                        board[i][j] = 0;
                        
                        continue;
                    }
                }
            }
        }
    setTimeout("updateBoardView()",200);
    return true;
}
function canMoveRight( board ){
    for(var i = 0;i<4;i++)
        for(var j = 0;j<4;j++)
            if( board[i][j] !=0 )
                if( board[i][j+1] == 0 || board[i][j+1] == board[i][j]){
                    return true;
				}
    return false;
}
function noBlockHorizontalR(row, col1, col2, board){
    for(var i = col1 - 1; i>col2; i--)
        if(board[row][i]!=0){
            return false;
		}
    return true;
}

