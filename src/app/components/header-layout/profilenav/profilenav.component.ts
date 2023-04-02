import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilenav',
  templateUrl: './profilenav.component.html',
  styleUrls: ['./profilenav.component.scss']
})
export class ProfilenavComponent implements OnInit {

  profileMenuList = ["Profile", "Bookmark", "Logout"]

  constructor() { }

  toggleMenu(targetMenu:HTMLElement){
    targetMenu.classList.toggle("hidden")
  }

  ngOnInit(): void {
  }

}
