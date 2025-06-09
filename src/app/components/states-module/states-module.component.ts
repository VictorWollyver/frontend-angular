import { Component } from '@angular/core';

@Component({
  selector: 'app-states-module',
  imports: [],
  templateUrl: './states-module.component.html',
  styleUrl: './states-module.component.css'
})

export class StatesModuleComponent {
  counter: number = 0;
  showContent: boolean = false;

  toggleContent() {
    this.showContent = !this.showContent;
  }

  increment() {
    this.counter++;
  }
}
