import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  public getUserInfo(): User {
    return {
      name: "username"
    }
  }
}
