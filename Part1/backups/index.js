
const tictac = [0,0,0,0,0,0,0,0,0]

const sorryMan = 'Sorry, this spot is taken!'

function winnerFunc(row) {
    alert(`${row} is the winner`)
}

function play(event) {
    const playerSpan = document.getElementById('player');
    const selectId = document.getElementById(event);
  
    if (playerSpan.innerText === 'X') {
      playerSpan.innerText = 'O';
      selectId.innerText = 'X';
    //   if (tictac[event] === 0) {
    //     tictac[event] = 'X'
    //   } else {alert(sorryMan)}
      tictac[event] = 'X'


    } else {
      playerSpan.innerText = 'X';
      selectId.innerText = "O";
    //   if (tictac[event] === 0) {
    //     tictac[event] = "O"
    //   } else {alert(sorryMan)}
      tictac[event] = "O"
    }
    console.log(event,tictac)

    // bellow are the addresses to each array element
    const topLeft = tictac[0];
    const topMiddle = tictac[1];
    const topRight = tictac[2];
    const centerLeft = tictac[3];
    const centerMiddle = tictac[4];
    const centerRight = tictac[5];
    const bottomLeft = tictac[6];
    const bottomMiddle = tictac[7];
    const bottomRight = tictac[8];

    // this code determines the winner
    
    // top horizontal
    if (topLeft !== 0 && topLeft === topMiddle && topMiddle === topRight) {
        winnerfunc(topLeft)
    // middle horizontal
    } else if (centerLeft !== 0 && centerLeft === centerMiddle && centerMiddle === centerRight) {
        winnerFunc(centerLeft)
    // bottom horizontal
    } else if (bottomLeft !== 0 && bottomLeft === bottomMiddle && bottomMiddle === bottomRight) {
        winnerFunc(bottomLeft)
    // left vertical
    } else if (bottomLeft !== 0 && bottomLeft === centerLeft && centerLeft === topLeft) {
        winnerFunc(bottomLeft)
    // center vertical
    } else if (bottomMiddle !== 0 && bottomMiddle === centerMiddle && centerMiddle === topMiddle) {
        winnerFunc(bottomMiddle)
    // right vertical
    } else if (bottomRight !== 0 && bottomRight === centerRight && centerRight === topRight) {
        winnerFunc(bottomMiddle)
    // top-bottom diag
    } else if (topLeft !== 0 && topLeft === centerMiddle && centerMiddle === bottomRight) {
        winnerFunc(bottomMiddle)
    // bottom-top diag
    } else if (bottomLeft !== 0 && bottomLeft === centerMiddle && centerMiddle === topRight) {
        winnerFunc(bottomMiddle)
    }

    // checks to see if game is fail

    let saturation = 1
    for (let i = 0; i <= 8; i++) {
        if (tictac[i] === 0) {
            saturation = 0
        }
    }
    if (saturation === 1) {
        alert("YOU GUYS SUCK AND HAVE NO SKILL! START OVER!")
    }
}


//   (topLeft !== 0 && topLeft === topMiddle && topMiddle === topRight)