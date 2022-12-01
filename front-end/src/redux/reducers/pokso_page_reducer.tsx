export default function PoksoPageNumReducer(state = initialState, action: any) {
  switch (action.type) {
    case "POKSOPAGENUM":
      return action.pokso_page_num;

    default:
      return state;
  }
}

const initialState = "초단";
