import { cellType } from "../../types"
import classes from "./GameInfo.module.scss"

interface IGameInfo{
    currentStep: cellType,
    winnerSymbol: cellType,
    isDraw: boolean,
    resetGame: () => void
}

const GameInfo = ({currentStep, winnerSymbol, isDraw, resetGame}: IGameInfo) => {
    if(isDraw) return (
        <div className={classes.gameInfo}>
            <h4>
                Is draw
            </h4>
            <button className={classes.resetButton} onClick={resetGame}>
                Reset game
            </button>
        </div>
    )
    if(winnerSymbol) return (
        <div className={classes.gameInfo}>
            <h4>
                Winner symbol: {winnerSymbol}
            </h4>
            <button className={classes.resetButton} onClick={resetGame}>
                Reset game
            </button>
        </div>
    )
    return (
        <div className={classes.gameInfo}>
            <h4>
                Current step: {currentStep}
            </h4>
        </div>
    )
}

export default GameInfo