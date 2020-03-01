export class User {
    UserName: string;
    Password: string;
    Email: string;
    FirstName: string;
    LastName: string;
}
export interface IPermission{
    DataAdd:number;
    DataUpdate:number;
    DataRead:number;
  }