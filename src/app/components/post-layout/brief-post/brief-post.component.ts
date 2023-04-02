import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brief-post',
  templateUrl: './brief-post.component.html',
  styleUrls: ['./brief-post.component.scss']
})
export class BriefPostComponent implements OnInit {

  briefContent = `
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem aliquid unde nostrum voluptatum sapiente, assumenda fuga, quas consequuntur sed, recusandae quisquam itaque? Voluptates debitis nesciunt vel praesentium, maiores rerum facere!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat suscipit ullam eius fugiat corrupti obcaecati recusandae quibusdam exercitationem veritatis? Nihil illum tempora optio ipsum, enim earum natus aliquid dicta rem.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, accusamus cupiditate corporis est possimus quas nihil maxime necessitatibus, labore eum nam magnam! Aut eveniet exercitationem sapiente. Eligendi cum id quia.
                 `
  author = "Saksit.S"
  postDate = ['2','years']
  title = "This is a title."

  constructor() { }

  ngOnInit(): void {
  }

}
