import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-brief-post-content',
  templateUrl: './brief-post-content.component.html',
  styleUrls: ['./brief-post-content.component.scss']
})
export class BriefPostContentComponent implements OnInit {

  @Input() title = ""
  @Input() briefContent = ""

  constructor() { }

  ngOnInit(): void {
  }

}
