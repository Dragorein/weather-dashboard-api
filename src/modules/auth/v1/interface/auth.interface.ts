export class IAuthCreate {
  name: string;
  email: string;
  password: string;
}

export class IAuthLogin {
  email: string;
  password: string;
}

export class IAuthUpdatePassword {
  password: string;
}
