import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {User, UserService} from '@angular-monorepo/models';
@Component({
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'admin';
  public user: User = {
    name: "khanh"
  }
  public userService = inject(UserService)

  ngOnInit(): void {
    console.log(this.userService.getUserInfo())
  }
}
