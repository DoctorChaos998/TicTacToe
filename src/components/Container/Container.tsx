import GameInfo from "../GameInfo/GameInfo"
import GameCell from "../GameCell/GameCell"
import useGameState from "../../hooks/gameState"

import styled from 'styled-components';

const Container = () => {
    const {currentStep, sells, resetGame, handleCellClick, winnerSequence} = useGameState();
    return (
        <GameContainer>
            <GameInfo
                currentStep={currentStep}
                resetGame={resetGame}
                isDraw={sells.every(item => item)}
                winnerSymbol={sells[winnerSequence[0]] ?? null}/>
            <GameFieldContainer>
                <GameField>
                    {sells.map((item, index) => <GameCell key={index} isWinner={winnerSequence?.includes(index) ?? false} cellType={item} onClick={() => handleCellClick(index)}></GameCell>)}
                </GameField>
            </GameFieldContainer>
        </GameContainer>
    )
}

export default Container

const GameContainer = styled.section({
    display: 'flex',
    flexDirection: 'column',
    height: "400px",
    width: "400px",
    borderRadius: "5px",
    border: "solid black 1px",
});

const GameFieldContainer = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
});

const GameField = styled.div({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1px',
    overflow: 'hidden',
    border: '1px solid black'
});