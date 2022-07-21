export const LoginAction = (data) => ({
  type: "LOGINACTION",
  logined: data.logined,
  email: data.email,
  password: data.password,
  name: data.name,
  nickname: data.nickname,
  sex: data.sex,
  birthday: data.birthday,
});
