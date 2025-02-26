import { Users } from 'src/entities/user.entity';
import { IAuthCreate } from '../interface/auth.interface';
import { HashPassword } from 'src/lib/bcrypt/bcrypt';

export const userRegistration = async (data: IAuthCreate): Promise<Users> => {
  const userData = new Users();

  userData.name = data.name;
  userData.email = data.email;
  userData.password = await HashPassword(data.password);

  return userData;
};
