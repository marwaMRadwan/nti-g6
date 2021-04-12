import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDirectivesComponent } from './my-directives.component';

describe('MyDirectivesComponent', () => {
  let component: MyDirectivesComponent;
  let fixture: ComponentFixture<MyDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
