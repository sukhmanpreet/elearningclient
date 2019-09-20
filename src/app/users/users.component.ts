import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models';
import { UserService } from '@app/_services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {
  users:User[]
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(result => {
      this.users = result;
    })
  }
}
