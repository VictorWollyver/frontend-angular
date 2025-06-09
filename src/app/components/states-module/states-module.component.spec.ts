import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesModuleComponent } from './states-module.component';

describe('StatesModuleComponent', () => {
  let component: StatesModuleComponent;
  let fixture: ComponentFixture<StatesModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatesModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatesModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
