import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadiacatComponent } from './padiacat.component';

describe('PadiacatComponent', () => {
  let component: PadiacatComponent;
  let fixture: ComponentFixture<PadiacatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadiacatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadiacatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
