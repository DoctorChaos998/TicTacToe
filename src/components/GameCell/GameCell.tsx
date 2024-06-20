import styled from "styled-components"
import { cellType } from "../../types"

interface IGameCell{
    isWinner: boolean,
    cellType: cellType,
    onClick: () => void
}

const GameCell = ({isWinner, cellType, onClick}: IGameCell) => {
    return (
        <Cell isWinner={isWinner} onClick={onClick}>
            {cellType}
        </Cell>
    )
}

export default GameCell

const Cell = styled.button<{ isWinner: boolean}>(props => ({
    height: '60px',
    width: '60px',
    display: "flex",
    backgroundColor: props.isWinner?'rgba(0, 255, 0, 0.1)':'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: "30px",
    boxShadow: "0 0 0 1px black",
    color: 'rgba(0, 119, 255, 0.8)',
    border: "none",
}));
