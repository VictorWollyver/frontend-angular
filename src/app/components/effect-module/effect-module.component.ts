import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effect-module',
  imports: [],
  templateUrl: './effect-module.component.html',
  styleUrl: './effect-module.component.css'
})
export class EffectModuleComponent {
  counter = signal(0)
  counter10 = signal(10)

  effectRef = effect(() => {
    console.log('Counter aumentou: ' + this.counter())
  })

  increment() {
    this.counter.update((prevValue) => prevValue + 1)
  }

}
