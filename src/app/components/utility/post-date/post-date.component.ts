import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-date',
  templateUrl: './post-date.component.html',
  styleUrls: ['./post-date.component.scss']
})
export class PostDateComponent implements OnInit {

  @Input() postDate = ["5","hours"]
  lastTime = "0"
  timeUnit = "hours"
  
  constructor() { }

  ngOnInit(): void {
    [this.lastTime,this.timeUnit] = this.postDate;
  }

}
