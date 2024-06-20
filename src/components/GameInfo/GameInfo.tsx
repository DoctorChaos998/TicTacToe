import styled from "styled-components"
import { cellType } from "../../types"

interface IGameInfo{
    currentStep: cellType,
    winnerSymbol: cellType,
    isDraw: boolean,
    resetGame: () => void
}

const GameInfo = ({currentStep, winnerSymbol, isDraw, resetGame}: IGameInfo) => {
    return(
        <GameInfoContainer>
            <h4>
                {isDraw?'Is draw':winnerSymbol?`Winner symbol: ${winnerSymbol}`:`Current step: ${currentStep}`}
            </h4>
            {(isDraw||winnerSymbol) && 
            <ResetButton onClick={resetGame}>
                Reset game
            </ResetButton>}
        </GameInfoContainer>
    )
}

export default GameInfo

const GameInfoContainer = styled.div({
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    borderBottom: '1px solid black'
});

const ResetButton = styled.button({
    cursor: "pointer"
})