import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cellular-automata',
  templateUrl: './cellular-automata.component.html',
  styleUrls: ['./cellular-automata.component.sass']
})
export class CellularAutomataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cellularAutomation(arr: []) {
    // iterate over 2d arr

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
