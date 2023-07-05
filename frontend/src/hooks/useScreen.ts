import { SCREEN } from "../types/Screen";

export const useOptionsSelectGridContainer = (screen : SCREEN) => {
  let gridColumn: number;
  const selectValues: string[] = []
  
  switch (true) {
    case screen === SCREEN.W_320:
      gridColumn = 1;
      break;

    case screen === SCREEN.W_576 || screen === SCREEN.W_768: 
      gridColumn = 2;
      break;

    case screen === SCREEN.W_992: 
      gridColumn = 3;
      break;

    case screen === SCREEN.W_1200 || screen === SCREEN.W_1400:
      gridColumn = 4;
      break;

    default:
      gridColumn = 1;
  }

  for (let i = 1; i <= 4; i++) {
    selectValues.push((i * gridColumn).toString());
  }

  return { gridColumn, selectValues };
};