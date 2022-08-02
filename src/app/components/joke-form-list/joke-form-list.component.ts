import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke';
@Component({
  selector: 'app-joke-form-list',
  templateUrl: './joke-form-list.component.html',
  styleUrls: ['./joke-form-list.component.css']
})
export class JokeFormListComponent  {

  jokes: Joke[];

  constructor() {
    this.jokes = [
      new Joke(
        "What did the cheese say when it looked in the mirror?",
        "Hello-me (Halloumi)"
      ),
      new Joke(
        "What kind of cheese do you use to disguise a small horse?",
        "Mask-a-pony (Mascarpone)"
      ),
      new Joke(
        "A kid threw a lump of cheddar at me",
        "I thought ‘That’s not very mature’"
      )
    ];

}

addJoke(joke: any) {
  this.jokes.unshift(joke);
}

}
