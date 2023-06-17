import { Role } from './role';

export class User {
  id?: number;
  userId?: any;
  user_id?: any;
  dispName?:string;
  email?: string;
  password?: string;
  firstName?: string;
  last_name?: string;
  userName?: string;
  full_name?: string;
  role?: RoleStruct;
  token?: string;
  profile_pic?:any;
}

export class RoleStruct {
  roleId?: number;
  roleName?: Role;
  userId?: string
}