export class UpdateUserDto {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly password: string;
  readonly role: string;
  readonly creation_date: Date;
}
