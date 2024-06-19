// import { useState } from "react"
import GameInfo from "../GameInfo/GameInfo"
import classes from "./Container.module.scss"
// import { cellType } from "../../types"
import GameCell from "../GameCell/GameCell"
import useGameState from "../../hooks/gameState"

const Container = () => {
    const {currentStep, sells, resetGame, handleCellClick, winnerSequence} = useGameState();
    return (
        <section className={classes.container}>
            <GameInfo
                currentStep={currentStep}
                resetGame={resetGame}
                isDraw={sells.every(item => item)}
                winnerSymbol={sells[winnerSequence[0]] ?? null}/>
            <div className={classes.gameFieldContainer}>
                <div className={classes.gameField}>
                    {sells.map((item, index) => <GameCell key={index} isWinner={winnerSequence?.includes(index) ?? false} cellType={item} onClick={() => handleCellClick(index)}></GameCell>)}
                </div>
            </div>
        </section>
    )
}

export default Container