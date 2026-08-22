export class User {
  id: number;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(props: {
    id: number;
    email: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  }) {
    this.id = props.id;
    this.email = props.email;
    this.name = props.name;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}
