// JavaScript Document

function moveUp(){
    
    if( !canMoveUp(board))
        return false;
    

    for(var i = 0;i<4;i++)
        for(var j = 1;j<4;j++){
            if(board[j][i] !=0){
              
                for(var k = 0;k<j;k++){
                    
                    if(board[k][i] == 0 && noBlockHorizontalUp(i , k, j, board)){
                       
                        showMoveAnimation(j,i,k,i);
                        board[k][i] = board[j][i];
                        board[j][i] = 0;
                        continue;
                    }
                    
                    else if(board[k][i] == board[j][i] && noBlockHorizontalUp(i , k, j, board)){
                      
                        showMoveAnimation(j, i,k,i);
                      
                        board[k][i] += board[j][i];
						scores(board[i][k]);
                        board[j][i] = 0;
                        
                        continue;
                    }
                }
            }
        }
    setTimeout("updateBoardView()",200);
    return true;
}
function canMoveUp( board ){
    for(var i = 1;i<4;i++)
        for(var j = 0;j<4;j++)
            if( board[i][j] !=0 )
                if( board[i-1][j] == 0 || board[i-1][j] == board[i][j]){
                    return true;
				}
    return false;
}
function noBlockHorizontalUp(row, col1, col2, board){
    for(var i = col2 - 1; i>col1; i--)
        if(board[i][row]!=0){
            return false;
		}
    return true;
}



