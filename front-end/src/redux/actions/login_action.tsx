interface DataType {
  type?: string,
  logined?: boolean,
  email?: string,
  password?: string,
  name?: string,
  nickname?: string,
  gender?: string,
  birthday?: any
}

export const LoginAction = (data: DataType) => ({
  type: "LOGINACTION",
  logined: data.logined,
  email: data.email,
  password: data.password,
  name: data.name,
  nickname: data.nickname,
  gender: data.gender,
  birthday: data.birthday,
});
