export const LoginAction = (data: any) => ({
  type: "LOGINACTION",
  logined: data.logined,
  email: data.email,
  password: data.password,
  name: data.name,
  nickname: data.nickname,
  gender: data.gender,
  birthday: data.birthday,
});
