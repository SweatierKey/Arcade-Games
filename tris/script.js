const cells = document.querySelectorAll('.cell');

let turn = 0;

const cellSigns = [];

for(let i = 0; i < cells.length; i++){
  const cell = cells[i];

  cell.addEventListener('click', function(){
    // console.log(`Hai cliccato la cella ${i}`);

    if(cellSigns[i]){
      // console.log('Questa cella è già cliccata');
      return; 
    }

    turn++;

    let sign;
    if(turn % 2 === 0) {
      sign = 'O';
    } else {
      sign = 'X';
    }
    
    cell.innerText = sign;
    cellSigns[i] = sign;
    // console.table(cellSigns);

    let hasWon = checkVictory();

    if(hasWon){
      showAlert(`${sign} ha vinto!`);
    } else if (turn === 9){
      showAlert('pareggio');
    }
  })
}


function checkVictory () {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for(let i = 0; i < winningCombinations.length; i++){
    const combination = winningCombinations[i];

    const a = combination[0];
    const b = combination[1];
    const c = combination[2];


    if(cellSigns[a] && cellSigns[a] === cellSigns[b] && cellSigns[b] === cellSigns[c]){
      // console.log(`Trovata combinazione vincente: ${a} ${b} ${c}`);
      return true;
    }
  }

  return false;
}


