import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FBuilderComponent } from './f-builder.component';

describe('FBuilderComponent', () => {
  let component: FBuilderComponent;
  let fixture: ComponentFixture<FBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
