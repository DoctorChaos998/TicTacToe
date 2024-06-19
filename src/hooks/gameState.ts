import { useState } from "react";
import { cellType } from "../types";
import checkWinnerCombinations from "../helpers";

const useGameState = () => {
    const [sells, setSells] = useState<cellType[]>(Array(9).fill(null));
    const [currentStep, setCurrentStep] = useState<cellType>("O");
    const [winnerSequence, setWinnerSequence] = useState<number[]>([]);

    const handleCellClick = (index: number) => {
        if(sells[index] || winnerSequence.length) return;
        const newSells = [...sells];
        newSells[index] = currentStep;
        setSells(newSells);
        setCurrentStep(currentValue => currentValue === "O"?"X":"O");
        const chechResult = checkWinnerCombinations(newSells);
        if(chechResult) setWinnerSequence(chechResult);
    }

    const resetGame = () => {
        setSells(Array(9).fill(null));
        setCurrentStep("O");
        setWinnerSequence([]);
    }

    return {
        sells,
        resetGame,
        currentStep,
        handleCellClick,
        winnerSequence
    }
}

export default useGameState