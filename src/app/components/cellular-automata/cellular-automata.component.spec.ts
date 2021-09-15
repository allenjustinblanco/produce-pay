import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellularAutomataComponent } from './cellular-automata.component';

describe('CellularAutomataComponent', () => {
  let component: CellularAutomataComponent;
  let fixture: ComponentFixture<CellularAutomataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellularAutomataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellularAutomataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
