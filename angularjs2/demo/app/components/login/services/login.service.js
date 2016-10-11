import localStorage from 'localStorage';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { UserModel } from '../models/user.model';

export class LoginService {
  user = [];
  http;

  constructor(http: Http) {
    let persistedUser = JSON.parse(localStorage.getItem('user')) || [];
    this.http = http;
    this.user = persistedUser.map((userInfo) => {
      let ret = new UserModel(userInfo.id, userInfo.name);
      ret.uid = userInfo.uid;
      return ret;
    });
  }

  login(name, password) {
    let headers = {
      'Content-Type': 'application/json'
    };

    return this.http.get('http://127.0.0.1:8080/people.json')
      .toPromise()
      .then(res => this.handleLogin(res.json()))
      .catch(this.handleError);
  }

  handleLogin(resp) {
    return resp;
  }

  handleError(error) {
    console.log(error);
  }

  add(id, name) {
    this.user.push(new UserModel(id, name));
    this.persist();
  }

  persist() {
    this._clearCache();
    localStorage.setItem('user', JSON.stringify(this.user));
  }


}
