import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiglenewsComponent } from './siglenews.component';

describe('SiglenewsComponent', () => {
  let component: SiglenewsComponent;
  let fixture: ComponentFixture<SiglenewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiglenewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiglenewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
