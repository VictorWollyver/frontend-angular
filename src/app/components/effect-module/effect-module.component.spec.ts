import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectModuleComponent } from './effect-module.component';

describe('EffectModuleComponent', () => {
  let component: EffectModuleComponent;
  let fixture: ComponentFixture<EffectModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffectModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EffectModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
