import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-follower-count',
  templateUrl: './follower-count.component.html',
  styleUrls: ['./follower-count.component.scss']
})
export class FollowerCountComponent implements OnInit {

  @Input() followerCount = 0
  constructor() { }

  ngOnInit(): void {
  }

}
