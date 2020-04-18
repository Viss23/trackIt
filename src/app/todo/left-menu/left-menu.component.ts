import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  projects= ['project1','project2'];
  priorities=['very important','not important']
  marks=['mark1','mark2']
  constructor() { }

  ngOnInit(): void {
  }

}
