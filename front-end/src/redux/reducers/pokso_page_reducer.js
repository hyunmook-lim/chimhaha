function PoksoPageNum(state = initialState, action) {
  switch (action.type) {
    case "POKSOPAGENUM":
      return action.pokso_page_num;

    default:
      return state;
  }
}

const initialState = 1;

export { PoksoPageNum };
