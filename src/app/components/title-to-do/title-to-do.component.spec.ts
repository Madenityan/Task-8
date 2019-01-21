import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleToDoComponent } from './title-to-do.component';

describe('TitleToDoComponent', () => {
  let component: TitleToDoComponent;
  let fixture: ComponentFixture<TitleToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleToDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
