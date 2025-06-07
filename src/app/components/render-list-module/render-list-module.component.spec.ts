import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderListModuleComponent } from './render-list-module.component';

describe('RenderListModuleComponent', () => {
  let component: RenderListModuleComponent;
  let fixture: ComponentFixture<RenderListModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenderListModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderListModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
