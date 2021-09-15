import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cellular-automata',
  templateUrl: './cellular-automata.component.html',
  styleUrls: ['./cellular-automata.component.sass']
})
export class CellularAutomataComponent implements OnInit {

  arr = [];

  constructor() { }

  ngOnInit(): void {
    let arr = [
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
    this.cellularAutomation(arr);
  }

  cellularAutomation(arr: Array<any>) : void {
    // iterate over 2d arr
    for(let i = 0; i < arr.length; i++) {
      for(let j = 0; j < arr[i].length; j++) {
         console.log(arr[i][j]);
      }
   }
    // empty
    // exactly two adult neighbors turn into 1 comment reproduction
    // otherwise empty

    // 1 newborn
    // >= 5 total neighbors make empty comment overcrowding
    // <= 1 total neighbors make empty comment isolation
    // otherwise make 2 comment growing up

    // 2 adult
    // >=3 total neighbors make empty comment overcrowding
    // zero neighbors make empty comment isolation
    // otherwise make 3 comment Aging

    // 3 senior
    // All conditions make empty comment "natural causes"
  }

}
