export default function LoginReducer(state = initialState, action:any) {
  switch (action.type) {
    case "LOGINACTION":
      return {
        logined: action.logined,
        email: action.email,
        password: action.password,
        name: action.name,
        nickname: action.nickname,
        gender: action.gender,
        birthday: action.birthday,
      };

    default:
      return state;
  }
}

const initialState = {
  logined: false,
  email: "",
  password: "",
  name: "",
  nickname: "",
  gender: "",
  birthday: "",
};
