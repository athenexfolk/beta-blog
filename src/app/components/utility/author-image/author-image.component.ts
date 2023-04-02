import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-image',
  templateUrl: './author-image.component.html',
  styleUrls: ['./author-image.component.scss']
})
export class AuthorImageComponent implements OnInit {

  @Input() image = ""
  constructor() { }

  ngOnInit(): void {
  }

}
