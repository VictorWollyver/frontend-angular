import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  imports: [CommonModule],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent {
  user = input({ id: 0, name: '', password: '' });
  e = input(false);

  activeAlert(message: string) {
    alert(message)
  }
}
