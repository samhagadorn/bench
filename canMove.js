// Chess Pieces

// Create a function that takes the name of a chess piece, its position and a target position. The function should return true if the piece can move to the target and false if it can't.

// The possible inputs are "Pawn", "Knight", "Bishop", "Rook", "Queen" and "King".

// Examples
// canMove("Rook", "A8", "H8") ➞ true

// canMove("Bishop", "A7", "G1") ➞ true

// canMove("Queen", "C4", "D6") ➞ false

// Notes
// Do not include pawn capture moves and en passant.
// Do not include castling.
// Remember to include pawns' two-square move on the second rank!
// Look for patterns in the movement of the pieces.

function canMove(piece, position, target){
    const pcolumn = position.charAt(0);
    const prank = position.charAt(1);
    const tcolumn = target.charAt(0);
    const trank = target.charAt(1);
    let goodMove = false;

    //check for valid position
    if (checkCol(pcolumn) && checkCol(tcolumn) && checkRank(prank) && checkRank(trank)){
    switch (piece) {
        case 'Pawn': 
            if (pcolumn===tcolumn){
                if (prank==2){
                    console.log('first move');
                    ((trank-prank)==1 || (trank-prank==2)) ? goodMove=true: goodMove=false;
                }
                else
                ((trank-prank)==1) ? goodMove=true: goodMove=false;
                }
                else goodMove=false;          
            break;
        
        case 'Knight':
            if((((Math.abs(pcolumn.charCodeAt(0) - tcolumn.charCodeAt(0))==2) && ((Math.abs(prank - trank))==1)) )||
            ((Math.abs(pcolumn.charCodeAt(0) - tcolumn.charCodeAt(0)))==1 && (Math.abs(prank - trank))==2)) {
            goodMove=true;
            }
            else goodMove=false;
            break;

        case 'Bishop':
            if ((Math.abs(pcolumn.charCodeAt(0) - tcolumn.charCodeAt(0))) == (Math.abs(prank - trank))){
                goodMove=true;
            }
            else goodMove=false;
            break;

         case 'Rook':
            if ((pcolumn == tcolumn) || (prank == trank)){
            goodMove=true;
            }
            else goodMove=false;            
            break;

        case 'Queen':
            if ((pcolumn == tcolumn) || (prank == trank) || (Math.abs(pcolumn.charCodeAt(0) - tcolumn.charCodeAt(0))) == (Math.abs(prank - trank))){
            goodMove=true;
            }
            else goodMove=false; 
            break;

        case 'King':
            if ((Math.abs(pcolumn.charCodeAt(0) - tcolumn.charCodeAt(0))<=1) && ((Math.abs(prank - trank))<=1)) {
            goodMove=true;
        }
        else goodMove=false; 
            break;

        default:
            break;
    }
}

return goodMove;
}

console.log(canMove('Pawn', 'B3', 'B4'));
console.log(canMove('Kight', 'B3', 'B4'));
console.log(canMove('Bishop', 'B3', 'B4'));
console.log(canMove('Rook', 'B3', 'B4'));
console.log(canMove('Queen', 'B3', 'B4'));
console.log(canMove('King', 'B3', 'B4'));

console.log(canMove("Rook", "A8", "H8"));
console.log(canMove("Bishop", "A7", "G1"));
console.log(canMove("Queen", "C4", "D6"));

function checkCol(value){
    if(/[ABCDEFGH]/.test(value)){
        return true;
    }
    else {
    console.log('Invalid position')
    goodMove = false;
    return false;
    }

}

function checkRank(value){
    if(/[1-8]/.test(value)){
        return true;
    }
    else {
    console.log('invalid position')
    goodMove=false;
    return false;
    }
}