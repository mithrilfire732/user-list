import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[]=[
    new User(1, "sa", "Systems", "Admin"),
    new User(2, "rv", "Systems","Reviewer"),
    new User(3, "us","System","User")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
