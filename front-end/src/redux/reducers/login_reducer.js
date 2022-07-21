export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGINACTION":
      return {
        logined: action.logined,
        email: action.email,
        password: action.password,
        name: action.name,
        nickname: action.nickname,
        sex: action.sex,
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
  sex: "",
  birthday: "",
};
