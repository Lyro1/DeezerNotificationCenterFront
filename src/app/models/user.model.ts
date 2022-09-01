
export class UserModel {
  id: number;
  firstname: string;
  lastname: string;

  public constructor(id: number,
                     firstname: string,
                     lastname: string) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
  }
}
