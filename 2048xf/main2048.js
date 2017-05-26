// JavaScript Document
var board = new Array();
var score = 0;
var top = 240;
var sc=0;
$(document).ready(function(e){
    newgame();
	
});

function newgame(){
    init();
    generateOneNumber();
    generateOneNumber();
	sc=0;
	$("#score").text(sc);
	aa=0;
	$("#pushnumber").text(aa);
	temp=2;
	$("#maxnumber").text(temp);
	hh=0;
	mm=0;
	ss=0;
	$("#ghour").text(hh);
	$("#gameover").css("display","none");
	maxnumber();
	
}

function init(){
    for(var i = 0;i<4;i++){
        for(var j = 0;j<4;j++){
            var gridCell = $("#grid-cell-"+i+"-"+j);
            gridCell.css("top",getPosTop(i,j));
            gridCell.css("left",getPosLeft(i,j));
        }
    }
    for(var i = 0; i<4;i++){
        board[i] = new Array();
        for(var j = 0;j<4;j++){
            board[i][j] = 0;
        }
    }
    
    updateBoardView();
}
function updateBoardView(){
    $(".number-cell").remove();
    for(var i = 0;i<4;i++){
        for ( var j = 0; j < 4; j++) {
            $("#grid-container").append('<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>');
            var theNumberCell = $('#number-cell-'+i+'-'+j);
            if(board[i][j] == 0){
                theNumberCell.css('width','0px');
                theNumberCell.css('height','0px');
                theNumberCell.css('top',getPosTop(i,j));
                theNumberCell.css('left',getPosLeft(i,j));
            }else{
                theNumberCell.css('width','100px');
                theNumberCell.css('hegiht','100px');
                theNumberCell.css('top',getPosTop(i,j));
                theNumberCell.css('left',getPosLeft(i,j));
                theNumberCell.css('background-color',getNumberBackgroundColor(board[i][j]));
                theNumberCell.css('color',getNumberColor(board[i][j]));
                theNumberCell.text(board[i][j]);
            }
        }
    }
}

function generateOneNumber(){
    if (nospace(board)) 
        return false;
    
    var randx = parseInt(Math.floor(Math.random()*4));
    var randy = parseInt(Math.floor(Math.random()*4));
    while(true){
        if (board[randx][randy] == 0) 
            break;
        randx = parseInt(Math.floor(Math.random()*4));
        randy = parseInt(Math.floor(Math.random()*4));
    }
    var randNumber = Math.random()<0.5 ?2 : 4;
    board[randx][randy] = randNumber;
    showNumberWithAnimation(randx,randy,randNumber);
    return true;
}

$(document).keydown(function(event){
    switch (event.keyCode) {
    case 37:
        if(moveLeft()){
			allclicknum();
			maxnumber();
            generateOneNumber();
            isgameover();
        }
        break;
    case 38:
        if(moveUp()){
			allclicknum();
			maxnumber();
            generateOneNumber();
            isgameover();
        }
        break;
    case 39:
        if(moveRight()){
			allclicknum();
			maxnumber();
            generateOneNumber();
            isgameover();
        }
        break;
    case 40:
        if(moveDown()){
			allclicknum();
			maxnumber();
            generateOneNumber();
            isgameover();
        }
        break;

    }
});

function isgameover(){
    if(nospace(board)&&nomove(board))
        gameover();
}

function gameover(){
var gover=document.getElementById("gameover");
var def=document.getElementById("defen");
var sss=document.getElementById("score");
gover.style.display="block";
def.innerHTML=sc;
sss.innerHTML="GameOver";
$("#caozuonum").text(aa);
$("#gameusetime").text(hh+"分"+mm+"."+ss+"秒");
var mmmp=document.getElementById("maxnumber");

$("#maxkuainum").text(mmmp.innerHTML);

}

function moveLeft(){
    if( !canMoveLeft(board))
        return false;
    
    for(var i = 0;i<4;i++)
        for(var j = 1;j<4;j++){
            if(board[i][j] !=0){
                for(var k = 0;k<j;k++){
                    if(board[i][k] == 0 && noBlockHorizontal(i , k, j, board)){
                        showMoveAnimation(i, j,i,k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }
                    else if(board[i][k] == board[i][j] && noBlockHorizontal(i , k, j, board)){
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






















