import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenjokesComponent } from './tenjokes.component';

describe('TenjokesComponent', () => {
  let component: TenjokesComponent;
  let fixture: ComponentFixture<TenjokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenjokesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenjokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
