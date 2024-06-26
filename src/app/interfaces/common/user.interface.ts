

export interface User {
  _id?: string;
  name?: string;
  username?: string;
  phoneNo?: string;
  email?: string;
  password?: string;
  gender?: string;
  profileImg?: string;
  joinDate?: string;
  userType?: any;
  designation?: any;
  technologies?: any[];
  hasAccess?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  select?: boolean;
}

export interface UserAuthResponse {
  success: boolean;
  token?: string;
  data?: any;
  message?: string;
  tokenExpiredIn?: number;
  tokenExpiredInDays?: string;
}

export interface UserJwtPayload {
  _id?: string;
  username: string;
}

export interface UserGroup {
  _id: string;
  data: User[];
}
