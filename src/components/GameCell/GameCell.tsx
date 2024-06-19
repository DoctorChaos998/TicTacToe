import { cellType } from "../../types"
import classes from "./GameCell.module.scss"
import clsx from "clsx"

interface IGameCell{
    isWinner: boolean,
    cellType: cellType,
    onClick: () => void
}

const GameCell = ({isWinner, cellType, onClick}: IGameCell) => {
    return (
        <div className={clsx([classes.gameCell, isWinner && classes.winnerGameCell])} onClick={onClick}>
            {cellType}
        </div>
    )
}

export default GameCell