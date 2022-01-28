 let gameActive=true;
            let currentPlayer="X";
            let gameState=["","","","","","","","",""];
            const winningConditions=[
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6],
            ];
            const statusDisplay=document.getElementById('status');
            const winningMessage=function(){
                return currentPlayer +"'s WIN!";
            
            }
            const drawMessage=function(){
                return "Draw!";
            }
            const currentPlayerTure=function(){
                return "it's " + currentPlayer +"'s turn";
            }
            document.querySelectorAll('.cell').forEach(function(cell){
                cell.addEventListener('click', cellclick);

            });
            document.querySelector('.restart').addEventListener('click, restartgame');
            function cellclick(clickedcellevent){
                const clickedcell=clickedcellevent.target;
                const clickedcellindex=parseInt(clickedcell.getAttribute('data-cell-index'));
                if(gameState[clickedcellindex]!==""|| !gameActive){
                    return;
                }
                cellplayed(clickedcell,clickedcellindex);
                resultvalidation();
            }
            function cellplayed(clickedcell,clickedcellindex){
                gameState[clickedcellindex]= currentPlayer;
                clickedcell.innerHTML = currentPlayer;

            }
            statusDisplay.innerHTML =currentPlayerTure();
            function playerChange(){
                if(currentPlayer =="X"){
                    currentPlayer="O";
                }
                else{
                    currentPlayer="X";
                }
                statusDisplay.innerHTML = currentPlayerTure();

            }
            function resultvalidation(){
                let roundwon=false;
                for(let i=0; i<=7; i++)
                {
                    const wincondition =winningConditions[i];
                    let a=gameState[wincondition[0]];
                    let b=gameState[wincondition[1]];
                    let c=gameState[wincondition[2]];
                    if(a==='' || b==='' || c==='')
                    {
                        continue;
                    }
                    if(a===b && b===c)
                    {
                        roundwon = true;
                        break;
                    }
                }
                if(roundwon)
                {
                    statusDisplay.innerHTML =winningMessage();
                    gameActive = false;
                    return;
                }
                let roundDraw =!gameState.includes("");
                if(roundDraw){
                    statusDisplay.innerHTML =drawMessage();
                    gameActive=false;
                    return;
                }
                playerChange();
            }

            function myFunction() {
    location.reload();
}
