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

  it('passes if arrays evolve once passed through cellular-automation', function() {
    var arr = [
      [0,0,2,2,0,0,0,0,0,0],
      [0,0,0,0,1,3,1,0,0,0],
      [0,0,0,2,0,3,0,0,1,3],
      [0,0,0,0,1,3,0,0,0,3],
      [0,2,2,0,0,0,1,3,1,0],
      [0,0,0,0,0,2,2,0,0,0],
      [0,0,2,0,2,0,0,0,0,0],
      [0,0,0,0,2,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
    ];

    //function that evolves arr into next generation

    expect(arr).toEqual([
      [0,0,3,3,0,0,0,0,0,0],
      [0,0,0,0,2,0,2,0,0,0],
      [0,0,0,3,0,0,0,0,2,0],
      [0,1,0,1,2,0,0,0,0,0],
      [0,3,3,0,0,1,2,0,2,0],
      [0,0,0,0,1,0,0,0,0,0],
      [0,0,0,0,3,0,1,0,0,0],
      [0,0,0,0,3,1,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
    ]);
  });

  it('passes if arrays evolve once passed through cellular-automation', function() {
    var arr = [
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,1,1,0,0,2,0,0,0],
      [0,0,3,3,2,0,0,0,2,0],
      [0,1,0,0,0,0,0,0,2,0],
      [0,0,3,0,0,1,2,0,0,0],
      [0,0,1,3,3,3,0,0,0,0],
      [0,0,0,1,0,1,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
    ];

    //function that evolves arr into next generation

    expect(arr).toEqual([
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,2,2,0,1,0,1,0,0],
      [0,0,0,0,3,1,0,0,3,1],
      [0,2,0,0,0,1,0,0,3,1],
      [0,0,0,0,0,2,3,1,0,0],
      [0,0,2,0,0,0,0,0,0,0],
      [0,0,0,2,0,2,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
    ]);
  });

  it('passes if arrays evolve once passed through cellular-automation', function() {
    var arr = [
      [0,0,0,0,1,3,1,0,0,0],
      [0,0,0,0,0,3,0,0,0,0],
      [0,0,2,0,0,0,0,3,1,0],
      [0,0,2,0,2,3,0,0,3,0],
      [0,0,2,0,0,0,0,3,0,0],
      [0,0,0,0,0,2,1,3,1,0],
      [0,0,0,0,2,2,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
    ];

    //function that evolves arr into next generation

    expect(arr).toEqual([
      [0,0,0,0,2,0,2,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,1,3,0,0,0,0,0,2,0],
      [0,0,3,0,3,0,0,0,0,0],
      [0,1,3,0,1,1,0,0,0,0],
      [0,0,0,1,0,0,2,0,2,0],
      [0,0,0,0,3,0,1,0,0,0],
      [0,0,0,0,1,1,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
    ]);
  });
});
