import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-brief-post-head',
  templateUrl: './brief-post-head.component.html',
  styleUrls: ['./brief-post-head.component.scss']
})
export class BriefPostHeadComponent implements OnInit {

  @Input() author = ""
  @Input() postDate = ["1","minute"]
  
  constructor() { }

  ngOnInit(): void {
  }

}
