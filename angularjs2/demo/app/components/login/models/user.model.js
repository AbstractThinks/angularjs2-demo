import * as uuid from 'node-uuid';

export class UserModel {
  id;
  name;
  uid;

  constructor(id, name) {
    this.uid = uuid.v4();
    this.id = id;
    this.nmae = name.trim();
  }
}
