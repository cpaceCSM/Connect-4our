// function newGame(button) {
//     button.style.display = 'none';
//     const game = document.getElementById('gameContainer');
//     //columns
// const columns = [];
//     //array that stores columns (array of array?)
//     const slotsArray = [];
//     //set the next color/player
//     let nextPlayer = "yellow";
//     //create columns
//     for (let i = 0; i<7; i++){
//         const column = document.createElement("div");
//         column.className = "column";
//         game.appendChild(column);
//         columns.push(column);
//     }
//     class Slot {
//         constructor(element, column, row) {
//             this.column = column;
//             this.row = row;
//             this.element = element;
//             this.state = "";
//         }
//         clicked() {}
//     }
//     // create slots and push to columns
//     columns.forEach((element, column) => {
//         let slotColumn = [];
//         for (i=0;i<6;i++) 
//         //const div = document.createElement("div");
//         div.classList.add("slot");
//         const slot = new Slot(div,col, i);
//         slotColumn.push(slot);
//         div.onclick = function () {
//             slot.clicked();
//         }
//         slotsArray.push(slotColumn);
//     });
//     console.log(slotsArray)
// } 

// newGame(document.getElementById("playButton"));
const board = document.querySelector('#board');

for (let i = 0; i<42; i++) {
    let cell = document.createElement("div");
    div.className = "cell";
    board.appendChild(cell);

    cell.onmouseenter = () => {
        onMouseEnteredColumn (i % 7);
    }
}

function onMouseEnteredColumn(column) {
    //remove existing unplaced peice

   let unplacedPiece = document.querySelector("[data-placed = 'false']");
   if (unplacedPiece) {
    unplacedPiece.parentElement.removeChild(unplacedPiece);
   }
   let cell = board.children[column];
   let piece = document.createElement("div");
   piece.className = "piece";
   piece.dataset.placed = false;
   cell.appendChild(piece);
}

//const handleCellMouseOver = 

