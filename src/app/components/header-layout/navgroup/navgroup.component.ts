import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navgroup',
  templateUrl: './navgroup.component.html',
  styleUrls: ['./navgroup.component.scss']
})
export class NavgroupComponent implements OnInit {

  menuList = ["Blogs","Forums"]

  constructor() { }

  ngOnInit(): void {
  }

}
