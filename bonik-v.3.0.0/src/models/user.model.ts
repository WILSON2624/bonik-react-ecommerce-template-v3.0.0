interface User {
  id: string;
  email: string;
  phone: string;
  avatar: string;
  password: string;
  dateOfBirth: Date;
  verified: boolean;
  name: { firstName: string; lastName: string };
}

export default User;
