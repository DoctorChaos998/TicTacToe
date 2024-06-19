import { cellType } from "../types"

const winnerCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
];

const checkWinnerCombinations = (sells: cellType[]) => {
    for(let i = 0; i < winnerCombinations.length; i++){
        const [a, b, c] = winnerCombinations[i];
        if(sells[a] && sells[a] === sells[b] && sells[b] === sells[c]) return [a, b, c];
    }
    return null;
}

export default checkWinnerCombinations