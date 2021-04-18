import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PediaComponent } from './pedia.component';

describe('PediaComponent', () => {
  let component: PediaComponent;
  let fixture: ComponentFixture<PediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
