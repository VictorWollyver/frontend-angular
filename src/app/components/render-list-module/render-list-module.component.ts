import { Component, effect, inject, OnInit } from '@angular/core';
import { UserItemComponent } from '../user-item/user-item.component';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';

interface IUser {
  id: number;
  name: string;
  password: string;
}

@Component({
  selector: 'app-render-list-module',
  imports: [UserItemComponent],
  templateUrl: './render-list-module.component.html',
  styleUrl: './render-list-module.component.css'
})
export class RenderListModuleComponent implements OnInit  {
  users: Array<IUser> = []
  isError = ""
  isSuccess = ""

  private userService = inject(UserService)


  async ngOnInit() {
    this.userService.getUsers().subscribe((data: Array<IUser>) => {
      this.users = data;
    })
  }
}
