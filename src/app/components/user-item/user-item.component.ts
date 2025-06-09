import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  imports: [CommonModule],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent {
  @Input() user: { id: number, name: string, password: string } = { id: 0, name: '', password: '' };
  @Input() e: boolean = false;

  activeAlert(message: string) {
    alert(message)
  }
}
