import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-brief-content',
  templateUrl: './brief-content.component.html',
  styleUrls: ['./brief-content.component.scss']
})
export class BriefContentComponent implements OnInit {

  @Input() briefContent = ""
  constructor() { }

  ngOnInit(): void {
  }

}
