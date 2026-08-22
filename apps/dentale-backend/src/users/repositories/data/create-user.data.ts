export class CreateUserData {
  email: string;
  name: string;

  constructor(props: { email: string; name: string }) {
    this.email = props.email;
    this.name = props.name;
  }
}
