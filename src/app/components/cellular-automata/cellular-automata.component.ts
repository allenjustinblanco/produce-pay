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
    let evolvedArr = new Array(arr.length).fill(new Array(10));
    console.log('evolvedArr', evolvedArr);
    // iterate over 2d arr
    for(let i = 0; i < arr.length; i++) {
      for(let j = 0; j < arr[i].length; j++) {
        let neighbors = this.neighbors(arr, [i], [j])
        // console.log(neighbors)
        this.evolveCell(neighbors, arr, i, j, evolvedArr);

      }

   }
  }


  getCell(arr: any, y:number , x: number) {
    var NO_VALUE = null;
    var value, hasValue;
    
    try {
      hasValue = arr[y][x] !== undefined;
      value    = hasValue?  arr[y][x] : NO_VALUE;
    } catch(e) {
      value    = NO_VALUE;
    }
    console.log(value)
    return value;
  }
  
  neighbors(arr: any, y: any , x: any) {
    return {
      up:        this.getCell(arr, y-1, x),
      right:     this.getCell(arr, y,   x+1),
      down:      this.getCell(arr, y+1, x),
      left:      this.getCell(arr, y,   x-1),
    }
  }

  evolveCell(neighbors: any, arr: any , i: any , j: any ,evolvedArr: any) {

    // empty
    // exactly two adult neighbors turn into 1 comment reproduction
    // otherwise empty
    if (arr[i][j] == (0 || null)) {
        
      if (neighbors.down != null && neighbors.up != null && neighbors.right != null && neighbors.left != null) {
        
      } else {

      }
    
    // 1 newborn
    // >= 5 total neighbors make empty comment overcrowding
    // <= 1 total neighbors make empty comment isolation
    // otherwise make 2 comment growing up
    } else if (arr[i][j] == 1) {
      if (neighbors.down != null && neighbors.up != null && neighbors.right != null && neighbors.left != null) {
        evolvedArr[i][j] = null;
        console.log("Overcrowding")
      } else if (neighbors.down == null || neighbors.up == null || neighbors.right == null || neighbors.left == null) {
        evolvedArr[i][j] = null;
        console.log("Isolation")
      } else {
        evolvedArr[i][j] = 2;
        console.log("Isolation")
      }

    // 2 adult
    // >=3 total neighbors make empty comment overcrowding
    // zero neighbors make empty comment isolation
    // otherwise make 3 comment Aging
    } else if (arr[i][j] == 2) {


    // 3 senior
    // All conditions make empty comment "natural causes"
    } else if (arr[i][j] == 3) {
      evolvedArr[i][j] = 0;
    }
  }
}
